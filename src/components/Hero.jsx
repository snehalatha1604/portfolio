import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#161513] text-white flex flex-col items-center text-center py-16 px-6">
      {/* Profile Image */}
      <img 
        src="/Avatar.png"
        alt="Profile" 
        className="w-24 h-24 rounded-full mb-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"
      />

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold">
        I do code and <br />make content{" "}
        <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-transparent bg-clip-text">
           about it!
        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-400 mt-4 max-w-xl">
        I am a seasoned full-stack software engineer with over 
        8 years of professional experience, specializing in backend development. 
        My expertise lies in crafting robust and scalable SaaS-based 
        architectures on the Amazon AWS platform.
      </p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-6">
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:opacity-80">
          Get In Touch
        </button>
        <button className="border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black">
          Download CV
        </button>
      </div>
    </section>
  )
}

export default Hero