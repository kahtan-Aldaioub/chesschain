import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { BlogInterface } from '@/types';
interface NewsCardProps {
  data: BlogInterface;
}

const MovieCard: React.FC<NewsCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
<div className="mx-auto my-18 flex w-[90vw]  md:w-[60vw] flex-col rounded-lg bg-green-100 font-serif text-black shadow-xl justify-center align-middle">
  <div className="mt-4">
    <h1 className="mx-11 my-1 font-bold text-[20px] text-green-700 text-center">{data.title}</h1>
  </div>
  <div className="mx-11 mb-4 text-base text-gray-700 text-center"><p>{data.body}</p></div>
  
    
  </div>
</>
     )
}

export default MovieCard;
