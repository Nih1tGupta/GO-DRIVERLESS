"use client";
 
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
 
<header className="z-30 mt-2 w-full md:mt-5">
  <div className="mx-auto max-w-7xl px-4 sm:px-6"> 
    <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
      {/* Site branding */}
      <div className="flex items-center flex-1">
        <Logo />
     <h2 className=" ml-2 text-3xl font-extrabold tracking-tight cursor-pointer transition-all duration-500 whitespace-nowrap
               bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600
               hover:from-pink-600 hover:to-purple-400
               hover:scale-105
               hover:drop-shadow-lg border-x-fuchsia-300
               font-['Poppins']">
  CARS CLUB
</h2>

        <nav className="ml-12 hidden md:block">
  
         <ul className="flex items-center justify-center gap-20 whitespace-nowrap">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
<li className="relative group">
  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
    Projects ↓
  </span>
  <ul className="absolute left-0 mt-2 w-70 bg-[#111223] text-gray-300 border border-[#2A2B3A] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 pointer-events-auto">
    <li>
      <a
        href="https://docs.google.com/document/d/1GtWzQ6myIF-TVp6huTHTSnJoy7YwfBEX/edit?tab=t.0"
        className="block px-4 py-2 hover:bg-[#1a1b2f] hover:text-white transition"
      >
        Renewable Energy Project
      </a>
    </li>
    <li>
      <a
        href="/project2"
        className="block px-4 py-2 hover:bg-[#1a1b2f] hover:text-white transition"
      >
        Universal Cycle Club - Micro Project
      </a>
    </li>
    <li>
      <a
        href="/project2"
        className="block px-4 py-2 hover:bg-[#1a1b2f] hover:text-white transition"
      >
        AI Driverless Car - Macro Project
      </a>
    </li>
  </ul>
</li>


            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Maintainence
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
            
              <li>
  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
    Membership
  </Link>

            </li>
           
          </ul>
        </nav>
      </div>

   
      <ul className="flex items-center justify-end gap-3 flex-1">
        <li>
          <Link
            href="/signin"
           className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white hover:bg-[length:100%_150%] hover:text-black transition- duration-500"
          >
            Sign In
          </Link>
        </li>
        
      </ul>
    </div>
  </div>


</header>

  );
}
