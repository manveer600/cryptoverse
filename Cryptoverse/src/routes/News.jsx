import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import NewsCard from '../components/NewsCard';

const News = () => {
  const { news } = useContext(AppContext);

  return (
    <div className=' min-h-screen '>
      <div className='container mx-auto py-10'>
        <div className='text-white flex flex-col gap-y-6'>
          {news.map((onenews) => (
            <NewsCard key={onenews.id} onenews={onenews} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;

