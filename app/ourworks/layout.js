// import AnotherService from "./components/another-service"
import RecentWorks from "../home/components/recent-works"
import Instagram from "./components/instagram"
import Youtube from "./components/youtube"

export default function RootLayout({ children }) {
  return (
    <main className="md:mx-28">
      
      <section className="flex h-[32rem] sm:h-screen landscape:h-[50rem] bg-black">
        <div className="flex items-center justify-center h-full w-full bg-cover bg-center bg-no-repeat md:bg-repeat-x text-[2em]" style={{backgroundImage:`url(/our-works/banner.jpg)`}}>
        {/* <div className="flex items-center justify-center h-full w-full bg-contain bg-center bg-no-repeat md:bg-repeat-x" style={{backgroundImage:`url(/our-works/banner.png)`}}> */}
          <div className="flex flex-col">
            <p className="font-snowfun text-[8vw] leading-[6vw] text-white">Lets</p>
            <h1 className="font-bold text-[20vw] -tracking-morewidest leading-[12vw] text-stone-100">works</h1>
           
            <span className="relative top-6 self-end flex -bottom-[8vw] right-0">
              <p className="font-snowfun text-[16vw] leading-[6vw] text-orange animate-bounce2">With Us</p>
              <img src="/our-works/smile.svg" alt="2" className='absolute -top-4 -right-2 w-6 animate-pulse' />
              {/* <img src="/our_works/with-us.svg" alt="2" className='animate-bounce1' /> */}
            </span>
            

          </div>
        </div>

      </section>

      {children}

      {/* <AnotherService /> */}
      <RecentWorks />

      <Youtube />
      <Instagram />
    </main>
  )
}