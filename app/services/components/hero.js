const Hero = () => {

  return(
    <div>
      <div className="w-full h-full p-[10vw] md:p-[2vw] md:px-[4vw] rounded-3xl">

      {/* HERO TOP */}
        <div>
          <h1 className="font-bold text-4xl xs:text-4xl p-[2vw] md:p-[4vw] pt-12 pb-4 text-center md:text-left uppercase sm:normal-case">Met with our speciality</h1>
          <div className="flex flex-col md:flex-row items-center gap-[2vw] md:px-20">
            {/* Image */}
            <img src="/services/hero.jpg" alt="1" className="w-[52vw] md:w-[16vw] rounded-[2rem] shadow-right-only"/>
            
            
            
            <div className="w-full space-y-[2vw]">  
              {/* Description */}
              <p className="font-montserrat px-8 py-2 md:text-xl text-stone-500">Ini adalah salah satu konten kami dengan performa yang menakjubkan! Sekarang waktunya konten kamu naik dan memukau jutaan mata penonton!</p>
              
              {/* Numbers */}
              <div className="flex flex-col items-center gap-[4vw] md:gap-4">
                <div className="flex gap-[4vw]">
                  {/* Likes */}
                  <div className="flex flex-col items-center px-[4vw] py-[2vw] rounded-md md:rounded-2xl shadow-lg bg-orange">
                    <p className="font-snowfun md:text-4xl font-extralight text-white">Likes</p>
                    <h3 className="font-montserrat font-bold text-xl md:text-4xl text-center text-white">12,121,987</h3>
                  </div>
                  
                  {/* Shared */}
                  <div className="flex flex-col items-center px-[4vw] py-[2vw] rounded-md md:rounded-2xl shadow-lg bg-orange">
                    <p className="font-snowfun md:text-4xl font-extralight text-white">Shared</p>
                    <h3 className="font-montserrat font-bold text-xl md:text-4xl text-center text-white">131,121,987</h3>
                  </div>
                </div>

                <div className="flex gap-[4vw]">
                  {/* Views */}
                  <div className="flex flex-col items-center px-[4vw] py-[2vw] rounded-md md:rounded-2xl shadow-lg bg-orange">
                    <p className="font-snowfun md:text-4xl font-extralight text-white">Shared</p>
                    <h3 className="font-montserrat font-bold text-xl md:text-4xl text-center text-white">60,121,987</h3>
                  </div>

                  {/* Interactions */}
                  <div className="flex flex-col items-center px-[4vw] py-[2vw] rounded-md md:rounded-2xl shadow-lg bg-orange">
                    <p className="font-snowfun md:text-4xl font-extralight text-white">Interaction</p>
                    <h3 className="font-montserrat font-bold text-xl md:text-4xl text-center text-white">9,121,987</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero