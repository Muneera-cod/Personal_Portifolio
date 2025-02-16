import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { hideSmNav } from '../../redux/Slice/Nav/ShowSlice';
function SmNavbar() {
  const dispatch = useDispatch()

  return (
    <nav onClick={()=>dispatch(hideSmNav())} className="sm:flex md:hidden rounded-md top-16 fixed left-[50%] -translate-x-1/2 z-20 shadow-lg py-12  w-11/12 h-fit bg-red-200 gap-2  flex-col">
        <ul>
        <NavLink to={'/'}>
    {({ isActive, isPending }) => {
      const className = isPending ? "pending" : isActive ? "active" : "";
      return <li className={`text-center px-6 py-4 ${className}`}>Home</li>;
    }}
  </NavLink>
  <NavLink to={'aboutme'}>
    {({ isActive, isPending }) => {
      const className = isPending ? "pending" : isActive ? "active" : "";
      return <li className={`text-center px-6 py-4 ${className}`}>About me</li>;
    }}
  </NavLink>
  <NavLink to={'projects'}>
    {({ isActive, isPending }) => {
      const className = isPending ? "pending" : isActive ? "active" : "";
      return <li className={`text-center px-6 py-4 ${className}`}>Projects</li>;
    }}
  </NavLink>
  <NavLink to={'resume'}>
    {({ isActive, isPending }) => {
      const className = isPending ? "pending" : isActive ? "active" : "";
      return <li className={`text-center px-6 py-4 ${className}`}>Resume</li>;
    }}
  </NavLink>
 
  </ul>
    </nav>
  )
}

export default SmNavbar