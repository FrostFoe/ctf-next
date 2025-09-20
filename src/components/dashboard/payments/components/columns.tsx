'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MockTransaction } from '@/types/mock-api';
import dayjs from 'dayjs';
import { parseMoney } from '@/utils/paddle/parse-money';
import { Status } from '@/components/shared/status/status';
import { getPaymentReason } from '@/utils/paddle/data-helpers';

// Column size is set as `auto` as React table column sizing is not working well.
const columnSize = 'auto' as unknown as number;

export const columns: ColumnDef<MockTransaction>[] = [
  {
    accessorKey: 'createdAt',
    header: 'Date',
    size: columnSize,
    cell: ({ row }) => {
      const billedDate = row.getValue('createdAt') as string;
      return billedDate ? dayjs(billedDate).format('MMM DD, YYYY [at] h:mma') : '-';
    },
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right font-medium">Amount</div>,
    enableResizing: false,
    size: columnSize,
    cell: ({ row }) => {
      const formatted = parseMoney(row.original.details?.totals?.total, 'USD');
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    size: columnSize,
    cell: ({ row }) => {
      return <Status status={row.original.status} />;
    },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    size: columnSize,
    cell: ({ row }) => {
      return (
        <div className={'max-w-[250px]'}>
          <div className={'whitespace-nowrap flex gap-1 truncate'}>
            <span className={'font-semibold'}>{getPaymentReason(row.original.origin)}</span>
            <span className={'font-medium truncate'}>{row.original.items[0]?.product?.name}</span>
            {row.original.items && row.original.items.length > 1 && (
              <span className={'font-medium'}>+{row.original.items.length - 1} more</span>
            )}
          </div>
        </div>
      );
    },
  },
];
