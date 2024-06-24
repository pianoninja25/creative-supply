import Image from 'next/image'
import React from 'react'

const CLevel = () => {
  return (
    <section className='mx-10 shadow-xl rounded-lg'>
      <div className='grid gap-8 justify-center p-2 pb-8'>
        <div className='flex gap-8'>
          <Image src="/about/production-team/1.jpg" alt="1" width={300} height={300} className="rounded-3xl w-[28vw] px-2" loading="lazy" unoptimized />
          <div>
            <h3 className='font-snowfun text-5xl text-orange'>CEO</h3>
            <h3 className='font-montserrat'>Gilang <br /> Ramadhan</h3>
          </div>
        </div>
        <div className='flex gap-8'>
          <Image src="/about/production-team/2.jpg" alt="1" width={300} height={300} className="rounded-3xl w-[28vw] px-2" loading="lazy" unoptimized />
          <div>
            <h3 className='font-snowfun text-5xl text-orange'>COO</h3>
            <h3 className='font-montserrat'>Fahreza <br /> Praditya</h3>
          </div>
        </div>
        <div className='flex gap-8'>
          <Image src="/about/production-team/3.jpg" alt="1" width={300} height={300} className="rounded-3xl w-[28vw] px-2" loading="lazy" unoptimized />
          <div>
            <h3 className='font-snowfun text-5xl text-orange'>CFO</h3>
            <h3 className='font-montserrat'>Aditya <br /> Nazikra</h3>
          </div>
        </div>
        <div className='flex gap-8'>
          <Image src="/about/production-team/4.jpg" alt="1" width={300} height={300} className="rounded-3xl w-[28vw] px-2" loading="lazy" unoptimized />
          <div>
            <h3 className='font-snowfun text-5xl text-orange'>CMO</h3>
            <h3 className='font-montserrat'>Fatchur <br /> Rahman</h3>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CLevel