import { projects } from './Data'
import { useDispatch } from 'react-redux'
import { hideSmNav } from '../../../redux/Slice/Nav/ShowSlice'
function ProjectDetails() {
  const dispatch = useDispatch()
  return (
  <section onClick={()=>dispatch(hideSmNav())} className='flex flex-col pt-[120px] sm:px-[25px] md:px-[30px] lg:px-[45px] gap-10 py-10 slide-in-bottom'>
    <div className='flex items-center'><h1 className='pr-4 font-[700] text-hoverNavClr py-2 font-[900] sm:text-2xl md:text-3xl mr-auto tracking-widest'>Projects</h1><hr className=' border-opacity-20 w-full border-[0.5px] border-hoverNavClr'></hr></div>
    <div className=' grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-10 text-md '>
      { projects.map((project,index)=><div  key={index} className='shadow-md hover:shadow-xl h-[500px] max-h-[500px] min-h-[500px] flex flex-col gap-4  sm:px-6 md:px-8 lg:px-10 py-8 hover:scale-[1.030] shadow-lg bg-hoverNavClr rounded-md border-[0.2px] border-hoverNavClr border-opacity-10 bg-opacity-10'>
           <h1 className='font-[700] '>{project.name}</h1>
           <div className='h-[200px] max-h-[200px] overflow-hidden'><img onClick={()=>window.open(project.link, '_blank')} src={project.img} className='object-fit rounded-sm w-full h-full flex-1'/></div>
           <p className='my-2 text-justify'>{project.description}</p>
        </div>
)}
    </div>
  </section>
  )
}

export default ProjectDetails