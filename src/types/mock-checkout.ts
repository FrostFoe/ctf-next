// Mock types to replace Paddle checkout types and maintain UI functionality

export interface MockCheckoutData {
  totals: {
    total: number;
    subtotal: number;
    tax: number;
  };
  currency_code: string;
  items: Array<{
    price_name: string;
  }>;
}