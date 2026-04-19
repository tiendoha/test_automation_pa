import { test, expect, request } from '../../fixtures';
import { generateUserData, UserRegistrationData } from '../../data/register/user.data';
import { createAccountViaAPI, deleteAccountViaAPI } from '../../helpers/api/auth.api.helper';
import { INVALID_CREDENTIALS } from '../../data/login/login.data';
import { logger } from '../../helpers/common/logger.helper';
import { ENV } from '../../configs/env.config';
import { feature, story, severity, description } from 'allure-js-commons';

/**
 * Test Suite: User Login
 * Feature: Login with newly registered account
 * Tech Stack: Playwright + TypeScript + POM + Fixtures
 *
 * Flow:
 *  [beforeAll] Register a new account via API
 *  [TC-LOGIN-001] Login with valid credentials → Verify success → Logout
 *  [TC-LOGIN-002] Login with wrong password → Verify error
 *  [TC-LOGIN-003] Login with non-existent email → Verify error
 *  [afterAll] Delete the test account via API
 */
test.describe('User Login', () => {
  // Store registered user data for tests
  let registeredUser: UserRegistrationData;

  /**
   * SETUP: Create a new account with a unique email via API.
   */
  test.beforeAll(async () => {
    const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
    registeredUser = generateUserData();
    await createAccountViaAPI(apiContext, registeredUser);
    await apiContext.dispose();
    logger.setup('beforeAll: Account created via API');
  });

  /**
   * TEARDOWN: Delete the test account via API.
   */
  test.afterAll(async () => {
    const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
    await deleteAccountViaAPI(apiContext, registeredUser.email, registeredUser.password);
    await apiContext.dispose();
    logger.info('afterAll: registeredUser deleted via API');
  });

  /**
   * TC-LOGIN-001: Happy path — Login with the new account
   *
   * Steps:
   *  1. Open /login page
   *  2. Verify login page loaded
   *  3. Enter email and password
   *  4. Verify redirect to homepage
   *  5. Verify "Logged in as <username>"
   *  6. Logout and verify redirect to login page
   */
  test('TC-LOGIN-001: Should login successfully with the newly registered account', async ({
    page,
    loginPage,
    homePage,
  }) => {
    await feature('Login');
    await story('Login successfully with valid account');
    await severity('critical');
    await description(
      'Verifies successful login with a freshly registered account: ' +
      'correct redirect, username in navbar, and successful logout.',
    );

    // Step 1 & 2: Open and verify login page
    await loginPage.navigate();
    await expect(page).toHaveURL(/.*login/);
    await expect(loginPage.loginHeading).toBeVisible();

    // Step 3: Login with registered account
    await loginPage.login(registeredUser.email, registeredUser.password);

    // Step 4: Verify redirect to homepage
    await expect(page).toHaveURL(ENV.baseUrl);
    await expect(homePage.logoutLink).toBeVisible();

    // Step 5: Verify username on navbar
    await expect(homePage.loggedInAsLabel).toContainText(registeredUser.name);

    // Step 6: Logout and verify redirect to login page
    await homePage.logout();
    await expect(page).toHaveURL(/.*login/);

    logger.pass('TC-LOGIN-001', 'Should login successfully with the newly registered account');
  });

  /**
   * TC-LOGIN-002: Login fails with wrong password
   *
   * Steps:
   *  1. Open /login page
   *  2. Enter valid email but wrong password
   *  3. Verify error message
   *  4. Verify user remains on login page
   */
  test('TC-LOGIN-002: Should show error when logging in with incorrect password', async ({
    page,
    loginPage,
  }) => {
    await feature('Login');
    await story('Login fails with incorrect password');
    await severity('normal');
    await description(
      'Verifies that logging in with a correct email but wrong password ' +
      'displays the appropriate error message and keeps the user on /login.',
    );

    await loginPage.navigate();
    await expect(page).toHaveURL(/.*login/);

    // Login with registered email but invalid password
    await loginPage.login(registeredUser.email, INVALID_CREDENTIALS.wrongPassword.password);

    await expect(loginPage.loginErrorMessage).toBeVisible();
    await expect(page).toHaveURL(/.*login/);

    logger.pass('TC-LOGIN-002', 'Should show error when logging in with incorrect password');
  });

  /**
   * TC-LOGIN-003: Login fails with non-existent email
   *
   * Steps:
   *  1. Open /login page
   *  2. Enter non-existent email
   *  3. Verify error message
   */
  test('TC-LOGIN-003: Should show error when logging in with non-existent email', async ({
    page,
    loginPage,
  }) => {
    await feature('Login');
    await story('Login fails with non-existent email');
    await severity('minor');
    await description(
      'Verifies that logging in with a non-existent email address ' +
      'displays the appropriate error message.',
    );

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
