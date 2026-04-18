import { Page, Locator, expect } from '@playwright/test';
import { ProductInfo } from '../../data/cart/cart.data';

/**
 * Page Object Model for the Shopping Cart page.
 * URL: https://automationexercise.com/view_cart
 *
 * Cart table structure:
 *  tr[id^="product-"]
 *    td.cart_description  h4 a       → product name
 *    td.cart_price        p          → unit price  (e.g. "Rs. 500")
 *    td.cart_quantity     button     → quantity     (e.g. "1")
 *    td.cart_total        p.cart_total_price → total price
 */
export class CartPage {
  readonly page: Page;

  readonly cartHeading: Locator;
  readonly cartRows: Locator;
  readonly proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartHeading = page.getByRole('heading', { name: 'Shopping Cart' });
    // Each product occupies one <tr> with id="product-{N}"
    this.cartRows = page.locator('tr[id^="product-"]');
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
  }

  /**
   * Navigates directly to the cart page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('/view_cart');
  }

  /**
   * Verifies the cart page is loaded.
   */
  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*view_cart/);
  }

  /**
   * Returns the <tr> row locator for a product by its display name.
   * @param productName - The exact product name as shown on the site
   */
  getRowByProductName(productName: string): Locator {
    return this.cartRows.filter({
      has: this.page.locator('td.cart_description h4 a', { hasText: productName }),
    });
  }

  /**
   * Verifies a product's name, unit price, and quantity in the cart.
   * @param product - ProductInfo object from cart.data.ts
   */
  async verifyProductInCart(product: ProductInfo): Promise<void> {
    const row = this.getRowByProductName(product.name);

    await expect(row).toBeVisible();

    // Verify product name
    const nameCell = row.locator('td.cart_description h4 a');
    await expect(nameCell).toHaveText(product.name);

    // Verify unit price
    const priceCell = row.locator('td.cart_price p');
    await expect(priceCell).toHaveText(product.price);

    // Verify quantity
    const quantityCell = row.locator('td.cart_quantity button');
    await expect(quantityCell).toHaveText(String(product.quantity));
  }

  /**
   * Verifies ALL products from a given list are present in the cart
   * with correct name, price, and quantity.
   * @param products - Array of ProductInfo to verify
   */
  async verifyAllProductsInCart(products: ProductInfo[]): Promise<void> {
    // Verify the total number of rows matches
    await expect(this.cartRows).toHaveCount(products.length);

    // Verify each product individually
    for (const product of products) {
      await this.verifyProductInCart(product);
    }
  }

  /**
   * Clicks "Proceed To Checkout" button on the cart page.
   * Navigates to /checkout.
   */
  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}

