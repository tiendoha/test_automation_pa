import { test, expect, request } from '../../fixtures';
import { generateUserData, UserRegistrationData } from '../../data/register/user.data';
import { createAccountViaAPI } from '../../helpers/api/auth.api.helper';
import { INVALID_CREDENTIALS } from '../../data/login/login.data';
import { HomePage } from '../../pages/register/HomePage';
import { SignupLoginPage } from '../../pages/register/SignupLoginPage';
import { RegistrationPage } from '../../pages/register/RegistrationPage';
import { AccountCreatedPage } from '../../pages/register/AccountCreatedPage';
import { logger } from '../../helpers/common/logger.helper';

/**
 * Test Suite: User Login
 * Feature: Login với account vừa mới đăng ký
 * Tech Stack: Playwright + TypeScript + Page Object Model + Fixtures
 *
 * Flow:
 *  [beforeAll] Register tạo account mới → lấy email & password vừa tạo
 *  [TC-LOGIN-001] Login bằng email/password vừa tạo → Verify success → Verify username → Logout
 *  [TC-LOGIN-002] Login với sai password → Verify error message
 *  [TC-LOGIN-003] Login với email không tồn tại → Verify error message
 */
test.describe('User Login', () => {
  // Lưu thông tin account vừa đăng ký để dùng trong tất cả login tests
  let registeredUser: UserRegistrationData;

  /**
   * SETUP: Chạy register flow một lần trước toàn bộ test suite.
   * Tạo account mới với email unique, sau đó logout để chuẩn bị cho login tests.
   */
  test.beforeAll(async () => {
    // Tạo API context thay vì browser context để chạy parallel độc lập và nhanh chóng
    const apiContext = await request.newContext();
    
    // Tạo data với email unique cho lần chạy này
    registeredUser = generateUserData();

    // Call helper API account
    await createAccountViaAPI(apiContext, registeredUser);
    
    // Đóng context
    await apiContext.dispose();

    logger.setup('beforeAll: Account đã được tạo qua API và sẵn sàng cho login tests');
  });

  /**
   * TC-LOGIN-001: Happy path — Login với account vừa đăng ký
   *
   * Steps:
   *  1. Mở /login page
   *  2. Verify login page loaded
   *  3. Nhập email và password của account vừa tạo
   *  4. Verify redirect về homepage sau khi login thành công
   *  5. Verify "Logged in as <username>" hiển thị trên navbar
   *  6. Logout và verify redirect về login page
   */
  test('TC-LOGIN-001: Should login successfully with the newly registered account', async ({
    page,
    loginPage,
    homePage,
  }) => {
    // Step 1 & 2: Mở và verify login page
    await loginPage.navigate();
    await expect(page).toHaveURL(/.*login/);
    await expect(loginPage.loginHeading).toBeVisible();

    // Step 3: Đăng nhập bằng credentials của account vừa tạo trong beforeAll
    await loginPage.login(registeredUser.email, registeredUser.password);

    // Step 4: Verify redirect về homepage (trạng thái đã đăng nhập)
    await expect(page).toHaveURL('https://automationexercise.com/');
    await expect(homePage.logoutLink).toBeVisible();

    // Step 5: Verify username hiển thị đúng trên navbar
    await expect(homePage.loggedInAsLabel).toContainText(registeredUser.name);

    // Step 6: Logout và verify quay về login page
    await homePage.logout();
    await expect(page).toHaveURL(/.*login/);

    logger.pass('TC-LOGIN-001', 'Should login successfully with the newly registered account');
  });

  /**
   * TC-LOGIN-002: Login fail với sai password
   *
   * Steps:
   *  1. Mở /login page
   *  2. Nhập đúng email nhưng sai password
   *  3. Verify error "Your email or password is incorrect!" hiển thị
   *  4. Verify user vẫn ở lại login page
   */
  test('TC-LOGIN-002: Should show error when logging in with incorrect password', async ({
    page,
    loginPage,
  }) => {
    await loginPage.navigate();
    await expect(page).toHaveURL(/.*login/);

    // Dùng email của account vừa tạo nhưng sai password
    await loginPage.login(registeredUser.email, INVALID_CREDENTIALS.wrongPassword.password);

    await expect(loginPage.loginErrorMessage).toBeVisible();
    await expect(page).toHaveURL(/.*login/);

    logger.pass('TC-LOGIN-002', 'Should show error when logging in with incorrect password');
  });

  /**
   * TC-LOGIN-003: Login fail với email không tồn tại
   *
   * Steps:
   *  1. Mở /login page
   *  2. Nhập email không tồn tại
   *  3. Verify error "Your email or password is incorrect!" hiển thị
   */
  test('TC-LOGIN-003: Should show error when logging in with non-existent email', async ({
    page,
    loginPage,
  }) => {
    await loginPage.navigate();
    await expect(page).toHaveURL(/.*login/);

    await loginPage.login(
      INVALID_CREDENTIALS.nonExistentUser.email,
      INVALID_CREDENTIALS.nonExistentUser.password,
    );

    await expect(loginPage.loginErrorMessage).toBeVisible();

    logger.pass('TC-LOGIN-003', 'Should show error when logging in with non-existent email');
  });
});

