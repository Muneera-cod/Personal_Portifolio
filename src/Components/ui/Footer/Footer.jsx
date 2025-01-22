import React from 'react'
import { IconBrandGithubFilled,IconBrandLinkedin } from "@tabler/icons-react";
import { IoMdHome,IoMdMail } from "react-icons/io";
// import { FaPhone } from "react-icons/fa6";
// import { IoPersonSharp } from "react-icons/io5";
// import { MdContactMail } from "react-icons/md";
// import ContactForm from './ContactForm';
function Footer() {
  return (
    <footer >
      {/* <div className='flex sm:flex-col lg:flex-row gap-[20px]'>
        <div className='flex flex-col basis-1/2   md:px-[20px]   rounded-md'>
           <div className='flex flex-col boxshadowgray rounded-md p-[20px] gap-[20px]'>
             <p className='font-[700]'>CONTACT ME</p>
            <ContactForm/>
            </div>
        </div>
        <div className='flex flex-col basis-1/2   md:px-[20px] '>
            <div className='flex flex-col boxshadowgray rounded-md p-[20px] min-w-1/2 gap-[20px]'>
             <p className='font-[700]'>ADDRESS</p>
             <div className='flex flex-col gap-[5px] bg-black rounded-md p-[12px] boxshadowgray'>
                 <ul className='text-white text-[14px] leading-[24px] flex flex-col gap-[10px]'>
                    <li>KOTTARATHIL(H),KALLIKANDYP.O, KANNUR.670693</li>
                    <li  className='flex flex-wrap  gap-[10px]'><span className='font-[700] flex gap-[6px] items-center '><FaPhone size={15}/> ContactNo </span>: 7306705054</li>
                    <li className='flex flex-wrap gap-[10px]'><span className='font-[700] flex items-center gap-[6px]'><IoMdMail size={15}/>Email: </span>muneerakottarath99@gmail.com</li>
                 </ul>
             </div>
            </div> 
        </div>
      </div> */}
      <div className='flex items-center sm:justify-center md:justify-start  px-[10px] '>
        {/* <p className='text-[12px] tracking-widest'>&copy; {new Date().getFullYear()} Muneera. All rights reserved.</p> */}

         <div className='flex gap-4 text-[#3D3D3D] bg-opacity-40 '>
            <a href='https://www.linkedin.com/in/muneerakottarath/'><IconBrandLinkedin className="tranfromEffect" size={'25px'} title='LinkedIn'/></a>
            <a href='https://github.com/Muneera-cod'><IconBrandGithubFilled  size={'25px'} title='GitHub' className="tranfromEffect"/></a>
            <a href='https://github.com/Muneera-cod'><IoMdMail  size={'25px'} title='Email' className="tranfromEffect"/></a>
         </div>
      </div>   
      {/* <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className='text-[10px]'>Back to Top</button> */}
    </footer>
  )
}

export default Footer