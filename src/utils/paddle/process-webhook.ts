// Mock webhook processing - replaced Paddle SDK integration
import { createClient } from '@/utils/supabase/server-internal';

// Mock event types to replace Paddle SDK types
type MockEventEntity = {
  eventType: 'subscription.created' | 'subscription.updated' | 'customer.created' | 'customer.updated';
  data: {
    id: string;
    status?: string;
    customerId?: string;
    email?: string;
    items?: Array<{
      price?: {
        id: string;
        productId: string;
      };
    }>;
    scheduledChange?: {
      effectiveAt: string;
    };
  };
};

export class ProcessWebhook {
  async processEvent(eventData: MockEventEntity) {
    switch (eventData.eventType) {
      case 'subscription.created':
      case 'subscription.updated':
        await this.updateSubscriptionData(eventData);
        break;
      case 'customer.created':
      case 'customer.updated':
        await this.updateCustomerData(eventData);
        break;
    }
  }

  private async updateSubscriptionData(eventData: MockEventEntity) {
    const supabase = await createClient();
    const { error } = await supabase
      .from('subscriptions')
      .upsert({
        subscription_id: eventData.data.id,
        subscription_status: eventData.data.status,
        price_id: eventData.data.items?.[0]?.price?.id ?? '',
        product_id: eventData.data.items?.[0]?.price?.productId ?? '',
        scheduled_change: eventData.data.scheduledChange?.effectiveAt,
        customer_id: eventData.data.customerId,
      })
      .select();

    if (error) throw error;
  }

  private async updateCustomerData(eventData: MockEventEntity) {
    const supabase = await createClient();
    const { error } = await supabase
      .from('customers')
      .upsert({
        customer_id: eventData.data.id,
        email: eventData.data.email,
      })
      .select();

    if (error) throw error;
  }
}
