import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { hideSmNav } from '../../../redux/Slice/Nav/ShowSlice'
function Home() {
  const dispatch = useDispatch()
  return (
   <>
   <section onClick={()=>dispatch(hideSmNav())} className='h-[calc(100vh-60px)] flex flex-col'>
      <div className=' flex sm:flex-col-reverse flex-1 md:flex-row w-5/6 m-auto md:pt-[4rem] gap-[36px]'>
        <div className='basis-1/2  flex flex-col bg-red-300  sm:items-center  md:items-start  justify-center  gap-[44px] sm:py-4 md:py-8 xl:py-20 md:px-8  xl:px-12'>
             <div className='flex flex-col gap-[8px] sm:items-center  md:items-start'>
                <h1 className='sm:text-[30px] md:text-[38px] lg:text-[44px] text-[#3D3D3D] leading-[72px] font-[700] typing-container'>Hi, I'm Muneera</h1>
                <p className='sm:text-[20px] text-[24px] text-[#3D3D3D] leading-[32px] text-justify font-[400] tracking-widest font-[400]'>Software Developer</p>
             </div>
             <div className='flex sm:flex-col md:flex-row w-full gap-[20px] items-center  '>
             <button className='min-w-fit hover:text-[#578E7E]  border-[0.1px] border-[rgb(255, 255, 255)] sm:px-[30px] hover:bg-[#323232] hover:opacity-100 bg-[#3D3D3D] bg-opacity-40  xl:px-[34px] py-[10px] sm:w-full md:w-fit  h-[63px] rounded-full text-[20px] font-[400]' ><Link to='https://www.linkedin.com/in/muneerakottarath'>Hire me</Link></button>
             <button className='min-w-fit hover:text-[#578E7E] border-[0.1px] border-[rgb(255, 255, 255)] sm:px-[30px]  hover:bg-[#323232] hover:opacity-100 bg-[#3D3D3D] bg-opacity-40   xl:px-[34px] py-[10px] sm:w-full md:w-fit h-[63px] rounded-full text-[20px] font-[400]' ><a href='/CV.pdf' download="Muneera_Resume.pdf">Download Resume</a></button>

             </div>
             
        </div>
       
      
    </div>

</section><Footer/></>
  )
}

export default Home