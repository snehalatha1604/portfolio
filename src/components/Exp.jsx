import React from 'react'
import { FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiHtml5, SiCss3 } from "react-icons/si";

const Exp = () => {
  return (
    <section className="bg-[#161513] text-white py-10 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-gray-400 text-sm uppercase tracking-widest mb-4">
        Experience With
      </h2>

      {/* Icons */}
      <div className="flex space-x-6">
        <FaJs className="text-gray-300 text-4xl hover:scale-110 transition-transform" />
        <SiNextdotjs className="text-gray-300 text-4xl hover:scale-110 transition-transform" />
        <SiHtml5 className="text-gray-300 text-4xl hover:scale-110 transition-transform" />
        <SiCss3 className="text-gray-300 text-4xl hover:scale-110 transition-transform" />
        <FaReact className="text-gray-300 text-4xl hover:scale-110 transition-transform" />
      </div>
    </section>
  )
}

export default Exp