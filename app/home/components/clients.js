'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { FaPlay } from "react-icons/fa6"
import { useMediaQuery } from 'react-responsive'
// import { RiPlayFill, RiPlayReverseMiniFill } from "react-icons/ri";



const Clients = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const mediaQuery = useMediaQuery({
    query: '(min-width: 640px)'
  })

  useEffect(() => {
    setIsDesktop(mediaQuery)
  }, [mediaQuery])



  const [currentIndex, setCurrentIndex] = useState(1)

  const prevSlide = () => {
    const isFirst = currentIndex === 1
    const newIndex = isFirst ? 2 : currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLast = currentIndex === 2
    const newIndex = isLast ? 1 : currentIndex + 1
    setCurrentIndex(newIndex)
  }


  

  return (
    <section>
      {!isDesktop && (
        <div className="relative grid -inset-4 w-screen h-full py-2 bg-orange sm:hidden">
          <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-lg  text-center">OUR CLIENT</h1>
          <div className="flex flex-wrap p-4">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="w-1/4 p-2 flex justify-center items-center transition-transform duration-500 ease-in-out">
                <Image src={`/home/clients-logo/${currentIndex == 1 ? i+1 : i+8 }.png`} alt="logo" width={100} height={100} loading="lazy" className='w-auto h-auto' />
              </div>
            ))}
          </div>

          <div className='flex justify-center gap-6 py-4'>
            <div className='cursor-pointer hover:scale-110'>
              <FaPlay color='white' className='transform scale-x-[-1] drop-shadow-md' onClick={prevSlide} />
            </div>
            <div className='cursor-pointer hover:scale-110'>
              <FaPlay color='white' className='drop-shadow-md' onClick={nextSlide} />
            </div>
          </div>
        </div> 
      )}


      {isDesktop && (
        <div className='w-full px-24'>
          <div className='relative w-full rounded-[3rem] p-8 bg-orange'>
            <h1 className="font-bold text-3xl text-center">Our Client ?</h1>
            <div className="flex flex-wrap p-8 px-40">
              {Array.from({ length: 16 }, (_, i) => (
                <div key={i} className="w-1/4 p-2 flex justify-center items-center transition-transform duration-500 ease-in-out">
                  <Image src={`/home/clients-logo/${currentIndex == 1 ? i+1 : i+16 }.png`} alt="logo" width={120} height={120} loading="lazy" className='w-auto h-auto' />
                </div>
              ))}
            </div>
            
            <Image src={`/home/clients-logo/more.svg`} alt="logo" width={50} height={50} loading="lazy" className='w-full h-10 mx-auto' />
            
            <div className='absolute top-[50%] left-10 cursor-pointer hover:scale-110'>
              <FaPlay color='white' className='transform scale-x-[-1] drop-shadow-md' onClick={prevSlide} />
            </div>
            <div className='absolute top-[50%] right-10 cursor-pointer hover:scale-110'>
              <FaPlay color='white' className='drop-shadow-md' onClick={nextSlide} />
            </div>
          </div>

          
        </div>
      )}
    </section>
  )
}

export default Clients