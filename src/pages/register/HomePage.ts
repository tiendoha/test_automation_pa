import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  // Locators
  readonly signupLoginLink: Locator;
  readonly logoutLink: Locator;
  readonly loggedInAsLabel: Locator;
  readonly deleteAccountLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.logoutLink = page.getByRole('link', { name: ' Logout' });
    this.loggedInAsLabel = page.locator('a:has-text("Logged in as")');
    this.deleteAccountLink = page.getByRole('link', { name: ' Delete Account' });
  }

  /**
   * Navigates to the homepage.
   */
  async navigate(): Promise<void> {
    await this.page.goto('/');
  }

  /**
   * Verifies the homepage is loaded (guest state — not logged in).
   * Checks the URL and that the Signup/Login link is visible.
   */
  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL('https://automationexercise.com/');
    await expect(this.signupLoginLink).toBeVisible();
  }

  /**
   * Verifies the homepage is loaded after a successful login.
   * Khi đã đăng nhập, navbar hiển thị Logout thay vì Signup/Login.
   */
  async verifyPageLoadedAsLoggedIn(): Promise<void> {
    await expect(this.page).toHaveURL('https://automationexercise.com/');
    await expect(this.logoutLink).toBeVisible();
  }

  /**
   * Clicks the Signup / Login link in the navbar.
   */
  async clickSignupLogin(): Promise<void> {
    await this.signupLoginLink.click();
  }

  /**
   * Verifies the user is logged in by checking the "Logged in as" label.
   */
  async verifyLoggedInAs(username: string): Promise<void> {
    await expect(this.loggedInAsLabel).toContainText(username);
  }

  /**
   * Logs out the current user.
   */
  async logout(): Promise<void> {
    await this.logoutLink.click();
  }
}
