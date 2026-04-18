/**
 * Invalid credentials dùng cho negative test cases.
 * Email hợp lệ được lấy từ account vừa đăng ký trong beforeAll của login.spec.ts
 */
export const INVALID_CREDENTIALS = {
  wrongPassword: {
    password: 'WrongPassword999!',
  },
  nonExistentUser: {
    email: 'nonexistent_user_xyz@mailtest.com',
    password: 'SomePassword@123',
  },
};

