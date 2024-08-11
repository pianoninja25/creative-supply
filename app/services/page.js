import Image from "next/image"
import ContactUs from "../_components/contact-us"
import ChooseProduct from "./components/choose-product"
import AnotherService from "../ourworks/components/another-service"
import Hero from "./components/hero"
import Footer from "../_components/footer"

export default function Home() {
  return (
    <main className="md:mx-28">
      
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


      <section className="pb-20 sm:m-20 -mt-[22vw] sm:-mt-[4vw] rounded-[4rem] backdrop-blur-xl md:shadow-center-only bg-white/20">

        <Hero />      
        <ChooseProduct />
        
      </section>

      




      <div className="pb-10">
        <h1 className="p-6 font-montserrat font-bold text-3xl text-center">ANOTHER <br /> SERVICES</h1>
        <AnotherService />
        <ContactUs />

      </div>





    <Footer />




    </main>
  )
}


