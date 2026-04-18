import { Page, Locator } from '@playwright/test';


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
   * Clicks the Continue button to proceed to the homepage.
   */
  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }
}
