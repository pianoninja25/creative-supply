'use client'
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useMediaQuery } from 'react-responsive'




const Capabilities = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const mediaQuery = useMediaQuery({
    query: '(min-width: 640px)'
  })

  useEffect(() => {
    setIsDesktop(mediaQuery)
  }, [mediaQuery])


  return (
    <section className="pb-20">
      {!isDesktop && (
        <div className="grid sm:hidden">
          <h1 className="w-64 p-4 font-bold text-3xl">WHAT IS OUR POWER ?</h1>
          <div className="flex flex-col items-center w-full h-full py-4 rounded-lg bg-orange">
            <div className="flex gap-[4vw] px-4 py-2 pb-3">
              <h1 className="w-[40%] font-bold text-lg text-white leading-tight">Ideas are developed from creators</h1>
              <p className="w-full font-montserrat font-light text-xs text-stone-100">Ideas are developed from macro to mega scale creators, so they have a different value. Because there is a fresh touch to the type of content that is usually created exclusively and full of fresh idealism</p>
            </div>
            <button className="w-52 text-sm font-bold rounded-full pb-1 pt-0.5 shadow-md text-orange bg-slate-100 hover:text-white hover:bg-yellow">view our creators</button>
          </div>

          <div className="w-full h-[34vw] rounded-lg bg-cover bg-[top_-1rem_left_8%]" style={{backgroundImage: `url('/home/team-photo.png')`}} />
          
          <div className="flex flex-col items-center w-full h-full py-4 rounded-lg bg-stone-100 font-montserrat">
            <h1 className="font-bold text-lg text-center text-sky-700">Creative Ecosystem</h1>
            <div className="flex justify-center items-center gap-6 w-full pl-20 pr-10 py-2 mb-1">
              <Image src="/logo.png" alt="logo" width={20} height={4} loading="lazy" className="h-16 w-16 p-1" />
              <p className="w-full text-xs">The interconnected network of creative services in our ecosystem is our greatest strength</p>
            </div>
            <button className="w-52 text-sm font-bold rounded-full pb-1 pt-0.5 shadow-md text-white bg-orange hover:bg-yellow">view our ecosystem</button>
          </div>

          <div className="flex flex-col items-center w-full h-full p-4 rounded-lg bg-orange font-montserrat ">
            <div className="flex items-baseline gap-4 p-2 mb-2">
              <p className="w-[55%] text-xs font-light text-white">Our team has produced various kinds of creative content ranging from digital scale advertisements to TVCs and much more</p>
              <h1 className="w-[45%] font-bold text-lg text-white leading-tight">Supported by a qualified production team</h1>
            </div>
            <button className="w-52 text-sm font-bold rounded-full pb-1 pt-0.5 shadow-md text-orange bg-slate-100 hover:text-white hover:bg-yellow">view our team</button>
          </div>


        </div>
      )}


      {isDesktop && (
        <div>
          <div className="flex mx-48 px-10">
            <div className="relative w-full p-4 px-8 rounded-[3rem] bg-orange">
              <h1 className="p-4 font-bold text-4xl">What is our <span className="text-white">power ?</span></h1>
              <div className="flex gap-[4vw] px-4 py-10">
                <h1 className="w-[40%] font-bold text-3xl text-white leading-none">Ideas are developed from creators</h1>
                <p className="w-full font-montserrat font-light leading-6 text-stone-100">Ideas are developed from macro to mega scale creators, so they have a different value. Because there is a fresh touch to the type of content that is usually created exclusively and full of fresh idealism</p>
              </div>
              <button className="absolute right-6 bottom-4 w-40 font-semibold rounded-full pb-1 pt-0.5 text-orange bg-slate-100 hover:bg-yellow">view our creators</button>
            </div>

            <div className="self-end w-4/6 h-[14vw] rounded-[2rem] bg-cover " style={{backgroundImage: `url('/home/team-photo.png')`}} />
          </div>

          <div className="flex gap-4 mx-48 px-10 pt-4">
            <div className="relative w-[48%] p-4 rounded-[2rem] bg-stone-100">
              <h1 className="font-bold text-3xl text-center text-sky-700">Creative Ecosystem</h1>
              <div className="flex justify-center items-center gap-6 w-full pl-20 pr-10 py-4 mb-6">
                <Image src="/logo.png" alt="logo" width={200} height={200} loading="lazy" className="h-24 w-24 p-1" />
                <p className="w-full font-montserrat font-light leading-8 text-stone-700">The interconnected network of creative services in our ecosystem is our greatest strength</p>
              </div>
              <button className="absolute right-6 bottom-4 w-44 font-semibold rounded-full pb-1 pt-0.5 text-stone-100 bg-orange hover:bg-yellow">view our ecosystem</button>
            </div>
            <div className="relative w-[52%] rounded-[2rem] bg-orange">
              <div className="flex items-baseline gap-4 p-8 mb-2">
                <p className="w-[50%] font-montserrat font-light leading-8 text-white">Our team has produced various kinds of creative content ranging from digital scale advertisements to TVCs and much more</p>
                <h1 className="w-[50%] font-bold text-3xl text-white leading-tight">Supported by a qualified production team</h1>
              </div>
              <button className="absolute right-6 bottom-4 w-40 font-semibold rounded-full pb-1 pt-0.5 text-orange bg-slate-100 hover:bg-yellow">view our team</button>
            </div>
          </div>

        </div>
      )}
    </section>
  )
}

export default Capabilities