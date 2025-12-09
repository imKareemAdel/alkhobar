const All = ({handleMenuClick}) => {

 return(

    
    <div className='h-screen'>

        <div className='flex justify-between items-center mx-5 pb-10 text-[#2A4E84]'>
            <p className='text-[24px]'>كل الدورات</p>
            <div className='border cursor-pointer border-[#2A4E84] h-[56px] w-[214px] flex justify-center items-center mt-5 rounded-md'>
                <h1 className='text-[16px] ' onClick={() => handleMenuClick("إضافه دورة")}>+ إضافة دورة</h1>
            </div>




        </div>
        <div className="relative overflow-x-auto  sm:rounded-lg mx-6">
            <table className="w-full text-center  rtl:text-right text-gray-500 text-[18px] mb-10">
                <thead className="text-[18px] text-gray-700 uppercase text-center  ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            الصورة
                        </th>
                        <th scope="col" className="px-6 py-3">
                            الاسم
                        </th>
                        <th scope="col" className="px-6 py-3">
                            القسم
                        </th>
                        <th scope="col" className="px-6 py-3">
                            الإجراءات
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-[#F6FAFF]  even:bg-white  text-center border-gray-200">

                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            الدبلومات التدريبة
                        </td>
                        <td className="px-6 py-4">
                            4 دورات
                        </td>
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-solid fa-eye me-1"></i>  <i className="fa-regular fa-pen-to-square me-1" onClick={() => handleMenuClick('تعديل الدورة')}></i>  <i className="fa-solid fa-trash-can text-[#CA152A] me-1"></i>
                        </td>
                    </tr>
                    <tr className="odd:bg-[#F6FAFF] text-center even:bg-white border-gray-200">

                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            الدبلومات التدريبة
                        </td>
                        <td className="px-6 py-4">
                            4 دورات
                        </td>
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-solid fa-eye me-1"></i>  <i className="fa-regular fa-pen-to-square me-1" onClick={() => handleMenuClick('تعديل الدورة')}></i>  <i className="fa-solid fa-trash-can text-[#CA152A] me-1"></i>
                        </td>
                    </tr>
                    <tr className="odd:bg-[#F6FAFF] text-center even:bg-white   border-gray-200">

                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            الدبلومات التدريبة
                        </td>
                        <td className="px-6 py-4">
                            4 دورات
                        </td>
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-solid fa-eye me-1"></i>  <i className="fa-regular fa-pen-to-square me-1" onClick={() => handleMenuClick('تعديل الدورة')}></i>  <i className="fa-solid fa-trash-can text-[#CA152A] me-1"></i>
                        </td>
                    </tr>
                    <tr className="odd:bg-[#F6FAFF] text-center  even:bg-white  border-gray-200">

                        <td className="px-6 py-4">
                            Gray
                        </td>
                        <td className="px-6 py-4">
                            الدبلومات التدريبة
                        </td>
                        <td className="px-6 py-4">
                            4 دورات
                        </td>
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-solid fa-eye me-1"></i>  <i className="fa-regular fa-pen-to-square me-1" onClick={() => handleMenuClick('تعديل الدورة')}></i>  <i className="fa-solid fa-trash-can text-[#CA152A] me-1"></i>
                        </td>
                    </tr>
                    <tr className="odd:bg-[#F6FAFF] text-center  even:bg-white  border-gray-200">

                        <td className="px-6 py-4">
                            Red
                        </td>
                        <td className="px-6 py-4">
                            الدبلومات التدريبة
                        </td>
                        <td className="px-6 py-4">
                            4 دورات
                        </td>
                        <td className="px-6 py-4 text-lg">
                            <i className="fa-solid fa-eye me-1"></i>  <i className="fa-regular fa-pen-to-square me-1" onClick={() => handleMenuClick('تعديل الدورة')}></i>  <i className="fa-solid fa-trash-can text-[#CA152A] me-1"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>




    )

}
export default All;