import { MockSubscription } from '@/types/mock-api';
import { Alert } from '@/components/ui/alert';
import dayjs from 'dayjs';

interface Props {
  subscription?: MockSubscription;
}

export function SubscriptionAlerts({ subscription }: Props) {
  if (!subscription) return null;
  
  if (subscription.status === 'canceled') {
    return (
      <Alert variant={'destructive'} className={'mb-10'}>
        This subscription was canceled and is no longer active.
      </Alert>
    );
  } else if (subscription.status === 'past_due') {
    return (
      <Alert variant={'destructive'} className={'mb-10'}>
        This subscription is past due. Please update your payment information.
      </Alert>
    );
  } else if (subscription.status === 'paused') {
    return (
      <Alert className={'mb-10'}>
        This subscription is currently paused and will resume on{' '}
        {dayjs(subscription.currentBillingPeriod.endsAt).format('MMM DD, YYYY')}
      </Alert>
    );
  }
  return null;
}
