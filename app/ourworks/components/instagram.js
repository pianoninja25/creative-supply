import { FaInstagram } from "react-icons/fa"


const Instagram = () => {
  return (
    <section className="">
      <div className="w-full h-60 lg:h-[34rem] bg-contain" style={{backgroundImage:`url(/our-works/instagram.png)`}}>
        <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-md text-center">Find more at our Instagram!</h1>
        <div className="flex justify-center items-center h-[80%]">
          <FaInstagram size={40} color='red'/>

        </div>
        
      </div>
    </section>
  )
}

export default Instagram