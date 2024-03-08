import Image from 'next/image'
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex gap-2 justify-center w-full p-2 sm:p-4 rounded-t-2xl bg-gradient-to-tr from-[#9E6867] to-[#734C95]'>
      <FaInstagram size={20} color='white'/>
      <FaTwitter size={20} color='white'/>
      <FaTiktok size={20} color='white'/>
      <FaFacebook size={20} color='white'/>
      <FaLinkedin size={20} color='white'/>
    </div>
  )
}

export default Footer