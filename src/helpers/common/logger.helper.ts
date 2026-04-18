/**
 * Logger utility cho Playwright tests.
 * In log màu sắc rõ ràng ra console để dễ theo dõi kết quả test.
 *
 * Usage:
 *   import { logger } from '../helpers/common/logger.helper';
 *   logger.pass('TC-REG-001');
 *   logger.step('Navigating to homepage');
 *   logger.info('User email: test@example.com');
 */

// ANSI color codes
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const RED    = '\x1b[31m';
const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';

const timestamp = (): string => {
  return new Date().toISOString().replace('T', ' ').slice(0, 23);
};

export const logger = {
  /**
   * In log khi một test case PASS.
   * @param testId - Test case ID, ví dụ: 'TC-REG-001'
   * @param description - Mô tả ngắn của test case
   */
  pass(testId: string, description?: string): void {
    const msg = description ? `${testId}: ${description}` : testId;
    console.log(`${BOLD}${GREEN}[PASS] ${msg}${RESET}  ${CYAN}(${timestamp()})${RESET}`);
  },

  /**
   * In log thông tin chung trong quá trình chạy test.
   */
  info(message: string): void {
    console.log(`${CYAN}[INFO] ${message}${RESET}`);
  },

  /**
   * In log cho từng step đang thực thi.
   */
  step(message: string): void {
    console.log(`${YELLOW}[STEP] ${message}${RESET}`);
  },

  /**
   * In log khi một bước hoặc assertion FAIL (dùng trong debug).
   */
  fail(message: string): void {
    console.log(`${RED}[FAIL] ${message}${RESET}`);
  },

  /**
   * In log khi setup / teardown hoàn thành.
   */
  setup(message: string): void {
    console.log(`${BOLD}${YELLOW}[SETUP] ${message}${RESET}  ${CYAN}(${timestamp()})${RESET}`);
  },
};
