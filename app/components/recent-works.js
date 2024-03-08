import Image from 'next/image'

const RecentWorks = () => {
  return (
    <section className="py-4">
      <div className="w-full px-4">
        <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-md text-center">Recent Works</h1>
        <div className="flex flex-wrap px-4 py-2 gap-2">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="w-[30%] p-1 flex justify-center items-center rounded-lg shadow-md">
              <Image src={`/recent-works/${i+1}.png`} alt="logo" width={20} height={20} loading="lazy" layout="responsive" />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="px-2 mt-2 rounded-md text-xxs text-white bg-orange">more</button>
        </div>
      </div> 
    </section>
  )
}

export default RecentWorks