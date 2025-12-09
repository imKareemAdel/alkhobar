import React from 'react'
import img1 from '../../assets/Frame (1).svg';
import { Link, NavLink } from 'react-router-dom';


export default function Email() {
  return (
    <>
    
    
    <div className='container m-auto pt-[188px]  flex justify-center items-center  '>


<div>

    <h1 className='text-center text-[30px] font-bold mb-3 text-[#192E4D]'>
    Email has been sent
    </h1>
    <p className='text-[16px] text-[#757575] w-[362px] text-center mb-7'>Please check your email inbox for a password recovery link.<br/> Don't forget to check your spam folder.</p>
   <div className='w-[344.57px] h-[323.21px]'>

    <img className='w-full' src={img1}/>
   </div>
   <p className='text-center pb-9 text-[16px] mt-3'>
   Back to <Link className='text-[#2A4E84] font-semibold' to={'/Login'}>Login
   </Link> 
   </p>
</div>

</div>

    
    
    
    
    
    
    
    
    
    
    </>
  )
}
