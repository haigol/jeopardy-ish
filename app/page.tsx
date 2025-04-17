import CategoryColumn from '../components/CategoryColumn';
import { mockData } from '../mockData';
const Home = () => {
  return (
    <>
      <header className='m-auto'>
        <h1 className='m-8 text-4xl font-bold'>Quiz!</h1>
      </header>
      <main className={'m-auto flex-grow flex gap-6'}>
        {mockData.map((category) => (
          <CategoryColumn category={category} key={category.id} />
        ))}
      </main>
    </>
  );
};

export default Home;
