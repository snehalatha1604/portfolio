import React from 'react'
import { FaEnvelope, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const footer = () => {
  return (
    <section className="bg-[#222222] text-white py-16 px-6 flex flex-col items-center">
      <div className="max-w-2xl ">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400 mb-4">
          Seasoned Full Stack Software Engineer with over 8 years of hands-on experience in designing 
          and implementing robust, scalable, and innovative web solutions. Adept at leveraging a 
          comprehensive skill set encompassing front-end and back-end technologies.
        </p>
        <div className="flex items-center  space-x-2 text-gray-300">
          <FaEnvelope />
          <span className="font-semibold">snehalatha1604@gmail.com</span>
        </div>
        <div className="flex  space-x-6 mt-6 text-gray-400 text-2xl">
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaXTwitter className="hover:text-white cursor-pointer" />
          <FaYoutube className="hover:text-white cursor-pointer" />
        </div>
      </div>
    </section>
  )
}

export default footer