import React, { useEffect, useState } from 'react'
import Navbar from '../ui/Navbar'
import Home from '../ui/Home/Home'
import Aboutme from '../ui/About me/Aboutme'
import Footer from '../ui/Footer/Footer'
import ProjectDetails from '../ui/Projects/ProjectDetails'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function Main() {

  const[view,setView]=useState(0)
  const location=useLocation()
  useEffect(()=>{
    if(location.pathname==='/'){
      setView(0)
    }
    else if(location.pathname==='/aboutme'){
      setView(1)
    }
    else if(location.pathname==='/resume'){
      setView(1)
    }
  },[location.pathname])
  console.log(view)
  return (
    <>
     <Navbar setView={setView}/>
      {view===0 && <Home/>}
    {view===1 && <Outlet/>}
    {/* <ProjectDetails/>  */}
     
     </>
   
  )
}

export default Main