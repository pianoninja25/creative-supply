import React from 'react'

const Speciality = () => {
  return (
    <div className='grid place-items-center gap-4 p-8 py-4 pt-16 m-8 rounded-lg shadow-md bg-white'>
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
  )
}

export default Speciality