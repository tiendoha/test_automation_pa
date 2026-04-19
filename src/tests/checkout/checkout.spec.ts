import { test, expect } from '../../fixtures';
import { ENV } from '../../configs/env.config';
import { TEST_CARD, ORDER_COMMENT, CHECKOUT_PRODUCTS } from '../../data/checkout/checkout.data';
import { logger } from '../../helpers/common/logger.helper';
import { feature, story, severity, description } from 'allure-js-commons';

// Use authenticated session from auth.setup.ts
test.use({ storageState: ENV.authStatePath });

test.describe('Checkout Flow: Buy Clothes', () => {

  /**
   * TC-CHECKOUT-001: Happy path — Complete full checkout flow
   *
   * Steps:
   *  1. Verify logged-in state on homepage
   *  2. Navigate to /products
   *  3. Add 2 products to cart by name
   *  4. Open cart page
   *  5. Click "Proceed To Checkout"
   *  6. Verify checkout page loaded
   *  7. Verify delivery address shows user name
   *  8. Enter order comment
   *  9. Click "Place Order"
   *  10. Verify payment page loaded
   *  11. Fill payment details
   *  12. Click "Pay and Confirm Order"
   *  13. Verify "Order Placed!"
   */
  test('TC-CHECKOUT-001: Should complete full checkout flow successfully', async ({
    page,
    homePage,
    productsPage,
    cartPage,
    checkoutPage,
    paymentPage,
    orderConfirmationPage,
  }) => {
    await feature('Checkout');
    await story('Complete full order and payment flow');
    await severity('critical');
    await description(
      'Full end-to-end checkout flow: authenticated user adds two products by name, ' +
      'proceeds to checkout, verifies delivery address, places an order, ' +
      'pays with a test card, and confirms "Order Placed!" on the final page.',
    );

    // Step 1: Verify user is logged in (session restored from auth state)
    await homePage.navigate();
    await expect(page).toHaveURL(ENV.baseUrl);
    await expect(homePage.logoutLink).toBeVisible();
    await expect(homePage.loggedInAsLabel).toContainText(ENV.testUsername);

    // Step 2: Navigate to products page
    await productsPage.navigate();
    await expect(page).toHaveURL(/.*products/);
    await expect(productsPage.productsHeading).toBeVisible();

    // Step 3: Add first product by name → Continue Shopping
    await productsPage.addProductToCartByName(CHECKOUT_PRODUCTS[0]);
    await expect(productsPage.modalSuccessText).toBeVisible();
    await productsPage.continueShopping();

    // Step 3 cont: Add second product by name → View Cart via modal
    await productsPage.addProductToCartByName(CHECKOUT_PRODUCTS[1]);
    await expect(productsPage.modalSuccessText).toBeVisible();
    await productsPage.goToCartViaModal();

    // Step 4: Verify cart page loaded
    await expect(page).toHaveURL(/.*view_cart/);

    // Step 5: Proceed to checkout
    await cartPage.proceedToCheckout();

    // Step 6: Verify checkout page loaded
    await expect(page).toHaveURL(/.*checkout/);
    await expect(checkoutPage.deliveryAddressBlock).toBeVisible();

    // Step 7: Verify delivery address contains user's name (Mr./Mrs. + username)
    await expect(checkoutPage.deliveryAddressName).toContainText(ENV.testUsername);

    // Step 8: Enter order comment
    await checkoutPage.enterOrderComment(ORDER_COMMENT);

    // Step 9: Click Place Order
    await checkoutPage.placeOrder();

    // Step 10: Verify payment page loaded
    await expect(page).toHaveURL(/.*payment/);
    await expect(paymentPage.nameOnCardInput).toBeVisible();

    // Step 11: Fill payment card details
    await paymentPage.fillPaymentDetails(TEST_CARD);

    // Step 12: Confirm payment
    await paymentPage.confirmPayment();

    // Step 13: Verify order placed successfully
    await expect(page).toHaveURL(/.*payment_done/);
    await expect(orderConfirmationPage.orderPlacedHeading).toHaveText('Order Placed!');
    await expect(orderConfirmationPage.confirmationMessage).toBeVisible();

    logger.pass('TC-CHECKOUT-001', 'Should complete full checkout flow successfully');
  });
});
