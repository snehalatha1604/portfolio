import React from 'react'
import Experiencecard from './Experiencecard'


const Experience = () => {
    const experienceDetails=[{
        title:'Lead Software Engineer at Google',
        date:'nov-3-2024',
        desc:'As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google’s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.',
        icon:'FaGoogle'
    },{
        title:'Lead Software Engineer at Google',
        date:'nov-3-2024',
        desc:'As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google’s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.',
        icon:'FaMicrosoft'
    },{
        title:'Lead Software Engineer at Google',
        date:'nov-3-2024',
        desc:'As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google’s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.',
        icon:'FaYoutube'
   
    }]
  return (
    <section className="bg-[#161513] text-white py-10">
      {/* Title */}
      <h2 className="text-center text-blue-500 text-3xl font-bold mb-6">EXPERIENCE</h2>

      {/* Experience Card */}
      <div className='flex flex-col justify-center gap-6'>
        {experienceDetails.map((exp,index)=>(
            <Experiencecard key={index} experience={exp}/>
        ))}
        </div>
      

        
    </section>
  )
}

export default Experience