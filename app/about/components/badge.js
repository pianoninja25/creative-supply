'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react"
import { useMediaQuery } from 'react-responsive'
import { IoLogoWhatsapp } from "react-icons/io";

const Badge = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const mediaQuery = useMediaQuery({
    query: '(min-width: 640px)'
  })

  useEffect(() => {
    setIsDesktop(mediaQuery)
  }, [mediaQuery])

  return (
    <section>
      {!isDesktop && (
        <div className="py-8 -mt-[60vw] rounded-[4rem] backdrop-blur-xl bg-white/20">
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
              </div>

            </div>
          </div>
        </div>
        
      )}




      {isDesktop && (
        <div className="w-full h-fit my-10">
          <div className="flex justify-center items-end p-12 text-5xl font-montserrat font-bold">
            <h2 className="w-52">CREATIVE <br />SUPPLY</h2>
            <Image className="w-10 h-10" src="/logo.png" alt="logo" width={100} height={100} priority />
          </div>

          <div className="flex justify-center w-full px-20">
            <span className="w-full text-center p-10 rounded-t-3xl bg-orange">cscommerce</span>
            <span className="w-full text-center p-10">people</span>
            <span className="w-full text-center p-10">cswork</span>
            <span className="w-full text-center p-10">LocalINA</span>
          </div>
          <div className="relative flex h-96 mx-20 rounded-3xl rounded-tl-none bg-orange">
            <Image src="/about/phone.png" alt="phone" width={200} height={200} className="w-52 h-auto mx-8" loading="lazy" />
            <div className="text-xl font-thin px-10">
              <p className="my-12">Lorem ipsum dolor sit amet, <b>consetetur</b> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              <p>Lorem ipsum dolor sit amet, <b>consetetur</b> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
              <button className="flex items-center gap-2 absolute bottom-10 right-10 w-fit h-fit px-4 py-2 text-base rounded-3xl font-montserrat font-bold text-orange bg-white">TEXT US NOW <IoLogoWhatsapp size={22} /></button>
            </div>
          </div>



          {/* HERO */}
          <div>
            <h1 className="font-bold text-center text-[2.5rem] p-[2vw] py-10 mt-24">Met With Our <span className="text-orange">Content Creator</span></h1>
            <div className="flex flex-col items-center gap-[2vw]">
              <div className="flex justify-center items-center gap-[3vw] p-8 py-14">
                <div className="relative h-60 w-60 shadow-right-only rounded-[2.4rem] bg-white">
                  <img src="/services/hero2.png" alt="1" className="absolute bottom-0 w-[60vw] grayscale brightness-75  contrast-150"/>
                </div>
                <div className="relative h-60 w-60 shadow-right-only rounded-[2.4rem] bg-white">
                  <img src="/services/hero2.png" alt="1" className="absolute bottom-0 w-[60vw] grayscale brightness-75  contrast-150"/>
                </div>
                <div className="relative h-60 w-60 shadow-right-only rounded-[2.4rem] bg-white">
                  <img src="/services/hero2.png" alt="1" className="absolute bottom-0 w-[60vw] grayscale brightness-75  contrast-150"/>
                </div>
                <div className="relative h-60 w-60 shadow-right-only rounded-[2.4rem] bg-white">
                  <img src="/services/hero2.png" alt="1" className="absolute bottom-0 w-[60vw] grayscale brightness-75  contrast-150"/>
                </div>
              </div>


              <div className='w-[90%] rounded-[2rem] pb-20 shadow-center-only bg-white'>
                <h1 className="font-bold text-center text-[2.5rem] p-[2vw] py-10">Our <span className="text-orange">Management</span></h1>
                <div className='flex flex-wrap justify-center gap-40 pr-10 mt-12 mr-10'>
                  <div className="relative w-48 h-40">
                    <div className="absolute right-4 w-32 h-full rounded-2xl shadow-right-only bg-orange" />
                    <img src="/services/hero2.png" alt="1" className="absolute -top-16 w-[10rem] grayscale brightness-75 contrast-150 z-10"/>
                    <div className="w-32 absolute bottom-2 -right-32">
                      <h3 className='mb-8 font-snowfun text-5xl text-orange z-50'>CEO</h3>
                      <p className='font-montserrat text-lg leading-tight'>Gilang <br />Ramadhan</p>
                    </div>
                  </div>
                  <div className="relative w-48 h-40">
                    <div className="absolute right-4 w-32 h-full rounded-2xl shadow-right-only bg-orange" />
                    <img src="/services/hero2.png" alt="1" className="absolute -top-16 w-[10rem] grayscale brightness-75 contrast-150 z-10"/>
                    <div className="w-32 absolute bottom-2 -right-32">
                      <h3 className='mb-8 font-snowfun text-5xl text-orange z-50'>COO</h3>
                      <p className='font-montserrat text-lg leading-tight'>Fahreza <br />Praditya</p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-wrap justify-center gap-40 pr-10 mt-20 mr-10'>
                  <div className="relative w-48 h-40">
                    <div className="absolute right-4 w-32 h-full rounded-2xl shadow-right-only bg-orange" />
                    <img src="/services/hero2.png" alt="1" className="absolute -top-16 w-[10rem] grayscale brightness-75 contrast-150 z-10"/>
                    <div className="w-32 absolute bottom-2 -right-32">
                      <h3 className='mb-8 font-snowfun text-5xl text-orange z-50'>CFO</h3>
                      <p className='font-montserrat text-lg leading-tight'>Aditya <br />Nazikra</p>
                    </div>
                  </div>
                  <div className="relative w-48 h-40">
                    <div className="absolute right-4 w-32 h-full rounded-2xl shadow-right-only bg-orange" />
                    <img src="/services/hero2.png" alt="1" className="absolute -top-16 w-[10rem] grayscale brightness-75 contrast-150 z-10"/>
                    <div className="w-32 absolute bottom-2 -right-32">
                      <h3 className='mb-8 font-snowfun text-5xl text-orange z-50'>CMO</h3>
                      <p className='font-montserrat text-lg leading-tight'>Fatchur <br />Rahman</p>
                    </div>
                  </div>
                </div>
                

              </div>                
            </div>

          </div>




          

        </div>
      )}

    </section>
  )
}

export default Badge