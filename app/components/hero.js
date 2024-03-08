import Image from 'next/image'
import { FaRegSmile } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative flex justify-evenly items-center px-[2vw] py-[4vw] rounded-2xl"
      style={{backgroundImage: `linear-gradient(to bottom, #FFCC27 60%, white 75%, transparent 100%)`}}
    >
      <Image src="/hero1.png" alt="hero1" width={300} height={300} className="w-[25vw] h-[45vw]" loading="lazy" />
      <Image src="/hero2.png" alt="hero2" width={300} height={500} className="w-[26vw] pt-[2vw]" loading="lazy" />
      <Image src="/hero3.png" alt="hero3" width={300} height={300} className="w-[25vw] h-[45vw]" loading="lazy" />


      <div className='absolute flex gap-[1vw] top-[2vw] left-[4vw] h-[4.5vw]'>
        <img src="/shape/more interesting.svg" alt="1" className='animate-pulse' />
        <img src="/shape/arrow-round-down.svg" alt="2" className='animate-spin-slow' />
      </div>

      <div className='absolute grid justify-center gap-[5vw] top-[20vw] left-0 w-[4vw]'>
        <img src="/shape/love.svg" alt="3" className='h-[2vw] animate-pulse' />
        <img src="/shape/arrow-up.svg" alt="4" className='h-[6vw] animate-bounce' />
      </div>

      <div className='absolute flex gap-[6vw] top-[1vw] left-[32vw] '>
        <img src="/shape/sstt it grow by it self.svg" alt="5" className='h-[5vw] animate-pulse' />
        <img src="/shape/rocket.svg" alt="6" className='h-[5vw] mt-[2vw] animate-bounce' />
      </div>

      <div className='absolute flex top-[6vw] -right-[1vw] '>
        <img src="/shape/arrow-bottom.svg" alt="7" className='h-[8vw] animate-bounce' />
        <img src="/shape/comment.svg" alt="8" className='h-[5vw] mt-[10vw] animate-pulse' />
      </div>

      <div className='absolute flex top-[30vw] right-[1vw] '>
        <img src="/shape/cursor.svg" alt="9" className='h-[3vw] animate-bounce' />
        <img src="/shape/shared-876k.svg" alt="10" className='h-[7vw] mt-[2vw] animate-pulse' />
      </div>

      <div className='absolute w-full flex justify-around gap-[8vw] pl-[2vw] -bottom-[8vw]'>
        <img src="/shape/make it organic.svg" alt="11" className='h-[4vw] animate-bounce' />
        <img src="/shape/not-ads.svg" alt="12" className='h-[4vw] mt-[4vw] animate-bounce' />
        <img src="/shape/brand-statification.svg" alt="13" className='h-[8vw] -mt-[4vw] animate-pulse' />
      </div>
      <div className='absolute w-full flex justify-between  gap-[8vw] px-[2vw] -bottom-[2vw]'>
        <img src="/shape/arrow-round-up.svg" alt="11" className='h-[6vw] animate-bounce' />
        <img src="/shape/arrow-circle-up.svg" alt="12" className='h-[6vw] mt-[2vw] animate-bounce' />
        <FaRegSmile color='#FFA800' size={18} className='animate-spin-slow' />
      </div>
      <img src="/shape/half-circle.png" alt="11" className='absolute right-0 -bottom-[20vw] h-[20vw] opacity-80' />
    </section>
  )
}

export default Hero