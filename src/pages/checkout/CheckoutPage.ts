import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the Cart page.
 * Extended version: adds the "Proceed to Checkout" action used in the checkout flow.
 * URL: https://automationexercise.com/view_cart
 */
export class CheckoutPage {
  readonly page: Page;

  // ── Checkout page sections ───────────────────────────────
  readonly deliveryAddressBlock: Locator;
  readonly billingAddressBlock: Locator;
  readonly deliveryAddressName: Locator;

  // ── Order action ─────────────────────────────────────────
  readonly commentTextarea: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Address sections – identified by their id attributes
    this.deliveryAddressBlock = page.locator('ul#address_delivery');
    this.billingAddressBlock = page.locator('ul#address_invoice');
    // Full name displayed inside the delivery address block
    this.deliveryAddressName = page.locator(
      'ul#address_delivery li.address_firstname.address_lastname',
    );

    // Comment textarea & place order button
    this.commentTextarea = page.locator('textarea.form-control');
    this.placeOrderButton = page.locator('a.btn.btn-default.check_out[href="/payment"]');
  }

  /**
   * Verifies the checkout page loaded with the delivery address visible.
   */
  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*checkout/);
    await expect(this.deliveryAddressBlock).toBeVisible();
  }

  /**
   * Verifies the delivery address section is visible and contains the expected name.
   * @param fullName - Expected name, e.g. "Mr. Test User"
   */
  async verifyDeliveryAddress(fullName: string): Promise<void> {
    await expect(this.deliveryAddressBlock).toBeVisible();
    await expect(this.deliveryAddressName).toContainText(fullName);
  }

  /**
   * Enters a comment in the order message box.
   */
  async enterOrderComment(comment: string): Promise<void> {
    await this.commentTextarea.fill(comment);
  }

  /**
   * Clicks "Place Order" to proceed to the payment page.
   */
  async placeOrder(): Promise<void> {
    await this.placeOrderButton.click();
  }
}
