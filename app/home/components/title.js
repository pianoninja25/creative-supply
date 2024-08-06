'use client'
import React, { useState, useEffect } from "react"
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

const Title = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const mediaQuery = useMediaQuery({
    query: '(min-width: 640px)'
  })

  useEffect(() => {
    setIsDesktop(mediaQuery)
  }, [mediaQuery])


  return (
    <>

      {!isDesktop && (
        <div className="relative w-full h-full py-10 px-12 pb-40 -top-4 rounded-xl bg-orange sm:hidden">
          <Image src="/home/pic/ideas.png" alt="logo" width={200} height={200} className="absolute -top-14 left-4 h-auto w-32 z-10" loading="lazy" />
          <h1 className="w-full py-4 font-extrabold text-3xl text-wrap">YOUR MOVEMENT AND DIGITAL SUPPORT</h1>
          <h1 className="w-full text-base font-light text-wrap text-white">Lorem ipsum dolor sit amet, <span className="font-bold">consectetur</span> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh.</h1>
        </div>
      )}
      {isDesktop && (
        <section className="flex justify-evenly items-center h-80 mx-48 bg-cover bg-center" style={{backgroundImage: `url('/home/pattern.svg')`}}>
          <div className="w-fit pl-4">
            <h1 className="font-montserrat font-bold text-5xl">Your <span className="text-orange">movement</span></h1>
            <h1 className="font-montserrat font-bold text-5xl">and digital</h1>
            <h1 className="font-montserrat font-bold text-5xl">support</h1>
          </div>
          <div className="w-1/2 pl-10">
            <h1 className="font-montserrat text-xl">Lorem ipsum dolor sit amet, <b>consetetur</b> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos accusam et justo duo dolores et ea rebum.</h1>
          </div>
        </section>
      )}
      
    </>
  )
}

export default Title