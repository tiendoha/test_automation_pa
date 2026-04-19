import { test, expect, request } from '../../fixtures';
import { generateUserData, UserRegistrationData } from '../../data/register/user.data';
import { createAccountViaAPI, deleteAccountViaAPI } from '../../helpers/api/auth.api.helper';
import { logger } from '../../helpers/common/logger.helper';
import { ENV } from '../../configs/env.config';
import { feature, story, severity, description } from 'allure-js-commons';

/**
 * Test Suite: User Registration
 * Feature: Register a new user account on automationexercise.com
 * Tech Stack: Playwright + TypeScript + Page Object Model + Fixtures
 */
test.describe('User Registration', () => {

  /**
   * SETUP: Create an existing account via API before running the suite.
   * Used by TC-REG-002 to test registration with an already registered email.
   */
  let existingUser: UserRegistrationData;

  test.beforeAll(async () => {
    const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
    existingUser = generateUserData();
    await createAccountViaAPI(apiContext, existingUser);
    await apiContext.dispose();
    logger.setup('beforeAll: existingUser created via API for TC-REG-002');
  });

  /**
   * TEARDOWN: Delete the account created in beforeAll.
   * The dynamically generated account in TC-REG-001 doesn't need cleanup here.
   */
  test.afterAll(async () => {
    const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
    await deleteAccountViaAPI(apiContext, existingUser.email, existingUser.password);
    await apiContext.dispose();
    logger.info('afterAll: existingUser deleted via API');
  });

  /**
   * TC-REG-001: Happy path - Register a new user account successfully
   *
   * Steps:
   *  1. Open homepage and verify it's loaded
   *  2. Click Signup / Login
   *  3. Verify Signup/Login page
   *  4. Enter name and email, click Signup
   *  5. Verify Registration form
   *  6. Fill required fields and submit
   *  7. Verify "ACCOUNT CREATED!" page
   *  8. Click Continue
   *  9. Verify user is logged in
   *  10. Logout and verify redirect to login page
   */
  test('TC-REG-001: Should register a new user account successfully', async ({
    page,
    homePage,
    signupLoginPage,
    registrationPage,
    accountCreatedPage,
  }) => {
    await feature('Registration');
    await story('Register new user successfully');
    await severity('critical');
    await description(
      'Verifies the full end-to-end user registration flow: ' +
      'signup form → account created confirmation → logged-in state → logout.',
    );

    const user = generateUserData();

    // Step 1: Open homepage and verify it's loaded
    await homePage.navigate();
    await expect(page).toHaveURL(ENV.baseUrl);
    await expect(homePage.signupLoginLink).toBeVisible();

    // Step 2: Click Signup / Login
    await homePage.clickSignupLogin();

    // Step 3: Verify Signup/Login page
    await expect(page).toHaveURL(/.*login/);
    await expect(signupLoginPage.signupHeading).toBeVisible();
    await expect(signupLoginPage.loginHeading).toBeVisible();

    // Step 4: Enter name & email, click Signup
    await signupLoginPage.signup(user.name, user.email);

    // Step 5: Verify registration form page
    await expect(page).toHaveURL(/.*signup/);
    await expect(registrationPage.registerHeading).toBeVisible();

    // Step 6: Fill registration details and submit
    await registrationPage.fillAndSubmitForm(user);

    // Step 7: Verify account creation success page
    await expect(page).toHaveURL(/.*account_created/);
    await expect(accountCreatedPage.accountCreatedHeading).toBeVisible();
    await expect(accountCreatedPage.successMessage).toBeVisible();

    // Step 8: Click Continue to homepage
    await accountCreatedPage.clickContinue();

    // Step 9: Verify user is logged in
    await expect(homePage.loggedInAsLabel).toContainText(user.name);

    // Step 10: Logout and verify redirect
    await homePage.logout();
    await expect(page).toHaveURL(/.*login/);
    await expect(signupLoginPage.signupHeading).toBeVisible();

    logger.pass('TC-REG-001', 'Should register a new user account successfully');
  });

  /**
   * TC-REG-002: Register with an already-registered email should show an error
   *
   * Steps:
   *  1. Open homepage → Click Signup/Login
   *  2. Enter the email of the account created in beforeAll
   *  3. Verify error message
   */
  test('TC-REG-002: Should show error when registering with an existing email', async ({
    page,
    homePage,
    signupLoginPage,
  }) => {
    await feature('Registration');
    await story('Registration fails with existing email');
    await severity('normal');
    await description(
      'Verifies that attempting to sign up with an already-registered email ' +
      'displays the "Email Address already exist!" error.',
    );

    // Step 1: Navigate to Signup/Login page
    await homePage.navigate();
    await homePage.clickSignupLogin();
    await expect(page).toHaveURL(/.*login/);
    await expect(signupLoginPage.signupHeading).toBeVisible();

    // Step 2: Submit with existing email
    await signupLoginPage.signup(existingUser.name, existingUser.email);

    // Step 3: Verify the error message is visible
    const errorMessage = page.getByText('Email Address already exist!');
    await expect(errorMessage).toBeVisible();

    logger.pass('TC-REG-002', 'Should show error when registering with an existing email');
  });
});
