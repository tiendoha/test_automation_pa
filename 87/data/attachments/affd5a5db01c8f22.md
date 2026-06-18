# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/checkout.spec.ts >> Checkout Flow: Buy Clothes >> TC-CHECKOUT-001: Should complete full checkout flow successfully
- Location: src/tests/checkout/checkout.spec.ts:30:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Proceed To Checkout')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Test User
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Home" [ref=e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - paragraph [ref=e52]:
      - text: Cart is empty! Click
      - link "here" [ref=e53] [cursor=pointer]:
        - /url: /products
      - text: to buy products.
    - insertion [ref=e55]:
      - iframe [ref=e57]:
        
  - contentinfo [ref=e58]:
    - generic [ref=e63]:
      - heading "Subscription" [level=2] [ref=e64]
      - generic [ref=e65]:
        - textbox "Your email address" [ref=e66]
        - button "" [ref=e67] [cursor=pointer]:
          - generic [ref=e68]: 
        - paragraph [ref=e69]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e73]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | import { ProductInfo } from '../../data/cart/cart.data';
  3  | 
  4  | /**
  5  |  * Page Object Model for the Shopping Cart page.
  6  |  * URL: https://automationexercise.com/view_cart
  7  |  */
  8  | export class CartPage {
  9  |   readonly page: Page;
  10 | 
  11 |   readonly cartHeading: Locator;
  12 |   readonly cartRows: Locator;
  13 |   readonly proceedToCheckoutButton: Locator;
  14 | 
  15 |   constructor(page: Page) {
  16 |     this.page = page;
  17 |     this.cartHeading = page.getByRole('heading', { name: 'Shopping Cart' });
  18 |     this.cartRows = page.locator('tr[id^="product-"]');
  19 |     this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
  20 |   }
  21 | 
  22 |   /**
  23 |    * Navigates directly to the cart page.
  24 |    */
  25 |   async navigate(): Promise<void> {
  26 |     await this.page.goto('/view_cart');
  27 |   }
  28 | 
  29 |   /**
  30 |    * Returns the <tr> row locator for a product by its display name.
  31 |    * @param productName - The exact product name as shown on the site
  32 |    */
  33 |   getRowByProductName(productName: string): Locator {
  34 |     // Optimize locator: Filter rows having a link with the product name
  35 |     return this.cartRows.filter({
  36 |       has: this.page.getByRole('link', { name: productName }),
  37 |     });
  38 |   }
  39 | 
  40 |   /**
  41 |    * Returns locators covering product details for assertions.
  42 |    */
  43 |   getProductLocators(productName: string) {
  44 |     const row = this.getRowByProductName(productName);
  45 |     return {
  46 |       rowLocator: row,
  47 |       nameLocator: row.locator('.cart_description').getByRole('link'),
  48 |       priceLocator: row.locator('.cart_price p'),
  49 |       quantityLocator: row.locator('.cart_quantity button'),
  50 |     };
  51 |   }
  52 | 
  53 |   /**
  54 |    * Returns total rows count
  55 |    */
  56 |   getCartRowsLocator(): Locator {
  57 |     return this.cartRows;
  58 |   }
  59 | 
  60 |   /**
  61 |    * Clicks "Proceed To Checkout" button on the cart page.
  62 |    * Navigates to /checkout.
  63 |    */
  64 |   async proceedToCheckout(): Promise<void> {
> 65 |     await this.proceedToCheckoutButton.click();
     |                                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  66 |   }
  67 | }
  68 | 
  69 | 
```