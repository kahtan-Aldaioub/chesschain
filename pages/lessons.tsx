/* eslint-disable react-hooks/rules-of-hooks */
import Footer1 from '@/components/Footer1';
import MovieList from '@/components/MovieList';
import Navbar from '@/components/Navbar'
import NavbarItem from '@/components/NavbarItem';
import useBeginer from '@/hooks/useBeginer';
import useEndgame from '@/hooks/useEndgame';
import useMovieList from '@/hooks/useMovieList';
import useOpining from '@/hooks/useOpining';
import useStratigy from '@/hooks/useStratigy';
import useTactics from '@/hooks/useTactics';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react'

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

export default function lessons() {
  const { data: movies = [] } = useMovieList();
  return (
    <>
    <Head>
      <title>
        Lessons
      </title>
    </Head>
    <Navbar />
    <div className="flex-row md:ml-8 gap-2 md:gap-7 flex pt-24 justify-center text-green-400  text-[12px] md:text-[20px]">
        <Link className=' border border-1 border-green-400 rounded-md px-2 py-1' href={"/opinings"}>opining</Link>
        <Link className=' border border-1 border-green-400 rounded-md px-2 py-1' href={"/endgame"}>Endgame</Link>
        <Link className=' border border-1 border-green-400 rounded-md px-2 py-1' href={"/stratigy"}>stratigy</Link>
        <Link className=' border border-1 border-green-400 rounded-md px-2 py-1' href={"/tactics"}>tactics</Link>
        <Link className=' border border-1 border-green-400 rounded-md px-2 py-1' href={"/beginers"}>beginers</Link>
        </div>
        <MovieList title="all" data={movies} />
        <div className='p-28'></div>
    <div className='p-12'></div>
        <Footer1/>
    </>
    
  )
}
