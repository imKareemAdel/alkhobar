import React from 'react'
import img1 from '../../assets/Frame 381.svg';
import { Link, NavLink } from 'react-router-dom';


export default function Payment() {
  return (
    <>
    
    
    <div className='container m-auto pt-[180px]  flex justify-center items-center  '>


<div>

    <h1 className='text-center text-[30px] font-bold mb-3 text-[#192E4D]'>
    Payment failed!
    </h1>
    
    <p className='text-[16px] text-[#757575] w-[362px] text-center mb-7'>Please try again or use a different payment method</p>
   <div className='w-[344.57px] h-[323.21px]'>

    <img className='w-full' src={img1}/>
   </div>
   <Link to={'/Checkout'}>
  
                          <button type="submit" class="text-white mb-12 mt-8 duration-[0.5s] bg-[#2A4E84] hover:bg-[#8BABDA] focus:ring-4 focus:outline-none  font-medium rounded-2xl   w-full px-5 py-3 text-center  text-xl ">Back to Payment</button>
                      </Link>
</div>

</div>

    
    
    
    
    
    
    
    
    
    
    </>
  )
}
