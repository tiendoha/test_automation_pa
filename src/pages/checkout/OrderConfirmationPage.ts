import { Page, Locator } from '@playwright/test';

/**
 * Page Object Model for the Order Confirmation page.
 * URL: https://automationexercise.com/payment_done/{orderId}
 */
export class OrderConfirmationPage {
  readonly page: Page;

  readonly orderPlacedHeading: Locator;
  readonly confirmationMessage: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Heading: <h2 data-qa="order-placed"><b>Order Placed!</b></h2>
    this.orderPlacedHeading = page.locator('[data-qa="order-placed"] b');
    this.confirmationMessage = page.getByText(
      'Congratulations! Your order has been confirmed!',
    );
    this.continueButton = page.locator('a.btn.btn-primary');
  }

  /**
   * Trả về Locator của URL hiện tại để assert bên ngoài
   */
  getPageUrl(): string {
    return this.page.url();
  }

  /**
   * Clicks the Continue button to return to the homepage.
   */
  async clickContinue(): Promise<void> {
    await this.continueButton.click();
  }
}
