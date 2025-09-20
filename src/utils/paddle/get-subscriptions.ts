'use server';

import { SubscriptionResponse } from '@/lib/api.types';
import { MockSubscription } from '@/types/mock-api';

// Mock subscription data to maintain UI functionality
const mockSubscriptions: MockSubscription[] = [
  {
    id: 'sub_01hsxyh9txq4rzbrhbyngkhy46',
    status: 'active',
    priceId: 'pri_01hsxycme6m95sejkz7sbz5e9g',
    customerId: 'ctm_01hsxyh9txq4rzbrhbyngkhy46',
    startedAt: '2024-01-01T00:00:00Z',
    currencyCode: 'USD',
    billingCycle: {
      frequency: 1,
      interval: 'month'
    },
    recurringTransactionDetails: {
      totals: {
        total: '2999',
        subtotal: '2499',
        tax: '500'
      },
      lineItems: [
        {
          priceId: 'pri_01hsxycme6m95sejkz7sbz5e9g',
          quantity: 1,
          taxRate: '0.20',
          totals: {
            subtotal: '2499'
          },
          product: {
            name: 'Pro Plan',
            description: 'Professional subscription plan',
            imageUrl: '/logo.svg'
          }
        }
      ]
    },
    currentBillingPeriod: {
      startsAt: '2024-01-01T00:00:00Z',
      endsAt: '2024-02-01T00:00:00Z',
    },
    items: [
      {
        priceId: 'pri_01hsxycme6m95sejkz7sbz5e9g',
        quantity: 1,
        product: {
          name: 'Pro Plan',
          imageUrl: '/logo.svg'
        },
      },
    ],
    nextTransaction: {
      billingPeriod: {
        startsAt: '2024-02-01T00:00:00Z',
        endsAt: '2024-03-01T00:00:00Z',
      },
      details: {
        totals: {
          total: '2999',
        },
      },
    },
  },
];

export async function getSubscriptions(): Promise<SubscriptionResponse> {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      data: mockSubscriptions,
      hasMore: false,
      totalRecords: mockSubscriptions.length,
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
