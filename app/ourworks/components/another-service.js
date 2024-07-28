
'use client'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AnotherService = () => {
  const pathname = usePathname() 
  const selectPath = pathname?.split('/ourworks/')[1]?.split('_')[0]


  const [selected, setSelected] = useState(selectPath ?? 5)
  
  const boxList = [
    { title: 'Short Video', bg: 'content-bg.svg'},
    { title: 'Commercial Ads', bg: 'content-bg.svg'},
    { title: 'Movie Series', bg: 'content-bg.svg'},
    { title: 'Documentation Event', bg: 'content-bg.svg'},
    { title: 'KOL Campaign', bg: 'content-bg.svg'},
    { title: 'Photo Production', bg: 'content-bg.svg'},
  ]

  return (
    <section className="py-4">
      <div className="w-full px-4">
        {/* <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-md text-center">Another Services</h1> */}
        <div className="flex justify-center flex-wrap px-4 py-2 gap-3">
          {boxList.map((a, idx) => (
            <div key={idx} className="w-[45%] h-[36vw] rounded-[2rem] shadow-lg bg-cover" style={{backgroundImage:`url(/our-works/${a.bg})`}}>
              <div className={`flex justify-center items-center w-full h-full rounded-[2rem] transition-all ease-in-out duration-300
                ${selected == idx ? 'bg-black/10' : 'bg-black/70'} hover:cursor-pointer hover:bg-black/10`}
                onClick={() => setSelected(idx)}
              >
                <Link 
                  href={`/ourworks/${idx}`}
                  onClick={(e) => {
                    if(pathname.includes('ourworks')){
                      e.preventDefault()
                    }
                  }} 
                  className={`font-snowfun text-[9vw] text-center leading-10 px-10 
                    ${selected == idx ? 'text-transparent' : 'text-white'}`}
                >
                  {a.title}
                </Link>
              </div>
            </div>

          ))}

        </div>
      </div> 



      <div className={`grid justify-center gap-4 pt-12 ${pathname.includes('services') ? 'hidden' : ''}`}>
        <h1 className="text-center font-bold font-montserrat text-4xl tracking-tighter text-orange">{boxList[selected].title}</h1>
        <img src={`/our-works/${boxList[selected].bg}`} alt="bg" className='w-[20rem]' />
        <p className="w-80 font-montserrat px-4 text-stone-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
      </div>
    </section>
  )
}

export default AnotherService