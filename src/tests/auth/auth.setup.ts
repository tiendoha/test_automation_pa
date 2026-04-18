import { test as setup, request, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/LoginPage';
import { HomePage } from '../../pages/register/HomePage';
import { ENV } from '../../configs/env.config';
import { logger } from '../../helpers/common/logger.helper';
import { createAccountViaAPI } from '../../helpers/api/auth.api.helper';
import { UserRegistrationData, generateUserData } from '../../data/register/user.data';

/**
 * Auth Setup: Theo định dạng API, tạo tài khoản trước rồi mới Login bằng POM và lưu session state vào file.
 *
 * File này được chạy BỞI playwright.config.ts như một project "setup"
 * trước khi các authenticated test projects (vd: checkout) bắt đầu.
 *
 * Tuân thủ POM: Chỉ sử dụng các method từ LoginPage và HomePage.
 * Session được lưu tại: playwright/.auth/user.json
 */
setup('Authenticate: Login with test account from .env', async ({ page }) => {
  // Validate env variables
  if (!ENV.testEmail || !ENV.testPassword) {
    logger.fail('TEST_EMAIL hoặc TEST_PASSWORD bị thiếu trong .env');
    throw new Error(
      'TEST_EMAIL or TEST_PASSWORD is missing in .env. ' +
      'Copy .env.example to .env and fill in your credentials.',
    );
  }

  logger.info(`Auth setup bắt đầu với account: ${ENV.testEmail}`);

  // Create API context mapping for env user data
  const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
  const envUserData: UserRegistrationData = generateUserData();
  envUserData.email = ENV.testEmail;
  envUserData.password = ENV.testPassword;

  await createAccountViaAPI(apiContext, envUserData);
  await apiContext.dispose();

  // Khởi tạo Page Objects (POM)
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  // Step 1: Navigate đến login page
  logger.step('Navigate đến /login');
  await loginPage.navigate();
  await expect(page).toHaveURL(/.*login/);
  await expect(loginPage.loginHeading).toBeVisible();

  // Step 2: Đăng nhập bằng credentials từ .env
  logger.step(`Đăng nhập với email: ${ENV.testEmail}`);
  await loginPage.login(ENV.testEmail, ENV.testPassword);

  // Step 3: Verify login thành công (đã redirect về homepage, có Logout button)
  logger.step('Verify login thành công trên homepage');
  await expect(page).toHaveURL(ENV.baseUrl + '/');
  await expect(homePage.logoutLink).toBeVisible();

  // Step 4: Lưu session state (cookies + localStorage) vào file
  await page.context().storageState({ path: ENV.authStatePath });

  logger.setup(`Auth state đã được lưu tại: ${ENV.authStatePath}`);
});
