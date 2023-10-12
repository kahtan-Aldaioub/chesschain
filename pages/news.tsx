import Footer1 from '@/components/Footer1';
import Navbar from '@/components/Navbar'
import NewsList from "@/components/NewsList"
import useNewsList from '@/hooks/useNewsList';
import Head from 'next/head';

export default function news() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: news = [] } = useNewsList();
  return (
    < > 
    <Head>
      <title>
        News
      </title>
    </Head>
      <div className='p-0 m-0'> <Navbar /></div>
      <div className='min-h-[20vh]'></div>
    <NewsList   data={news} /> 
    <div className='p-32'></div>
    <div className='p-12'></div>
    <Footer1 />
    </>
  )
}
