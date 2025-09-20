'use server';

import { validateUserSession } from '@/utils/supabase/server';
import { MockSubscription } from '@/types/mock-api';
import { revalidatePath } from 'next/cache';

interface Error {
  error: string;
}

export async function cancelSubscription(subscriptionId: string): Promise<MockSubscription | Error> {
  try {
    await validateUserSession();

    // Mock subscription cancellation - simulate success
    const mockCancelledSubscription: MockSubscription = {
      id: subscriptionId,
      status: 'canceled',
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
      nextTransaction: null, // No next transaction for cancelled subscription
    };

    revalidatePath('/dashboard/subscriptions');
    return mockCancelledSubscription;
  } catch (e) {
    console.log('Error canceling subscription', e);
    return { error: 'Something went wrong, please try again later' };
  }
}
