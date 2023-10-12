import React from 'react';

import { BlogInterface } from '@/types';
import NewsCard from '@/components/NewsCard';
import { isEmpty } from 'lodash';

interface NewsListProps {
  data: BlogInterface[];
}

const NewsList: React.FC<NewsListProps> = ({ data }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="">
      <div>
        <div className="">
          {data.map((blog) => (
            <NewsCard key={blog.id} data={blog} />
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsList;
