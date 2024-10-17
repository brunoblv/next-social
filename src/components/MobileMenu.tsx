'use client'

import Link from "next/link";
import { useState } from "react";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="flex flex-col gap-[4.5px] cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
        <div className={`w-6 h-1 bg-blue-500 rounded-sm`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm`} />
        <div className={`w-6 h-1 bg-blue-500 rounded-sm`} />
      </div>

      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href="/login">Home</Link>
          <Link href="/login">Friends</Link>
          <Link href="/login">Groups</Link>
          <Link href="/login">Stories</Link>
          <Link href="/login">Profile</Link>
          <Link href="/login">Login</Link>
         
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
