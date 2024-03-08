import Image from 'next/image'

const Clients = () => {
  return (
    <section>
      <div className="w-full h-full bg-orange rounded-3xl">
        <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-md text-center">Our Clients ?</h1>
        <div className="flex flex-wrap px-4">
          {Array.from({ length: 16 }, (_, i) => (
            <div key={i} className="w-1/4 p-2 flex justify-center items-center">
              <Image src={`/clients-logo/${i+1}.png`} alt="logo" width={20} height={20} loading="lazy" layout="responsive" />
            </div>
          ))}

        </div>
        <div className="px-8 pb-4">
          <Image src='/clients-logo/more.svg' alt="logo" width={10} height={10} loading="lazy" layout="responsive" className="px-4"/>
        </div>
        </div> 
    </section>
  )
}

export default Clients