import Image from 'next/image'
import React from 'react'
import Hero from './home3/components/hero'
import Title from './home3/components/title'
import Capabilities from './home3/components/capabilities'
import Clients from './home3/components/clients'
import Speciality from './home3/components/speciality'
import RecentWorks from './home3/components/recent-works'
import ContactUs from './_components/contact-us'

const Home = () => {
  return (
    <section className="landscape:h-[50rem]">
      <div className="w-full h-[60vh] sm:h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(/home/banner/3.jpg)` }}>
        <div className="relative flex flex-col justify-center gap-4 w-full h-full pl-14 pt-20 bg-black/40">
          <h1 className="font-bold text-[14vw] -tracking-morewidest leading-[12vw] text-stone-100">CREATIVE SUPPLY</h1>
          <p className="font-snowfun text-[10vw] leading-[6vw] text-orange animate-bounce2">we create <br /> your needs</p>
          <div className="absolute bottom-8 right-10 flex items-center gap-1 p-2 hover:cursor-pointer">
            <Image src="/home/arrow-yellow.svg" alt="logo" width={200} height={200} className="w-4 h-auto animate-pulse" loading="lazy" />
            <Image src="/home/arrow-yellow.svg" alt="logo" width={200} height={200} className="w-4 h-auto animate-pulse" loading="lazy" />
            <Image src="/home/arrow-white.svg" alt="logo" width={200} height={200} className="w-6 h-auto animate-pulse" loading="lazy" />
          </div>
        </div>
        
        {/* <div className="h-1/2 absolute left-14 top-48">
          <h1 className="font-semibold text-[14vw] -tracking-morewidest leading-[3.5rem] text-stone-100">CREATIVE SUPPLY</h1>
          <p className="w-40 font-snowfun text-5xl leading-8 py-10 text-orange">we create your needs</p>

          <div className="absolute right-8 bottom-36 flex items-center p-2 rounded-xl border border-transparent hover:border-orange hover:cursor-pointer">
            <Image src="/home/arrow-yellow.svg" alt="logo" width={200} height={200} className="h-4 w-4 animate-pulse" loading="lazy" />
            <Image src="/home/arrow-yellow.svg" alt="logo" width={200} height={200} className="h-4 w-4 animate-pulse" loading="lazy" />
            <Image src="/home/arrow-white.svg" alt="logo" width={200} height={200} className="h-6 w-6 animate-pulse" loading="lazy" />
          </div>
        </div> */}
         
      </div>
      <Title />
      <Hero />
      
      <div className="bg-contain mx-4 pb-10" style={{backgroundImage: `url('/home/pattern.svg')`}}>
        <Capabilities />
        <Clients />
        <div className='relative -mx-4'>
          <Speciality />
          <img src="/home/pic/phone.png" alt="1" className="absolute -bottom-12 right-0 w-[26vw]"/>

        </div>
        <RecentWorks />
        <ContactUs />


      </div>
    </section>
  )
}

export default Home