import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Navbar2 from '../components/Navbar2'


export default function Home() {
  return (
    <main className="w-100 min-h-screen bg-[#0A192F]">
      <Navbar2 />
      <section className="border-4 border-white flex justify-center flex-col items-start h-screen min-h-full pl-24 pr-24 ml-44 mr-44 text-[#] "> 
        <div> 
          <h1 className="text-[#4DC3AE] font-sans lg:text-lg md:text-md sm:text-sm">Hi, my name is</h1>
        </div>
        <div> 
          <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl font-sans">Shawn McMahon.</h2>
        </div>
        <div> 
          <h3 className="text-[#8892B0] lg:text-5xl md:text-4xl sm:text-3xl">I build things for the web.</h3>
        </div>
        <div className="max-w-lg"> 
          <p className="text-[#8892B0] lg:text-lg md:text-md sm:text-sm font-sans">I am a software engineer specializing in building exceptional digital experiences.
          Currently, I am focused on building reliable, human-centered products at <a href="https://www.vertafore.com/" className="text-[#4DC3AE]">Vertafore</a>.
          </p>
        </div>
      </section>
    </main>
  )
}
