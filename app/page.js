import Image from 'next/image'
import React from 'react'
import Hero from './home/components/hero'
import Title from './home/components/title'
import Capabilities from './home/components/capabilities'
import Clients from './home/components/clients'
import Speciality from './home/components/speciality'
import RecentWorks from './home/components/recent-works'
import ContactUs from './_components/contact-us'
import Footer from './_components/footer'

const Home = () => {
  return (
    <main className="landscape:h-[50rem] h-full">
      <section>
        <div className="w-full h-[60vh] sm:h-screen bg-cover bg-center bg-no-repeat bg-[url('/home/banner/banner.jpg')] lg:flex lg:bg-contain lg:bg-[center_left_8%] lg:bg-repeat-x lg:bg-[url('/home/banner/bg1.jpg')]">
          <div className="relative flex flex-col lg:flex-row justify-center gap-4 w-full h-full pl-14 pt-20 bg-black/60">
            <h1 className="font-bold text-[14vw] -tracking-morewidest leading-[12vw] text-stone-100 
              lg:w-full lg:h-fit lg:mx-[6vw] lg:my-[10vw] lg:text-[8vw] lg:leading-[7vw]">
              CREATIVE SUPPLY
            </h1>
            <p className="w-full h-fit font-snowfun text-[10vw] lg:text-[4vw] leading-[6vw] lg:leading-[2.4vw] lg:mt-[18vw] lg:-ml-[12vw] text-orange animate-bounce2">we create <br /> your needs</p>
            <div className="absolute bottom-8 right-10 lg:bottom-[4vw] lg:-right-[24vw] flex items-center gap-1 p-2 hover:cursor-pointer">
              <Image src="/home/arrow-yellow.svg" alt="logo" width={200} height={200} className="w-4 h-auto animate-pulse" loading="lazy" />
              <Image src="/home/arrow-yellow.svg" alt="logo" width={200} height={200} className="w-4 h-auto animate-pulse" loading="lazy" />
              <Image src="/home/arrow-white.svg" alt="logo" width={200} height={200} className="w-6 h-auto animate-pulse" loading="lazy" />
            </div>
          </div>  
          <div className="w-0 lg:w-[50%] h-full bg-cover " style={{backgroundImage:`url(/home/banner/bg2.jpg)`}}></div>       
        </div>
      </section>
      <Title />
      <Hero />
      <Capabilities />
      
      <div className="bg-contain mx-4 pb-10 lg:mx-32 lg:bg-cover" style={{backgroundImage: `url('/home/pattern.svg')`}}>
        <Clients />
        <div className='relative -mx-4'>
          <Speciality />
          <img src="/home/pic/phone.png" alt="1" className="absolute -bottom-12 right-0 w-[26vw] sm:w-[18vw]"/>

        </div>
        <RecentWorks />
        <ContactUs />
      </div>


      <Footer />

    </main>
  )
}

export default Home