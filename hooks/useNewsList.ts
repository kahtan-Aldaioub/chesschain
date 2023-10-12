import useSwr from 'swr'
import fetcher from '@/libs/fetcher';

const useNews = () => {
  const { data, error, isLoading } = useSwr('/api/news', fetcher, {
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

export default useNews;
