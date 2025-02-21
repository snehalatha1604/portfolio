import React from 'react'
import Projectcard from './Projectcard'


const Projects = () => {
    const projectDetail=[{
        title:'portifolio',
        link:'https://youtube.com',
        image:'/project-thumbnail-1.png'
    },{
        title:'portifolio1',
        link:'https://google.com',
        image:'/project-thumbnail-2.png'
    },{
        title:'portifolio2',
        link:'https://microsoft.com',
        image:'/project-thumbnail-1.png'
    }]
  return (
    <section className="bg-[#161513] text-white py-10">
      {/* Title */}
      <h2 className="text-center text-orange-500 text-3xl font-bold mb-6">PROJECTS</h2>

      {/* Project Cards */}
      <div className="flex justify-center gap-6">
      {projectDetail.map((proj,index)=>(
            <Projectcard key={index} project={proj}/>
        ))}
      </div>
    </section>
    

    
  )
}

export default Projects