import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-[#222222] text-white p-4 flex px-28 justify-between items-center ">
      <div className="text-2xl font-sans">Sneha</div>
      <ul className="flex space-x-6">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">Projects</li>
        <li className="hover:text-gray-400 cursor-pointer">Experience</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
    
  )
}

export default Navbar