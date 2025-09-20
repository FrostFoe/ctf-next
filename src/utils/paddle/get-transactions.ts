'use server';

import { TransactionResponse } from '@/lib/api.types';
import { MockTransaction } from '@/types/mock-api';

// Mock transaction data to maintain UI functionality
const mockTransactions: MockTransaction[] = [
  {
    id: 'txn_01hsxyh9txq4rzbrhbyngkhy46',
    status: 'completed',
    customerId: 'ctm_01hsxyh9txq4rzbrhbyngkhy46',
    origin: 'web',
    createdAt: '2024-01-15T10:30:00Z',
    details: {
      totals: {
        total: '2999',
      },
    },
    items: [
      {
        priceId: 'pri_01hsxycme6m95sejkz7sbz5e9g',
        quantity: 1,
        product: {
          name: 'Pro Plan',
        },
      },
    ],
  },
  {
    id: 'txn_02hsxyh9txq4rzbrhbyngkhy46',
    status: 'completed',
    customerId: 'ctm_01hsxyh9txq4rzbrhbyngkhy46',
    origin: 'subscription_charge',
    createdAt: '2023-12-15T10:30:00Z',
    details: {
      totals: {
        total: '2999',
      },
    },
    items: [
      {
        priceId: 'pri_01hsxycme6m95sejkz7sbz5e9g',
        quantity: 1,
        product: {
          name: 'Pro Plan',
        },
      },
    ],
  },
];

export async function getTransactions(_subscriptionId: string, _after: string): Promise<TransactionResponse> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      data: mockTransactions,
      hasMore: false,
      totalRecords: mockTransactions.length,
      error: undefined,
    };
  } catch (_e) {
    return {
      data: [],
      hasMore: false,
      totalRecords: 0,
      error: 'Something went wrong, please try again later',
    };
  }
}
