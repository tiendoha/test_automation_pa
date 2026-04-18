import { APIRequestContext, expect } from '@playwright/test';
import { UserRegistrationData } from '../../data/register/user.data';
import { logger } from '../common/logger.helper';

/**
 * Tạo một account mới thông qua API POST /api/createAccount
 *
 * @param apiContext Context được khởi tạo qua request.newContext()
 * @param userData   Thông tin user để tạo
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

  logger.step(`Gửi API tạo account: POST /api/createAccount cho email ${userData.email}`);

  const response = await apiContext.post('/api/createAccount', {
    form: formData,
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  if (responseBody.responseCode !== 201) {
    if (responseBody.message === 'Email already exists!') {
      logger.info(`Email ${userData.email} đã tồn tại, tiếp tục (hoặc bỏ qua lỗi).`);
    } else {
      logger.fail(`Lỗi tạo account API: ${JSON.stringify(responseBody)}`);
      expect(responseBody.message).toBe('User created!');
    }
  } else {
    expect(responseBody.message).toBe('User created!');
  }
}

/**
 * Xóa một account thông qua API DELETE /api/deleteAccount
 *
 * Dùng trong afterAll để dọn sạch dữ liệu test sau khi suite hoàn thành.
 *
 * @param apiContext Context được khởi tạo qua request.newContext()
 * @param email      Email của account cần xóa
 * @param password   Password của account cần xóa
 */
export async function deleteAccountViaAPI(
  apiContext: APIRequestContext,
  email: string,
  password: string,
): Promise<void> {
  logger.step(`Gửi API xóa account: DELETE /api/deleteAccount cho email ${email}`);

  const response = await apiContext.delete('/api/deleteAccount', {
    form: { email, password },
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  if (responseBody.responseCode === 200) {
    logger.info(`Account ${email} đã được xóa thành công.`);
  } else {
    // Nếu account không tồn tại thì bỏ qua (idempotent cleanup)
    logger.info(`Bỏ qua xóa account ${email}: ${JSON.stringify(responseBody)}`);
  }
}
