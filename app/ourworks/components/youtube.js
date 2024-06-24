import { FaYoutube } from "react-icons/fa"


const Youtube = () => {
  return (
    <section className="m-[4vw]">
      <div className="w-full h-60 rounded-lg bg-orange">
        <h1 className="px-4 pt-2 pb-1 font-montserrat font-bold text-md text-center text-white">How we work?</h1>
        <div className="flex justify-center items-center h-[80%]">
          <FaYoutube size={40} color='red'/>

        </div>
        
      </div>
    </section>
  )
}

export default Youtube