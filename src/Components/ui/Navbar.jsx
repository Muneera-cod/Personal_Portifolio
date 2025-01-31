import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function Navbar({setView}) {
  const navigate=useNavigate()
  return (
    <header  >
        <ul >
            {/* <li className=' font-[700] text-[20px]' onClick={()=>{navigate('');setView(0)}}>Home</li>
            <li className=' font-[700] text-[20px]' onClick={()=>{navigate('aboutme');setView(1)}}>About me</li> */}


<NavLink to={'/'}>
    {({ isActive, isPending }) => {
      const className = isPending ? "pending" : isActive ? "active" : "";
      return <li className={className}>Home</li>;
    }}
  </NavLink>
  <NavLink to={'aboutme'}>
    {({ isActive, isPending }) => {
      const className = isPending ? "pending" : isActive ? "active" : "";
      return <li className={className}>About me</li>;
    }}
  </NavLink>
  <NavLink to={'resume'}>
    {({ isActive, isPending }) => {
      const className = isPending ? "pending" : isActive ? "active" : "";
      return <li className={className}>Resume</li>;
    }}
  </NavLink>
            
        </ul>
        {/* <div className='flex gap-[3rem] items-center'>
            {/* <IoMdHome size={'20px'} className='tranfromEffect hidden show' title='HOME'/>
            <IoPersonSharp size={'20px'} className='tranfromEffect hidden show' title='ABOUT ME'/>
            <MdContactMail size={'20px'} className='tranfromEffect hidden show' title='CONTACT ME'/> */}
            {/* <a href='https://www.linkedin.com/in/muneerakottarath/'><FaLinkedinIn size={'20px'} title='LinkedIn'  className='tranfromEffect'/></a>
            <a href='https://github.com/Muneera-cod'><FaGithub  size={'20px'} title='GitHub'  className='tranfromEffect'/></a> */}
        {/* </div> */} 
    </header>
  )
}

export default Navbar