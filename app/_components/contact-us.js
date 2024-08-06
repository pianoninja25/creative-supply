import { FaWhatsapp, FaRegSmile } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-4">
      <div className="grid justify-center gap-[2vw] p-[6vw] sm:p-[2vw] mx-[12vw] sm:mx-[16vw] shadow-lg font-montserrat rounded-2xl sm:rounded-[3rem] bg-white">
        <h1 className="font-bold text-[4vw] sm:text-[3vw]">Have <span className="text-orange">something</span> to ask ?</h1>
        
        <button className="flex items-center justify-around sm:justify-between mx-2 p-1 sm:pl-28 sm:px-6 rounded-full sm:rounded-2xl text-[4vw] sm:text-[2.5vw] text-white bg-orange ">CONTACT US <FaWhatsapp size={18} className="sm:h-12 sm:w-12"/></button>
      </div>
    </section>
  )
}

export default ContactUs