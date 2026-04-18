import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object Model for the Products listing page.
 * URL: https://automationexercise.com/products
 */
export class ProductsPage {
  readonly page: Page;

  readonly productsHeading: Locator;
  readonly productCards: Locator;

  // Add to cart modal
  readonly modalSuccessText: Locator;
  readonly continueShoppingButton: Locator;
  readonly viewCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsHeading = page.getByRole('heading', { name: 'All Products' });
    this.productCards = page.locator('.product-image-wrapper');

    // Modal that appears after clicking "Add to cart"
    this.modalSuccessText = page.getByText('Your product has been added to cart.');
    this.continueShoppingButton = page.locator('button.close-modal');
    this.viewCartLink = page.locator('a[href="/view_cart"] u');
  }

  /**
   * Navigates directly to the products listing page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('/products');
  }

  /**
   * Verifies the products page is loaded.
   */
  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*products/);
    await expect(this.productsHeading).toBeVisible();
  }

  /**
   * Adds the product at the given 0-based index to the cart by clicking the
   * overlay "Add to cart" button that appears on hover.
   * @param index - 0-based position in the product list
   */
  async addProductToCartByIndex(index: number): Promise<void> {
    const card = this.productCards.nth(index);
    // Hover to reveal the overlay add-to-cart button
    await card.hover();
    await card.locator('div.overlay-content a.add-to-cart').click();
    // Wait for the success modal to appear
    await expect(this.modalSuccessText).toBeVisible();
  }

  /**
   * Dismisses the "Added to cart" modal by clicking "Continue Shopping"
   * so the user stays on the products page to add more items.
   */
  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
    // Wait for modal to close
    await expect(this.modalSuccessText).toBeHidden();
  }

  /**
   * Clicks "View Cart" inside the modal to navigate to the cart page.
   */
  async goToCartViaModal(): Promise<void> {
    await this.viewCartLink.click();
  }
}
