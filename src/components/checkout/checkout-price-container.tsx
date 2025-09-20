import { CheckoutPriceAmount } from '@/components/checkout/checkout-price-amount';
import { MockCheckoutData } from '@/types/mock-checkout';
import { Skeleton } from '@/components/ui/skeleton';

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

export function CheckoutPriceContainer({ checkoutData }: Props) {
  // Mock recurring billing data - for now, we'll just show the current price as recurring
  const recurringTotal = checkoutData?.totals.total;
  const billingCycle = 'monthly'; // Mock billing cycle
  
  return (
    <>
      <div className={'text-base leading-[20px] font-semibold'}>Order summary</div>
      <CheckoutPriceAmount checkoutData={checkoutData} />
      {recurringTotal !== undefined ? (
        <div className={'pt-4 text-base leading-[20px] font-medium text-muted-foreground'}>
          then {formatMoney(recurringTotal, checkoutData?.currency_code)} {billingCycle}
        </div>
      ) : (
        <Skeleton className="mt-4 h-[20px] w-full bg-border" />
      )}
    </>
  );
}
