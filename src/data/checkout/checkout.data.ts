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

/** Index positions of products to add (0-based on /products listing) */
export const CHECKOUT_PRODUCT_INDEXES = [0, 1];
