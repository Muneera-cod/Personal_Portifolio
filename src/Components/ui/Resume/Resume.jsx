import React from 'react'
import styles from  "./Resume.module.css"
import { projectData } from './ProjectsData'
import { useDispatch } from 'react-redux'
import { hideSmNav } from '../../../redux/Slice/Nav/ShowSlice'
import { useNavigate } from 'react-router-dom'
function Resume() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <section onClick={()=>dispatch(hideSmNav())} className={`max-h-[100%]  relative overflow-hidden text-[#3D3D3D]  pt-[120px] sm:pb-[30px] md:pb-[60px] sm:px-[20px] md:px-[30px] lg:px-[40px] ${styles.gridforresume}`}>
      <div className={`headline sm:p-[20px]  md:p-[25px] lg:p-[30px] xl:p-[35px] shadow-md  flex flex-col  gap-[1rem] bg-[rgb(3,111,113,0.1)] slide-in-left ${styles.skills}`}>
        <div className=' relative h-fit w-fit'>
          
          <p className='sm:text-[18px] md:text-[25px] font-[700]   uppercase  headline tracking-wide'>Skills</p>
        
        </div>
                  <div className='flex flex-col  max-h-fit mb-2   sm:text-[15px] md:text-[17px]'>
                    <p className='font[700] opacity-90'>Programming Languages:</p>
                    <p className='flex-1 font-[400] '>JavaScript,TypeScript,Python,C,Java,HTML,CSS.</p>

                  </div>
                  <div className='flex flex-col  max-h-fit mb-2   sm:text-[15px] md:text-[17px]'>
                    <p className='font[700] opacity-90'>Libraries & Frameworks:</p>
                    <p className='flex-1 font-[400] '> React.js, Mantine UI, Tailwind CSS,Redux, RTK Query, Express.js, REST APIs.</p>

                  </div>
                  <div className='flex flex-col  max-h-fit mb-2   sm:text-[15px] md:text-[17px]'>
                    <p className='font[700] opacity-90'>Database & Backend Services:</p>
                    <p className='flex-1 font-[400] '> Firebase,Supabase,MongoDB,MySQL.</p>

                  </div>
                  <div className='flex   max-h-fit mb-2   sm:text-[15px] md:text-[17px]'>
                    <p className='font[700] opacity-90'>Version control:</p>
                    <p className='flex-1 font-[400] '>Git</p>

                  </div>
        </div>
        <div className={`headline  sm:p-[20px]  md:p-[25px] lg:p-[30px] xl:p-[35px] shadow-md flex flex-col gap-[1rem] bg-[rgb(3,111,113,0.1)] slide-in-right ${styles.about}`}>
        <div className=' relative h-fit w-fit'>
          
          <p className='sm:text-[18px] md:text-[25px] font-[700]   uppercase headline tracking-wide'>Software Developer</p>
          
        </div>
        <div className=' text-justify'> <p className='sm:text-[15px] md:text-[17px] '>I am a dedicated Software Developer with a strong foundation in React.js, JavaScript, and responsive design. I enjoy 
creating dynamic, user-focused web applications and am always excited to tackle new challenges. With experience in 
state management using Redux and RTK Query, as well as backend solutions like Firebase and Supabase, I strive to 
deliver clean, functional, and visually appealing code. Constantly learning and evolving, I’m passionate about building 
solutions that enhance user experiences and streamline processes. </p></div>
        </div>

        <div className={`headline sm:p-[20px]  md:p-[25px] lg:p-[30px] xl:p-[35px]shadow-md flex flex-col gap-[1rem] bg-[rgb(3,111,113,0.1)] slide-in-right  ${styles.experience}`}>
        <div className=' relative h-fit w-fit'>
          
          <p className='sm:text-[18px] md:text-[25px] font-[700]   uppercase  headline tracking-wide'>Experience</p>
          
        </div>
        <div className=' flex sm:flex-col md:flex-row text-justify sm:text-[15px] md:text-[17px]'>
           <p className='flex-1'>Imiot TechnoLabs LLP Ltd </p> <p className='flex-1 font-[700]'> React js Developer Intern </p> <p className='self-end opacity-60'>  02-08-2024 </p>
        </div>
        </div>

        <div className={`headline sm:p-[20px]  md:p-[25px] lg:p-[30px] xl:p-[35px] shadow-md flex flex-col gap-[1.5rem] bg-[rgb(3,111,113,0.1)] slide-in-bottom  ${styles.projects}`}>
        <div className=' relative h-fit w-fit'>
          
          <p className='sm:text-[18px] md:text-[25px] font-[700]   uppercase  headline tracking-wide'>Projects</p>
          
        </div>
        {projectData.map((project,index)=><div  key={project.id} className={`${index !== projectData.length-1 ? 'border-b-[0.5px]' : ''} pb-2 border-textColor border-opacity-20 flex flex-col gap-2 sm:text-[15px] md:text-[17px]`}>
          <div className='flex justify-between items-center '>
            <p className='font-[700] tracking-widest'>{project.title}</p>
              <p className='opacity-60'>{project.date}</p>
          </div>
          <div>
          <p className='text-justify uppercase font-[200]  opacity-80 my-1'>TECHSTACK : {project.description.techstack}</p>

          <p className='text-justify'>{project.description.topDescription}</p>
          <ul className='sm:pl-8 lg:pl-12 py-3'>
            <li className='sm:-ml-8 lg:-ml-12'>Key Features</li>
            {project.description.keyFeatures.map((feature)=><li className='list-disc'>{feature}</li>)}
          </ul>
          <p className='text-justify'>{project.description.lastDesription}</p>

          <button  onClick={()=>window.open(project.link, '_blank')} className='my-3 font-[900] px-5  py-1 bg-hoverNavClr bg-opacity-10 rounded-md'>Preview</button>
          </div>
           
        </div>)}
        </div>


    </section>
  )
}

export default Resume