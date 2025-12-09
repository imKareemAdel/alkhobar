import React from 'react'
import { Link, NavLink } from 'react-router-dom';




export default function ForgetPassword() {
    return (
        <>


            <div className='container m-auto pt-[188px]  flex justify-center items-center h-screen pb-[188px]'>


                <div>

                    <h1 className='text-center text-[30px] font-bold mb-3 text-[#192E4D]'>
                        Forget Password?
                    </h1>
                    <p className='text-[16px] text-[#757575] w-[362px] text-center mb-7'>Enter the email address you use Before<br />
                        We'll send you a link to reset your password.</p>
                    <div class="relative z-0  mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" class="block pt-5  w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-[#2A4E84] appearance-none   focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-lg ps-4 text-[#0C1727] duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Email</label>
                    </div>

                    <Link to={'/Email'}>

                        <button type="submit" class="text-white duration-[0.5s] bg-[#2A4E84] hover:bg-[#8BABDA] focus:ring-4 focus:outline-none mb-4 font-medium rounded-2xl   w-full px-5 py-3 text-center  text-xl ">Send Email</button>
                    </Link>
                </div>

            </div>

        </>
    )
}
