import Image from "next/image"
import ContactUs from "../_components/contact-us"
import ChooseProduct from "./components/choose-product"
import AnotherService from "../ourworks/components/another-service"

export default function Home() {
  return (
    <main className="">
      
      <section className="flex h-[32rem] sm:h-screen landscape:h-[50rem] bg-black">
        <div className="flex items-center justify-center h-full w-full bg-cover bg-center bg-no-repeat md:bg-repeat-x text-[2em]" style={{backgroundImage:`url(/services/banner.png)`}}>
          <div className="text-center">
            <h1 className="font-bold text-[14vw] -tracking-morewidest leading-[12vw] text-stone-100">Get ready</h1>
            <div className="relative flex">
              <h1 className="font-bold text-[14vw] -tracking-morewidest leading-[12vw] text-stone-100">for an</h1>
              <p className="absolute right-0 top-4 font-snowfun text-[16vw] leading-[6vw] text-orange animate-pulse -rotate-6">Impact!</p>
            </div>
          </div>
        </div>

      </section>

      {/* HERO */}
      <section className="-mt-[22vw] rounded-[4rem] backdrop-blur-xl bg-white/20">
        <div className="w-full h-full p-[10vw] rounded-3xl">

          {/* HERO TOP */}
          <div>
            <h1 className="font-bold text-3xl xs:text-4xl p-[2vw] pt-12 pb-4 text-center">MET WITH <br />OUR SPECIALITY</h1>
            <div className="flex flex-col items-center gap-[2vw]">
              {/* Image */}
              <img src="/services/hero.jpg" alt="1" className="w-[52vw] rounded-[2rem] shadow-right-only"/>
              
              
              
              <div className="w-full space-y-[2vw]">  
                {/* Description */}
                <p className="font-montserrat px-8 py-2 text-stone-500">Ini adalah salah satu konten kami dengan performa yang menakjubkan! Sekarang waktunya konten kamu naik dan memukau jutaan mata penonton!</p>
                
                {/* Numbers */}
                <div className="flex flex-col items-center gap-[4vw]">
                  <div className="flex gap-[4vw]">
                    {/* Likes */}
                    <div className="flex flex-col items-center px-[4vw] py-[2vw] rounded-md shadow-lg bg-orange">
                      <p className="font-snowfun font-extralight text-white">Likes</p>
                      <h3 className="font-montserrat font-bold text-xl text-center text-white">12,121,987</h3>
                    </div>
                    
                    {/* Shared */}
                    <div className="flex flex-col items-center px-[4vw] py-[2vw] rounded-md shadow-lg bg-orange">
                      <p className="font-snowfun font-extralight text-white">Shared</p>
                      <h3 className="font-montserrat font-bold text-xl text-center text-white">131,121,987</h3>
                    </div>
                  </div>

                  <div className="flex gap-[4vw]">
                    {/* Views */}
                    <div className="flex flex-col items-center px-[4vw] py-[2vw] rounded-md shadow-lg bg-orange">
                      <p className="font-snowfun font-extralight text-white">Shared</p>
                      <h3 className="font-montserrat font-bold text-xl text-center text-white">60,121,987</h3>
                    </div>

                    {/* Interactions */}
                    <div className="flex flex-col items-center px-[4vw] py-[2vw] rounded-md shadow-lg bg-orange">
                      <p className="font-snowfun font-extralight text-white">Interaction</p>
                      <h3 className="font-montserrat font-bold text-xl text-center text-white">9,121,987</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>


      
      <ChooseProduct />
      




      <div className="pb-10">
        <h1 className="p-6 font-montserrat font-bold text-3xl text-center">ANOTHER <br /> SERVICES</h1>
        <AnotherService />
        <ContactUs />

      </div>




    </main>
  )
}


