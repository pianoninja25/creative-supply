'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const Header = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/' || pathname === '/Home2'

  const [open, setOpen] = useState(false)
  const menuRef = useRef()
  useOnClickOutside(menuRef, () => setOpen(false))

  function useOnClickOutside(menuRef, handler) {
    useEffect(() => {
      const listener = (e) => {
        if (!menuRef.current || menuRef.current.contains(e.target)) {
          return
        }
        handler(e)
      }
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    }, [menuRef, handler])
  }



  return (
    <div className='absolute z-50 flex justify-between items-center w-full p-4 sm:p-3 sm:fixed'>
      
      {/* LOGO */}
      <div className={`flex ${isHomePage ? 'justify-center p-6 ' : 'justify-start px-1 -pt-1'} w-full sm:justify-start sm:py-5 sm:px-12 lg:py-7`}>
        <Link href="/" className='absolute z-[500] w-[18vw] h-auto xs:w-[14vw] sm:w-[4rem] lg:w-[5rem] rounded-full bg-gradient-to-bl from-black to-[#4A4A4A] sm:z-[200] sm:border-2 sm:border-neutral-600'>
          <Image className="w-auto h-auto p-[4.5vw] xs:p-4 sm:p-4 lg:p-5 transform transition-transform duration-500 hover:scale-110 hover:rotate-12" src="/logo.png" alt="logo" width={100} height={100} priority />
        </Link>
      </div>

      
      

      <div ref={menuRef}>
        {/* HAMBURGER */}
        <button onClick={() => setOpen(!open)} 
        className={`absolute top-0 m-6 right-2 z-[51] sm:hidden ${open ? 'scale-50' : 'scale-100'}`}
        >
          <span className={`hamburger-line transition duration-300 ease-in-out origin-top-left ${open ? 'rotate-[40deg]' : ''}`}></span>
          <span className={`hamburger-line transition duration-300 ease-in-out ${open ? 'scale-0' : ''}`}></span>
          <span className={`hamburger-line transition duration-300 ease-in-out origin-bottom-left ${open ? '-rotate-[40deg]' : ''}`}></span>

        </button>



        {/* TEXT */}
        <nav
          className={`absolute top-6 right-8 py-4 flex-col w-full max-w-36 rounded-md shadow-md bg-white/30 backdrop-blur-md -z-50
          sm:flex-row sm:max-w-xs sm:justify-center sm:left-28 sm:py-0 sm:rounded-full sm:border-4 sm:border-neutral-500  
          lg:p-1 lg:max-w-sm lg:top-14
          ${open ? 'flex' : 'hidden sm:flex'}`}
        >
          {[
            ['Home', '/'],
            ['Services', '/services'],
            ['Our Works', '/ourworks'],
            ['About', '/about'],
          ].map(([title, url]) => (
            <Link
              key={title}
              href={url}
              className={`text-sm px-6 p-1 font-montserrat font-semibold rounded-md drop-shadow-md text-white hover:text-orange hover:scale-110 
                ${title=='Home' ? ' sm:hidden' :''}
                ${url==pathname ? '!text-black' :''}`
              }
            >
              { title }
            </Link>
          ))}
        </nav>
      </div>
      
    </div>
  )
}

export default Header