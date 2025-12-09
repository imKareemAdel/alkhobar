import React from 'react'
import { Search } from "lucide-react";

const Purchase = ({ handleMenuClick }) => {
    
  return (
   
   
                            <div className='h-screen relative bg-[#FEFEFE] shadow m-8'>

                                <div className='flex justify-between items-center mx-5 pb-10 text-[#2A4E84]'>

                                    <p className='text-[24px]'>عمليات الشراء</p>
                                    <div className='w-[554px] mt-6'>
                                        <div className="flex-1 ">
                                            <div className="relative ">
                                                <input
                                                    type="text"
                                                    placeholder='بحث عن...'
                                                    className="w-full h-[48px]  bg-[#F7F7F7] rounded-lg font-semibold border-0 text-sm  outline-none text-right ps-10"
                                                />
                                                <div className="absolute right-2 top-1/2 -translate-y-1/2  p-1.5 rounded-lg cursor-pointer">
                                                    <Search className="h-4 w-4 text-black" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                                <div className="relative overflow-x-auto  sm:rounded-lg mx-6">
                                    <table className="w-full text-center  rtl:text-right text-gray-500 text-[18px] mb-10">
                                        <thead className="text-[18px] text-gray-700 uppercase text-center  ">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    رقم تسلسلي
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    الاسم
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    الأيميل
                                                </th>
                                                <th className="px-6 py-4">
                                                    الدورة
                                                </th>

                                                <th scope="col" className="px-6 py-3">
                                                    الإجراءات
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="odd:bg-[#F6FAFF]  even:bg-white  text-center border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-[#F6FAFF] text-center even:bg-white border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-[#F6FAFF] text-center even:bg-white   border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-[#F6FAFF] text-center  even:bg-white  border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-[#F6FAFF] text-center  even:bg-white  border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-[#F6FAFF]  even:bg-white  text-center border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-[#F6FAFF]  even:bg-white  text-center border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-[#F6FAFF]  even:bg-white  text-center border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-[#F6FAFF]  even:bg-white  text-center border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="odd:bg-[#F6FAFF]  even:bg-white  text-center border-gray-200">

                                                <td className="px-6 py-4">
                                                    #12547
                                                </td>
                                                <td className="px-6 py-4">
                                                    Ahmed Hasan
                                                </td>
                                                <td className="px-6 py-4">
                                                    ahmedhasan15@gmail.com
                                                </td>
                                                <td className="px-6 py-4">
                                                    دبلوم الحاسب تخصص شبكات الحاسب
                                                </td>
                                                <td className='flex justify-center pt-4'>

                                                    <div class="flex items-center cursor-pointer text-sm justify-center w-6 h-6 border-2 border-[#2A4E84] rounded-full text-[#2A4E84] " onClick={() => handleMenuClick('الإجراءات')}>
                                                        <i class="fa-solid fa-info " ></i>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                   








  )
}
export default Purchase;