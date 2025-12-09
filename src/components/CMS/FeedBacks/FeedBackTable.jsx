import React from 'react'
import { Search } from "lucide-react";


const FeedBackTable = ({ handleMenuClick }) => {
    
  return (
   
    
    <div className='h-screen relative bg-[#FEFEFE] shadow m-8'>

        <div className='flex justify-between items-center mx-6  pb-10 text-[#2A4E84]'>

            <p className='text-[24px] mt-3'>التعليقات</p>
            <div className='w-[554px]'>
                <div className="flex-1 ">
                    <div className="relative mt-3">
                        <input
                            type="text"
                            placeholder='بحث عن...'
                            className="w-full h-[56px]  bg-[#F7F7F7] rounded-lg font-semibold border-0 text-sm  outline-none text-right ps-10"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2  p-1.5 rounded-lg cursor-pointer">
                            <Search className="h-4 w-4 text-black" />
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => handleMenuClick('إضافه تعليق')} className='border cursor-pointer border-[#2A4E84] h-[56px] w-[214px] flex justify-center items-center mt-3 rounded-md'>
                <h1 className='text-[16px] ' >+ إضافة تعليق</h1>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
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
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-regular fa-pen-to-square cursor-pointer me-1 text-[#2A4E84]" onClick={() => handleMenuClick('تعديل تعليق')}></i>  <i className="fa-solid fa-trash-can cursor-pointer text-[#CA152A] me-1"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>




























  )
}
export default FeedBackTable;