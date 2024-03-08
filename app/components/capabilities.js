import Image from 'next/image'

const Capabilities = () => {
  return (
    <section className="py-20">
      <div className="grid gap-0.5">
        {/* TOP */}
        <div className="flex items-end gap-0.5">
          {/* TOP-LEFT */}
          <div className="w-[60%] h-[9.5rem] rounded-3xl bg-orange">
            <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-md">What is our <span className="text-white">power ?</span></h1>
            <div className="flex gap-2 px-2">
              <h1 className="w-[30%] text-right font-montserrat font-bold text-xs  text-white">Ideas are developed from creators</h1>
              <p className="w-full font-montserrat text-xxs text-stone-100">Ideas are developed from macro to mega scale creators, so they have a different value. Because there is a fresh touch to the type of content that is usually created exclusively and full of fresh idealism</p>
            </div>
          </div>

          {/* TOP-RIGHT */}
          <div className="w-[40%] h-24 rounded-3xl bg-cover bg-center" style={{backgroundImage: `url('/team-photo.png')`}} />
        </div>

        {/* BOTTOM */}
        <div className="flex items-end gap-0.5">
          {/* BOTTOM-LEFT */}
          <div className="relative w-[45%] h-36 p-2 rounded-2xl bg-stone-200 font-montserrat ">
            <h1 className="font-bold text-sm text-center">Creative Ecosystem</h1>
            <div className="flex gap-1 items-center mt-2">
              <Image src="/logo.png" alt="logo" width={20} height={4} loading="lazy" className="h-10 w-10 p-1" />
              <p className="w-full text-xxs">The interconnected network of creative services in our ecosystem is our greatest strength</p>
            </div>
            <button className="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg bg-orange hover:bg-orange/50">view our ecosystem</button>
          </div>

          {/* BOTTOM-RIGHT */}
          <div className="relative w-[55%] h-36 p-2 rounded-2xl bg-orange font-montserrat ">
            <div className="flex gap-2 items-center mt-1">
              <p className="w-[65%] text-xxs text-white">Our team has produced various kinds of creative content ranging from digital scale advertisements to TVCs and much more</p>
              <h1 className="w-[35%] font-bold text-xs text-white">Supported by a qualified production team</h1>
            </div>
            <button className="absolute bottom-2 right-2 px-2 py-0.5 rounded-lg bg-slate-200 hover:bg-slate-200/50">view our works</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Capabilities