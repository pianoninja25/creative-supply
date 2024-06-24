// import Image from "next/image";
// import Header from "./Home/components/header";
// import Hero from "./Home/components/hero";
// import Capabilities from "./Home/components/capabilities";
// import Clients from "./Home/components/clients";
// import Speciality from "./Home/components/speciality";
// import RecentWorks from "./Home/components/recent-works";
// import ContactUs from "./Home/components/contact-us";

// export default function Home() {
//   return (
//     <main className="">
      
//       <section className="flex h-[28rem] sm:h-screen landscape:h-[50rem]">
//         <div className="relative h-full w-full bg-cover bg-no-repeat md:bg-repeat-x text-[2em]" style={{backgroundImage:`url(/bg1.jpg)`}}>
//           <div className="absolute left-8 top-44">
//             <h1 className="font-bold drop-shadow-lg text-[14vw] -tracking-morewidest leading-none text-white">CREATIVE</h1>
//             <div className="flex items-end">
//               <h1 className="font-bold drop-shadow-lg text-[14vw] -tracking-wider leading-none text-white">SUPPLY</h1>
//               {/* <Image src="/we create your needs.svg" alt="logo" width={100} height={100} className="-ml-2 w-16 animate-bounce" loading="lazy" /> */}
//             </div>
//           </div>
//           <div className="absolute right-4 bottom-4 flex items-center p-2 rounded-xl border border-transparent scale-75 xs:scale-100 hover:border-orange hover:cursor-pointer">
//             <Image src="/arrow-yellow.svg" alt="logo" width={25} height={25} className="h-4 w-4 animate-pulse" loading="lazy" />
//             <Image src="/arrow-yellow.svg" alt="logo" width={25} height={25} className="h-4 w-4 animate-pulse" loading="lazy" />
//             <Image src="/arrow-white.svg" alt="logo" width={30} height={30} className="h-6 w-6 animate-pulse" loading="lazy" />
//           </div>
//         </div>
//         <div className="h-full bg-cover bg-[center_left_8%]" style={{backgroundImage:`url(/bg2.jpg)`}}></div>
        


//       </section>


//       <div className="min-h-screen bg-contain mx-4 pb-10" style={{backgroundImage: `url('/pattern.svg')`}}>
//         <section className="">
//           <div className="flex gap-2 py-4 sm:py-8">
//             <div className="w-full pl-2 sm:pl-6">
//               <h1 className="font-bold text-[5vw] text-nowrap">Your 
//                 <span className="text-orange"> movement</span>
//                 <br /> and digital <br /> support
//               </h1>
//             </div>

//             <div className="w-full pr-2 sm:pr-6 py-1">
//               <h1 className="text-[2.3vw] sm:text-[3vw]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</h1>
//             </div>
//           </div>
//         </section>

//         <Hero />
//         <Capabilities />
//         <Clients />
//         <Speciality />
//         <RecentWorks />
//         <ContactUs />

//       </div>
//     </main>
//   );
// }




import Home from './Home/page'

const LandingPage = () => {
  return (
    <Home />
  )
}

export default LandingPage

