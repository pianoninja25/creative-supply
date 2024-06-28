import { FaYoutube } from "react-icons/fa"


const Youtube = () => {
  return (
    <section className="mt-10">
      <div className="w-full h-80 bg-orange">
        <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-3xl text-center text-white drop-shadow-md">How We Work?</h1>
        <div className="flex justify-center items-center h-[80%]">
          <FaYoutube size={40} color='red'/>

        </div>
        
      </div>
    </section>
  )
}

export default Youtube