import { Page, Locator, expect } from '@playwright/test';


export class AccountCreatedPage {
  readonly page: Page;

  readonly accountCreatedHeading: Locator;
  readonly successMessage: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountCreatedHeading = page.getByRole('heading', { name: 'Account Created!' });
    this.successMessage = page.getByText('Congratulations! Your new account has been successfully created!');
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }

  /**
   * Verifies the account was successfully created.
   */
  async verifyAccountCreated(): Promise<void> {
    await expect(this.page).toHaveURL(/.*account_created/);
    await expect(this.accountCreatedHeading).toBeVisible();
    await expect(this.successMessage).toBeVisible();
  }

  /**
   * Clicks the Continue button to proceed to the homepage.
   */
  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }
}
