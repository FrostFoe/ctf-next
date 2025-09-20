import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PaymentMethodDetails } from '@/components/dashboard/subscriptions/components/payment-method-details';
import { MockTransaction } from '@/types/mock-api';

function findPaymentMethodDetails(transactions?: MockTransaction[]) {
  // Mock payment method details since we don't have real payment data
  return { 
    type: 'card' as const, 
    card: {
      brand: 'Visa',
      last_four: '4242',
      expiry_month: 12,
      expiry_year: 2025
    }
  };
}

interface Props {
  updatePaymentMethodUrl?: string | null;
  transactions?: MockTransaction[];
}

export function PaymentMethodSection({ transactions, updatePaymentMethodUrl }: Props) {
  const { type, card } = findPaymentMethodDetails(transactions);
  
  return (
    <div className={'flex gap-6 pt-6 items-end justify-between @16xs:flex-wrap'}>
      <div className={'flex flex-col gap-4'}>
        <div className={'text-base text-secondary leading-4 whitespace-nowrap'}>Payment method</div>
        <div className={'flex gap-1 items-end'}>
          <PaymentMethodDetails type={type} card={card} />
        </div>
      </div>
      {updatePaymentMethodUrl && (
        <div>
          <Button asChild={true} size={'sm'} className={'text-sm rounded-sm border-border'} variant={'outline'}>
            <Link target={'_blank'} href={updatePaymentMethodUrl}>
              Update
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
