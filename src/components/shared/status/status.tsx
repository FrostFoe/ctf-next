import { Check, CircleMinus, Clock4, Pause, SquarePen } from 'lucide-react';
import { ReactNode } from 'react';

interface Props {
  status: string;
}

interface StatusInfo {
  [key: string]: { color: string; icon: ReactNode; text: string };
}
// Ensure that any new colors are added to `safelist` in tailwind.config.js
const StatusInfo: StatusInfo = {
  active: { color: '#25F497', icon: <Check size={16} />, text: 'সক্রিয়' },
  paid: { color: '#25F497', icon: <Check size={16} />, text: 'পরিশোধিত' },
  completed: { color: '#25F497', icon: <Check size={16} />, text: 'সম্পন্ন' },
  trialing: { color: '#E0E0EB', icon: <Clock4 size={16} />, text: 'ট্রায়াল চলছে' },
  draft: { color: '#797C7C', icon: <SquarePen size={16} />, text: 'খসড়া' },
  ready: { color: '#797C7C', icon: <SquarePen size={16} />, text: 'প্রস্তুত' },
  canceled: { color: '#797C7C', icon: <CircleMinus size={16} />, text: 'বাতিল' },
  inactive: { color: '#F42566', icon: <CircleMinus size={16} />, text: 'নিষ্ক্রিয়' },
  past_due: { color: '#F42566', icon: <Clock4 size={16} />, text: 'বকেয়া' },
  paused: { color: '#F79636', icon: <Pause size={16} />, text: 'বিরতি' },
  billed: { color: '#F79636', icon: <Clock4 size={16} />, text: 'অپرداخت চালান' },
};

export function Status({ status }: Props) {
  const { color, icon, text } = StatusInfo[status] ?? { text: status };
  return (
    <div
      className={`self-end flex items-center gap-2 border rounded-xxs border-border py-1 px-2 text-[${color}] w-fit @4xs:text-nowrap text-wrap`}
    >
      {icon}
      {text}
    </div>
  );
}
