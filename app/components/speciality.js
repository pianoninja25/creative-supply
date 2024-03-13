
const Speciality = () => {
  return (
    <section className="relative">
      <div className="w-full h-full mt-[12vw] rounded-3xl shadow-md bg-white">
          <h1 className="px-4 pt-4 pb-1 font-montserrat font-bold text-md">What is our speciality?</h1>
          <p className="w-2/3 px-4 pt-2 pb-1 font-montserrat text-xs">Like build a car, content also need precision, patient, and good part to create the best one </p>
          <div className="grid justify-center gap-2 mt-2">
            <button className="text-left pl-4 pr-10 py-2 bg-orange/80 text-white hover:bg-orange rounded-md shadow-md">KOL Campaign Specialized</button>
            <button className="text-left pl-4 pr-10 py-1 bg-slate-200/80 hover:bg-slate-200 rounded-md shadow-md">Video Production</button>
            <button className="text-left pl-4 pr-10 py-1 bg-slate-200/80 hover:bg-slate-200 rounded-md shadow-md">Short Video Content</button>
            <button className="w-10 px-2 mt-2 mb-4 mx-auto rounded-md text-xxs text-white bg-orange">more</button>
          </div>
      </div> 

      <div className='absolute right-[2vw] top-[2vw]'>
        <img src="/shape/build content.svg" alt="1" className='h-[4vw] mt-[2vw] animate-bounce' />
        <img src="/shape/arrow-bottom-black.svg" alt="2" className='h-[6vw] animate-pulse' />
      </div>
    </section>
  )
}

export default Speciality