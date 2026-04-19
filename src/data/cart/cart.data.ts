export interface ProductInfo {
  /** Product display name. */
  name: string;
  /** Unit price (e.g., "Rs. 500"). */
  price: string;
  /** Quantity to add. */
  quantity: number;
}

/**
 * Products to add to cart during tests.
 * Name and price should match the ones displayed on the products page.
 */
export const CART_PRODUCTS: ProductInfo[] = [
  {
    name: 'Blue Top',
    price: 'Rs. 500',
    quantity: 1,
  },
  {
    name: 'Men Tshirt',
    price: 'Rs. 400',
    quantity: 1,
  },
];
