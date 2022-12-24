'use client';

import Link from 'next/link'
import { useState } from 'react';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }


  return (
    <header className="bg-[#0A192F]">
      <div className="container mx-auto px-4 flex items-center h-16 cursor-pointer">
        <div className="flex-1 text-white">
          <a href="#" className="text-xl font-bold font-mono">My Website</a>
        </div>
        <div className="pointer-cursor" onClick={toggleMenu}> 
          <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block" onClick={toggleMenu}>
            <svg className="fill-current text-white cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" onClick={toggleMenu}>
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
        </div>
        <input className="hidden" type="checkbox" id="menu-toggle" checked={menuOpen} onChange={toggleMenu} />
        <div className={`hidden lg:flex lg:items-center lg:w-auto w-full ${menuOpen ? 'block' : 'hidden'}`} id="menu">
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-white pt-4 lg:pt-0">
              <li><Link href="/about"><p className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#4DC3AE]">About</p></Link></li>
              <li><Link href="/experience"><p className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#4DC3AE]">Experience</p></Link></li>
              <li><Link href="/work"><p className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#4DC3AE]">Work</p></Link></li>
              <li><Link href="/contact"><p className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-[#4DC3AE]">Contact</p></Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar