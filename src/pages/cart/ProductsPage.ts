import { Page, Locator } from '@playwright/test';

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
   * Adds a product to the cart by its exact display name.
   *
   * Finds the product card that contains a link with the given `productName`,
   * hovers over it to reveal the overlay, then clicks "Add to cart".
   * This approach is resilient to reordering of products on the page.
   *
   * @param productName - Exact product name as displayed on the listing page
   *                      (e.g. 'Blue Top', 'Men Tshirt')
   */
  async addProductToCartByName(productName: string): Promise<void> {
    const card = this.productCards.filter({
      has: this.page.locator('p').filter({ hasText: productName }),
    });
    await card.hover();
    await card.locator('div.overlay-content').getByText('Add to cart').click();
  }

  /**
   * Dismisses the "Added to cart" modal by clicking "Continue Shopping"
   * so the user stays on the products page to add more items.
   */
  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }

  /**
   * Clicks "View Cart" inside the modal to navigate to the cart page.
   */
  async goToCartViaModal(): Promise<void> {
    await this.viewCartLink.click();
  }
}
