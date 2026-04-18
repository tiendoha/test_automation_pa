import { Page, Locator } from '@playwright/test';
import { ProductInfo } from '../../data/cart/cart.data';

/**
 * Page Object Model for the Shopping Cart page.
 * URL: https://automationexercise.com/view_cart
 */
export class CartPage {
  readonly page: Page;

  readonly cartHeading: Locator;
  readonly cartRows: Locator;
  readonly proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartHeading = page.getByRole('heading', { name: 'Shopping Cart' });
    this.cartRows = page.locator('tr[id^="product-"]');
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
  }

  /**
   * Navigates directly to the cart page.
   */
  async navigate(): Promise<void> {
    await this.page.goto('/view_cart');
  }

  /**
   * Trả về Locator của URL hiện tại để assert bên ngoài
   */
  getPageUrl(): string {
    return this.page.url();
  }

  /**
   * Returns the <tr> row locator for a product by its display name.
   * @param productName - The exact product name as shown on the site
   */
  getRowByProductName(productName: string): Locator {
    // Tối ưu locator: Lọc row chứa link có tên sản phẩm thay vì path HTML cứng
    return this.cartRows.filter({
      has: this.page.getByRole('link', { name: productName }),
    });
  }

  /**
   * Lấy các Locator cấu thành thông tin của Product để Assert bên bảng test
   */
  getProductLocators(productName: string) {
    const row = this.getRowByProductName(productName);
    return {
      rowLocator: row,
      nameLocator: row.locator('.cart_description').getByRole('link'),
      priceLocator: row.locator('.cart_price p'),
      quantityLocator: row.locator('.cart_quantity button'),
    };
  }

  /**
   * Returns total rows count
   */
  getCartRowsLocator(): Locator {
    return this.cartRows;
  }

  /**
   * Clicks "Proceed To Checkout" button on the cart page.
   * Navigates to /checkout.
   */
  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}

