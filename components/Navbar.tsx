import React, { useCallback, useEffect, useState } from 'react';
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import AccountMenu from '@/components/AccountMenu';
import MobileMenu from '@/components/MobileMenu';
import NavbarItem from '@/components/NavbarItem';

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
      <Link href={"/"}><div className="text-xs text-green-700 font-bold  md:text-base lg:text-2xl ">CHESS CHAIN 
      </div></Link>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
        <Link href={"/"}><NavbarItem label="Home" /></Link>
        <Link href={"/about"}><NavbarItem label="About" /></Link>
        <Link href={"/lessons"}><NavbarItem label="Lessons" /></Link>
        <Link href={"/list"}><NavbarItem label="Your list" /></Link>
        <Link href={"/news"}><NavbarItem label="News" /></Link>
        
          
        </div>
        <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
          <p className="text-white text-sm">Browse</p>
          <ChevronDownIcon className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          
          <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-md overflow-hidden p-1">
            <img
                      src="/logo.png"
                      alt="Chess Chain"
                      className="w-[31px] h-[31px] rounded-full lg:w-[50px]  lg:h-[50px] border border-white"
                    />
            </div>
            <ChevronDownIcon className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
