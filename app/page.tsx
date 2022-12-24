import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar2 from '../components/Navbar2'


export default function Home() {
  return (
    <main className="w-100 min-h-screen bg-[#0A192F]">
      <Navbar2 />
      <section className="border-4 border-white flex justify-center flex-col items-start h-screen min-h-full p-24 text-[#] "> 
        <div> 
          <h1 className="text-[#4DC3AE]">Hi, my name is</h1>
        </div>
      </section>
    </main>
  )
}
