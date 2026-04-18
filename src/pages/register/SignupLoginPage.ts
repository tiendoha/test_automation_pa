import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the Signup / Login page.
 * URL: https://automationexercise.com/login
 */
export class SignupLoginPage {
  readonly page: Page;

  // --- New User Signup section ---
  readonly signupHeading: Locator;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;

  // --- Login section ---
  readonly loginHeading: Locator;
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Signup section
    this.signupHeading = page.getByRole('heading', { name: 'New User Signup!' });
    this.signupNameInput = page.locator('[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');

    // Login section
    this.loginHeading = page.getByRole('heading', { name: 'Login to your account' });
    this.loginEmailInput = page.locator('[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
  }

  /**
   * Verifies the Signup/Login page is loaded.
   */
  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*login/);
    await expect(this.signupHeading).toBeVisible();
    await expect(this.loginHeading).toBeVisible();
  }

  /**
   * Fills in the name and email in the New User Signup section and clicks Signup.
   * @param name - The user's display name
   * @param email - The user's email address
   */
  async signup(name: string, email: string): Promise<void> {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }
}
