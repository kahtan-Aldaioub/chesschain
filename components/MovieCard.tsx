import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { PlayIcon } from '@heroicons/react/24/solid';


import FavoriteButton from '@/components/FavoriteButton';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import { MovieInterface } from '@/types';
interface MovieCardProps {
  data: MovieInterface;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();
  const { openModal } = useInfoModalStore();

  const redirectToWatch = useCallback(() => router.push(`/watch/${data.id}`), [router, data.id]);

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] mt-20 mb-40">
      <img onClick={redirectToWatch} src={data.thumbnailUrl} alt="Movie" draggable={false} className="
        
        duration-200
        delay-300
          cursor-pointer
          object-cover
          transition
          duration
          shadow-xl
          rounded-t-md
          w-full
          h-[20vw]
          md:h-[15vw]
          lg:h-[12vw]
        " />
        <div className="
          z-10
          bg-zinc-800
          p-2
          lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
          ">
          <div className="flex flex-row items-center gap-3">
            <div onClick={redirectToWatch} className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
              <PlayIcon className="text-black w-4 lg:w-6" />
            </div>
            <FavoriteButton movieId={data.id} />
            
          </div>
          <p className="text-green-400 font-semibold mt-4">
            {data.lang} <span className="text-white"></span>
          </p>
          <p className="text-white text-[10px] lg:text-sm">{data.title}</p>
          <div className="flex flex-row mt-4 gap-2 items-center"> 
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
            <p className='text-green-400 font-semibold mt-4 text-sm'>{data.genre}</p>
          </div>
        </div>
      </div>
  )
}

export default MovieCard;
