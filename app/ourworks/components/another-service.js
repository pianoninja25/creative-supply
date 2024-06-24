
'use client'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AnotherService = () => {
  const pathname = usePathname() 
  const [selected, setSelected] = useState(5)
  
  const boxList = [
    { title: 'Short Video', bg: '5.svg'},
    { title: 'Commercial Ads', bg: '5.svg'},
    { title: 'Movie Series', bg: '5.svg'},
    { title: 'Documentation Event', bg: '5.svg'},
    { title: 'KOL Campaign', bg: '5.svg'},
    { title: 'Photo Production', bg: '5.svg'},
  ]

  return (
    <section className="py-4">
      <div className="w-full px-4">
        {/* <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-md text-center">Another Services</h1> */}
        <div className="flex justify-center flex-wrap px-4 py-2 gap-3">
          {boxList.map((a, idx) => (
            <div key={idx} className="w-[48%] h-[36vw] rounded-[2rem] shadow-lg bg-cover" style={{backgroundImage:`url(/services/${a.bg})`}}>
              <div className={`flex justify-center items-center w-full h-full rounded-[2rem] transition-all ease-in-out duration-300
                ${selected == idx ? 'bg-black/10' : 'bg-black/70'} hover:cursor-pointer hover:bg-black/10`}
                onClick={() => setSelected(idx)}
              >
                <Link href={`/ourworks/${idx}_${a.title}`} className={`font-snowfun text-[9vw] text-center leading-10 px-10 ${selected == idx ? 'text-transparent' : 'text-white'}`}>
                  {a.title}
                </Link>
              </div>
            </div>

          ))}

        </div>
      </div> 



      <div className={`grid justify-center gap-4 py-8 ${pathname.includes('services') ? 'hidden' : ''}`}>
        <h1 className="text-center font-bold font-montserrat text-3xl text-orange">{boxList[selected].title}</h1>
        <img src={`/services/${boxList[selected].bg}`} alt="bg" className='w-[20rem]' />
        <p className="w-80 font-montserrat px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
      </div>
    </section>
  )
}

export default AnotherService