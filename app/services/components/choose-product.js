import React from 'react'

const ChooseProduct = () => {
  return (
    <section className="mt-[2vw]">
      <h1 className="font-bold text-4xl p-[2vw] py-12 text-center uppercase md:normal-case">Choose the product</h1>

      <div className="grid place-items-center w-full px-[1vw] md:p-0 rounded-xl md:rounded-3xl md:w-fit md:mx-[8vw] bg-stone-100">
        <div className="relative -top-4 w-[85vw] md:w-full py-[4vw] px-2 md:p-[2vw] text-sm md:text-3xl shadow-md rounded-full md:rounded-3xl bg-orange">
          <h1 className="indent-4 font-semibold text-white">KOL Campaign Specialized</h1>
          <img src="/home/pic/avatar.png" alt="avatar" className="absolute bottom-0 -right-2 w-[22vw] md:w-[12vw]"/>
        </div>
        
        <div className="relative flex flex-col items-center -top-12 -mb-10 md:-mb-6 md:px-[2vw]">
          {/* Image */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-[2vw] pb-4">
            <div className="bg-contain bg-bottom bg-no-repeat" style={{backgroundImage:`url(/services/hero-layer.png)`}}>
              <img src="/services/hero2.png" alt="1" className="w-[50vw] md:w-[26vw]"/>
            </div>
            <div className="w-full px-10 md:px-0 md:mt-24">  
              {/* Description */}
              <p className="text-left text-xl font-normal max-md:text-md max-md:font-montserrat max-md:font-light max-md:px-4">Lorem ipsum dolor sit amet, <b>consetetur</b> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volupta. At vero eos et</p>
              <p className="max-md:hidden text-left text-xl font-normal mt-8">Lorem ipsum dolor sit amet, <b>consetetur</b> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volupta. At vero eos et</p>

            </div>
          </div>          
          <button className='md:self-end w-48 font-montserrat text-center p-1 px-4 shadow-md rounded-full text-white bg-orange'>
            <h2>FIND BEST DEAL</h2>
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center gap-4 p-4 pb-10 md:p-8 bg-stone-100 md:bg-white md:mx-[12vw]'>
        <button className='w-full font-montserrat text-left px-8 py-2 shadow-lg rounded-full md:text-2xl md:px-14 md:py-3 bg-stone-100 text-orange'>
          <h2>Video Production</h2>
        </button>
        <button className='w-full font-montserrat text-left px-8 py-2 shadow-lg rounded-full md:text-2xl md:px-14 md:py-3 bg-stone-100 text-orange'>
          <h2>Short Video Content</h2>
        </button>
      </div>
      

    </section>
  )
}

export default ChooseProduct