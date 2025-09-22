import { Subscription } from '@paddle/paddle-node-sdk';
import { Alert } from '@/components/ui/alert';
import dayjs from 'dayjs';

interface Props {
  subscription: Subscription;
}
export function SubscriptionAlerts({ subscription }: Props) {
  if (subscription.status === 'canceled') {
    return (
      <Alert variant={'destructive'} className={'mb-10'}>
        এই সাবস্ক্রিপশনটি {dayjs(subscription.canceledAt).format('MMM DD, YYYY [at] h:mma')} তারিখে বাতিল করা হয়েছে এবং
        এটি আর সক্রিয় নেই।
      </Alert>
    );
  } else if (subscription.scheduledChange && subscription.scheduledChange.action === 'cancel') {
    return (
      <Alert className={'mb-10'}>
        এই সাবস্ক্রিপশনটি {dayjs(subscription.scheduledChange.effectiveAt).format('MMM DD, YYYY [at] h:mma')} তারিখে
        বাতিল করার জন্য নির্ধারিত হয়েছে।
      </Alert>
    );
  }
  return null;
}
