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
   * SETUP: Tạo một account sẵn có trước khi chạy toàn bộ suite.
   * Account này được dùng bởi TC-REG-002 để kiểm tra trường hợp đăng ký
   * với email đã tồn tại. Dùng API thay vì UI để nhanh và đáng tin cậy.
   */
  let existingUser: UserRegistrationData;

  test.beforeAll(async () => {
    const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
    existingUser = generateUserData();
    await createAccountViaAPI(apiContext, existingUser);
    await apiContext.dispose();
    logger.setup('beforeAll: existingUser đã được tạo qua API để dùng cho TC-REG-002');
  });

  /**
   * TEARDOWN: Xóa account được tạo trong beforeAll sau khi suite hoàn thành.
   * TC-REG-001 dùng một account riêng (generateUserData mỗi lần) → không cần cleanup ở đây.
   * existingUser là account duy nhất được tạo cố định qua API → cần xóa.
   */
  test.afterAll(async () => {
    const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
    await deleteAccountViaAPI(apiContext, existingUser.email, existingUser.password);
    await apiContext.dispose();
    logger.info('afterAll: existingUser đã được xóa qua API');
  });

  /**
   * TC-REG-001: Happy path - Register a new user account successfully
   *
   * Steps:
   *  1.  Open the homepage and verify it is loaded
   *  2.  Click Signup / Login in the navbar
   *  3.  Verify Signup/Login page is displayed
   *  4.  Enter name and email, click Signup
   *  5.  Verify the Registration form page is displayed
   *  6.  Fill in all required fields and submit the form
   *  7.  Verify "ACCOUNT CREATED!" confirmation page
   *  8.  Click Continue to return to homepage
   *  9.  Verify user is logged in ("Logged in as <name>")
   *  10. Logout and verify redirect back to login page
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

    // Step 1: Open homepage and verify it is loaded
    await homePage.navigate();
    await expect(page).toHaveURL(ENV.baseUrl);
    await expect(homePage.signupLoginLink).toBeVisible();

    // Step 2: Click Signup / Login link
    await homePage.clickSignupLogin();

    // Step 3: Verify Signup/Login page is shown
    await expect(page).toHaveURL(/.*login/);
    await expect(signupLoginPage.signupHeading).toBeVisible();
    await expect(signupLoginPage.loginHeading).toBeVisible();

    // Step 4: Enter name & email, click Signup button
    await signupLoginPage.signup(user.name, user.email);

    // Step 5: Verify the registration form page is displayed
    await expect(page).toHaveURL(/.*signup/);
    await expect(registrationPage.registerHeading).toBeVisible();

    // Step 6: Fill in all registration details and submit
    await registrationPage.fillAndSubmitForm(user);

    // Step 7: Verify account creation success page
    await expect(page).toHaveURL(/.*account_created/);
    await expect(accountCreatedPage.accountCreatedHeading).toBeVisible();
    await expect(accountCreatedPage.successMessage).toBeVisible();

    // Step 8: Click Continue to go back to homepage
    await accountCreatedPage.clickContinue();

    // Step 9: Verify the user is now logged in
    await expect(homePage.loggedInAsLabel).toContainText(user.name);

    // Step 10: Logout and verify redirect to login page
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
   *  2. Enter the email of the account created in beforeAll (already registered)
   *  3. Verify the error message "Email Address already exist!" is shown
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

    // Step 2: Submit with the email of the account pre-created in beforeAll
    await signupLoginPage.signup(existingUser.name, existingUser.email);

    // Step 3: Verify the error message is visible
    const errorMessage = page.getByText('Email Address already exist!');
    await expect(errorMessage).toBeVisible();

    logger.pass('TC-REG-002', 'Should show error when registering with an existing email');
  });
});
