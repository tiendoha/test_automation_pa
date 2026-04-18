export interface PaymentCardData {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
}

/** Test-only VISA card (no real charge) */
export const TEST_CARD: PaymentCardData = {
  nameOnCard: 'Test User',
  cardNumber: '4111111111111111',
  cvc: '123',
  expiryMonth: '12',
  expiryYear: '2030',
};

/** Order comment shown during checkout */
export const ORDER_COMMENT = 'Automation test order – please ignore.';

/**
 * Exact product names to add during the checkout flow.
 * Using names instead of indexes makes tests resilient to page reordering.
 */
export const CHECKOUT_PRODUCTS: [string, string] = ['Blue Top', 'Men Tshirt'];
