import React from 'react'
import { IconChevronLeft,IconChevronRight } from '@tabler/icons-react'
function ProjectDetails() {
  return (
    <div className='flex gap-[10px]  px-[32px] pb-[52px] items-center justify-center '>
     <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full boxShadow'>
        <IconChevronLeft className='text-white'/>
      </div>
    <div className='flex  px-[24px]  overflow-hidden items-center justify-center flex-1'>
      <div className='text-white bg-zinc-200 p-[10px] min-h-[400px] flex-1 min-w-[450px]'>
        <div className='bg-black w-full h-full flex flex-col'>
          <img></img>
           <div></div>
        </div>
      </div>
      <div className='text-white  bg-zinc-500 p-[10px] min-h-[400px] flex-1 min-w-[450px]'>
      <div className='bg-black w-full h-full flex flex-col'>
          <img></img>
           <div></div>
        </div>
      </div>
      <div className='text-white  bg-zinc-300 p-[10px] min-h-[400px] flex-1 min-w-[450px]'>
      <div className='bg-black w-full h-full flex flex-col'>
          <img></img>
           <div></div>
        </div>
      </div>
      <div className='text-white  bg-zinc-100 p-[10px] min-h-[400px] flex-1 min-w-[450px]'>
      <div className='bg-black w-full h-full flex flex-col'>
          <img></img>
           <div></div>
        </div>
      </div>
      <div className='text-white  bg-zinc-400 p-[10px] min-h-[400px] flex-1 min-w-[450px]'>
      <div className='bg-black w-full h-full flex flex-col'>
          <img></img>
           <div></div>
        </div>
      </div>

    </div>
    <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full boxShadow'>
      <IconChevronRight className='text-white'/></div>
    </div>
  )
}

export default ProjectDetails