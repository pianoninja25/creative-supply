import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex gap-4 justify-center w-full p-4 rounded-t-2xl bg-gradient-to-tr from-[#9E6867] to-[#734C95]'>
      <FaTiktok size={22} color='white'/>
      <FaInstagram size={22} color='white'/>
      <FaLinkedin size={22} color='white'/>
    </div>
  )
}

export default Footer