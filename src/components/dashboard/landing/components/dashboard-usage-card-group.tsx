import { Bolt, Image, Shapes, Timer } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const cards = [
  {
    title: 'ব্যবহৃত স্টোরেজ',
    icon: <Bolt className={'text-[#4B4F4F]'} size={18} />,
    value: '১.২ জিবি',
    change: '১০ জিবি বাকি',
  },
  {
    title: 'সক্রিয় ওয়ার্কস্পেস',
    icon: <Shapes className={'text-[#4B4F4F]'} size={18} />,
    value: '৪',
    change: '৬টি উপলব্ধ ওয়ার্কস্পেস',
  },
  {
    title: 'এক্সপোর্ট করা অ্যাসেট',
    // eslint-disable-next-line jsx-a11y/alt-text
    icon: <Image className={'text-[#4B4F4F]'} size={18} />,
    value: '২৮৬',
    change: 'গত মাস থেকে +১৬% বেশি',
  },
  {
    title: 'সহযোগী',
    icon: <Timer className={'text-[#4B4F4F]'} size={18} />,
    value: '১০',
    change: 'গত মাস থেকে +২৭% বেশি',
  },
];
export function DashboardUsageCardGroup() {
  return (
    <div className={'grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'}>
      {cards.map((card) => (
        <Card key={card.title} className={'bg-background/50 backdrop-blur-[24px] border-border p-6'}>
          <CardHeader className="p-0 space-y-0">
            <CardTitle className="flex justify-between items-center mb-6">
              <span className={'text-base leading-4'}>{card.title}</span> {card.icon}
            </CardTitle>
            <CardDescription className={'text-[32px] leading-[32px] text-primary'}>{card.value}</CardDescription>
          </CardHeader>
          <CardContent className={'p-0'}>
            <div className="text-sm leading-[14px] pt-2 text-secondary">{card.change}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
