import useSwr from 'swr'
import fetcher from '@/libs/fetcher';
const useMoviesByCat = () => {
  const { data, error, isLoading } = useSwr('/api/moviesL/opining', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading
  }
};

export default useMoviesByCat;
