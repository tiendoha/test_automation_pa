export interface ProductInfo {
  /** Tên hiển thị của sản phẩm trên trang */
  name: string;
  /** Giá đơn vị, ví dụ: "Rs. 500" */
  price: string;
  /** Số lượng thêm vào giỏ */
  quantity: number;
}

/**
 * Danh sách 2 sản phẩm cần thêm vào giỏ hàng trong test.
 *
 * Product index dựa trên vị trí hiển thị trên /products (bắt đầu từ 0).
 * Thông tin name & price lấy trực tiếp từ trang sản phẩm.
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
