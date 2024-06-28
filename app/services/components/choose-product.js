import React from 'react'

const ChooseProduct = () => {
  return (
    <section className="pt-[2vw]">
      <h1 className="font-bold text-4xl p-[2vw] py-12 text-center ">CHOOSE <br />THE PRODUCT</h1>

      <div className="grid place-items-center w-full px-[1vw] rounded-xl bg-stone-100">
        <div className="relative -top-4 w-[85vw] py-[4vw] px-2 text-sm shadow-md rounded-full bg-orange">
          <h1 className="indent-4 font-semibold text-white">KOL Campaign Specialized</h1>
          <img src="/home/pic/avatar.png" alt="avatar" className="absolute bottom-0 -right-2 w-[22vw]"/>
        </div>
        
        <div className="relative -top-12 p-[4vw]">
          {/* Image */}
          <div className="flex justify-center items-center gap-[2vw] pb-4">
            <div className="bg-contain bg-bottom bg-no-repeat" style={{backgroundImage:`url(/services/hero-layer.png)`}}>
              <img src="/services/hero2.png" alt="1" className="w-[50vw]"/>
            </div>
          </div>
                
                
          
          <div className="w-full px-10">  
            {/* Description */}
            <p className="text-left text-sm font-light font-montserrat">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>

          </div>


          <div className='flex flex-col items-center gap-4 p-4'>
            <button className='w-48 font-montserrat text-center p-1 px-4 shadow-md rounded-full text-white bg-orange'>
              <h2>FIND BEST DEAL</h2>
            </button>
            <button className='w-full font-montserrat text-left px-8 py-2 shadow-lg rounded-full text-orange'>
              <h2>Video Production</h2>
            </button>
            <button className='w-full font-montserrat text-left px-8 py-2 shadow-lg rounded-full text-orange'>
              <h2>Short Video Content</h2>
            </button>

          </div>
        </div>
      </div>
      

    </section>
  )
}

export default ChooseProduct