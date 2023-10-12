import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";
import React from "react";
import Head from "next/head";
const About = () => {
  return (
    <>
    <Head>
      <title>About
      </title>
    </Head>
    <Navbar />
      <section className=" bg-zinc-950 pt-32 lg:pt-[120px] pb-12 lg:pb-[90px] overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-left -mx-3 sm:-mx-4">
                <div className=" px-3 sm:px-4 w-1/4">
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-3/4">
                  <div className="relative z-10 my-4">
                    <img
                      src="/logo.png"
                      alt="Chess Chain"
                      className="w-3/4 rounded-2xl lg:w-full border-4 border-white"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 ml-10 ">
                <span className="block mb-2 text-lg font-semibold text-primary">
                 
                </span>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl p-3">
                  Welcome to Chess Chain!
                </h2>
                <p className="mb-8 text-base text-body-color p-3">
                  my name is kahtan aldaioub and i am a web developer and avid chess fan.
                  with a rating about 2000 on Lichess , i have a passion for playing chess online .
                  at chess Chain ,we provide valuable content to help players learn and improve thier chess skills
                  effictively . our website is designed to be a comprehensive resourse for all levels of players ,
                  from beginners to advanced . we believe that anyone can learn and enjoy the game of chess.
                </p>
                <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl p-3">
                  thank you for visiting Chess Chain and We hope you find our content healpful.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer1/>
    </>
  );
};

export default About;
