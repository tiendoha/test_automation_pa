/**
 * Central config reader for environment variables.
 * Import this anywhere instead of using process.env directly.
 *
 * Variables are defined in `.env` (gitignored).
 * See `.env.example` for required keys.
 */
export const ENV = {
  /** Domain url của dự án */
  baseUrl: process.env.BASE_URL ?? 'https://automationexercise.com',
  /** Email của test account dùng để login trong checkout tests */
  testEmail: process.env.TEST_EMAIL ?? '',
  /** Password của test account */
  testPassword: process.env.TEST_PASSWORD ?? '',
  /** Username hiển thị trên navbar sau khi login */
  testUsername: process.env.TEST_USERNAME ?? 'Test User',
  /** Đường dẫn lưu auth state sau khi login */
  authStatePath: 'playwright/.auth/user.json',
};
