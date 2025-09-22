import { CheckoutEventsTimePeriod } from '@paddle/paddle-js';

export function parseSDKResponse<T>(response: T): T {
  return JSON.parse(JSON.stringify(response));
}

export const ErrorMessage = 'কিছু একটা সমস্যা হয়েছে, অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন';

export function getErrorMessage() {
  return { error: ErrorMessage, data: [], hasMore: false, totalRecords: 0 };
}

export function getPaymentReason(origin: string) {
  if (origin === 'web' || origin === 'subscription_charge') {
    return 'নতুন';
  } else {
    return 'নবায়ন ';
  }
}

const BillingCycleMap: Record<string, string> = {
  day: 'দৈনিক',
  week: 'সাপ্তাহিক',
  month: 'মাসিক',
  year: 'বার্ষিক',
};

const CustomBillingCycleMap: Record<string, string> = {
  day: 'দিন',
  week: 'সপ্তাহ',
  month: 'মাস',
  year: 'বছর',
};

export function formatBillingCycle({ frequency, interval }: CheckoutEventsTimePeriod) {
  if (frequency === 1) {
    return BillingCycleMap[interval];
  } else {
    return `প্রতি ${frequency} ${CustomBillingCycleMap[interval]} অন্তর`;
  }
}
