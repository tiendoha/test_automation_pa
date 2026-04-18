import { test as base } from '@playwright/test';
import { HomePage } from '../pages/register/HomePage';
import { SignupLoginPage } from '../pages/register/SignupLoginPage';
import { RegistrationPage } from '../pages/register/RegistrationPage';
import { AccountCreatedPage } from '../pages/register/AccountCreatedPage';

/**
 * Định nghĩa kiểu cho các fixtures mở rộng.
 * Mỗi fixture tương ứng với một Page Object, được inject tự động vào mỗi test.
 */
export type PageFixtures = {
  homePage: HomePage;
  signupLoginPage: SignupLoginPage;
  registrationPage: RegistrationPage;
  accountCreatedPage: AccountCreatedPage;
};

/**
 * Custom `test` object với đầy đủ page fixtures được inject sẵn.
 * Import `test` và `expect` từ file này thay vì từ '@playwright/test'.
 *
 * @example
 * import { test, expect } from '../../fixtures';
 *
 * test('my test', async ({ homePage, signupLoginPage }) => {
 *   await homePage.navigate();
 *   await homePage.clickSignupLogin();
 *   await signupLoginPage.verifyPageLoaded();
 * });
 */
export const test = base.extend<PageFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  signupLoginPage: async ({ page }, use) => {
    await use(new SignupLoginPage(page));
  },

  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },

  accountCreatedPage: async ({ page }, use) => {
    await use(new AccountCreatedPage(page));
  },
});

// Re-export expect so tests only need one import source
export { expect } from '@playwright/test';
