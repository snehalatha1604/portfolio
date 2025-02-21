import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projectcard = ({project}) => {
    console.log(project)
  return (
    <div className="bg-[#222222] text-white rounded-lg overflow-hidden w-64 shadow-lg">
      {/* Image Section */}
      <img 
        src={project.image} 
        alt="Power of HTML" 
        className="w-full h-40 object-cover"

      />

      {/* Content Section */}
      <div className="p-4">
        <p className="text-gray-400 text-xs uppercase">Click here to visit</p>
        <div className="flex items-center justify-between mt-1">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <FaArrowUpRightFromSquare className="text-white text-lg" />
        </div>
      </div>
    </div>
  )
}

export default Projectcard