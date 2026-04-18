import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // --- Login section locators ---
  readonly loginHeading: Locator;
  readonly loginEmailInput: Locator;
  readonly loginPasswordInput: Locator;
  readonly loginButton: Locator;
  readonly loginErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginHeading = page.getByRole('heading', { name: 'Login to your account' });
    this.loginEmailInput = page.locator('[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.loginErrorMessage = page.getByText('Your email or password is incorrect!');
  }

  /**
   * Navigates directly to the login page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('/login');
  }

  /**
   * Fills in the login form with the given credentials and submits.
   * @param email - User's email address
   * @param password - User's password
   */
  async login(email: string, password: string): Promise<void> {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }
}
