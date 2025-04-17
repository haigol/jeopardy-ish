import Link from 'next/link';
import { Question } from '../types';

export interface ItemProps {
  question: Question;
}

export const ValueCard = ({ question }: ItemProps) => {
  console.log('hel', question.id);
  return (
    <Link
      className='flex flex-col align-text-bottom w-50 h-20 justify-center rounded-lg bg-sky-200 text-xl'
      href={question.id.toString()}
    >
      {question.point_value}
    </Link>
  );
};

export const ItemSkeleton = () => <div className='max-w-sm animate-pulse'></div>;
