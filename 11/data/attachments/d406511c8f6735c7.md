# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/cart.spec.ts >> Add Product To Cart >> TC-CART-001: Should add 2 products to cart and verify their details
- Location: src/tests/cart/cart.spec.ts:37:7

# Error details

```
Error: page.goto: Protocol error (Playwright.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "/products", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | /**
  4  |  * Page Object Model for the Products listing page.
  5  |  * URL: https://automationexercise.com/products
  6  |  */
  7  | export class ProductsPage {
  8  |   readonly page: Page;
  9  | 
  10 |   readonly productsHeading: Locator;
  11 |   readonly productCards: Locator;
  12 | 
  13 |   // Add to cart modal
  14 |   readonly modalSuccessText: Locator;
  15 |   readonly continueShoppingButton: Locator;
  16 |   readonly viewCartLink: Locator;
  17 | 
  18 |   constructor(page: Page) {
  19 |     this.page = page;
  20 |     this.productsHeading = page.getByRole('heading', { name: 'All Products' });
  21 |     this.productCards = page.locator('.product-image-wrapper');
  22 | 
  23 |     // Modal that appears after clicking "Add to cart"
  24 |     this.modalSuccessText = page.getByText('Your product has been added to cart.');
  25 |     this.continueShoppingButton = page.locator('button.close-modal');
  26 |     this.viewCartLink = page.locator('a[href="/view_cart"] u');
  27 |   }
  28 | 
  29 |   /**
  30 |    * Navigates directly to the products listing page.
  31 |    */
  32 |   async navigate(): Promise<void> {
> 33 |     await this.page.goto('/products');
     |                     ^ Error: page.goto: Protocol error (Playwright.navigate): Cannot navigate to invalid URL
  34 |   }
  35 | 
  36 |   /**
  37 |    * Adds the product at the given 0-based index to the cart by clicking the
  38 |    * overlay "Add to cart" button that appears on hover.
  39 |    * @param index - 0-based position in the product list
  40 |    */
  41 |   async addProductToCartByIndex(index: number): Promise<void> {
  42 |     const card = this.productCards.nth(index);
  43 |     // Hover to reveal the overlay add-to-cart button
  44 |     await card.hover();
  45 |     // Use getByText for robust locator instead of raw CSS path
  46 |     await card.locator('div.overlay-content').getByText('Add to cart').click();
  47 |   }
  48 | 
  49 |   /**
  50 |    * Dismisses the "Added to cart" modal by clicking "Continue Shopping"
  51 |    * so the user stays on the products page to add more items.
  52 |    */
  53 |   async continueShopping(): Promise<void> {
  54 |     await this.continueShoppingButton.click();
  55 |   }
  56 | 
  57 |   /**
  58 |    * Clicks "View Cart" inside the modal to navigate to the cart page.
  59 |    */
  60 |   async goToCartViaModal(): Promise<void> {
  61 |     await this.viewCartLink.click();
  62 |   }
  63 | }
  64 | 
```