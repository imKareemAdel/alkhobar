import React from 'react'
import { Checkbox, Label } from "flowbite-react";
import { Link, NavLink } from 'react-router-dom';
import img1 from '../../assets/Frame.svg';
import google from '../../assets/google.png';


export default function Signup() {
    return (
        <>
            <div className='container m-auto pt-32'>
                <div className='flex flex-wrap justify-center '>
                    <div className='w-full md:w-6/12 '>
                    <div className='  justify-start items-center md:flex hidden'>

<img className='w-[600px] h-[600px]' src={img1}/>


            </div>
                    </div>
                    <div className='w-full md:w-5/12'>
                        <h1 className='text-3xl font-bold mb-10  text-start text-[#192E4D] mx-5'>
                        Log in to continue your<br/> learning journey
                        </h1>
                        <form className="mx-5">
                           

                            <div class="relative z-0  mb-5 group">
                                <input type="email" name="floating_email" id="floating_email" class="block pt-5  w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email</label>
                            </div>
                            <div class="relative z-0 w-full mb-1 group">
                                <input type="password" name="floating_password" id="floating_password" class="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer" placeholder=" " required />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Password</label>
                            </div>
                            <Link to={'/ForgetPassword'}>
                            
                            <p className='text-end'>Forget Password ?</p>
                            </Link>
                           
                            <div className="flex max-w-md my-6" id="checkbox">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="promotion" className=' ' />
                                    <Label htmlFor="promotion" className='font-thin text-lg'>Remember me.</Label>
                                </div>



                            </div>

                            <button type="submit" class="text-white duration-[0.5s] bg-[#2A4E84] hover:bg-[#8BABDA] focus:ring-4 focus:outline-none mb-4 font-medium rounded-2xl   w-full px-5 py-3 text-center  text-xl ">Log in</button>
<div className='my-5'>
<p className='relative flex items-center justify-center font-sans text-lg text-center text-[#757575]'>
  <span className="absolute left-0 w-1/4 border-t border-[#757575]"></span>
  Or log in with
  <span className="absolute right-0 w-1/4 border-t border-[#757575]"></span>
</p>

    <div className='flex gap-[32px] justify-center items-center my-7'>
    <div className='border-2 border-[#2A4E84] rounded-2xl w-[56px] h-[56px] flex justify-center items-center cursor-pointer'>
  <img src={google} alt="Google logo" className="w-[30px] h-[30px]" />
</div>

<div className='border-2 border-[#2A4E84] rounded-2xl w-[56px] h-[56px] flex justify-center items-center cursor-pointer'>
<i className="fa-brands fa-apple text-[#2A4E84] text-4xl"></i>
</div>
    </div>
</div>
                            <h1 className='text-lg text-center font-semibold mb-11'>
                                Don’t have an account? <span className='text-[#2A4E84]'><Link to={'/Signup'}> Sign Up </Link></span>
                            </h1>

                        </form>


                    </div>

                </div>


            </div>






        </>
    )
}
