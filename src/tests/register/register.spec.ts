import { test, expect } from '../../fixtures';
import { generateUserData } from '../../data/register/user.data';
import { logger } from '../../helpers/common/logger.helper';

/**
 * Test Suite: User Registration
 * Feature: Register a new user account on automationexercise.com
 * Tech Stack: Playwright + TypeScript + Page Object Model + Fixtures
 */
test.describe('User Registration', () => {

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
    homePage,
    signupLoginPage,
    registrationPage,
    accountCreatedPage,
  }) => {
    const user = generateUserData();

    // Step 1: Open homepage and verify it is loaded
    await homePage.navigate();
    await homePage.verifyPageLoaded();

    // Step 2: Click Signup / Login link
    await homePage.clickSignupLogin();

    // Step 3: Verify Signup/Login page is shown
    await signupLoginPage.verifyPageLoaded();

    // Step 4: Enter name & email, click Signup button
    await signupLoginPage.signup(user.name, user.email);

    // Step 5: Verify the registration form page is displayed
    await registrationPage.verifyPageLoaded();

    // Step 6: Fill in all registration details and submit
    await registrationPage.fillAndSubmitForm(user);

    // Step 7: Verify account creation success page
    await accountCreatedPage.verifyAccountCreated();

    // Step 8: Click Continue to go back to homepage
    await accountCreatedPage.clickContinue();

    // Step 9: Verify the user is now logged in
    await homePage.verifyLoggedInAs(user.name);

    // Step 10: Logout and verify redirect to login page
    await homePage.logout();
    await signupLoginPage.verifyPageLoaded();

    logger.pass('TC-REG-001', 'Should register a new user account successfully');
  });

  /**
   * TC-REG-002: Register with an already-registered email should show an error
   *
   * Steps:
   *  1. Open homepage → Click Signup/Login
   *  2. Enter an email that is already registered
   *  3. Verify the error message "Email Address already exist!" is shown
   */
  test('TC-REG-002: Should show error when registering with an existing email', async ({
    homePage,
    signupLoginPage,
    page,
  }) => {
    const existingEmail = 'existing_user@example.com';
    const existingName = 'Existing User';

    // Step 1: Navigate to Signup/Login page
    await homePage.navigate();
    await homePage.clickSignupLogin();
    await signupLoginPage.verifyPageLoaded();

    // Step 2: Submit with an already-registered email
    await signupLoginPage.signup(existingName, existingEmail);

    // Step 3: Verify the error message is visible
    const errorMessage = page.getByText('Email Address already exist!');
    await expect(errorMessage).toBeVisible();

    logger.pass('TC-REG-002', 'Should show error when registering with an existing email');
  });
});
