'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'


const Speciality = () => {
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
        <div className='grid place-items-center gap-4 p-8 py-4 pt-16 m-8 rounded-lg shadow-md bg-white sm:hidden'>
          <img src="/home/pic/car.svg" alt="car" className='h-[20vw] animate-pulse' />
          <p className='w-60 text-center font-montserrat'>Like build a car, content also need precision, patient, and good part to create the best one</p>
          <div className='relative w-full rounded-xl shadow-md bg-orange'>
            <h2 className='p-2 px-6 text-center font-bold text-2xl text-white '>KOL Campaign Specialized</h2>
            <img src="/home/pic/avatar.png" alt="1" className="absolute bottom-0 -right-8 w-[22vw]"/>
          </div>
          <h2 className='w-full p-1 px-6 text-center rounded-full shadow-md text-orange bg-stone-100'>Video Production</h2>
          <h2 className='w-full p-1 px-6 text-center rounded-full shadow-md text-orange bg-stone-100'>Short Video Content</h2>
          <button className='pb-1 px-6 m-4 rounded-xl text-orange bg-stone-100'>more</button>

          <div className='absolute top-[4vw] right-[16%]'>
            <p className="font-snowfun text-[6vw] leading-[6vw] text-orange animate-bounce2">Build Content</p>
            <img src="/home/shape/arrow-bottom-black.svg" alt="2" className='h-[6vw] animate-pulse' />
          </div>
        </div>
      )}

      {isDesktop && (
        <div className='grid place-items-center gap-4 p-8 py-4 pt-16 mx-28 mt-20 rounded-[3rem] shadow-md bg-white'>
          <div className='flex justify-between w-full px-20'>
            <div className='w-full'>
              <h1 className="text-left font-bold text-5xl">What is our <br /> speciality?</h1>
              <p className='text-left font-montserrat text-lg pt-6'>Like build a car, content also need precision, patient, and good part to create the best one</p>
            </div>
            <div className='w-full'>
              <img src="/home/pic/car.svg" alt="car" className='h-[10vw] px-20 animate-pulse' />
              <div className='absolute top-[3vw] right-[12%]'>
                <p className="font-snowfun text-[3vw] leading-[2vw] text-orange animate-bounce2">Build Content</p>
                <img src="/home/shape/arrow-bottom-black.svg" alt="2" className='h-[4vw] mbanimate-pulse' />
              </div>
            </div>

          </div>
          <div className='relative w-[60%] rounded-xl shadow-md mt-10 bg-orange'>
            <h2 className='p-6 px-10 font-bold text-3xl text-white '>KOL Campaign Specialized</h2>
            <img src="/home/pic/avatar.png" alt="1" className="absolute bottom-0 right-0 w-[10vw]"/>
          </div>
          <h2 className='w-[60%] p-4 px-14 text-2xl rounded-full shadow-md text-orange bg-stone-100'>Video Production</h2>
          <h2 className='w-[60%] p-4 px-14 text-2xl rounded-full shadow-md text-orange bg-stone-100'>Short Video Content</h2>
          <button className='pt-1 pb-2 px-10 m-8 text-xl rounded-full text-orange bg-stone-100'>more</button>

          
        </div>
      )}
    </section>
  )
}

export default Speciality