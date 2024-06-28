import Image from 'next/image'

const Capabilities = () => {
  return (
    <section className="pb-20">
      <div className="grid">
        <h1 className="w-64 p-4 font-bold text-3xl">WHAT IS OUR POWER ?</h1>
        <div className="flex flex-col items-center w-full h-full py-4 rounded-lg bg-orange">
          <div className="flex gap-[4vw] px-4 py-2 pb-3">
            <h1 className="w-[40%] font-bold text-lg text-white leading-tight">Ideas are developed from creators</h1>
            <p className="w-full font-montserrat font-light text-xs text-stone-100">Ideas are developed from macro to mega scale creators, so they have a different value. Because there is a fresh touch to the type of content that is usually created exclusively and full of fresh idealism</p>
          </div>
          <button className="w-52 text-sm font-bold rounded-full pb-1 pt-0.5 shadow-md text-orange bg-slate-100 hover:text-white hover:bg-yellow">view our creators</button>
        </div>

        <div className="w-full h-[34vw] rounded-lg bg-cover bg-[top_-1rem_left_8%]" style={{backgroundImage: `url('/home/team-photo.png')`}} />
        
        <div className="flex flex-col items-center w-full h-full py-4 rounded-lg bg-stone-100 font-montserrat ">
          <h1 className="font-bold text-lg text-center text-sky-700">Creative Ecosystem</h1>
          <div className="flex justify-center items-center gap-6 w-full pl-20 pr-10 py-2 mb-1">
            <Image src="/logo.png" alt="logo" width={20} height={4} loading="lazy" className="h-16 w-16 p-1" />
            <p className="w-full text-xs">The interconnected network of creative services in our ecosystem is our greatest strength</p>
          </div>
          <button className="w-52 text-sm font-bold rounded-full pb-1 pt-0.5 shadow-md text-white bg-orange hover:bg-yellow">view our ecosystem</button>
        </div>

        <div className="flex flex-col items-center w-full h-full p-4 rounded-lg bg-orange font-montserrat ">
          <div className="flex items-baseline gap-4 p-2 mb-2">
            <p className="w-[55%] text-xs font-light text-white">Our team has produced various kinds of creative content ranging from digital scale advertisements to TVCs and much more</p>
            <h1 className="w-[45%] font-bold text-lg text-white leading-tight">Supported by a qualified production team</h1>
          </div>
          <button className="w-52 text-sm font-bold rounded-full pb-1 pt-0.5 shadow-md text-orange bg-slate-100 hover:text-white hover:bg-yellow">view our team</button>
        </div>


      </div>
    </section>
  )
}

export default Capabilities