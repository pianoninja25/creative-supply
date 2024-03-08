import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative flex justify-evenly px-[2vw] py-[4vw] rounded-2xl"
      style={{backgroundImage: `linear-gradient(to bottom, #FFCC27 60%, white 75%, transparent 100%)`}}
    >
      <Image src="/hero1.svg" alt="hero1" width={200} height={200} className="w-[25vw]" loading="lazy" />
      <Image src="/hero2.svg" alt="hero2" width={300} height={300} className="w-[27vw] pt-[2vw]" loading="lazy" />
      <Image src="/hero3.svg" alt="hero3" width={200} height={200} className="w-[25vw]" loading="lazy" />


      <div className='absolute flex gap-[1vw] top-[6vw] left-[2vw] h-[4.5vw]'>
        <img src="/shape/more interesting.svg" alt="1" className='animate-pulse' />
        <img src="/shape/arrow-round-down.svg" alt="2" className='animate-spin-slow' />
      </div>

      <div className='absolute grid justify-center gap-[5vw] top-[20vw] left-0 w-[4vw]'>
        <img src="/shape/love.svg" alt="3" className='h-[2vw] animate-pulse' />
        <img src="/shape/arrow-up.svg" alt="4" className='h-[6vw] animate-bounce' />
      </div>

      <div className='absolute flex gap-[6vw] top-[2vw] left-[32vw] '>
        <img src="/shape/sstt it grow by it self.svg" alt="5" className='h-[5vw] animate-pulse' />
        <img src="/shape/rocket.svg" alt="5" className='h-[5vw] mt-[2vw] animate-bounce' />
      </div>

      <div className='absolute flex top-[6vw] -right-[1vw] '>
        <img src="/shape/arrow-bottom.svg" alt="5" className='h-[8vw] animate-bounce' />
        <img src="/shape/comment.svg" alt="5" className='h-[5vw] mt-[10vw] animate-pulse' />
      </div>

      <div className='absolute flex top-[30vw] right-[1vw] '>
        <img src="/shape/cursor.svg" alt="5" className='h-[3vw] animate-bounce' />
        <img src="/shape/shared-876k.svg" alt="5" className='h-[7vw] mt-[2vw] animate-pulse' />
      </div>

      <div className='absolute flex justify-around gap-[8vw] w-full bottom-0'>
        <img src="/shape/make it organic.svg" alt="5" className='h-[4vw] animate-bounce' />
        <img src="/shape/not-ads.svg" alt="5" className='h-[4vw] mt-[4vw] animate-bounce' />
        <img src="/shape/brand-statification.svg" alt="5" className='h-[6vw] -mt-[2vw] animate-pulse' />
      </div>
    </section>
  )
}

export default Hero