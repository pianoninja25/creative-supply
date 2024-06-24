import { FaWhatsapp, FaRegSmile } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="py-4">
      <div className="grid justify-center gap-[2vw] p-[6vw] mx-[12vw] shadow-lg font-montserrat rounded-2xl bg-white">
        <h1 className="font-bold text-[4vw]">Have <span className="text-orange">something</span> to ask ?</h1>
        
        <button className="flex items-center justify-around mx-2 p-1 rounded-full text-[4vw] text-white bg-orange ">CONTACT US <FaWhatsapp size={18} /></button>
      </div>
    </section>
  )
}

export default ContactUs