import React from 'react'

function ContactForm() {
  return (
    <form className='flex flex-col gap-[5px]'>
        {/* <label for='name'>Name</label> */}
        <input type='text' name='name' placeholder='Enter your name' className='p-[10px] boxShadow rounded-md bg-[#1B1B1B]'></input>
        {/* <label for='name'>Email Address</label> */}
        <input type='text' name='name' placeholder='Email Address' className='p-[10px] boxShadow rounded-md bg-[#1B1B1B]'></input>
        {/* <label for='name'>Phone No</label> */}
        <input type='text' name='name' placeholder='Phone Number' className='p-[10px] boxShadow rounded-md bg-[#1B1B1B]'></input>
        <input type='submit' className='my-[10px] boxShadow py-[10px] px-[20px] w-1/4 rounded-md bg-black font-[700]'/>
    </form>
  )
}

export default ContactForm