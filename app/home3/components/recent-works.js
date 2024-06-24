import Image from 'next/image'

const RecentWorks = () => {
  return (
    <section className="py-14">
      <div className="w-full px-4">
        <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-lg text-center">RECENT WORKS</h1>
        <div className="flex justify-center flex-wrap px-4 py-2 gap-2">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="w-[48%] p-2 flex justify-center items-center rounded-lg shadow-md">
              <Image src={`/home/recent-works/${i+1}.jpg`} alt="logo" width={200} height={200} loading="lazy" className='w-auto h-auto rounded-xl' />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="font-montserrat font-light px-8 pb-1 pt-0.5 mt-2 text-base rounded-full text-white bg-orange">more</button>
        </div>
      </div> 
    </section>
  )
}

export default RecentWorks