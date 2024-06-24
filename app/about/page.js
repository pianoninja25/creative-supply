import React from 'react'
import Instagram from '../ourworks/components/instagram'
import ProductionTeam from './components/production-team'
import CLevel from './components/clevel'

const About = () => {
  return (
    <>
      <section className="flex h-[32rem] sm:h-screen landscape:h-[50rem] bg-black">
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



      <section className="-mt-[22vw] rounded-[4rem] backdrop-blur-md bg-white/20">
        <div className="w-full h-full p-[10vw] rounded-3xl">

          {/* HERO TOP */}
          <div>
            <h1 className="font-bold text-4xl p-[2vw] py-10 text-center">MET WITH <br />OUR CONTENT CREATOR</h1>
            <div className="flex flex-col items-center gap-[2vw]">
              {/* Image */}
              <img src="/services/hero.jpg" alt="1" className="w-[55vw] rounded-3xl shadow-lg"/>
              
              
              
              
            </div>

          </div>
        </div>

      </section>



      <CLevel />
      <ProductionTeam />
      <Instagram />
    </>




  )
}

export default About