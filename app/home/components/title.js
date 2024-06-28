import Image from 'next/image'
import React from 'react'

const Title = () => {
  return (
    <>
      <div className="relative w-full h-full py-10 px-12 pb-40 -top-4 rounded-xl bg-orange sm:hidden">
        <Image src="/home/pic/ideas.png" alt="logo" width={200} height={200} className="absolute -top-14 left-4 h-auto w-32 z-10" loading="lazy" />
        <h1 className="w-full py-4 font-extrabold text-3xl text-wrap">YOUR MOVEMENT AND DIGITAL SUPPORT</h1>
        <h1 className="w-full text-base font-light text-wrap text-white">Lorem ipsum dolor sit amet, <span className="font-bold">consectetur</span> adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh.</h1>
      </div>


    </>
  )
}

export default Title