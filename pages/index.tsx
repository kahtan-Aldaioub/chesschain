import React from 'react';
import { Metadata, NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import InfoModal from '@/components/InfoModal';
import useInfoModalStore from '@/hooks/useInfoModalStore';
import Footer1 from '@/components/Footer1';
import Head from "next/head";
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

const Home = () => {
  const {isOpen, closeModal} = useInfoModalStore();

  return (
    <>
    <Head>
      <title>
        Home
      </title>
    </Head>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className='p-16 text-xl md:text-2xl text-center bg-zinc-950 fan text-slate-200'><h1>Thank you for visiting Chess Chain and We hope you find our content healpful.</h1>
      <h2 className='pt-10 fan text-slate-200'>You can follow our sotial media down ! </h2>
      </div>
      
      <Footer1/>
    </>
  )
}

export default Home;
