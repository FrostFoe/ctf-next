import { Skeleton } from '@/components/ui/skeleton';
import { MockCheckoutData } from '@/types/mock-checkout';

// Use existing formatMoney function from utils
function formatMoney(amount: number = 0, currency: string = 'USD') {
  const language = typeof navigator !== 'undefined' ? navigator.language : 'en-US';
  return new Intl.NumberFormat(language ?? 'en-US', {
    style: 'currency',
    currency: currency,
  }).format(amount);
}

interface Props {
  checkoutData: MockCheckoutData | null;
}

export function CheckoutPriceAmount({ checkoutData }: Props) {
  const total = checkoutData?.totals.total;
  return (
    <>
      {total !== undefined ? (
        <div className={'pt-8 flex gap-2 items-end'}>
          <span className={'text-5xl'}>{formatMoney(total, checkoutData?.currency_code)}</span>
          <span className={'text-base leading-[16px]'}>inc. tax</span>
        </div>
      ) : (
        <Skeleton className="mt-8 h-[48px] w-full bg-border" />
      )}
    </>
  );
}
