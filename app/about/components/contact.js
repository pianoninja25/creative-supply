import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-8 m-8 shadow-center-only rounded-[2.2rem] lg:hidden'>
      <div className='relative'>
        <h3 className='w-52 font-montserrat text-xl font-bold px-6 py-2 rounded-full text-white bg-orange'>Contact Us</h3>
        <img src="/home/pic/avatar.png" alt="avatar" className="absolute bottom-0 -right-4 w-[18vw]"/>

      </div>
      <p className='font-montserrat font-bold text-2xl p-2'>+62 811-1200-3998</p>
      <p className='font-montserrat font-bold text-lg'>operation@creativesupply.id</p>
      <p className='text-sm font-montserrat'>Jl. Bintara No. 23, Jakasampurna</p>
      <p className='text-sm font-montserrat'> Bekasi Barat, Jawa Barat 17135 </p>
      
    </div>
  )
}

export default Contact