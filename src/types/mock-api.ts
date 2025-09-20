// Mock types to replace Paddle SDK types for API responses

export interface MockSubscription {
  id: string;
  status: 'active' | 'canceled' | 'past_due' | 'paused';
  priceId: string;
  customerId: string;
  startedAt: string;
  currencyCode: string;
  billingCycle: {
    frequency: number;
    interval: 'day' | 'week' | 'month' | 'year';
  };
  recurringTransactionDetails?: {
    totals: {
      total: string;
      subtotal?: string;
      tax?: string;
    };
    lineItems?: Array<{
      priceId: string;
      quantity: number;
      taxRate: string;
      totals: {
        subtotal: string;
      };
      product: {
        name: string;
        description?: string;
        imageUrl?: string;
      };
    }>;
  };
  scheduledChange?: {
    action: 'cancel' | 'pause' | 'resume';
    effectiveAt: string;
  };
  currentBillingPeriod: {
    startsAt: string;
    endsAt: string;
  };
  items: Array<{
    priceId: string;
    quantity: number;
    product: {
      name: string;
      imageUrl?: string;
    };
  }>;
  nextTransaction: {
    billingPeriod: {
      startsAt: string;
      endsAt: string;
    };
    details: {
      totals: {
        total: string;
      };
    };
  } | null;
}

export interface MockTransaction {
  id: string;
  status: 'completed' | 'pending' | 'failed';
  customerId: string;
  origin: string;
  createdAt: string;
  details: {
    totals: {
      total: string;
    };
  };
  items: Array<{
    priceId: string;
    quantity: number;
    product: {
      name: string;
    };
  }>;
}

export interface SubscriptionResponse {
  data?: MockSubscription[];
  hasMore: boolean;
  totalRecords: number;
  error?: string;
}

export interface TransactionResponse {
  data?: MockTransaction[];
  hasMore: boolean;
  totalRecords: number;
  error?: string;
}

export interface SubscriptionDetailResponse {
  data?: MockSubscription;
  error?: string;
}