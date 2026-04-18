# Test Strategy & Coverage — Automation Exercise

> **Target Website:** [https://automationexercise.com](https://automationexercise.com)
> **Framework:** Playwright 1.59.1 + TypeScript + Page Object Model (POM) + Custom Fixtures
> **Browser Support:** Chromium, Firefox, WebKit
> **CI/CD:** GitHub Actions — multi-browser matrix with nightly regression at 08:00 ICT
> **Reporting:** Playwright HTML Report + Allure Report (deployed to GitHub Pages)
> **Last Updated:** 2026-04-18

---

## 1. Scope of Implemented Automation

### 1.1 Project Architecture

```
src/
├── configs/          # env.config.ts — centralized ENV management (baseUrl, auth state path)
├── data/             # Static test data (user, login, cart, checkout) — no hardcoding in specs
├── fixtures/         # Custom Playwright fixtures that auto-inject all POMs into tests
├── helpers/
│   ├── api/          # REST API helpers — create/delete accounts programmatically
│   └── common/       # logger (colored Allure-aware output), random data generators
├── pages/            # Page Object Models — one class per page, locators as properties
└── tests/
    ├── auth/         # auth.setup.ts — saves authenticated session to storageState
    ├── register/     # Register User flows (2 test cases)
    ├── login/        # Login flows — positive and negative (3 test cases)
    ├── cart/         # Add-to-cart and cart persistence (2 test cases)
    └── checkout/     # Full end-to-end checkout with pre-authenticated user (1 test case)
```

### 1.2 Automated Test Cases (8 of 26)

| Suite | Test ID | Description | Allure Severity |
|-------|---------|-------------|-----------------|
| Register | TC-REG-001 | Register new user via full UI form, verify account created, then logout | Critical |
| Register | TC-REG-002 | Attempt registration with existing email, verify duplicate error message | Normal |
| Login | TC-LOGIN-001 | Login with valid credentials, verify logged-in state, then logout | Critical |
| Login | TC-LOGIN-002 | Login with correct email but wrong password, verify error message | Normal |
| Login | TC-LOGIN-003 | Login with non-existent email, verify error message | Minor |
| Cart | TC-CART-001 | Add 2 products by name, navigate to cart, verify name/price/quantity for each | Critical |
| Cart | TC-CART-002 | Add 2 products, navigate to cart via direct URL, verify cart persistence | Normal |
| Checkout | TC-CHECKOUT-001 | Full checkout: add 2 products → cart → checkout → payment → order confirmation | Critical |

### 1.3 Page Object Models Implemented

| Module | POM Class | Responsibility |
|--------|-----------|----------------|
| Register | `HomePage` | Navigation, auth-state indicators (logged-in label, logout link) |
| Register | `SignupLoginPage` | Signup form (name + email) and login form entry points |
| Register | `RegistrationPage` | Full account creation form (personal info + address + preferences) |
| Register | `AccountCreatedPage` | Success page verification and Continue button |
| Login | `LoginPage` | Login form, error message assertion |
| Cart | `ProductsPage` | Product listing, name-based add-to-cart, modal dismiss/navigate |
| Cart | `CartPage` | Cart row verification by product name, proceed to checkout |
| Checkout | `CheckoutPage` | Delivery address verification, order comment, place order |
| Checkout | `PaymentPage` | Card detail form fill and payment confirmation |
| Checkout | `OrderConfirmationPage` | Order placed heading and confirmation message assertion |

### 1.4 Key Architectural Decisions

**API-First Test Setup (Anti-Flaky Pattern)**
Test accounts are created via `POST /api/createAccount` in `beforeAll` instead of UI registration. This eliminates ~60% of test setup time and removes a common source of flakiness from repeated form-fill operations. Corresponding `DELETE /api/deleteAccount` calls in `afterAll` prevent data pollution across runs.

**Authentication State Persistence**
`auth.setup.ts` logs in once via UI, saves the full browser session (`cookies + localStorage`) to `playwright/.auth/user.json` using Playwright's `storageState`. The checkout project (`chromium:auth`, `firefox:auth`, `webkit:auth`) reuses this session, skipping login entirely and reducing the checkout test setup by approximately 60%.

**Name-Based Product Selection**
Cart operations use `addProductToCartByName(productName)` instead of index-based selectors. This makes tests resilient to product reordering on the website — a real-world risk since the site dynamically serves products.

**Custom Fixtures**
A single `fixtures/index.ts` file extends Playwright's `test` object to auto-instantiate all POMs. Test files import from fixtures, not from individual page files, keeping spec code clean and import paths stable.

**Playwright-Native Assertions Only**
All assertions use Playwright's built-in auto-retrying assertions (`toHaveText`, `toBeVisible`, `toHaveCount`). Manual `setTimeout` or `waitForTimeout` calls are explicitly avoided to prevent time-dependent flakiness.

### 1.5 CI/CD Pipeline

The GitHub Actions workflow runs a 6-job parallel matrix on every push/PR to `main` and nightly at 01:00 UTC (08:00 ICT):

| Job | Browsers | Auth State | Test Scope |
|-----|----------|-----------|------------|
| Unauthenticated | chromium, firefox, webkit | None | register, login, cart |
| Authenticated | chromium:auth, firefox:auth, webkit:auth | From setup job | checkout only |

Post-run, all Allure results are merged into a single report and deployed to GitHub Pages. Each run uploads Playwright HTML reports as artifacts (7-day retention).

---

## 2. Covered and Uncovered Test Cases

The website defines **26 standard test cases**. The table below maps each to its current automation status.

### 2.1 Authentication & Contact (TC 1–7)

| TC | Title | Status | Automated As |
|----|-------|:------:|-------------|
| TC 1 | Register User | ✅ Covered | `TC-REG-001` — full form + logout (API cleanup replaces UI Delete Account step) |
| TC 2 | Login User with correct email and password | ✅ Covered | `TC-LOGIN-001` |
| TC 3 | Login User with incorrect email and password | ✅ Covered | `TC-LOGIN-002` (wrong password) + `TC-LOGIN-003` (non-existent email) |
| TC 4 | Logout User | ✅ Covered | Embedded in `TC-LOGIN-001` and `TC-REG-001` post-login verification |
| TC 5 | Register User with existing email | ✅ Covered | `TC-REG-002` |
| TC 6 | Contact Us Form | ❌ Not covered | Requires file upload + form submission flow — not yet implemented |
| TC 7 | Verify Test Cases Page | ❌ Not covered | Navigation + content assertion — not yet implemented |

### 2.2 Products & Cart (TC 8–13, 17–22)

| TC | Title | Status | Notes |
|----|-------|:------:|-------|
| TC 8 | Verify All Products and product detail page | ❌ Not covered | Needs `ProductsPage` expansion + new `ProductDetailPage` POM |
| TC 9 | Search Product | ❌ Not covered | Needs search input interaction and results verification |
| TC 10 | Verify Subscription in home page | ❌ Not covered | Newsletter subscription widget on homepage |
| TC 11 | Verify Subscription in Cart page | ❌ Not covered | Same subscription widget, accessed from cart page |
| TC 12 | Add Products in Cart | ✅ Covered | `TC-CART-001` — 2 products added, all fields verified |
| TC 13 | Verify Product quantity in Cart | ❌ Not covered | Quantity selector interaction and verification |
| TC 17 | Remove Products From Cart | ❌ Not covered | Delete button interaction and empty-cart state assertion |
| TC 18 | View Category Products | ❌ Not covered | Left-sidebar category navigation not yet implemented |
| TC 19 | View & Cart Brand Products | ❌ Not covered | Brand filter sidebar not yet implemented |
| TC 20 | Search Products and Verify Cart After Login | ❌ Not covered | Compound flow: search → add → login → verify cart retained |
| TC 21 | Add review on product | ❌ Not covered | Product detail page review form |
| TC 22 | Add to cart from Recommended items | ❌ Not covered | Homepage recommended items section |

### 2.3 Checkout & Orders (TC 14–16, 23–24)

| TC | Title | Status | Notes |
|----|-------|:------:|-------|
| TC 14 | Place Order: Register while Checkout | ❌ Not covered | Mid-checkout registration flow — most complex path |
| TC 15 | Place Order: Register before Checkout | ❌ Not covered | Register → add to cart → checkout (without storageState) |
| TC 16 | Place Order: Login before Checkout | ✅ Covered | `TC-CHECKOUT-001` — full flow using pre-authenticated session |
| TC 23 | Verify address details in checkout page | ❌ Not covered | `TC-CHECKOUT-001` verifies delivery name only; full address block not asserted |
| TC 24 | Download Invoice after purchase order | ❌ Not covered | File download assertion after order confirmation |

### 2.4 UI Interactions (TC 25–26)

| TC | Title | Status | Notes |
|----|-------|:------:|-------|
| TC 25 | Verify Scroll Up using 'Arrow' button | ❌ Not covered | Scroll-to-top button visibility and behavior |
| TC 26 | Verify Scroll Up without 'Arrow' button | ❌ Not covered | Manual scroll-up and navbar visibility check |

### 2.5 Coverage Summary

| Category | Covered | Total | Coverage |
|----------|:-------:|:-----:|:--------:|
| Authentication & Contact | 5 | 7 | 71% |
| Products & Cart | 1 | 10 | 10% |
| Checkout & Orders | 1 | 5 | 20% |
| UI Interactions | 0 | 2 | 0% |
| **Overall** | **8** | **26** | **31%** |

---

## 3. Automation Risk Analysis

### 3.1 Risk Register

| Risk | Probability | Impact | Current Mitigation | Residual Risk |
|------|:-----------:|:------:|-------------------|:-------------:|
| **Google Ads overlaying interactive elements** | High | High — causes `ElementClickInterceptedError` or wrong-element click | No dedicated `dismissAds()` helper yet; individual tests handle ad-related failures via retry | High |
| **Product data changes on website** | Medium | Medium — hardcoded product names/prices in `cart.data.ts` will mismatch | `addProductToCartByName()` decouples selection from index; price/name values in `cart.data.ts` are centralized | Medium |
| **API endpoint changes (`/api/createAccount`, `/api/deleteAccount`)** | Low | High — all `beforeAll`/`afterAll` setups fail silently if API returns unexpected codes | `auth.api.helper.ts` validates response codes; idempotent delete ignores 404 | Low |
| **Brittle locators breaking on UI redesign** | Medium | High — test suite fails across all specs | Locators use `getByRole`, `getByText`, `getByPlaceholder` exclusively; zero hardcoded CSS/XPath selectors | Low |
| **Flaky tests from async UI transitions** | Medium | Medium — intermittent failures degrade CI trust | Playwright's auto-retrying assertions (`toBeVisible`, `toHaveText`) handle transient states; `setTimeout` is banned | Low |
| **Auth state expiry between CI jobs** | Low | High — checkout tests fail if session cookie expires before `:auth` jobs start | `auth.setup.ts` runs as a dependency of `:auth` jobs and regenerates the session fresh each run | Low |
| **Data pollution across parallel test runs** | Low | Medium — residual test accounts accumulate | `afterAll` API cleanup is idempotent; UUID-based email generation prevents conflicts between parallel workers | Low |
| **Cross-browser behavior divergence** | Low | Medium — test passes on Chromium but fails on WebKit/Firefox | All 3 browsers run in CI matrix; a failure in one browser is immediately surfaced | Low |
| **Checkout test depends on specific product availability** | Medium | High — `TC-CHECKOUT-001` fails if "Blue Top" or "Men Tshirt" are removed from site | Products are long-standing fixtures on the site, but there is no API to verify availability before test run | Medium |
| **Payment page rendered inside an iframe** | High | High — Playwright's standard locators do not pierce iframes automatically | Payment form is confirmed to be in the main DOM (not an iframe) on `automationexercise.com`; risk applies if payment provider changes | Low |

### 3.2 Known Limitations

**TC 1 Deviation from Standard**
The standard TC 1 specifies a UI-based "Delete Account" step at the end. The current implementation substitutes this with an API call in `afterAll`. The UI delete flow itself is untested, which means `DELETE /account` functionality via the UI is not verified.

**TC 16 Address Verification Gap**
`TC-CHECKOUT-001` verifies the delivery address name (`deliveryAddressName` locator) but does not assert the full address block (street, city, state, country, zip code). TC 23 specifically targets this gap.

**Single Checkout Flow**
Only the "Login before Checkout" path is automated (TC 16). The two alternative checkout flows — registering during checkout (TC 14) and registering before checkout (TC 15) — are not covered, leaving important user journeys untested.

---

## 4. Improvement Proposals

The following improvements are ordered by business impact and implementation effort. Each can be applied incrementally using the existing codebase architecture without structural changes.

### Phase 1 — High Priority: Core Product & Cart Flows

*These flows are prerequisites for TC 14, TC 15, and TC 23 checkout scenarios.*

**Add a `dismissAds()` helper function**
Write a shared utility that detects and closes Google Ad overlays before critical interactions. Register it as a global `beforeEach` or call it explicitly before `click()` and `hover()` actions. This is the single highest-leverage fix for reducing flaky failures in CI.

**TC 8 — Product Detail Page**
Extend `ProductsPage` with a `clickProductByName(name)` method. Create a new `ProductDetailPage` POM covering product name, category, price, availability, condition, and brand locators. This unblocks TC 21 (reviews) as well.

**TC 9 — Search Products**
Add a `searchProduct(query)` method to `ProductsPage` and a `getSearchResults()` method returning product name locators. Required as a building block for TC 20.

**TC 17 — Remove Products From Cart**
Add a `removeProductByName(name)` method to `CartPage`. Assert the row disappears and verify the empty-cart state message.

**TC 13 — Verify Product Quantity in Cart**
Add a `setQuantityByName(name, quantity)` interaction to `ProductDetailPage` and extend `CartPage` to assert the resulting quantity column value.

### Phase 2 — Medium Priority: Checkout Flow Completeness

**TC 23 — Full Address Verification**
Extend `CheckoutPage` locators to cover all address fields (first/last name, company, address lines, city, state, country, zip, phone). Assert each against the registered user's data stored in `env.config.ts` or `user.data.ts`.

**TC 14 — Register While Checkout**
This is the most complex flow: add products as a guest → proceed to checkout → register mid-flow. It requires a new `GuestCheckoutPage` POM or an extension of `CheckoutPage`. The existing `RegistrationPage` POM can be reused once redirected to signup.

**TC 15 — Register Before Checkout**
Combine existing `TC-REG-001` setup (API account creation) with the checkout flow from `TC-CHECKOUT-001`. The primary difference from `TC-CHECKOUT-001` is that no pre-saved `storageState` is used — login happens inline within the test.

**TC 24 — Download Invoice**
Use Playwright's `Download` event (`page.waitForEvent('download')`) to intercept the invoice file download after order confirmation. Assert the downloaded filename matches a PDF pattern and the file size is non-zero.

### Phase 3 — Lower Priority: Supporting Features

**TC 6 — Contact Us Form**
Create a `ContactPage` POM. The form includes a file upload field, requiring `fileInput.setInputFiles()`. Assert the success message "Success! Your details have been submitted successfully." appears after submission.

**TC 10 / TC 11 — Subscription Widget**
The subscription widget appears on both the homepage and the cart page. Extract a shared `SubscriptionComponent` helper (not a full POM) with a `subscribe(email)` method. This avoids duplication between TC 10 and TC 11.

**TC 18 / TC 19 — Category and Brand Filters**
Create a `SidebarComponent` for the left navigation panel shared across product listing pages. Implement `selectCategory(women/men/kids, subcategory)` and `selectBrand(brandName)` methods. Both TCs share this component.

**TC 20 — Search Cart Persistence After Login**
Compose TC 9 (search) and TC-LOGIN-001 (login) into a single flow: search for a product → add to cart → log in → verify the cart still contains the product. Tests session-storage cart merging behavior.

**TC 21 — Product Review**
Extend `ProductDetailPage` with a review form section: `nameInput`, `emailInput`, `reviewTextarea`, `submitButton`, and a success message locator. Gate this test on a logged-in user fixture.

**TC 22 — Recommended Items**
Add a `RecommendedItemsSection` to `HomePage` or create a scroll-to-section helper. Use `addRecommendedItemByIndex(0)` and verify the item appears in the cart.

**TC 25 / TC 26 — Scroll Interactions**
Use `page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))` to scroll to the bottom. For TC 25, assert the scroll-arrow button becomes visible and click it to scroll back to top. For TC 26, assert the navbar is visible after scrolling back to top without the button.

### 4.1 Infrastructure Improvements

**Ad-Dismissal Guard (Global)**
Centralize ad detection into a `beforeEach` hook in the base fixture. This eliminates the need for per-test ad handling and reduces the noise in failure logs.

**Visual Regression Testing**
Integrate `@playwright/test`'s built-in `toHaveScreenshot()` for critical pages (homepage, product listing, order confirmation). Run visual diff checks as a separate CI job to catch unintended UI regressions.

**API Contract Testing**
The automation already calls `/api/createAccount` and `/api/deleteAccount`. Extend `auth.api.helper.ts` to also test `/api/productsList`, `/api/searchProduct`, and `/api/getUserDetailByEmail` to build a lightweight API test layer alongside the UI suite.

**Negative Checkout Flows**
Add negative scenarios to the checkout suite: invalid card number format, expired card, mismatched CVC. These are not part of the 26 standard TCs but represent critical regression coverage for the payment flow.

### 4.2 Effort Estimate

| Item | Estimated Effort | Priority |
|------|:----------------:|:--------:|
| `dismissAds()` global helper | 0.5 day | Critical |
| TC 8 — Product detail POM | 1 day | High |
| TC 9, TC 17, TC 13 — Cart operations | 1.5 days | High |
| TC 23 — Full address assertion | 0.5 day | High |
| TC 15, TC 16 extension (address) | 0.5 day | Medium |
| TC 14 — Register during checkout | 2 days | Medium |
| TC 24 — Invoice download | 1 day | Medium |
| TC 6 — Contact Us with file upload | 1 day | Low |
| TC 10, TC 11 — Subscription widget | 0.5 day | Low |
| TC 18, TC 19 — Category/Brand filter | 1 day | Low |
| TC 20 — Cart persistence after login | 1 day | Low |
| TC 21, TC 22 — Review + Recommended | 1.5 days | Low |
| TC 25, TC 26 — Scroll interactions | 0.5 day | Low |
| Visual regression setup | 1 day | Optional |
| API contract tests | 1 day | Optional |
| **Total to reach 26/26 TC coverage** | **~13 days** | — |
