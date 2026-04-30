# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register/register.spec.ts >> User Registration >> TC-REG-001: Should register a new user account successfully
- Location: src/tests/register/register.spec.ts:55:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*login/
Received string:  "https://automationexercise.com/logout"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    8 × unexpected value "https://automationexercise.com/logout"

```

# Test source

```ts
  8   | /**
  9   |  * Test Suite: User Registration
  10  |  * Feature: Register a new user account on automationexercise.com
  11  |  * Tech Stack: Playwright + TypeScript + Page Object Model + Fixtures
  12  |  */
  13  | test.describe('User Registration', () => {
  14  | 
  15  |   /**
  16  |    * SETUP: Create an existing account via API before running the suite.
  17  |    * Used by TC-REG-002 to test registration with an already registered email.
  18  |    */
  19  |   let existingUser: UserRegistrationData;
  20  | 
  21  |   test.beforeAll(async () => {
  22  |     const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
  23  |     existingUser = generateUserData();
  24  |     await createAccountViaAPI(apiContext, existingUser);
  25  |     await apiContext.dispose();
  26  |     logger.setup('beforeAll: existingUser created via API for TC-REG-002');
  27  |   });
  28  | 
  29  |   /**
  30  |    * TEARDOWN: Delete the account created in beforeAll.
  31  |    * The dynamically generated account in TC-REG-001 doesn't need cleanup here.
  32  |    */
  33  |   test.afterAll(async () => {
  34  |     const apiContext = await request.newContext({ baseURL: ENV.baseUrl });
  35  |     await deleteAccountViaAPI(apiContext, existingUser.email, existingUser.password);
  36  |     await apiContext.dispose();
  37  |     logger.info('afterAll: existingUser deleted via API');
  38  |   });
  39  | 
  40  |   /**
  41  |    * TC-REG-001: Happy path - Register a new user account successfully
  42  |    *
  43  |    * Steps:
  44  |    *  1. Open homepage and verify it's loaded
  45  |    *  2. Click Signup / Login
  46  |    *  3. Verify Signup/Login page
  47  |    *  4. Enter name and email, click Signup
  48  |    *  5. Verify Registration form
  49  |    *  6. Fill required fields and submit
  50  |    *  7. Verify "ACCOUNT CREATED!" page
  51  |    *  8. Click Continue
  52  |    *  9. Verify user is logged in
  53  |    *  10. Logout and verify redirect to login page
  54  |    */
  55  |   test('TC-REG-001: Should register a new user account successfully', async ({
  56  |     page,
  57  |     homePage,
  58  |     signupLoginPage,
  59  |     registrationPage,
  60  |     accountCreatedPage,
  61  |   }) => {
  62  |     await feature('Registration');
  63  |     await story('Register new user successfully');
  64  |     await severity('critical');
  65  |     await description(
  66  |       'Verifies the full end-to-end user registration flow: ' +
  67  |       'signup form → account created confirmation → logged-in state → logout.',
  68  |     );
  69  | 
  70  |     const user = generateUserData();
  71  | 
  72  |     // Step 1: Open homepage and verify it's loaded
  73  |     await homePage.navigate();
  74  |     await expect(page).toHaveURL(ENV.baseUrl);
  75  |     await expect(homePage.signupLoginLink).toBeVisible();
  76  | 
  77  |     // Step 2: Click Signup / Login
  78  |     await homePage.clickSignupLogin();
  79  | 
  80  |     // Step 3: Verify Signup/Login page
  81  |     await expect(page).toHaveURL(/.*login/);
  82  |     await expect(signupLoginPage.signupHeading).toBeVisible();
  83  |     await expect(signupLoginPage.loginHeading).toBeVisible();
  84  | 
  85  |     // Step 4: Enter name & email, click Signup
  86  |     await signupLoginPage.signup(user.name, user.email);
  87  | 
  88  |     // Step 5: Verify registration form page
  89  |     await expect(page).toHaveURL(/.*signup/);
  90  |     await expect(registrationPage.registerHeading).toBeVisible();
  91  | 
  92  |     // Step 6: Fill registration details and submit
  93  |     await registrationPage.fillAndSubmitForm(user);
  94  | 
  95  |     // Step 7: Verify account creation success page
  96  |     await expect(page).toHaveURL(/.*account_created/);
  97  |     await expect(accountCreatedPage.accountCreatedHeading).toBeVisible();
  98  |     await expect(accountCreatedPage.successMessage).toBeVisible();
  99  | 
  100 |     // Step 8: Click Continue to homepage
  101 |     await accountCreatedPage.clickContinue();
  102 | 
  103 |     // Step 9: Verify user is logged in
  104 |     await expect(homePage.loggedInAsLabel).toContainText(user.name);
  105 | 
  106 |     // Step 10: Logout and verify redirect
  107 |     await homePage.logout();
> 108 |     await expect(page).toHaveURL(/.*login/);
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  109 |     await expect(signupLoginPage.signupHeading).toBeVisible();
  110 | 
  111 |     logger.pass('TC-REG-001', 'Should register a new user account successfully');
  112 |   });
  113 | 
  114 |   /**
  115 |    * TC-REG-002: Register with an already-registered email should show an error
  116 |    *
  117 |    * Steps:
  118 |    *  1. Open homepage → Click Signup/Login
  119 |    *  2. Enter the email of the account created in beforeAll
  120 |    *  3. Verify error message
  121 |    */
  122 |   test('TC-REG-002: Should show error when registering with an existing email', async ({
  123 |     page,
  124 |     homePage,
  125 |     signupLoginPage,
  126 |   }) => {
  127 |     await feature('Registration');
  128 |     await story('Registration fails with existing email');
  129 |     await severity('normal');
  130 |     await description(
  131 |       'Verifies that attempting to sign up with an already-registered email ' +
  132 |       'displays the "Email Address already exist!" error.',
  133 |     );
  134 | 
  135 |     // Step 1: Navigate to Signup/Login page
  136 |     await homePage.navigate();
  137 |     await homePage.clickSignupLogin();
  138 |     await expect(page).toHaveURL(/.*login/);
  139 |     await expect(signupLoginPage.signupHeading).toBeVisible();
  140 | 
  141 |     // Step 2: Submit with existing email
  142 |     await signupLoginPage.signup(existingUser.name, existingUser.email);
  143 | 
  144 |     // Step 3: Verify the error message is visible
  145 |     const errorMessage = page.getByText('Email Address already exist!');
  146 |     await expect(errorMessage).toBeVisible();
  147 | 
  148 |     logger.pass('TC-REG-002', 'Should show error when registering with an existing email');
  149 |   });
  150 | });
  151 | 
```