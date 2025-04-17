import { Category } from '../types';
import { ValueCard } from './ValueCard';

const CategoryColumn = ({ category }: { category: Category }) => {
  return (
    <div className='flex flex-col text-center'>
      <h2 className='w-50 h-12  rounded-lg bg-sky-500 mb-4 text-white flex flex-col justify-center font-semibold text-xl'>
        {category.name}
      </h2>
      <div className='flex flex-col gap-4'>
        {category.questions.map((question) => (
          <ValueCard question={question} key={`question-${question.id}`} />
        ))}
      </div>
    </div>
  );
};

export default CategoryColumn;
