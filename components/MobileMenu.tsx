import React from 'react';
import Link from 'next/link';
interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <Link href={"/"}><div className="px-3 text-center text-white hover:underline">
          Home
        </div></Link>
        
        <Link href={"/about"}><div className="px-3 text-center text-white hover:underline">
          About
        </div></Link>
        <Link href={"/lessons"}><div className="px-3 text-center text-white hover:underline">
        Lessons
        </div></Link>
        
        <Link href={"/list"}><div className="px-3 text-center text-white hover:underline">
          Your list
        </div></Link>
        
        <Link href={"/news"}><div className="px-3 text-center text-white hover:underline">
          News
        </div></Link>
      </div>
    </div>
  )
}

export default MobileMenu;
