export interface Tier {
  name: string;
  id: 'starter' | 'pro' | 'advanced';
  icon: string;
  description: string;
  features: string[];
  featured: boolean;
  priceId: Record<string, string>;
}

export const PricingTier: Tier[] = [
  {
    name: 'স্টার্টার',
    id: 'starter',
    icon: '/assets/icons/price-tiers/free-icon.svg',
    description: 'ব্যক্তিদের জন্য আদর্শ যারা সহজ ডিজাইন কাজ দিয়ে শুরু করতে চান।',
    features: ['১টি ওয়ার্কস্পেস', 'সীমিত সহযোগিতা', 'PNG এবং SVG-তে এক্সপোর্ট'],
    featured: false,
    priceId: { month: 'pri_01hsxyh9txq4rzbrhbyngkhy46', year: 'pri_01hsxyh9txq4rzbrhbyngkhy46' },
  },
  {
    name: 'প্রো',
    id: 'pro',
    icon: '/assets/icons/price-tiers/basic-icon.svg',
    description: 'ক্রমবর্ধমান দলগুলোর জন্য উন্নত ডিজাইন টুলস যাদের আরও বেশি নমনীয়তা প্রয়োজন।',
    features: ['ইন্টিগ্রেশন', 'সীমাহীন ওয়ার্কস্পেস', 'উন্নত এডিটিং টুলস', 'স্টার্টারের সবকিছু'],
    featured: true,
    priceId: { month: 'pri_01hsxycme6m95sejkz7sbz5e9g', year: 'pri_01hsxyeb2bmrg618bzwcwvdd6q' },
  },
  {
    name: 'অ্যাডভান্সড',
    id: 'advanced',
    icon: '/assets/icons/price-tiers/pro-icon.svg',
    description: 'ব্যাপক সহযোগিতা এবং কাস্টমাইজেশনের জন্য ডিজাইন করা শক্তিশালী টুলস।',
    features: [
      'একক সাইন-অন (SSO)',
      'উন্নত সংস্করণ নিয়ন্ত্রণ',
      'অ্যাসেট লাইব্রেরি',
      'অতিথি অ্যাকাউন্ট',
      'প্রো-এর সবকিছু',
    ],
    featured: false,
    priceId: { month: 'pri_01hsxyff091kyc9rjzx7zm6yqh', year: 'pri_01hsxyfysbzf90tkh2wqbfxwa5' },
  },
];
