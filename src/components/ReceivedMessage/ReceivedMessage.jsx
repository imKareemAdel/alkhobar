import React from 'react'
import img1 from '../../assets/Frame (1).svg';
import { Link, NavLink } from 'react-router-dom';


export default function ReceivedMessage() {
  return (
    <>
    
    
    <div className='container m-auto pt-[188px]  flex justify-center items-center  '>


<div>

    <h1 className='text-center text-[30px] font-bold mb-3 text-[#192E4D]'>
    Thank you for reaching out!
    </h1>
    <p className='text-[16px] text-[#757575] w-[362px] text-center mb-7'>We've received your message and will get back to you as<br/> soon as possible. Stay tuned! </p>
   <div className='w-[344.57px] h-[323.21px]'>

    <img className='w-full' src={img1}/>
   </div>
  
  <Link to={'/'}>

                        <button type="submit" class="text-white duration-[0.5s] bg-[#2A4E84] hover:bg-[#8BABDA] focus:ring-4 focus:outline-none mb-6 font-medium rounded-2xl mt-4   w-full px-5 py-3 text-center  text-xl ">Back to home</button>
                    </Link>


</div>

</div>

    
    
    
    
    
    
    
    
    
    
    </>
  )
}
