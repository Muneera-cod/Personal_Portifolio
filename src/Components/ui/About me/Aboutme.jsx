import React from 'react'
import photo from '../../../assets/Images/about-removebg.png'
import htmicon from '../../../assets/Images/icons8-html.svg'
import cssicon from '../../../assets/Images/icons8-css.svg'
import giticon from '../../../assets/Images/icons8-git.svg'
import JavaScripticon from '../../../assets/Images/icons8-javascript.svg'
import tailwindicon from '../../../assets/Images/icons8-tailwind-css.svg'
import reacticon from '../../../assets/Images/icons8-react-js.svg'
import typeScripticon from '../../../assets/Images/icons8-typescript.svg'
import reduxicon from '../../../assets/Images/icons8-redux.svg'
import { useDispatch } from 'react-redux'
import { hideSmNav } from '../../../redux/Slice/Nav/ShowSlice'
function Aboutme() {
    const dispatch = useDispatch()
  
  return (
    <section onClick={()=>dispatch(hideSmNav())} className='flex  min-h-screen relative overflow-hidden sm:flex-col md:flex-row items-center   w-full   sm:px-[14px] md:px-[20px] lg:px-[28px] xl:px-[45px] pt-[100px] pb-10'>
      
           
           <div className='flex  m-auto flex   items-center justify-center max-w-[400px] max-h-[400px] min-h-[300px]   overflow-hidden'>
              <img src={photo}  className='w-full h-full object-cover '></img>
          </div>
        <div className='basis-1/2 flex   justify-start  flex-col  bg-red-300 gap-4  md:p-6 slide-in-right'>
        <p className='text-hoverNavClr text-[24px] font-[700]'>Hi,everyone...</p>
                <ul className='sm:text-[14px] md:text-[16px] text-[#3D3D3D] font-[700]  sm:text-center md:text-left  leading-[28px]'>
                <li>I’m a software developer specializing in building responsive, user-friendly interfaces with React.js.</li>
                  <li>Passionate about creating seamless, intuitive web applications, I focus on combining clean design with functional performance.</li> 
                   <li>Currently, I’m dedicated to refining my skills in frontend development and taking on new challenges to grow as a developer.</li> </ul>
  
             <p className='text-[18px] text-hoverNavClr font-[700]'>Here are my skills:</p>
             <div className='flex gap-4 flex-wrap items-center sm:justify-center md:justify-start sm:min-w-[250px] md:min-w-[400px]'>
            <img src={htmicon} size={20} className='max-w-[65px] max-h-[65px]'/>
            <img src={cssicon} size={20} className='max-w-[65px] max-h-[65px]'/>
            <img src={tailwindicon} size={20} className='max-w-[65px] max-h-[65px]'/>
            <img src={JavaScripticon} size={20} className='max-w-[65px] max-h-[65px]'/>
            <img src={reacticon} size={20}  className='max-w-[65px] max-h-[65px]'/>
            <img src={typeScripticon} size={20}  className='max-w-[65px] max-h-[65px]'/>
            <img src={reduxicon}  size={20}  className='max-w-[65px] max-h-[65px]'/>
            <img src={giticon}  size={20}  className='max-w-[65px] max-h-[65px]'/>
         </div>
        </div>
       
      
       
    </section>
  )
}

export default Aboutme