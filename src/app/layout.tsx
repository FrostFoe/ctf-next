import { Hind_Siliguri } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/layout.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://paddle-billing.vercel.app'),
  title: 'এরোএডিট',
  description:
    'এরোএডিট একটি শক্তিশালী টিম ডিজাইন কোলাবোরেশন অ্যাপ এবং ইমেজ এডিটর। সব আকারের ব্যবসার জন্য প্ল্যানসহ, রিয়েল-টাইম কোলাবোরেশন, উন্নত এডিটিং টুলস এবং নির্বিঘ্ন প্রজেক্ট ম্যানেজমেন্টের মাধ্যমে আপনার ওয়ার্কফ্লোকে স্ট্রীমলাইন করুন।',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="bn" className={'min-h-full dark'}>
      <body className={hindSiliguri.className}>
        {children}
        <Toaster />
        <div className="hidden scrollbar-none scrollbar-thumb-slate-400 scrollbar-track-slate-800"></div>
      </body>
    </html>
  );
}
