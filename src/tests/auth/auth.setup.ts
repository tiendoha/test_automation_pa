import { test as setup, request, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login/LoginPage';
import { HomePage } from '../../pages/register/HomePage';
import { ENV } from '../../configs/env.config';
import { logger } from '../../helpers/common/logger.helper';
import { createAccountViaAPI } from '../../helpers/api/auth.api.helper';
import { UserRegistrationData, generateUserData } from '../../data/register/user.data';

/**
 * Auth Setup: Creates an account via API, logs in via POM, and saves session state.
 *
 * Runs as a setup before authenticated projects.
 * Follows POM and saves session to playwright/.auth/user.json.
 */
setup('Authenticate: Login with test account from .env', async ({ page }) => {
  // Validate env variables
  if (!ENV.testEmail || !ENV.testPassword) {
    logger.fail('TEST_EMAIL or TEST_PASSWORD missing in .env');
    throw new Error(
      'TEST_EMAIL or TEST_PASSWORD is missing in .env. ' +
      'Copy .env.example to .env and fill in your credentials.',
    );
  }

  logger.info(`Auth setup starting with account: ${ENV.testEmail}`);

  // Create API context mapping for env user data
  const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
  const envUserData: UserRegistrationData = generateUserData();
  envUserData.email = ENV.testEmail;
  envUserData.password = ENV.testPassword;

  await createAccountViaAPI(apiContext, envUserData);
  await apiContext.dispose();

  // Initialize Page Objects (POM)
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  // Step 1: Navigate to login page
  logger.step('Navigate to /login');
  await loginPage.navigate();
  await expect(page).toHaveURL(/.*login/);
  await expect(loginPage.loginHeading).toBeVisible();

  // Step 2: Login with credentials from .env
  logger.step(`Login with email: ${ENV.testEmail}`);
  await loginPage.login(ENV.testEmail, ENV.testPassword);

  // Step 3: Verify successful login
  logger.step('Verify successful login on homepage');
  await expect(page).toHaveURL(ENV.baseUrl + '/');
  await expect(homePage.logoutLink).toBeVisible();

  // Step 4: Save session state to file
  await page.context().storageState({ path: ENV.authStatePath });

  logger.setup(`Auth state saved at: ${ENV.authStatePath}`);
});
