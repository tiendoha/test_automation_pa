import { test, expect } from '../../fixtures';
import { CART_PRODUCTS } from '../../data/cart/cart.data';
import { logger } from '../../helpers/common/logger.helper';
import { feature, story, severity, description } from 'allure-js-commons';

/**
 * Test Suite: Add Product To Cart
 * Feature: Thêm sản phẩm vào giỏ hàng và verify thông tin
 * URL: https://automationexercise.com
 * Tech Stack: Playwright + TypeScript + Page Object Model + Fixtures
 *
 * Flow:
 *  1. Mở trang Products
 *  2. Thêm 2 sản phẩm vào giỏ hàng (by name — stable, index-agnostic)
 *  3. Mở giỏ hàng
 *  4. Verify Product Name, Price, Quantity cho từng sản phẩm
 */
test.describe('Add Product To Cart', () => {

  /**
   * TC-CART-001: Happy path — Thêm 2 sản phẩm vào giỏ và verify thông tin
   *
   * Steps:
   *  1.  Navigate đến trang /products
   *  2.  Verify products page loaded
   *  3.  Hover sản phẩm "Blue Top" → Click "Add to cart"
   *  4.  Click "Continue Shopping" để ở lại trang products
   *  5.  Hover sản phẩm "Men Tshirt" → Click "Add to cart"
   *  6.  Click "View Cart" trên modal → Verify điều hướng sang cart page
   *  7.  Verify tổng số sản phẩm trong giỏ = 2
   *  8.  Verify sản phẩm 1: Name ✓ | Price ✓ | Quantity ✓
   *  9.  Verify sản phẩm 2: Name ✓ | Price ✓ | Quantity ✓
   */
  test('TC-CART-001: Should add 2 products to cart and verify their details', async ({
    page,
    productsPage,
    cartPage,
  }) => {
    await feature('Cart');
    await story('Add products to cart');
    await severity('critical');
    await description(
      'Verifies that two specific products can be added to the cart by name ' +
      'and that their name, price, and quantity are correct in the cart view.',
    );

    const [product1, product2] = CART_PRODUCTS;

    // Step 1 & 2: Navigate to products page and verify it's loaded
    await productsPage.navigate();
    await expect(page).toHaveURL(/.*products/);
    await expect(productsPage.productsHeading).toBeVisible();

    // Step 3: Add first product by name → Continue Shopping (stay on products page)
    await productsPage.addProductToCartByName(product1.name);
    await expect(productsPage.modalSuccessText).toBeVisible();
    await productsPage.continueShopping();
    await expect(productsPage.modalSuccessText).toBeHidden();

    // Step 5: Add second product by name → View Cart via modal
    await productsPage.addProductToCartByName(product2.name);
    await expect(productsPage.modalSuccessText).toBeVisible();
    await productsPage.goToCartViaModal();

    // Step 6: Verify cart page is loaded
    await expect(page).toHaveURL(/.*view_cart/);

    // Steps 7–9: Verify count + each product's name, price, and quantity
    await expect(cartPage.getCartRowsLocator()).toHaveCount(CART_PRODUCTS.length);
    for (const product of CART_PRODUCTS) {
      const locators = cartPage.getProductLocators(product.name);
      await expect(locators.rowLocator).toBeVisible();
      await expect(locators.nameLocator).toHaveText(product.name);
      await expect(locators.priceLocator).toHaveText(product.price);
      await expect(locators.quantityLocator).toHaveText(String(product.quantity));
    }

    logger.pass('TC-CART-001', 'Should add 2 products to cart and verify their details');
  });

  /**
   * TC-CART-002: Verify cart persists when navigating back from products
   *
   * Steps:
   *  1.  Thêm sản phẩm "Blue Top" vào cart → Continue Shopping
   *  2.  Thêm sản phẩm "Men Tshirt" vào cart → Continue Shopping
   *  3.  Navigate trực tiếp đến /view_cart
   *  4.  Verify cả 2 sản phẩm vẫn còn trong giỏ hàng
   */
  test('TC-CART-002: Cart should still contain products after navigating directly to cart', async ({
    page,
    productsPage,
    cartPage,
  }) => {
    await feature('Cart');
    await story('Verify cart remains after navigation');
    await severity('normal');
    await description(
      'Verifies that products added to the cart are still present ' +
      'when navigating directly to /view_cart without using the modal.',
    );

    const [product1, product2] = CART_PRODUCTS;

    // Step 1: Add first product by name, continue shopping
    await productsPage.navigate();
    await expect(page).toHaveURL(/.*products/);
    await expect(productsPage.productsHeading).toBeVisible();

    await productsPage.addProductToCartByName(product1.name);
    await expect(productsPage.modalSuccessText).toBeVisible();
    await productsPage.continueShopping();

    // Step 2: Add second product by name, continue shopping
    await productsPage.addProductToCartByName(product2.name);
    await expect(productsPage.modalSuccessText).toBeVisible();
    await productsPage.continueShopping();

    // Step 3: Navigate directly to cart page (no modal redirect)
    await cartPage.navigate();
    await expect(page).toHaveURL(/.*view_cart/);

    // Step 4: Both products should still be in the cart
    await expect(cartPage.getCartRowsLocator()).toHaveCount(CART_PRODUCTS.length);
    for (const product of CART_PRODUCTS) {
      const locators = cartPage.getProductLocators(product.name);
      await expect(locators.rowLocator).toBeVisible();
    }

    logger.pass('TC-CART-002', 'Cart should still contain products after navigating directly to cart');
  });
});
