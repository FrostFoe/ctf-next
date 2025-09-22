'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

const teamMembers = [
  {
    name: 'ড্যানিয়েল ক্রোমিচ',
    email: 'dc@paddle.com',
    initials: 'DC',
    role: 'মালিক',
  },
  {
    name: 'মেলিসা লি',
    email: 'ml@paddle.com',
    initials: 'ML',
    role: 'সদস্য',
  },
  {
    name: 'জ্যাকসন খান',
    email: 'JK@paddle.com',
    initials: 'JK',
    role: 'সদস্য',
  },
  {
    name: 'ইসা লোপেজ',
    email: 'il@paddle.com',
    initials: 'IL',
    role: 'অতিথি',
  },
];

export function DashboardTeamMembersCard() {
  return (
    <Card className={'bg-background/50 backdrop-blur-[24px] border-border p-6'}>
      <CardHeader className="p-0 space-y-0">
        <CardTitle className="flex justify-between gap-2 items-center pb-6 border-border border-b">
          <div className={'flex flex-col gap-2'}>
            <span className={'text-xl font-medium'}>টিম সদস্য</span>
            <span className={'text-base leading-4 text-secondary'}>
              আপনার টিমের সদস্যদের কোলাবোরেশনের জন্য আমন্ত্রণ জানান
            </span>
          </div>
          <Button asChild={true} size={'sm'} variant={'outline'} className={'text-sm rounded-sm border-border'}>
            <Link href={'/dashboard/subscriptions'}>
              <Plus size={16} className={'text-muted-foreground'} />
            </Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className={'p-0 pt-6 flex gap-6 flex-col'}>
        {teamMembers.map((teamMember) => (
          <div key={teamMember.email} className={'flex justify-between items-center gap-2'}>
            <div className={'flex gap-4'}>
              <div className={'flex items-center justify-center px-3 py-4'}>
                <span className={'text-white text-base w-5'}>{teamMember.initials}</span>
              </div>
              <div className={'flex flex-col gap-2'}>
                <span className={'text-base leading-4 font-medium'}>{teamMember.name}</span>
                <span className={'text-base leading-4 text-secondary'}>{teamMember.email}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
