# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart/cart.spec.ts >> Add Product To Cart >> TC-CART-002: Cart should still contain products after navigating directly to cart
- Location: src/tests/cart/cart.spec.ts:90:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'All Products' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'All Products' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - text: 403 Forbidden
    - generic [ref=e4]:
      - text: Please forward this error screen to automationexercise.com's
      - link "WebMaster" [ref=e5] [cursor=pointer]:
        - /url: mailto:webmaster@automationexercise.com?subject=Error message [403] (none) for automationexercise.com/products port 443 on Sunday, 28-Jun-2026 22:22:46 MST
      - text: .
    - paragraph [ref=e6]: "Access is forbidden to the requested page:"
  - list [ref=e10]:
    - listitem [ref=e11]:
      - img [ref=e12]
      - generic [ref=e13]: automationexercise.com/products (port 443)
    - listitem
  - contentinfo [ref=e14]:
    - generic [ref=e15]:
      - link "cPanel, Inc." [ref=e16] [cursor=pointer]:
        - /url: http://cpanel.com/?utm_source=cpanelwhm&utm_medium=cplogo&utm_content=logolink&utm_campaign=403referral
        - img "cPanel, Inc." [ref=e17]
      - generic [ref=e18]:
        - link "Copyright © 2020 cPanel, L.L.C." [ref=e19] [cursor=pointer]:
          - /url: http://cpanel.com/?utm_source=cpanelwhm&utm_medium=cplogo&utm_content=logolink&utm_campaign=403referral
        - link "Privacy Policy" [ref=e20] [cursor=pointer]:
          - /url: https://go.cpanel.net/privacy
```

# Test source

```ts
  8   |  * Feature: Add products to cart and verify details
  9   |  * URL: https://automationexercise.com
  10  |  * Tech Stack: Playwright + TypeScript + POM + Fixtures
  11  |  *
  12  |  * Flow:
  13  |  *  1. Open Products page
  14  |  *  2. Add 2 products to cart by name
  15  |  *  3. Open cart
  16  |  *  4. Verify product Name, Price, and Quantity
  17  |  */
  18  | test.describe('Add Product To Cart', () => {
  19  | 
  20  |   /**
  21  |    * TC-CART-001: Happy path — Add 2 products to cart and verify details
  22  |    *
  23  |    * Steps:
  24  |    *  1. Navigate to /products page
  25  |    *  2. Verify products page loaded
  26  |    *  3. Hover "Blue Top" → Click "Add to cart"
  27  |    *  4. Click "Continue Shopping" to stay on products page
  28  |    *  5. Hover "Men Tshirt" → Click "Add to cart"
  29  |    *  6. Click "View Cart" on modal → Verify redirect to cart page
  30  |    *  7. Verify total products in cart = 2
  31  |    *  8. Verify product 1: Name, Price, Quantity
  32  |    *  9. Verify product 2: Name, Price, Quantity
  33  |    */
  34  |   test('TC-CART-001: Should add 2 products to cart and verify their details', async ({
  35  |     page,
  36  |     productsPage,
  37  |     cartPage,
  38  |   }) => {
  39  |     await feature('Cart');
  40  |     await story('Add products to cart');
  41  |     await severity('critical');
  42  |     await description(
  43  |       'Verifies that two specific products can be added to the cart by name ' +
  44  |       'and that their name, price, and quantity are correct in the cart view.',
  45  |     );
  46  | 
  47  |     const [product1, product2] = CART_PRODUCTS;
  48  | 
  49  |     // Step 1 & 2: Navigate to products page and verify it's loaded
  50  |     await productsPage.navigate();
  51  |     await expect(page).toHaveURL(/.*products/);
  52  |     await expect(productsPage.productsHeading).toBeVisible();
  53  | 
  54  |     // Step 3: Add first product by name → Continue Shopping (stay on products page)
  55  |     await productsPage.addProductToCartByName(product1.name);
  56  |     await expect(productsPage.modalSuccessText).toBeVisible();
  57  |     await productsPage.continueShopping();
  58  |     await expect(productsPage.modalSuccessText).toBeHidden();
  59  | 
  60  |     // Step 5: Add second product by name → View Cart via modal
  61  |     await productsPage.addProductToCartByName(product2.name);
  62  |     await expect(productsPage.modalSuccessText).toBeVisible();
  63  |     await productsPage.goToCartViaModal();
  64  | 
  65  |     // Step 6: Verify cart page is loaded
  66  |     await expect(page).toHaveURL(/.*view_cart/);
  67  | 
  68  |     // Steps 7–9: Verify count + each product's name, price, and quantity
  69  |     await expect(cartPage.getCartRowsLocator()).toHaveCount(CART_PRODUCTS.length);
  70  |     for (const product of CART_PRODUCTS) {
  71  |       const locators = cartPage.getProductLocators(product.name);
  72  |       await expect(locators.rowLocator).toBeVisible();
  73  |       await expect(locators.nameLocator).toHaveText(product.name);
  74  |       await expect(locators.priceLocator).toHaveText(product.price);
  75  |       await expect(locators.quantityLocator).toHaveText(String(product.quantity));
  76  |     }
  77  | 
  78  |     logger.pass('TC-CART-001', 'Should add 2 products to cart and verify their details');
  79  |   });
  80  | 
  81  |   /**
  82  |    * TC-CART-002: Verify cart persists when navigating back from products
  83  |    *
  84  |    * Steps:
  85  |    *  1. Add "Blue Top" to cart → Continue Shopping
  86  |    *  2. Add "Men Tshirt" to cart → Continue Shopping
  87  |    *  3. Navigate directly to /view_cart
  88  |    *  4. Verify both products remain in the cart
  89  |    */
  90  |   test('TC-CART-002: Cart should still contain products after navigating directly to cart', async ({
  91  |     page,
  92  |     productsPage,
  93  |     cartPage,
  94  |   }) => {
  95  |     await feature('Cart');
  96  |     await story('Verify cart remains after navigation');
  97  |     await severity('normal');
  98  |     await description(
  99  |       'Verifies that products added to the cart are still present ' +
  100 |       'when navigating directly to /view_cart without using the modal.',
  101 |     );
  102 | 
  103 |     const [product1, product2] = CART_PRODUCTS;
  104 | 
  105 |     // Step 1: Add first product by name, continue shopping
  106 |     await productsPage.navigate();
  107 |     await expect(page).toHaveURL(/.*products/);
> 108 |     await expect(productsPage.productsHeading).toBeVisible();
      |                                                ^ Error: expect(locator).toBeVisible() failed
  109 | 
  110 |     await productsPage.addProductToCartByName(product1.name);
  111 |     await expect(productsPage.modalSuccessText).toBeVisible();
  112 |     await productsPage.continueShopping();
  113 | 
  114 |     // Step 2: Add second product by name, continue shopping
  115 |     await productsPage.addProductToCartByName(product2.name);
  116 |     await expect(productsPage.modalSuccessText).toBeVisible();
  117 |     await productsPage.continueShopping();
  118 | 
  119 |     // Step 3: Navigate directly to cart page (no modal redirect)
  120 |     await cartPage.navigate();
  121 |     await expect(page).toHaveURL(/.*view_cart/);
  122 | 
  123 |     // Step 4: Both products should still be in the cart
  124 |     await expect(cartPage.getCartRowsLocator()).toHaveCount(CART_PRODUCTS.length);
  125 |     for (const product of CART_PRODUCTS) {
  126 |       const locators = cartPage.getProductLocators(product.name);
  127 |       await expect(locators.rowLocator).toBeVisible();
  128 |     }
  129 | 
  130 |     logger.pass('TC-CART-002', 'Cart should still contain products after navigating directly to cart');
  131 |   });
  132 | });
  133 | 
```