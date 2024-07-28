import Image from 'next/image'
import React from 'react'
import Hero from './home/components/hero'
import Title from './home/components/title'
import Capabilities from './home/components/capabilities'
import Clients from './home/components/clients'
import Speciality from './home/components/speciality'
import RecentWorks from './home/components/recent-works'
import ContactUs from './_components/contact-us'

const Home = () => {
  return (
    <>
      <section className="flex h-[28rem] sm:h-screen landscape:h-[50rem]">
        <div className="w-full h-[60vh] sm:h-screen bg-cover bg-center bg-no-repeat md:bg-repeat-x bg-small">
          <div className="relative flex flex-col sm:flex-row justify-center gap-4 w-full h-full pl-14 sm:pl-[14vw] pt-20 sm:pt-[18vw] bg-black/60">
            <h1 className="font-bold text-[14vw] -tracking-morewidest leading-[12vw] text-stone-100 
              sm:w-fit sm:text-[8vw] sm:leading-[7vw] ">
              CREATIVE SUPPLY
            </h1>
            <p className="min-w-[14vw] h-fit sm:mt-[8vw] sm:-ml-[22vw] font-snowfun text-[10vw] sm:text-[4vw] leading-[6vw] sm:leading-[2vw] text-orange animate-bounce2">we create <br /> your needs</p>
            {/* <div className="absolute bottom-8 right-10 flex items-center gap-1 p-2 hover:cursor-pointer">
              <Image src="/home/arrow-yellow.svg" alt="logo" width={200} height={200} className="w-4 h-auto animate-pulse" loading="lazy" />
              <Image src="/home/arrow-yellow.svg" alt="logo" width={200} height={200} className="w-4 h-auto animate-pulse" loading="lazy" />
              <Image src="/home/arrow-white.svg" alt="logo" width={200} height={200} className="w-6 h-auto animate-pulse" loading="lazy" />
            </div> */}
          </div>
          
          
        </div>
        <div className="max-h-screen bg-cover sm:w-[45%]" style={{backgroundImage:`url(/home/bg2.jpg)`}} />
      </section>

      <section>
        <Title />
        <Hero />
        
        {/* <div className="bg-contain mx-4 pb-10" style={{backgroundImage: `url('/home/pattern.svg')`}}>
          <Capabilities />
          <Clients />
          <div className='relative -mx-4'>
            <Speciality />
            <img src="/home/pic/phone.png" alt="1" className="absolute -bottom-12 right-0 w-[26vw]"/>

          </div>
          <RecentWorks />
          <ContactUs />


        </div> */}
      </section>
    </>
  )
}

export default Home