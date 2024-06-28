import React from 'react'
import Instagram from '../ourworks/components/instagram'
import ProductionTeam from './components/production-team'
import CLevel from './components/clevel'
import Contact from './components/contact'

const About = () => {
  return (
    <>
      <section className="flex h-[90vh] sm:h-screen landscape:h-[50rem] bg-black">
        <div className="flex items-center justify-center h-full w-full bg-cover bg-center bg-no-repeat md:bg-repeat-x text-[2em]" style={{backgroundImage:`url(/about/banner.jpg)`}}>
        
        <div className="text-center">
            <h1 className="font-bold text-[14vw] -tracking-morewidest leading-[12vw] text-stone-100">met with</h1>
            <div className="relative flex">
              <h1 className="font-bold text-[14vw] -tracking-morewidest leading-[12vw] text-stone-100">us</h1>
              <p className="font-snowfun text-[10vw] px-4 font-extralight leading-[6vw] text-white animate-pulse">we <span className='text-orange'>create</span> <br /> your content</p>
            </div>
          </div>
        </div>
        
      </section>



      <section className="py-8 -mt-[60vw] rounded-[4rem] backdrop-blur-xl bg-white/20">
        <div className='grid justify-center gap-8'>
          <div className='text-center text-white font-montserrat text-3xl'>People</div>
          <div className='text-center text-white font-montserrat text-3xl'>cswork</div>
          <div className='text-center text-white font-montserrat text-3xl'>cscommerce</div>
          <div className='text-center text-white font-montserrat text-3xl'>LocalINA</div>
        </div>
        <div className="w-full h-full p-[10vw] rounded-3xl">

          {/* HERO TOP */}
          <div>
            <h1 className="font-snowfun text-6xl p-[2vw] py-10">Met With <br /> Our Content Creator</h1>
            <div className="flex flex-col items-center gap-[2vw]">
              <div className="flex justify-center items-center gap-[2vw] p-8">
                <div className="relative h-60 w-60 shadow-right-only rounded-[2.4rem] bg-white">
                  <img src="/services/hero2.png" alt="1" className="absolute bottom-0 w-[60vw]"/>
                </div>
              </div>


              <div className='w-full rounded-[2rem] pb-20 shadow-center-only bg-white'>
                <h1 className="font-snowfun text-center text-5xl p-[2vw] py-10">Our Management</h1>
                <div className='flex flex-wrap justify-center gap-4 space-y-16 p-2'>
                  <div className="relative h-40 w-40 shadow-right-only rounded-2xl ml-6 bg-orange">
                    <h3 className='font-snowfun text-5xl text-center text-white absolute z-50 top-4 right-8'>CEO</h3>
                    <img src="/services/hero2.png" alt="1" className="absolute -bottom-1 right-7 w-[60vw] grayscale brightness-75 contrast-150 z-10"/>
                    <p className='absolute -bottom-8 -left-4 font-montserrat text-lg'>Gilang Ramadhan</p>
                  </div>
                  <div className="relative h-32 w-32 shadow-right-only rounded-2xl ml-2 bg-orange">
                    <h3 className='font-snowfun text-5xl text-center text-white absolute z-50 top-4 right-1'>CFO</h3>
                    <img src="/services/hero2.png" alt="1" className="absolute -bottom-1 right-2 w-[60vw] grayscale brightness-75 contrast-150 z-10"/>
                    <p className='absolute -bottom-12 right-2 text-right font-montserrat'>Aditya <br /> Nazikra</p>
                  </div>
                  <div className="relative h-32 w-32 shadow-right-only rounded-2xl ml-2 bg-orange">
                    <h3 className='font-snowfun text-5xl text-center text-white absolute z-50 top-4 right-1'>COO</h3>
                    <img src="/services/hero2.png" alt="1" className="absolute -bottom-1 right-2 w-[60vw] grayscale brightness-75 contrast-150 z-10"/>
                    <p className='absolute -bottom-12 right-2 text-right font-montserrat'>Fahreza <br /> Praditya</p>
                  </div>
                  <div className="relative h-32 w-32 shadow-right-only rounded-2xl ml-2 bg-orange">
                    <h3 className='font-snowfun text-5xl text-center text-white absolute z-50 top-4 right-1'>CMO</h3>
                    <img src="/services/hero2.png" alt="1" className="absolute -bottom-1 right-2 w-[60vw] grayscale brightness-75 contrast-150 z-10"/>
                    <p className='absolute -bottom-12 right-2 text-right font-montserrat'>Fatchur <br /> Rahman</p>
                  </div>
                </div>

              </div>


              <div>

              </div>
            
              {/* Image */}
              {/* <img src="/services/hero.jpg" alt="1" className="w-[55vw] rounded-3xl shadow-lg"/> */}
              
              
              
              
            </div>

          </div>
        </div>

      </section>



      {/* <CLevel /> */}
      <ProductionTeam />
      <Contact />
      <Instagram />
    </>




  )
}

export default About