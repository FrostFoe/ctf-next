'use client';

import { PriceSection } from '@/components/checkout/price-section';
import { CheckoutFormGradients } from '@/components/gradients/checkout-form-gradients';
import { MockCheckoutData } from '@/types/mock-checkout';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PathParams {
  priceId: string;
  [key: string]: string | string[];
}

interface Props {
  userEmail?: string;
}

// Mock checkout data based on price ID
const getMockCheckoutData = (priceId: string, quantity: number): MockCheckoutData => {
  // Base prices - these will be multiplied by quantity
  const basePrices: Record<string, number> = {
    'pri_01hsxyh9txq4rzbrhbyngkhy46': 9.99,   // Starter
    'pri_01hsxycme6m95sejkz7sbz5e9g': 29.99,  // Pro monthly  
    'pri_01hsxyeb2bmrg618bzwcwvdd6q': 299.99, // Pro yearly
    'pri_01hsxyff091kyc9rjzx7zm6yqh': 99.99,  // Advanced monthly
    'pri_01hsxyfysbzf90tkh2wqbfxwa5': 999.99, // Advanced yearly
  };

  const productNames: Record<string, string> = {
    'pri_01hsxyh9txq4rzbrhbyngkhy46': 'Starter Plan',   
    'pri_01hsxycme6m95sejkz7sbz5e9g': 'Pro Plan (Monthly)',  
    'pri_01hsxyeb2bmrg618bzwcwvdd6q': 'Pro Plan (Yearly)', 
    'pri_01hsxyff091kyc9rjzx7zm6yqh': 'Advanced Plan (Monthly)', 
    'pri_01hsxyfysbzf90tkh2wqbfxwa5': 'Advanced Plan (Yearly)', 
  };

  const basePrice = basePrices[priceId] || 29.99;
  const subtotal = basePrice * quantity;
  const tax = subtotal * 0.1; // 10% tax for demo
  const total = subtotal + tax;
  
  return {
    totals: {
      total,
      subtotal,
      tax,
    },
    currency_code: 'USD',
    items: [
      {
        price_name: productNames[priceId] || 'Pro Plan',
      }
    ],
  };
};

export function CheckoutContents({ userEmail: _userEmail }: Props) {
  const { priceId } = useParams<PathParams>();
  const [quantity, setQuantity] = useState<number>(1);
  const [checkoutData, setCheckoutData] = useState<MockCheckoutData | null>(null);

  useEffect(() => {
    if (priceId) {
      // Simulate loading delay to maintain original UX
      const timer = setTimeout(() => {
        setCheckoutData(getMockCheckoutData(priceId, quantity));
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [priceId, quantity]);

  return (
    <div
      className={
        'rounded-lg md:bg-background/80 md:backdrop-blur-[24px] md:p-10 md:pl-16 md:pt-16 md:min-h-[400px] flex flex-col justify-between relative'
      }
    >
      <CheckoutFormGradients />
      <div className={'flex flex-col md:flex-row gap-8 md:gap-16'}>
        <div className={'w-full md:w-[400px]'}>
          <PriceSection checkoutData={checkoutData} quantity={quantity} handleQuantityChange={setQuantity} />
        </div>
        <div className={'min-w-[375px] lg:min-w-[535px]'}>
          <div className={'text-base leading-[20px] font-semibold mb-8'}>Payment details</div>
          {/* Mock payment form to replace Paddle checkout */}
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 min-h-[450px] flex items-center justify-center border border-border/20">
            <div className="text-center text-muted-foreground">
              <div className="text-lg mb-2">🔒 Secure Checkout</div>
              <div>Payment processing disabled</div>
              <div className="text-sm mt-2">UI preserved without Paddle integration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
