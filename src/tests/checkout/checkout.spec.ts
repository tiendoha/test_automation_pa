import { test, expect } from '../../fixtures';
import { ENV } from '../../configs/env.config';
import { TEST_CARD, ORDER_COMMENT, CHECKOUT_PRODUCT_INDEXES } from '../../data/checkout/checkout.data';
import { logger } from '../../helpers/common/logger.helper';

/**
 * Test Suite: Checkout Flow — Buy Clothes
 * Feature: Login → Add product → Checkout → Verify Address → Place Order
 * URL: https://automationexercise.com
 * Tech Stack: Playwright + TypeScript + Page Object Model + Auth Setup
 *
 * Auth: Test sử dụng session đã được lưu bởi auth.setup.ts
 *       (không cần login thủ công trong mỗi test)
 *
 * Flow:
 *  [auth.setup.ts] Login với .env credentials → lưu session
 *  [TC-CHECKOUT-001] Load session → Add product → Cart → Checkout
 *                    → Verify delivery address → Place Order
 *                    → Payment → Verify "Order Placed!"
 */

// ✅ Dùng session đã lưu bởi auth.setup.ts — không cần login lại
test.use({ storageState: ENV.authStatePath });

test.describe('Checkout Flow: Buy Clothes', () => {
  // Checkout flow navigates through 5 pages — give each test enough time
  test.setTimeout(90_000);

  /**
   * TC-CHECKOUT-001: Happy path — Complete full checkout flow
   *
   * Steps:
   *  1.  Verify user is logged in on homepage
   *  2.  Navigate đến trang /products
   *  3.  Thêm 2 sản phẩm vào giỏ hàng
   *  4.  Mở giỏ hàng (/view_cart)
   *  5.  Click "Proceed To Checkout"
   *  6.  Verify trang checkout loaded
   *  7.  Verify delivery address hiển thị đúng tên user
   *  8.  Nhập comment vào order message box
   *  9.  Click "Place Order"
   *  10. Verify trang payment loaded
   *  11. Điền thông tin thẻ thanh toán
   *  12. Click "Pay and Confirm Order"
   *  13. Verify "Order Placed!" và confirmation message
   */
  test('TC-CHECKOUT-001: Should complete full checkout flow successfully', async ({
    homePage,
    productsPage,
    cartPage,
    checkoutPage,
    paymentPage,
    orderConfirmationPage,
  }) => {
    // Step 1: Verify user is logged in (session restored from auth state)
    await homePage.navigate();
    await homePage.verifyPageLoadedAsLoggedIn();
    await homePage.verifyLoggedInAs(ENV.testUsername);

    // Step 2: Navigate to products page
    await productsPage.navigate();
    await productsPage.verifyPageLoaded();

    // Step 3: Add first product → Continue Shopping
    await productsPage.addProductToCartByIndex(CHECKOUT_PRODUCT_INDEXES[0]);
    await productsPage.continueShopping();

    // Step 3 cont: Add second product → View Cart via modal
    await productsPage.addProductToCartByIndex(CHECKOUT_PRODUCT_INDEXES[1]);
    await productsPage.goToCartViaModal();

    // Step 4: Verify cart page loaded
    await cartPage.verifyPageLoaded();

    // Step 5: Proceed to checkout
    await cartPage.proceedToCheckout();

    // Step 6: Verify checkout page loaded
    await checkoutPage.verifyPageLoaded();

    // Step 7: Verify delivery address contains user's name (Mr./Mrs. + username)
    await checkoutPage.verifyDeliveryAddress(ENV.testUsername);

    // Step 8: Enter order comment
    await checkoutPage.enterOrderComment(ORDER_COMMENT);

    // Step 9: Click Place Order
    await checkoutPage.placeOrder();

    // Step 10: Verify payment page loaded
    await paymentPage.verifyPageLoaded();

    // Step 11: Fill payment card details
    await paymentPage.fillPaymentDetails(TEST_CARD);

    // Step 12: Confirm payment
    await paymentPage.confirmPayment();

    // Step 13: ✅ Verify order placed successfully
    await orderConfirmationPage.verifyOrderPlaced();

    logger.pass('TC-CHECKOUT-001', 'Should complete full checkout flow successfully');
  });
});
