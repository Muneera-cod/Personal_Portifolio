import React from 'react'
import styles from  "./Resume.module.css"
import { projectData } from './ProjectsData'
function Resume() {
  return (
    <div className={`max-h-[100%]  relative overflow-hidden text-[#3D3D3D]  pt-[120px] sm:pb-[30px] md:pb-[60px] sm:px-[30px] md:px-[60px] ${styles.gridforresume}`}>
      <div className={`p-[40px] flex flex-col gap-[1rem] bg-[rgb(3,111,113,0.1)] slide-in-left ${styles.skills}`}>
        <div className=' relative h-fit w-fit'>
          
          <p className='text-[26px] font-[700]  headline tracking-wide'>Skills</p>
        
        </div>
          <div className='flex flex-col gap-[0.5rem] sm:text-[15px] md:text-[17px]'>
                  <p>React js</p>
                  <p>TypeScript</p>
                  <p>Javascript</p>
                  <p>Responive Design</p>
          </div>
        </div>
        <div className={`p-[36px] flex flex-col gap-[1rem] bg-[rgb(3,111,113,0.1)] slide-in-right ${styles.about}`}>
        <div className=' relative h-fit w-fit'>
          
          <p className='sm:text-[18px] md:text-[25px] font-[700]  headline tracking-wide'>Software Developer - Frontend Specialist</p>
          
        </div>
        <div className='max-w-[600px] text-justify'> <p className='sm:text-[15px] md:text-[17px] '>Passionate about crafting engaging and responsive user interfaces. Proficient in HTML, CSS, JavaScript, React.js, and 
responsive design principles. Seeking to join an innovative team to leverage my skills in UI design and front-end 
development, enhancing user experiences across devices. </p></div>
        </div>

        <div className={`p-[40px] flex flex-col gap-[1rem] bg-[rgb(3,111,113,0.1)] slide-in-right  ${styles.experience}`}>
        <div className=' relative h-fit w-fit'>
          
          <p className='text-[26px] font-[700] headline tracking-wide'>Experience</p>
          
        </div>
        <div className=' flex sm:flex-col md:flex-row text-justify sm:text-[15px] md:text-[17px]'>
           <p className='flex-1'>Imiot TechnoLabs LLP Ltd </p> <p className='flex-1 font-[700]'> React js Developer Intern </p> <p className='self-end opacity-60'>  02-08-2024 </p>
        </div>
        </div>

        <div className={`p-[40px] flex flex-col gap-[1.5rem] bg-[rgb(3,111,113,0.1)] slide-in-bottom  ${styles.projects}`}>
        <div className=' relative h-fit w-fit'>
          
          <p className='text-[26px] font-[700]  headline tracking-wide'>Project</p>
          
        </div>
        {projectData.map((project)=><div  key={project.id} className='flex flex-col gap-2 sm:text-[15px] md:text-[17px]'>
          <div className='flex justify-between items-center '>
            <p className='font-[700] tracking-widest'>{project.title}</p>
              <p className='opacity-60'>{project.date}</p>
          </div>
          <div>
          <p className='text-justify'>{project.description}</p>
          </div>
           
        </div>)}
        </div>


    </div>
  )
}

export default Resume