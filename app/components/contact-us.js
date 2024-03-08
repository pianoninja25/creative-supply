import { FaWhatsapp, FaRegSmile } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section>
      <div className="grid justify-center gap-2 p-4 mx-10 shadow-md font-montserrat rounded-2xl bg-white">
        <h1 className="font-bold text-lg">Have <span className="text-orange">something</span> to ask ?</h1>
        
        <button className="flex items-center justify-around mx-2 p-1 rounded-lg text-lg text-white bg-orange ">CONTACT US <FaWhatsapp size={18} /></button>
      </div>
    </section>
  )
}

export default ContactUs