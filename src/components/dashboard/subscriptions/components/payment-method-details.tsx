import { CreditCard } from 'lucide-react';

// Mock payment method types to replace Paddle types
type PaymentMethodType = 'card' | 'alipay' | 'wire_transfer' | 'apple_pay' | 'google_pay' | 'paypal' | 'ideal' | 'bancontact' | 'korea_local' | 'offline' | 'unknown';

interface MockCard {
  brand: string;
  last_four: string;
  expiry_month: number;
  expiry_year: number;
}

const PaymentMethodLabels: Record<PaymentMethodType, string> = {
  card: 'Card',
  alipay: 'Alipay',
  wire_transfer: 'Wire Transfer',
  apple_pay: 'Apple Pay',
  google_pay: 'Google Pay',
  paypal: 'PayPal',
  ideal: 'iDEAL',
  bancontact: 'Bancontact',
  korea_local: 'Korean Local Payment',
  offline: 'Offline',
  unknown: 'Unknown',
};

interface Props {
  type: PaymentMethodType;
  card?: MockCard;
}

export function PaymentMethodDetails({ type, card }: Props) {
  if (type === 'card') {
    return (
      <>
        <CreditCard size={18} />
        <span className={'text-base text-secondary leading-4'}>**** {card?.last_four}</span>
      </>
    );
  } else {
    return type ? <span className={'text-base text-secondary leading-4'}>{PaymentMethodLabels[type]}</span> : '-';
  }
}
