# Playwright Test Automation — Automation Exercise

Automated end-to-end test suite for [https://automationexercise.com](https://automationexercise.com), built with **Playwright + TypeScript + Page Object Model**.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Playwright](https://playwright.dev) | ^1.59.1 | Browser automation & test runner |
| TypeScript | via `@types/node` | Type safety across the project |
| Allure | ^3.7.1 | Rich test reporting |
| dotenv | ^17.4.2 | Environment variable management |
| GitHub Actions | — | CI/CD with multi-browser matrix |

---

## Prerequisites

- **Node.js 20+** — [Download here](https://nodejs.org)
- **npm** — comes bundled with Node.js
- A free account on [automationexercise.com](https://automationexercise.com) — required for checkout tests

Verify your setup:

```bash
node -v   # should print v20.x.x or higher
npm -v
```

---

## Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd test_auotmation

# 2. Install dependencies
npm ci

# 3. Install Playwright browsers
npx playwright install --with-deps

# 4. Set up environment variables
cp .env.example .env
# Then open .env and fill in your credentials (see section below)

# 5. Run all tests
npx playwright test
```

---

## Environment Variables

The `.env` file is **git-ignored** and must be created manually before running checkout tests. Copy the example template and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and update:

```env
# The target website — leave as-is unless you want to point to a different environment
BASE_URL=https://automationexercise.com

# A real account on automationexercise.com used for checkout & authenticated tests
# Register at https://automationexercise.com/login first, then put the credentials here
TEST_EMAIL=your_email@example.com
TEST_PASSWORD=your_password_here
TEST_USERNAME=Your Name
```

> **Why is this needed?** The checkout test suite (`TC-CHECKOUT-001`) uses a pre-authenticated browser session. The `auth.setup.ts` file logs in with these credentials once, saves the session to `playwright/.auth/user.json`, and reuses it across all authenticated test projects — avoiding repeated login steps.

> **Note:** `BASE_URL` has a built-in fallback to `https://automationexercise.com`, so it is only strictly required if you want to override the target URL. `TEST_EMAIL`, `TEST_PASSWORD`, and `TEST_USERNAME` are required to run checkout tests. Register, login, and cart tests generate their own accounts via the site's API and do not need these variables.

---

## Running Tests

### Run everything (all browsers, all suites)

```bash
npx playwright test
```

### Run a specific project (browser)

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run authenticated (checkout) tests only

The `:auth` projects depend on the `setup` project. Playwright handles this automatically when you run:

```bash
npx playwright test --project=chromium:auth
```

The `setup` project will run first to create the auth session, then the checkout tests will execute using the saved session.

### Run a specific test suite by folder

```bash
npx playwright test src/tests/register/
npx playwright test src/tests/login/
npx playwright test src/tests/cart/
npx playwright test src/tests/checkout/
```

### Run a specific test file

```bash
npx playwright test src/tests/cart/cart.spec.ts
```

### Run tests matching a title keyword

```bash
npx playwright test --grep "login"
npx playwright test --grep "TC-CART"
```

### Run in headed mode (see the browser)

```bash
npx playwright test --headed
```

### Run in UI mode (interactive test explorer)

```bash
npx playwright test --ui
```

### Debug a single test

```bash
npx playwright test --debug src/tests/login/login.spec.ts
```

---

## Test Projects Explained

The `playwright.config.ts` defines **7 projects**:

| Project | Browsers | Auth State | Tests Covered |
|---------|----------|-----------|---------------|
| `setup` | Chromium | — | Runs `auth.setup.ts` once to create `playwright/.auth/user.json` |
| `chromium` | Chrome | None | register, login, cart |
| `firefox` | Firefox | None | register, login, cart |
| `webkit` | Safari | None | register, login, cart |
| `chromium:auth` | Chrome | From `setup` | checkout only |
| `firefox:auth` | Firefox | From `setup` | checkout only |
| `webkit:auth` | Safari | From `setup` | checkout only |

The `:auth` projects automatically depend on `setup` — Playwright runs the setup step before them when they are selected.

---

## Viewing Test Reports

### Local: Playwright HTML Report

After a test run, open the interactive HTML report:

```bash
npx playwright show-report
```

This opens the report in your browser. It includes pass/fail status, error messages, screenshots (on failure), videos (on first retry), and traces (on first retry).

### Local: Allure Report

Allure results are written to `allure-results/` after each run. To generate and view the report locally, you need the [Allure CLI](https://allurereport.org/docs/install/) installed:

```bash
# Install Allure CLI (one-time setup)
npm install -g allure-commandline

# Generate and open the report
allure serve allure-results
```

### GitHub Actions: Allure Report (GitHub Pages)

After every CI run, all Allure results from the 6 browser jobs are merged and automatically deployed to **GitHub Pages**. To access it:

1. Go to your repository on GitHub.
2. Click the **Actions** tab and open any completed workflow run.
3. In the **`allure-report` job** summary, click the link labelled **"BẤM VÀO ĐÂY ĐỂ XEM DASHBOARD CHI TIẾT"** — this opens the live Allure dashboard.

Alternatively, navigate directly to:

```
https://tiendoha.github.io/test_automation_pa/
```

> **First-time setup:** GitHub Pages must be enabled on the repository before the report link works. Go to **Settings → Pages → Source** and set the branch to `gh-pages`. The `gh-pages` branch is created automatically after the first successful CI run.

The Allure dashboard shows:
- Overall pass/fail breakdown with trend history (last 20 runs)
- Per-test timelines, categories, and retry details
- Suites, behaviors (Epic/Feature/Story), and severity groupings
- Attached screenshots and step logs for failed tests

### GitHub Actions: Per-Browser HTML Report (Artifacts)

Each of the 6 browser jobs also uploads its own Playwright HTML report as a downloadable artifact (retained for **7 days**):

1. Go to **Actions** → select a workflow run.
2. Scroll to the **Artifacts** section at the bottom of the run page.
3. Download the artifact named `playwright-report-<browser>` (e.g., `playwright-report-chromium`, `playwright-report-firefox-auth`).
4. Unzip the downloaded file and open `index.html` in your browser.

### GitHub Actions: Job Summary Table

Every run generates a quick-glance summary table directly on the Actions run page:

1. Go to **Actions** → select a workflow run.
2. Click the **`allure-report`** job in the left sidebar.
3. The job summary displays a table like the one below:

| Browser / Environment | Status |
|:---|:---:|
| chromium | **Pass** ✅ |
| firefox | **Pass** ✅ |
| webkit | **Pass** ✅ |
| chromium:auth | **Pass** ✅ |
| firefox:auth | **Fail** ❌ |
| webkit:auth | **Pass** ✅ |

---

## Project Structure

```
├── .env.example                   # Template for environment variables — copy to .env
├── .github/workflows/
│   └── playwright.yml             # CI/CD pipeline (GitHub Actions)
├── playwright.config.ts           # Playwright configuration (projects, browsers, reporters)
├── src/
│   ├── configs/
│   │   └── env.config.ts          # Central ENV reader — import this instead of process.env
│   ├── data/
│   │   ├── register/user.data.ts  # User registration form data generator
│   │   ├── login/login.data.ts    # Invalid credentials for negative test cases
│   │   ├── cart/cart.data.ts      # Expected product names, prices, quantities
│   │   └── checkout/checkout.data.ts  # Test card details and order comment
│   ├── fixtures/
│   │   └── index.ts               # Custom Playwright fixtures — auto-injects all POMs into tests
│   ├── helpers/
│   │   ├── api/auth.api.helper.ts # createAccountViaAPI / deleteAccountViaAPI
│   │   └── common/
│   │       ├── logger.helper.ts   # Colored console logging with Allure step integration
│   │       └── random.helper.ts   # UUID-based unique email generator
│   ├── pages/                     # Page Object Models (one class per page)
│   │   ├── register/              # HomePage, SignupLoginPage, RegistrationPage, AccountCreatedPage
│   │   ├── login/                 # LoginPage
│   │   ├── cart/                  # ProductsPage, CartPage
│   │   └── checkout/              # CheckoutPage, PaymentPage, OrderConfirmationPage
│   └── tests/
│       ├── auth/auth.setup.ts     # Auth setup — logs in and saves session (not a test)
│       ├── register/register.spec.ts
│       ├── login/login.spec.ts
│       ├── cart/cart.spec.ts
│       └── checkout/checkout.spec.ts
└── playwright/.auth/user.json     # Generated at runtime — gitignored
```

---

## Test Coverage Summary

The website defines 26 standard test cases. The current suite covers **8 of 26 (31%)**.

| Suite | Test ID | Description |
|-------|---------|-------------|
| Register | TC-REG-001 | Register new user via full form, verify account created, logout |
| Register | TC-REG-002 | Register with existing email, verify duplicate error |
| Login | TC-LOGIN-001 | Login with valid credentials, verify logged-in state, logout |
| Login | TC-LOGIN-002 | Login with wrong password, verify error message |
| Login | TC-LOGIN-003 | Login with non-existent email, verify error message |
| Cart | TC-CART-001 | Add 2 products to cart, verify name, price, and quantity for each |
| Cart | TC-CART-002 | Add 2 products, navigate to cart via URL, verify cart persists |
| Checkout | TC-CHECKOUT-001 | Full checkout: add products → cart → payment → order confirmation |

For the full coverage analysis and improvement roadmap, see [TEST_STRATEGY.md](./TEST_STRATEGY.md).

---

## CI/CD

The GitHub Actions workflow (`.github/workflows/playwright.yml`) runs automatically on:

- Every **push** to `main` / `master`
- Every **pull request** targeting `main` / `master`
- A **nightly schedule** at 01:00 UTC (08:00 ICT)

It runs 6 parallel jobs — one per project (`chromium`, `firefox`, `webkit`, `chromium:auth`, `firefox:auth`, `webkit:auth`). After all jobs complete, Allure results are merged and deployed to **GitHub Pages**.

### Required GitHub Secrets / Variables

Go to your repository → **Settings → Secrets and variables → Actions** and add:

| Key | Type | Value |
|-----|------|-------|
| `TEST_EMAIL` | Secret | Your automationexercise.com account email |
| `TEST_PASSWORD` | Secret | Your automationexercise.com account password |
| `TEST_USERNAME` | Secret | Your display name (as registered on the site) |
| `BASE_URL` | Variable | `https://automationexercise.com` |

---

## Troubleshooting

**Checkout tests fail with an auth error**

Make sure `TEST_EMAIL` and `TEST_PASSWORD` in `.env` match an active account on the website. The account must exist before running tests — register it manually at [https://automationexercise.com/login](https://automationexercise.com/login).

**Tests fail due to element not found / click intercepted**

The website displays Google Ads that can overlay interactive elements. Re-running the test usually resolves this (`npx playwright test --retries=2`). On CI, retries are set to 2 automatically.

**`playwright/.auth/user.json` not found**

Run the setup project manually to generate the auth state:

```bash
npx playwright test --project=setup
```

**Browser installation errors**

Re-run the browser install command:

```bash
npx playwright install --with-deps
```

**`dotenv` or environment variable issues**

Ensure `.env` exists at the project root (not inside `src/`). Double-check there are no extra spaces around the `=` sign in your `.env` file.
