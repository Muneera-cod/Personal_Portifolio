import { IconMenu2 } from '@tabler/icons-react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom'
import SmNavbar from './SmNavbar';
import { useSelector,useDispatch } from 'react-redux';
import { hideSmNav, showSmNav } from '../../redux/Slice/Nav/ShowSlice';
function Navbar() {
  const dispatch = useDispatch()
  const navShow = useSelector((state)=>state.show.smNav)
  console.log('smbljfjb',navShow)
  return (
    <header  >
        <ul className='sm:hidden md:flex'>
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
  <NavLink to={'projects'}>
    {({ isActive, isPending }) => {
      const className = isPending ? "pending" : isActive ? "active" : "";
      return <li className={className}>Projects</li>;
    }}
  </NavLink>
  <NavLink to={'resume'}>
    {({ isActive, isPending }) => {
      const className = isPending ? "pending" : isActive ? "active" : "";
      return <li className={className}>Resume</li>;
    }}
  </NavLink>

            
        </ul>
        <IconMenu2 onClick={()=>{navShow ? dispatch(hideSmNav()) : dispatch(showSmNav())}} className='sm:block md:hidden'/>
        { navShow && createPortal(<SmNavbar/>,document.body)}
      
    </header>
  )
}

export default Navbar