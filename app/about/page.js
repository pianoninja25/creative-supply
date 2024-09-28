import React from 'react'
import Instagram from '../ourworks/components/instagram'
import ProductionTeam from './components/production-team'
import CLevel from './components/clevel'
import Contact from './components/contact'
import Badge from './components/badge'
import Footer from '../_components/footer'

const About = () => {
  return (
    <main className="md:mx-28">
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

      <Badge /> 
      {/* <CLevel /> */}
      <ProductionTeam />
      <Contact />
      <Instagram />
      <Footer />
    </main>




  )
}

export default About