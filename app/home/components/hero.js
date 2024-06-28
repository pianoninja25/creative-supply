'use client'
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import { FaRegSmile } from "react-icons/fa"

function Hero() {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: false,
  //   centerPadding: "40px",
  //   slidesToShow: 1,
  //   initialSlide: 2,
  //   speed: 500
  // }
  return (
    <div className="-top-36 relative">
      <div className="mb-32 mx-8 h-[18rem] rounded-2xl text-transparent" style={{backgroundImage: `linear-gradient(to bottom, #FFCC27 30%, white 90%, transparent 100%)`}}>
        <div className="flex items-center py-16">
          <Image src="/home/hero/1.svg" alt="hero1" width={300} height={300} className="absolute -left-[6%] rounded-xl w-[55vw] mx-auto" loading="lazy" unoptimized />
          <Image src="/home/hero/3.svg" alt="hero1" width={300} height={300} className="z-10 rounded-xl w-[64vw] mx-auto" loading="lazy" unoptimized />

        </div>
        

      </div>
      {/* <Slider {...settings} className="absolute -top-80 flex justify-evenly items-center rounded-2xl"
        style={{backgroundImage: `linear-gradient(to bottom, #FFCC27 60%, white 75%, transparent 100%)`}}
      >
        <Image src="/home/hero/1.svg" alt="hero1" width={300} height={300} className="rounded-xl w-[24vw] px-2" loading="lazy" unoptimized />
        <Image src="/home/hero/2.svg" alt="hero1" width={200} height={200} className="rounded-xl px-2" loading="lazy" unoptimized />
        <Image src="/home/hero/3.svg" alt="hero1" width={300} height={300} className="rounded-xl w-[24vw] px-2" loading="lazy" unoptimized />
      </Slider> */}


      <div className='grid place-items-end absolute top-3 left-14 z-10'>
        <p className="font-snowfun text-[6vw]  text-white">more interesting</p>
        <img src="/home/shape/arrow-round-down.svg" alt="arrow" className='w-8' />
      </div>

      <div className='absolute top-[60%] right-4 flex flex-col gap-8 h-full z-10'>
        <img src="/home/shape/love.svg" alt="3" className='h-[4vw]' />
        <img src="/home/shape/arrow-up.svg" alt="4" className='h-[6vw]' />
        <p className="font-snowfun text-[6vw] text-orange -rotate-90 py-8">grow and growww</p>
      </div>

      <div className='absolute flex gap-[6vw] top-[2vw] left-60 z-10'>
        <img src="/home/shape/rocket.svg" alt="6" className='w-[8vw] mt-[2vw]' />
      </div>

      <div className='absolute flex gap-[6vw] top-[170%] right-24 z-10'>
        <img src="/home/shape/cursor.svg" alt="6" className='w-[6vw]' />
      </div>

      {/* <div className='absolute flex top-[6vw] -right-[1vw] '>
        <img src="/home/shape/arrow-bottom.svg" alt="7" className='h-[8vw] animate-bounce' />
        <img src="/home/shape/comment.svg" alt="8" className='h-[5vw] mt-[10vw] animate-pulse' />
      </div>

      <div className='absolute flex top-[30vw] right-[1vw] '>
        <img src="/home/shape/cursor.svg" alt="9" className='h-[3vw] animate-bounce' />
        <img src="/home/shape/shared-876k.svg" alt="10" className='h-[7vw] mt-[2vw] animate-pulse' />
      </div>

      <div className='absolute left-[1vw] -bottom-[2vw]'>
        <img src="/home/shape/arrow-round-up.svg" alt="11" className='h-[6vw] animate-pulse' />
        <img src="/home/shape/make it organic.svg" alt="11" className='h-[5vw] m-[2vw] animate-bounce' />
      </div>
      
      <div className='absolute left-[40vw] -bottom-[8vw]'>
        <img src="/home/shape/arrow-circle-up.svg" alt="11" className='h-[6vw] m-[2vw] mt-0 animate-pulse' />
        <img src="/home/shape/not-ads.svg" alt="11" className='h-[5vw] animate-bounce' />
      </div>
      
      <div className='absolute flex gap-[2vw] right-[2vw] -bottom-[2vw]'>
        <img src="/home/shape/brand statification.svg" alt="13" className='h-[9vw] mt-[2vw] animate-pulse' />
        <FaRegSmile color='#FFA800' size={20} className='animate-spin-slow' />
      </div> */}
    </div>
  )
}

export default Hero
