import React from 'react'
import { Checkbox, Label } from "flowbite-react";
import { Link, NavLink } from 'react-router-dom';
import img1 from '../../assets/Frame.svg';
import google from '../../assets/google.png';




export default function Signup() {
    return (
        <>
            <div className='container m-auto pt-36'>
                <div className='flex flex-wrap justify-center '>
                <div className='w-full md:w-6/12 '>
  <div className='justify-center items-start md:flex hidden'>
    <img className='w-[600px] h-[600px] mx-auto' src={img1} />
  </div>
</div>

                    <div className='w-full md:w-5/12'>
                        <h1 className='text-3xl font-bold mb-10 text-center text-[#192E4D]'>
                            Sign up and start learning
                        </h1>
                        <form className="mx-5">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="floating_first_name" id="floating_first_name" class="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl  border-2 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer" placeholder=" " required />
                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Full Name</label>
                            </div>

                            <div class="relative z-0  mb-5 group">
                                <input type="email" name="floating_email" id="floating_email" class="block pt-5  w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer" placeholder=" " required />
                                <label for="floating_email" class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="password" name="floating_password" id="floating_password" class="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer" placeholder=" " required />
                                <label for="floating_password" class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Password</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="password" name="repeat_password" id="floating_repeat_password" class="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer" placeholder=" " required />
                                <label for="floating_repeat_password" class="peer-focus:font-medium absolute ps-4 text-lg text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Confirm password</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer" placeholder=" " required />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500  duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Phone number</label>
                            </div>
                            <div className="flex max-w-md my-6" id="checkbox">
                                <div className="flex items-center gap-2">
                                    <Checkbox id="promotion" />
                                    <Label htmlFor="promotion" className='font-thin text-lg'>Send me special offers, personalized, learning tips and personalized recommendations.</Label>
                                </div>



                            </div>


                            <button type="submit" class="text-white duration-[0.5s] bg-[#2A4E84] hover:bg-[#8BABDA] focus:ring-4 focus:outline-none mb-4 font-medium rounded-2xl   w-full px-5 py-3 text-center  text-xl ">Sign Up</button>

                            <div className='my-5'>
                                <p className='relative flex items-center justify-center font-sans text-lg text-center text-[#757575]'>
                                    <span className="absolute left-0 w-1/4 border-t border-[#757575]"></span>
                                    Other sign up options
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
                            <p className='font-thin text-gray-500 text-center mb-4'>

                                By signing up, you agree to our Terms of Use and Privacy Policy.
                            </p>
                            <h1 className='text-lg text-center font-semibold mb-11'>
                                Already have an account? <span className='text-[#2A4E84]'><Link to={'/Login'}>  Log in </Link></span>
                            </h1>

                        </form>


                    </div>

                </div>


            </div>







        </>
    )
}
