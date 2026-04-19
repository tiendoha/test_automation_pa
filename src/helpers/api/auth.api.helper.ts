import { APIRequestContext, expect } from '@playwright/test';
import { UserRegistrationData } from '../../data/register/user.data';
import { logger } from '../common/logger.helper';

/**
 * Creates a new account via POST /api/createAccount API.
 *
 * @param apiContext API request context instance.
 * @param userData User registration data.
 */
export async function createAccountViaAPI(
  apiContext: APIRequestContext,
  userData: UserRegistrationData,
): Promise<void> {
  const formData = {
    name: userData.name,
    email: userData.email,
    password: userData.password,
    title: userData.title === 'Mr.' ? 'Mr' : 'Mrs',
    birth_date: userData.dateOfBirth.day,
    birth_month: userData.dateOfBirth.month,
    birth_year: userData.dateOfBirth.year,
    firstname: userData.firstName,
    lastname: userData.lastName,
    company: userData.company || '',
    address1: userData.address1,
    address2: userData.address2 || '',
    country: userData.country,
    zipcode: userData.zipcode,
    state: userData.state,
    city: userData.city,
    mobile_number: userData.mobileNumber,
  };

  logger.step(`Sending create account API: POST /api/createAccount for email ${userData.email}`);

  const response = await apiContext.post('/api/createAccount', {
    form: formData,
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  if (responseBody.responseCode !== 201) {
    if (responseBody.message === 'Email already exists!') {
      logger.info(`Email ${userData.email} already exists, continuing.`);
    } else {
      logger.fail(`API account creation error: ${JSON.stringify(responseBody)}`);
      expect(responseBody.message).toBe('User created!');
    }
  } else {
    expect(responseBody.message).toBe('User created!');
  }
}

/**
 * Deletes an account via DELETE /api/deleteAccount API.
 *
 * Used in afterAll to clean up test data after the suite completes.
 *
 * @param apiContext API request context instance.
 * @param email Account email.
 * @param password Account password.
 */
export async function deleteAccountViaAPI(
  apiContext: APIRequestContext,
  email: string,
  password: string,
): Promise<void> {
  logger.step(`Sending delete account API: DELETE /api/deleteAccount for email ${email}`);

  const response = await apiContext.delete('/api/deleteAccount', {
    form: { email, password },
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  if (responseBody.responseCode === 200) {
    logger.info(`Account ${email} successfully deleted.`);
  } else {
    // Skip if account does not exist (idempotent cleanup)
    logger.info(`Skipped deleting account ${email}: ${JSON.stringify(responseBody)}`);
  }
}
