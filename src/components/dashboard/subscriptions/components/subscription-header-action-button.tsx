'use client';

import { cancelSubscription } from '@/app/dashboard/subscriptions/actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { CircleAlert, CircleCheck } from 'lucide-react';
import { useState } from 'react';
import { Confirmation } from '@/components/shared/confirmation/confirmation';

interface Props {
  subscriptionId: string;
}

export function SubscriptionHeaderActionButton({ subscriptionId }: Props) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  function handleCancelSubscription() {
    setModalOpen(false);
    setLoading(true);
    cancelSubscription(subscriptionId)
      .then(() => {
        toast({
          description: (
            <div className={'flex items-center gap-3'}>
              <CircleCheck size={20} color={'#25F497'} />
              <div className={'flex flex-col gap-1'}>
                <span className={'text-primary font-medium test-sm leading-5'}>বাতিল নির্ধারিত হয়েছে</span>
                <span className={'text-muted-foreground test-sm leading-5'}>
                  বিলিং পিরিয়ডের শেষে সাবস্ক্রিপশনটি বাতিল করার জন্য নির্ধারিত হয়েছে।
                </span>
              </div>
            </div>
          ),
        });
      })
      .catch(() => {
        toast({
          description: (
            <div className={'flex items-start gap-3'}>
              <CircleAlert size={20} color={'#F42566'} />
              <div className={'flex flex-col gap-1'}>
                <div className={'text-primary font-medium test-sm leading-5'}>ত্রুটি</div>
                <div className={'text-muted-foreground test-sm leading-5'}>
                  কিছু একটা সমস্যা হয়েছে, অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন
                </div>
              </div>
            </div>
          ),
        });
      })
      .finally(() => setLoading(false));
  }

  return (
    <>
      <Button
        disabled={loading}
        onClick={() => setModalOpen(true)}
        size={'sm'}
        variant={'outline'}
        className={'flex gap-2 text-sm rounded-sm border-border'}
      >
        সাবস্ক্রিপশন বাতিল করুন
      </Button>
      <Confirmation
        description={'এই সাবস্ক্রিপশনটি বিলিং সময়ের শেষে বাতিল করার জন্য নির্ধারিত হবে।'}
        title={'সাবস্ক্রিপশন বাতিল করবেন?'}
        onClose={() => setModalOpen(false)}
        isOpen={isModalOpen}
        onConfirm={handleCancelSubscription}
      />
    </>
  );
}
