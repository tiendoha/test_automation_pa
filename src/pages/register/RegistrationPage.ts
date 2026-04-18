import { Page, Locator, expect } from '@playwright/test';
import { UserRegistrationData } from '../../data/register/user.data';

export class RegistrationPage {
  readonly page: Page;

  // --- Enter Account Information ---
  readonly registerHeading: Locator;
  readonly titleMrRadio: Locator;
  readonly titleMrsRadio: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly dayOfBirthSelect: Locator;
  readonly monthOfBirthSelect: Locator;
  readonly yearOfBirthSelect: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOffersCheckbox: Locator;

  // --- Address Information ---
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileNumberInput: Locator;

  // --- Submit ---
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Account Information
    this.registerHeading = page.getByRole('heading', { name: 'Enter Account Information' });
    this.titleMrRadio = page.locator('#id_gender1');
    this.titleMrsRadio = page.locator('#id_gender2');
    this.nameInput = page.locator('[data-qa="name"]');
    this.emailInput = page.locator('[data-qa="email"]');
    this.passwordInput = page.locator('[data-qa="password"]');
    this.dayOfBirthSelect = page.locator('[data-qa="days"]');
    this.monthOfBirthSelect = page.locator('[data-qa="months"]');
    this.yearOfBirthSelect = page.locator('[data-qa="years"]');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.specialOffersCheckbox = page.locator('#optin');

    // Address Information
    this.firstNameInput = page.locator('[data-qa="first_name"]');
    this.lastNameInput = page.locator('[data-qa="last_name"]');
    this.companyInput = page.locator('[data-qa="company"]');
    this.address1Input = page.locator('[data-qa="address"]');
    this.address2Input = page.locator('[data-qa="address2"]');
    this.countrySelect = page.locator('[data-qa="country"]');
    this.stateInput = page.locator('[data-qa="state"]');
    this.cityInput = page.locator('[data-qa="city"]');
    this.zipcodeInput = page.locator('[data-qa="zipcode"]');
    this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');

    // Submit
    this.createAccountButton = page.locator('[data-qa="create-account"]');
  }

  /**
   * Verifies the registration form page is loaded.
   */
  async verifyPageLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*signup/);
    await expect(this.registerHeading).toBeVisible();
  }

  /**
   * Fills the entire registration form and submits it.
   * @param data - User registration data object
   */
  async fillAndSubmitForm(data: UserRegistrationData): Promise<void> {
    // Select title (Mr. / Mrs.)
    if (data.title === 'Mr.') {
      await this.titleMrRadio.check();
    } else {
      await this.titleMrsRadio.check();
    }

    // Account Information
    await this.passwordInput.fill(data.password);
    await this.dayOfBirthSelect.selectOption(data.dateOfBirth.day);
    await this.monthOfBirthSelect.selectOption(data.dateOfBirth.month);
    await this.yearOfBirthSelect.selectOption(data.dateOfBirth.year);

    // Checkboxes
    if (data.newsletter) {
      await this.newsletterCheckbox.check();
    }
    if (data.specialOffers) {
      await this.specialOffersCheckbox.check();
    }

    // Address Information
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    if (data.company) {
      await this.companyInput.fill(data.company);
    }
    await this.address1Input.fill(data.address1);
    if (data.address2) {
      await this.address2Input.fill(data.address2);
    }
    await this.countrySelect.selectOption(data.country);
    await this.stateInput.fill(data.state);
    await this.cityInput.fill(data.city);
    await this.zipcodeInput.fill(data.zipcode);
    await this.mobileNumberInput.fill(data.mobileNumber);

    // Submit
    await this.createAccountButton.click();
  }
}
