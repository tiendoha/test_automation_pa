import { test as base } from '@playwright/test';

// Register pages
import { HomePage } from '../pages/register/HomePage';
import { SignupLoginPage } from '../pages/register/SignupLoginPage';
import { RegistrationPage } from '../pages/register/RegistrationPage';
import { AccountCreatedPage } from '../pages/register/AccountCreatedPage';

// Login pages
import { LoginPage } from '../pages/login/LoginPage';

// Cart pages
import { ProductsPage } from '../pages/cart/ProductsPage';
import { CartPage } from '../pages/cart/CartPage';

// Checkout pages
import { CheckoutPage } from '../pages/checkout/CheckoutPage';
import { PaymentPage } from '../pages/checkout/PaymentPage';
import { OrderConfirmationPage } from '../pages/checkout/OrderConfirmationPage';

export type PageFixtures = {
  // Register fixtures
  homePage: HomePage;
  signupLoginPage: SignupLoginPage;
  registrationPage: RegistrationPage;
  accountCreatedPage: AccountCreatedPage;
  // Login fixtures
  loginPage: LoginPage;
  // Cart fixtures
  productsPage: ProductsPage;
  cartPage: CartPage;
  // Checkout fixtures
  checkoutPage: CheckoutPage;
  paymentPage: PaymentPage;
  orderConfirmationPage: OrderConfirmationPage;
};

export const test = base.extend<PageFixtures>({
  // ── Register ──────────────────────────────────────────────
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  signupLoginPage: async ({ page }, use) => {
    await use(new SignupLoginPage(page));
  },

  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },

  accountCreatedPage: async ({ page }, use) => {
    await use(new AccountCreatedPage(page));
  },

  // ── Login ─────────────────────────────────────────────────
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  // ── Cart ──────────────────────────────────────────────────
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  // ── Checkout ──────────────────────────────────────────────
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  paymentPage: async ({ page }, use) => {
    await use(new PaymentPage(page));
  },

  orderConfirmationPage: async ({ page }, use) => {
    await use(new OrderConfirmationPage(page));
  },
});

// Re-export expect so tests only need one import source
export { expect } from '@playwright/test';
