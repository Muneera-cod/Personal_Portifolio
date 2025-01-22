import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
function Home() {
  return (
   <>
      <div className=' flex sm:flex-col-reverse md:flex-row w-5/6 m-auto min-h-[92vh] py-[3rem] gap-[36px]'>
        <div className='basis-1/2  flex flex-col bg-red-300  sm:items-center  md:items-start  justify-center gap-[44px] sm:py-4 md:p-8  xl:p-14'>
             <div className='flex flex-col gap-[8px] '>
                <h1 className='sm:text-[30px] md:text-[38px] lg:text-[44px] text-[#3D3D3D] leading-[72px] font-[700] typing-container'>Hi, I'm Muneera</h1>
                <p className='sm:text-[20px] text-[24px] text-[#3D3D3D] leading-[32px] text-justify font-[400] tracking-widest font-[400]'>Software Developer</p>
             </div>
             <div className='flex sm:flex-col md:flex-row w-full gap-[20px] items-center  '>
             <button className='min-w-fit hover:text-[#578E7E]  border-[0.1px] border-[rgb(255, 255, 255)] sm:px-[30px] hover:bg-[#323232] hover:opacity-100 bg-[#3D3D3D] bg-opacity-40  xl:px-[34px] py-[10px] sm:w-full md:w-fit  h-[63px] rounded-full text-[20px] font-[400]' ><Link to='https://www.linkedin.com/in/muneerakottarath'>Hire me</Link></button>
             <button className='min-w-fit hover:text-[#578E7E] border-[0.1px] border-[rgb(255, 255, 255)] sm:px-[30px]  hover:bg-[#323232] hover:opacity-100 bg-[#3D3D3D] bg-opacity-40   xl:px-[34px] py-[10px] sm:w-full md:w-fit h-[63px] rounded-full text-[20px] font-[400]' ><a href='/CV.pdf' download="Muneera_Resume.pdf">Download Resume</a></button>

             </div>
             
        </div>
       
      
    </div>

<Footer/></>
  )
}

export default Home