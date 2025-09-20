import { useEffect, useState } from 'react';

export type PaddlePrices = Record<string, string>;

// Mock pricing data to maintain the UI without Paddle integration
const mockPrices: PaddlePrices = {
  'pri_01hsxyh9txq4rzbrhbyngkhy46': '$9.99', // Starter monthly/yearly (same price for simplicity)
  'pri_01hsxycme6m95sejkz7sbz5e9g': '$29.99', // Pro monthly  
  'pri_01hsxyeb2bmrg618bzwcwvdd6q': '$299.99', // Pro yearly
  'pri_01hsxyff091kyc9rjzx7zm6yqh': '$99.99', // Advanced monthly
  'pri_01hsxyfysbzf90tkh2wqbfxwa5': '$999.99', // Advanced yearly
};

export function usePaddlePrices(
  _paddle?: unknown, // Remove Paddle type dependency, mark as unused
  _country?: string, // Mark as unused
): { prices: PaddlePrices; loading: boolean } {
  const [prices, setPrices] = useState<PaddlePrices>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading delay to maintain the original UX behavior
    const timer = setTimeout(() => {
      setPrices(mockPrices);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []); // Remove dependencies since we're not using them

  return { prices, loading };
}
