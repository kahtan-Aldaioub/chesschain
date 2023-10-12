import React from 'react'
import MovieList from '@/components/MovieList'
import useFavorites from '@/hooks/useFavorites';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
  
    if (!session) {
      return {
        redirect: {
          destination: '/auth', 
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
  }

export default function list() {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: favorites = [] } = useFavorites();
  return (
    <>
    <Head>
      <title>
        Your List
      </title>
      <meta http-equiv="refresh" content="120"></meta>
    </Head>
    <Navbar />
    <div className='h-[50px]'></div>
    <MovieList title="your list" data={favorites} />
    </>
    
  )
}
