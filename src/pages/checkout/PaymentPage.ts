import { Page, Locator } from '@playwright/test';
import { PaymentCardData } from '../../data/checkout/checkout.data';

/**
 * Page Object Model for the Payment page.
 * URL: https://automationexercise.com/payment
 */
export class PaymentPage {
  readonly page: Page;

  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly payButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameOnCardInput = page.locator('[data-qa="name-on-card"]');
    this.cardNumberInput = page.locator('[data-qa="card-number"]');
    this.cvcInput = page.locator('[data-qa="cvc"]');
    this.expiryMonthInput = page.locator('[data-qa="expiry-month"]');
    this.expiryYearInput = page.locator('[data-qa="expiry-year"]');
    this.payButton = page.locator('#submit');
  }

  /**
   * Trả về Locator của URL hiện tại để assert bên ngoài
   */
  getPageUrl(): string {
    return this.page.url();
  }

  /**
   * Fills all credit card fields with the provided card data.
   */
  async fillPaymentDetails(card: PaymentCardData): Promise<void> {
    await this.nameOnCardInput.fill(card.nameOnCard);
    await this.cardNumberInput.fill(card.cardNumber);
    await this.cvcInput.fill(card.cvc);
    await this.expiryMonthInput.fill(card.expiryMonth);
    await this.expiryYearInput.fill(card.expiryYear);
  }

  /**
   * Clicks "Pay and Confirm Order" to submit the payment.
   */
  async confirmPayment(): Promise<void> {
    await this.payButton.click();
  }
}
