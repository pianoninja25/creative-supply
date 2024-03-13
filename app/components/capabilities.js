import Image from 'next/image'

const Capabilities = () => {
  return (
    <section className="py-20">
      <div className="grid gap-0.5">
        {/* TOP */}
        <div className="flex items-end gap-0.5">
          {/* TOP-LEFT */}
          <div className="w-[60%] h-[34vw] rounded-3xl bg-orange">
            <h1 className="pt-[2vw] pl-[6vw] font-bold text-[4vw]">What is our <span className="text-white">power ?</span></h1>
            <div className="flex gap-[2vw] p-[2vw] items-baseline">
              <h1 className="w-[40%] text-right font-bold text-[3vw]  text-white">Ideas are developed from creators</h1>
              <p className="w-full font-montserrat text-[2vw] text-stone-100">Ideas are developed from macro to mega scale creators, so they have a different value. Because there is a fresh touch to the type of content that is usually created exclusively and full of fresh idealism</p>
            </div>
          </div>

          {/* TOP-RIGHT */}
          <div className="w-[40%] h-[20vw] rounded-3xl bg-cover bg-center" style={{backgroundImage: `url('/team-photo.png')`}} />
        </div>

        {/* BOTTOM */}
        <div className="flex items-end gap-0.5">
          {/* BOTTOM-LEFT */}
          <div className="relative w-[45%] h-[30vw] p-[2vw] rounded-2xl bg-stone-200 font-montserrat ">
            <h1 className="font-bold text-[3vw] text-center">Creative Ecosystem</h1>
            <div className="flex gap-1 items-center mt-2">
              <Image src="/logo.png" alt="logo" width={20} height={4} loading="lazy" className="h-10 w-10 p-1" />
              <p className="w-full text-[2vw]">The interconnected network of creative services in our ecosystem is our greatest strength</p>
            </div>
            <button className="absolute bottom-2 right-2 px-[1vw] text-[1.8vw] rounded-lg bg-orange hover:bg-orange/50">view our ecosystem</button>
          </div>

          {/* BOTTOM-RIGHT */}
          <div className="relative w-[55%] h-[30vw] p-[2vw] rounded-2xl bg-orange font-montserrat ">
            <div className="flex gap-2 items-center mt-1">
              <p className="w-[65%] text-[2vw] text-white">Our team has produced various kinds of creative content ranging from digital scale advertisements to TVCs and much more</p>
              <h1 className="w-[35%] font-bold text-[2.8vw] text-white">Supported by a qualified production team</h1>
            </div>
            <button className="absolute bottom-2 right-2 px-[1vw] text-[1.8vw] rounded-lg bg-slate-200 hover:bg-slate-200/50">view our works</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Capabilities