// "use client"
// // import Image from "next/image"


// // const AnotherService = () => {
// //   return (
// //     <section className="py-10">
// //       <div className="w-full px-4">
// //         <h1 className="font-bold text-4xl p-[2vw] py-4 text-center">ANOTHER SERVICES</h1>
// //         <div className="flex justify-center flex-wrap px-4 py-2 gap-3">
// //           {Array.from({ length: 6 }, (_, i) => (
// //             <div key={i} className="w-[48%] p-2 flex justify-center items-center rounded-lg shadow-md">
// //               <Image src={`/services/another-services/${i+1}.jpg`} alt="logo" width={200} height={200} loading="lazy" className='w-auto h-32 rounded-xl' />
// //             </div>
// //           ))}

// //         </div>
// //       </div> 
// //     </section>
// //   )
// // }

// // export default AnotherService


// import { useState } from "react"
// const AnotherService = () => {
//   const [selected, setSelected] = useState(0)
//   const boxList = [
//     { title: 'Short Video', bg: '5.svg'},
//     { title: 'Commercial Ads', bg: '5.svg'},
//     { title: 'Movie Series', bg: '5.svg'},
//     { title: 'Documentation Event', bg: '5.svg'},
//     { title: 'KOL Campaign', bg: '5.svg'},
//     { title: 'Photo Production', bg: '5.svg'},
//   ]

//   const handleClick = () => {
//     const paramToSend = 'exampleParam';
//     onParamChange(paramToSend); // Call parent callback with parameter
//   };

//   return (
//     <section className="py-4">
//       <div className="w-full px-4">
//         {/* <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-md text-center">Another Services</h1> */}
//         <div className="flex justify-center flex-wrap px-4 py-2 gap-3">
//           {boxList.map((a, idx) => (
//             <div key={idx} className="w-[48%] h-[36vw] rounded-[2rem] shadow-lg bg-cover" style={{backgroundImage:`url(/services/${a.bg})`}}>
//               <div className={`flex justify-center items-center w-full h-full rounded-[2rem] transition-all ease-in-out duration-300
//                 ${selected == idx ? 'bg-black/10' : 'bg-black/70'} hover:cursor-pointer hover:bg-black/10`}
//                 onClick={() => setSelected(idx)}
//               >
//                 <p className={`font-snowfun text-[9vw] text-center leading-10 px-10 ${selected == idx ? 'text-transparent' : 'text-white'}`}>
//                   {a.title}
//                 </p>
//               </div>
//             </div>

//           ))}

//         </div>
//       </div> 
//     </section>
//   )
// }

// export default AnotherService