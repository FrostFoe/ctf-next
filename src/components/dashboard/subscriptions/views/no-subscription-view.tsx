import { DashboardPageHeader } from '@/components/dashboard/layout/dashboard-page-header';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function NoSubscriptionView() {
  return (
    <>
      <DashboardPageHeader pageTitle={'সাবস্ক্রিপশন'} />
      <div className={'grid grid-cols-12'}>
        <Card
          className={'bg-background/50 backdrop-blur-[24px] border-border p-6 col-span-12 md:col-span-6 lg:col-span-4'}
        >
          <CardHeader className="p-0 space-y-0">
            <CardTitle className="flex justify-between items-center pb-2">
              <span className={'text-xl font-medium'}>কোনো সক্রিয় সাবস্ক্রিপশন নেই</span>
            </CardTitle>
          </CardHeader>
          <CardContent className={'p-0'}>
            <div className="text-base leading-6 text-secondary">
              আপনার সাবস্ক্রিপশনগুলো এখানে দেখতে একটি সাবস্ক্রিপশনের জন্য সাইন আপ করুন।
            </div>
          </CardContent>
          <CardFooter className={'p-0 pt-6'}>
            <Button asChild={true} size={'sm'} variant={'outline'} className={'text-sm rounded-sm border-border'}>
              <Link href={'/'}>সব দেখুন</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
