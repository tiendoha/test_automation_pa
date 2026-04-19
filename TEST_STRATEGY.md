# Test Strategy & Coverage — Automation Exercise

> **Target Website:** [https://automationexercise.com](https://automationexercise.com)
> **Framework:** Playwright `^1.59.1` + TypeScript + Page Object Model (POM) + Custom Fixtures
> **Browsers:** Chromium, Firefox, WebKit (Desktop Chrome / Firefox / Safari devices)
> **CI/CD:** GitHub Actions — 6-project matrix on push/PR and nightly at 01:00 UTC (08:00 ICT)
> **Reporting:** Playwright HTML Report (artifact, 7-day retention) + Allure Report (deployed to GitHub Pages)
> **Last Updated:** 2026-04-19

---

## 1. Scope of Implemented Automation

### 1.1 Project Layout

```
src/
├── configs/          env.config.ts — reads BASE_URL / TEST_EMAIL / TEST_PASSWORD / TEST_USERNAME from .env
├── data/             Static test data (cart, checkout, login, register) — no hardcoded values inside specs
├── fixtures/         index.ts — Playwright test.extend auto-injecting all 9 POMs
├── helpers/
│   ├── api/          auth.api.helper.ts — POST /api/createAccount, DELETE /api/deleteAccount
│   └── common/       logger.helper.ts (colored + Allure-aware), random.helper.ts (unique email generator)
├── pages/            Page Object Models — 1 class per page, locators declared as readonly properties
└── tests/
    ├── auth/         auth.setup.ts — provisions account + logs in once, saves storageState
    ├── register/     register.spec.ts (2 TCs)
    ├── login/        login.spec.ts    (3 TCs)
    ├── cart/         cart.spec.ts     (2 TCs)
    └── checkout/     checkout.spec.ts (1 TC, requires storageState)
```

### 1.2 Automated Test Cases (8 tests across 4 suites)

| Suite | Test ID | Description | Severity |
|-------|---------|-------------|----------|
| Register | `TC-REG-001` | Full UI registration → Account Created → logged-in label visible → logout | Critical |
| Register | `TC-REG-002` | Signup with an email pre-created via API, assert "Email Address already exist!" | Normal |
| Login | `TC-LOGIN-001` | Login with the freshly-created account → verify username in navbar → logout | Critical |
| Login | `TC-LOGIN-002` | Correct email + wrong password → error message visible, still on `/login` | Normal |
| Login | `TC-LOGIN-003` | Non-existent email + any password → error message visible | Minor |
| Cart | `TC-CART-001` | Add "Blue Top" and "Men Tshirt" by name, verify row count, name, price, quantity | Critical |
| Cart | `TC-CART-002` | Add 2 products, navigate directly to `/view_cart`, verify cart persistence | Normal |
| Checkout | `TC-CHECKOUT-001` | Authenticated E2E: products → cart → checkout → payment → "Order Placed!" | Critical |

### 1.3 Page Object Models (9 classes, ~1:1 mapping with spec steps)

| POM Class | File | Key responsibilities |
|-----------|------|----------------------|
| `HomePage` | `pages/register/HomePage.ts` | Navbar links (Signup/Login, Logout), `Logged in as <name>` label |
| `SignupLoginPage` | `pages/register/SignupLoginPage.ts` | Signup (name+email) and Login form entry points |
| `RegistrationPage` | `pages/register/RegistrationPage.ts` | Full account form: title radios, DOB selects, 2 newsletter checkboxes, address block |
| `AccountCreatedPage` | `pages/register/AccountCreatedPage.ts` | `ACCOUNT CREATED!` heading + Continue |
| `LoginPage` | `pages/login/LoginPage.ts` | Login form, `loginErrorMessage` locator |
| `ProductsPage` | `pages/cart/ProductsPage.ts` | Product grid, `addProductToCartByName`, add-to-cart modal (Continue Shopping / View Cart) |
| `CartPage` | `pages/cart/CartPage.ts` | Cart rows by product name, per-row name/price/quantity locators, Proceed To Checkout |
| `CheckoutPage` | `pages/checkout/CheckoutPage.ts` | Delivery/billing address blocks, delivery-address-name line, comment textarea, Place Order |
| `PaymentPage` | `pages/checkout/PaymentPage.ts` | Card fields via `[data-qa="..."]`, `#submit` pay button |
| `OrderConfirmationPage` | `pages/checkout/OrderConfirmationPage.ts` | `Order Placed!` heading + confirmation text |

### 1.4 Architectural Decisions (anti-flaky patterns)

**API-first account provisioning.**
`register.spec.ts` `beforeAll`, `login.spec.ts` `beforeAll`, and `auth.setup.ts` all call `POST /api/createAccount` with `form` data (see `src/helpers/api/auth.api.helper.ts`). This skips ~20 form fields of UI input per setup. Each suite's `afterAll` issues an idempotent `DELETE /api/deleteAccount` to prevent data pollution — the helper tolerates non-201 responses when an account is already gone.

**Storage-state reuse for authenticated tests.**
`auth.setup.ts` runs as a Playwright `setup` project (declared in `playwright.config.ts`). It provisions the env user via API, logs in through `LoginPage`, and saves cookies + localStorage to `playwright/.auth/user.json`. The three `*:auth` projects (`chromium:auth`, `firefox:auth`, `webkit:auth`) declare `dependencies: ['setup']` and load that `storageState`, which is what `testIgnore: ['**/checkout/**']` on the unauth projects enforces — checkout never runs without the session.

**Name-based product selection.**
`ProductsPage.addProductToCartByName()` filters `.product-image-wrapper` cards by an inner `<p>` matching the exact product name, then hovers and clicks the overlay's Add-to-cart. This avoids index-based flakiness when the site reorders its grid. `CartPage.getProductLocators()` uses the same pattern, filtering cart `<tr>` rows by the product-link role+name.

**Custom fixtures (single import surface).**
`src/fixtures/index.ts` extends Playwright's `test` to auto-instantiate all 9 POMs as fixtures and re-exports `expect` and `request`. Specs import only from `../../fixtures`, keeping test code free of `new HomePage(page)` plumbing.

**Auto-retrying assertions only.**
All assertions use Playwright's built-in auto-retrying matchers (`toBeVisible`, `toHaveURL`, `toHaveText`, `toContainText`, `toHaveCount`, `toBeHidden`). The codebase contains no `page.waitForTimeout` or `setTimeout` calls — commit `ed97829` explicitly removed the last `set_timeout` from `checkout.spec.ts`.

**Centralized env configuration.**
`src/configs/env.config.ts` is the only module that reads `process.env`. Defaults to `https://automationexercise.com` and `playwright/.auth/user.json` so unauthenticated tests run without `.env`. The authenticated checkout project fails loudly if `TEST_EMAIL`/`TEST_PASSWORD` are missing.

### 1.5 CI/CD Pipeline (`.github/workflows/playwright.yml`)

Triggers: push / PR on `main` or `master`, plus `cron: '0 1 * * *'` (01:00 UTC = 08:00 ICT nightly regression).

Matrix (6 jobs, `fail-fast: false`, 30-min timeout each):

| Job | Auth | Test scope | Notes |
|-----|------|-----------|-------|
| `chromium`, `firefox`, `webkit` | none | register + login + cart (checkout ignored) | 3 browsers in parallel |
| `chromium:auth`, `firefox:auth`, `webkit:auth` | `storageState` from setup | checkout only | Each job runs `npx playwright test --project=setup` first to regenerate fresh auth state |

Post-test artifacts: per-job Playwright HTML reports and Allure results (7-day retention). A final `allure-report` job downloads all `allure-results-*` artifacts, merges them via `simple-elf/allure-report-action`, deploys to the `gh-pages` branch via `peaceiris/actions-gh-pages@v3`, and renders a pass/fail matrix into `$GITHUB_STEP_SUMMARY` with a link to the dashboard.

---

## 2. Covered and Uncovered Test Cases

The website publishes **26 standard test cases** at [/test_cases](https://automationexercise.com/test_cases). Each is mapped below to its current automation status.

### 2.1 Authentication & Contact (TC 1–7)

| TC | Official title | Status | Mapped to |
|----|----------------|:------:|-----------|
| 1 | Register User | ✅ Covered | `TC-REG-001` — full UI form. Final "Delete Account" UI step substituted by `DELETE /api/deleteAccount` in `afterAll`. |
| 2 | Login User with correct email and password | ✅ Covered | `TC-LOGIN-001` |
| 3 | Login User with incorrect email and password | ✅ Covered | `TC-LOGIN-002` (wrong password) and `TC-LOGIN-003` (non-existent email) |
| 4 | Logout User | ✅ Covered | Logout steps are embedded in `TC-REG-001` and `TC-LOGIN-001`; both assert redirect to `/login` |
| 5 | Register User with existing email | ✅ Covered | `TC-REG-002` — pre-creates user via API, asserts `Email Address already exist!` |
| 6 | Contact Us Form | ❌ Not covered | Requires `ContactPage` POM + `setInputFiles` for the file upload |
| 7 | Verify Test Cases Page | ❌ Not covered | Navigation + content assertion on `/test_cases` — trivial but unimplemented |

### 2.2 Products & Cart (TC 8–13, 17–22)

| TC | Official title | Status | Notes |
|----|----------------|:------:|-------|
| 8 | Verify All Products and product detail page | ❌ Not covered | Needs `ProductsPage.clickProductByName()` plus a new `ProductDetailPage` POM |
| 9 | Search Product | ❌ Not covered | No search input interaction implemented |
| 10 | Verify Subscription in home page | ❌ Not covered | Footer newsletter widget not yet modeled |
| 11 | Verify Subscription in Cart page | ❌ Not covered | Same widget accessed from cart page |
| 12 | Add Products in Cart | ✅ Covered | `TC-CART-001` — adds 2 products by name, verifies count + name/price/quantity |
| 13 | Verify Product quantity in Cart | ❌ Not covered | Quantity selector on product detail not implemented |
| 17 | Remove Products From Cart | ❌ Not covered | No `removeProductByName` method on `CartPage` |
| 18 | View Category Products | ❌ Not covered | Left sidebar (category accordion) not modeled |
| 19 | View & Cart Brand Products | ❌ Not covered | Brand filter sidebar not modeled |
| 20 | Search Products and Verify Cart After Login | ❌ Not covered | Compound flow depending on TC 9 |
| 21 | Add review on product | ❌ Not covered | Depends on TC 8 (product detail POM) |
| 22 | Add to cart from Recommended items | ❌ Not covered | `Recommended items` section on homepage not modeled |

### 2.3 Checkout & Orders (TC 14–16, 23–24)

| TC | Official title | Status | Notes |
|----|----------------|:------:|-------|
| 14 | Place Order: Register while Checkout | ❌ Not covered | Mid-checkout registration path — most complex; requires signup redirect from cart |
| 15 | Place Order: Register before Checkout | ❌ Not covered | Register → add → checkout without reusing `storageState` |
| 16 | Place Order: Login before Checkout | ✅ Covered | `TC-CHECKOUT-001` — uses session from `auth.setup.ts` |
| 23 | Verify address details in checkout page | ⚠️ Partially covered | `TC-CHECKOUT-001` asserts `deliveryAddressName` contains `TEST_USERNAME`, but street/city/state/country/zip/phone are not asserted |
| 24 | Download Invoice after purchase order | ❌ Not covered | Requires `page.waitForEvent('download')` after order confirmation |

### 2.4 UI Interactions (TC 25–26)

| TC | Official title | Status | Notes |
|----|----------------|:------:|-------|
| 25 | Verify Scroll Up using 'Arrow' button and Scroll Down functionality | ❌ Not covered | Scroll-to-top arrow visibility + click behavior |
| 26 | Verify Scroll Up without 'Arrow' button and Scroll Down functionality | ❌ Not covered | Manual scroll back to top + navbar visibility |

### 2.5 Coverage Summary

| Category | Fully covered | Partial | Total | Coverage |
|----------|:-------------:|:-------:|:-----:|:--------:|
| Authentication & Contact (TC 1–7) | 5 | 0 | 7 | 71 % |
| Products & Cart (TC 8–13, 17–22) | 1 | 0 | 10 | 10 % |
| Checkout & Orders (TC 14–16, 23–24) | 1 | 1 | 5 | 20 % (+ 1 partial) |
| UI Interactions (TC 25–26) | 0 | 0 | 2 | 0 % |
| **Overall** | **7** | **1** | **26** | **27 % fully, 31 % incl. partial** |

*Note:* TC 4 (Logout) is counted toward the Authentication total because logout steps are asserted inside TC 1 and TC 2 flows — there is no standalone `TC-LOGOUT` spec.

---

## 3. Automation Risk Analysis

### 3.1 Risk Register

| Risk | Probability | Impact | Current mitigation | Residual |
|------|:-----------:|:------:|-------------------|:--------:|
| **Google Ads overlaying interactive elements** (the target site serves Google-served display ads on products/home) | High | High — `ElementClickInterceptedError` or clicks landing on the wrong element | None at the moment — there is no shared `dismissAds()` helper; on CI Playwright retries catch most occurrences | High |
| **Product availability / naming drift** for `Blue Top` and `Men Tshirt` | Medium | High — breaks `TC-CART-001`, `TC-CART-002`, `TC-CHECKOUT-001` simultaneously | Name-based locators decouple selection from product names/prices centralized in `cart.data.ts` and `checkout.data.ts` | Medium |
| **Payment not rendered inside an iframe (today)** | Low | High — if a future payment provider moves the form into an iframe, `PaymentPage` breaks | All card inputs resolve via `[data-qa="…"]` in the main DOM; no iframe handling exists | Low (today) |
| **Brittle locators from UI redesign** | Medium | High — fails many specs at once | `getByRole` / `getByText` / `[data-qa]` used throughout; no XPath, minimal CSS | Low |
| **Async UI transitions causing flake** | Medium | Medium | Playwright auto-retrying matchers everywhere; `page.waitForTimeout` forbidden (last occurrence removed in `ed97829`) | Low |
| **`storageState` expiry between setup and `*:auth` jobs** | Low | High — checkout fails if the session cookie rotates mid-pipeline | Each `*:auth` job re-runs `--project=setup` in its own runner, so state is always fresh within the 30-min `timeout-minutes` | Low |
| **Data pollution across parallel workers** | Low | Medium | `generateUniqueEmail('testuser')` produces collision-free addresses per worker; `afterAll` API delete is idempotent | Low |
| **Cross-browser divergence** (Chromium vs WebKit vs Firefox) | Medium | Medium | All three browsers run in the CI matrix with `fail-fast: false`, so a single-browser regression surfaces immediately | Low |
| **API-endpoint contract changes** (`/api/createAccount`, `/api/deleteAccount`) | Low | High — every setup breaks silently | `createAccountViaAPI` asserts HTTP 200 and checks `responseCode`; tolerates "Email already exists!" so reruns after a bad cleanup still proceed | Medium |
| **Secrets misconfiguration in CI** (missing `TEST_EMAIL` / `TEST_PASSWORD` / `TEST_USERNAME`) | Low | High — `auth.setup.ts` throws before checkout runs | `auth.setup.ts` validates env vars and raises a descriptive error pointing to `.env.example`; secrets wired from GitHub repo secrets | Low |
| **Checkout specs run under a single pre-seeded user** | Medium | Medium — one flaky account blocks all 3 `*:auth` jobs | `auth.setup.ts` re-provisions the user via API if missing before each run, so the account self-heals | Low |

### 3.2 Known Gaps and Deviations from Standard

**TC 1 deviation.** The published TC 1 ends with a UI "Delete Account" step. The implementation replaces this with an `afterAll` API delete. Consequence: the UI delete-account button itself is not exercised by any test.

**TC 16 address gap (partial coverage).** `TC-CHECKOUT-001` asserts only `deliveryAddressName` via `ul#address_delivery li.address_firstname.address_lastname`. TC 23's full address-field verification (company, street, city, state, country, zip, phone) is not performed.

**Single checkout path.** Only the "Login before Checkout" variant (TC 16) is automated. The two alternative entry paths — TC 14 (register during) and TC 15 (register before) — remain untested, leaving two out of three documented purchase flows uncovered.

**No validation of negative payment states.** `PaymentPage` has no tests for malformed card numbers, invalid CVC, or expired cards. Since `automationexercise.com` accepts any format (it is a demo), this is a low-priority gap, but it should be called out in any real-commerce adaptation.

---

## 4. Improvement Proposals

Ordered by expected value × ease of implementation within the existing architecture. Each item below can be delivered incrementally without structural changes to fixtures or configs.

### Phase 1 — High priority (stabilize what exists, then unlock new TCs)

1. **Shared `dismissAds()` helper** — register it as a `beforeEach` in the base fixture and/or call it before critical clicks. This is the single highest-leverage reliability fix for CI runs against a live ad-serving site. *(~0.5 day)*
2. **`ProductDetailPage` POM (unblocks TC 8, 13, 21)** — adds a `clickProductByName(name)` to `ProductsPage` and models name, category, price, availability, condition, brand, quantity selector, and review form on the detail page. *(~1 day)*
3. **`CartPage.removeProductByName(name)` (TC 17)** — adds a delete-row action and an empty-cart assertion. *(~0.5 day)*
4. **Search support on `ProductsPage` (TC 9)** — `searchProduct(query)` + `getSearchResults()` — also the prerequisite for TC 20. *(~0.5 day)*
5. **Full address assertion in checkout (TC 23, closes TC 16 partial)** — extend `CheckoutPage` locators to the full `ul#address_delivery` line items and assert each against `user.data.ts`. *(~0.5 day)*

### Phase 2 — Medium priority (complete the checkout variants)

6. **TC 15: Register before Checkout** — compose the existing register flow with the checkout flow, but without pre-loaded `storageState`. Largely reuses `RegistrationPage` and `CheckoutPage`. *(~1 day)*
7. **TC 14: Register during Checkout** — the most complex path: guest add-to-cart → click Register/Login on `/checkout` → signup → continue checkout. Needs a small `GuestCheckoutPage` or `CheckoutPage` extension for the "not logged in" view. *(~2 days)*
8. **TC 24: Download Invoice** — use `page.waitForEvent('download')` after order confirmation, assert the filename ends in `.txt` (or `.pdf` depending on site version) and the suggested filename is non-empty. *(~1 day)*

### Phase 3 — Supporting features

9. **TC 6: Contact Us Form** — new `ContactPage`, `fileInput.setInputFiles(...)`, assert `Success! Your details have been submitted successfully.` *(~1 day)*
10. **TC 7: Verify Test Cases Page** — simple navigation + heading assertion. *(~0.25 day)*
11. **TC 10 + TC 11: Subscription widget** — extract a `SubscriptionComponent` used from both `HomePage` and `CartPage` to avoid duplication. *(~0.5 day)*
12. **TC 18 + TC 19: Category / Brand filters** — share a `SidebarComponent` for the left-nav filters. *(~1 day)*
13. **TC 20: Cart persistence after login** — search → add-as-guest → login → assert cart retained. Exercises session-merge behavior. *(~1 day)*
14. **TC 21 + TC 22: Reviews + Recommended items** — both depend on Phase 1 item #2 (`ProductDetailPage`). *(~1.5 days)*
15. **TC 25 + TC 26: Scroll interactions** — `page.evaluate` + arrow-button visibility / navbar-visibility checks. *(~0.5 day)*

### Phase 4 — Infrastructure & quality investments

16. **Centralized ad-dismissal hook** — once `dismissAds()` is stable, move it into a `beforeEach` in `src/fixtures/index.ts` to remove the concern from individual specs.
17. **Visual regression coverage** — `toHaveScreenshot()` for homepage, product listing, and `Order Placed!` pages, gated behind a separate CI job so diffs do not block functional merges.
18. **Lightweight API layer** — extend `auth.api.helper.ts` into an `api/` suite covering `/api/productsList`, `/api/searchProduct`, `/api/getUserDetailByEmail`, etc. Quick feedback loop independent of UI stability.
19. **Negative payment scenarios** — although not part of the 26 standard TCs, add malformed-card / expired-card / short-CVC cases around `PaymentPage` to harden the most business-critical flow.
20. **Test-data parameterization** — replace the two hardcoded product names (`Blue Top`, `Men Tshirt`) with a discovery step that picks the first two in-stock products via `/api/productsList`, removing the product-availability risk.
21. **Sharding** — once suite count grows past ~30 tests, enable Playwright sharding in CI to keep the 30-minute per-job budget.

### 4.1 Effort Summary

| Phase | Items | Estimate |
|-------|-------|:--------:|
| Phase 1 — Stabilization & unlock | 5 items | ~3 days |
| Phase 2 — Checkout completeness | 3 items | ~4 days |
| Phase 3 — Supporting features | 7 items | ~5.75 days |
| Phase 4 — Infra & quality (optional, non-TC) | 6 items | ~3 days |
| **Total to reach full 26 / 26 coverage** | **15 items** | **~12.75 days** |
| **Full scope including Phase 4 hardening** | **21 items** | **~15.75 days** |
