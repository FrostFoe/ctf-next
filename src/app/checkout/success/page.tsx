import { SuccessPageGradients } from '@/components/gradients/success-page-gradients';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PoweredByPaddle } from '@/components/home/footer/powered-by-paddle';
import '@/styles/checkout.css';
import { createClient } from '@/utils/supabase/server';

export default async function SuccessPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main>
      <div className={'relative h-screen overflow-hidden'}>
        <SuccessPageGradients />
        <div className={'absolute inset-0 px-6 flex items-center justify-center'}>
          <div className={'flex flex-col items-center text-white text-center'}>
            <Image
              className={'pb-12'}
              src={'/assets/icons/logo/aeroedit-success-icon.svg'}
              alt={'সাফল্যের আইকন'}
              height={96}
              width={96}
            />
            <h1 className={'text-4xl md:text-[80px] leading-9 md:leading-[80px] font-medium pb-6'}>
              পেমেন্ট সফল হয়েছে
            </h1>
            <p className={'text-lg pb-16'}>সাফল্য! আপনার পেমেন্ট সম্পন্ন হয়েছে, এবং আপনি এখন প্রস্তুত।</p>
            <Button variant={'secondary'} asChild={true}>
              {data.user ? <Link href={'/dashboard'}>ড্যাশবোর্ডে যান</Link> : <Link href={'/'}>হোমপেজে যান</Link>}
            </Button>
          </div>
        </div>
        <div className={'absolute bottom-0 w-full'}>
          <PoweredByPaddle />
        </div>
      </div>
    </main>
  );
}
