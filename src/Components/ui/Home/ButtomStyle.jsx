import React from 'react'
import jquerylogo from '../../../assets/images/logo-1.png'
import wordPresslogo from '../../../assets/images/logo-2.png'
import lesslogo from '../../../assets/images/logo-3.png'
import sasslogo from '../../../assets/images/logo-5.png'
import spotifylogo from '../../../assets/images/logo-6.png'
function ButtomStyle() {
  return (
    <div className='px-20 py-10 bg-[rgb(255,255,255,0.1)]  grid sm:grid-cols-1  lg:grid-cols-5 justify-items-center gap-y-3'>
      <img src={jquerylogo} width={'267.123px'} height={'50px'} className=''/>
      <img src={wordPresslogo} width={'267.123px'} height={'50px'} className=''/>
      <img src={lesslogo} width={'267.123px'} height={'50px'} className=''/>
      <img src={sasslogo} width={'267.123px'} height={'50px'} className=''/>
      <img src={spotifylogo} width={'267.123px'} height={'50px'} className=''/>
   </div>
   )
}

export default ButtomStyle