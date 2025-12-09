import React from 'react'

const Procedures = ({ handleMenuClick }) => {
    
  return (
   
    

                            <div className='h-screen relative bg-[#FEFEFE] shadow m-8'>
                                <h1 className='text-[24px] text-[#254574] pt-5 mx-6'>
                                    عملية رقم #12547
                                </h1>
                                <div className='flex justify-between  mt-9 mx-6'>

                                    <div className='w-[584px] '>
                                        <h1 className='text-[18px] text-[#254574]  ms-1'>
                                            أسم العميل
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>Ahmed Hasan</p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            رقم الهوية الوطنية
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>0123654789</p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            الدورة
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>دبلوم الحاسب تخصص شبكات الحاسب</p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            سعر الدورة
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>600 ريال سعودي</p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            تاريخ الشراء
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>12\80\2025</p>

                                        </div>



                                    </div>









                                    <div className='w-[584px] '>
                                        <h1 className='text-[18px] text-[#254574]  ms-1'>
                                            الأيميل
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>ahmedhasan15@gmail.com</p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            التليفون
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>+966442088918</p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            القسم
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>دورات تدريبية</p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            وسيلة الدفع
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>تمارا</p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            تاريخ بداية الدورة
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>12\80\2025</p>

                                        </div>



                                    </div>

                                </div>
                                <div className='absolute bottom-3 left-2 flex space-x-4'>
                                    <button className='bg-[#2A4E84] text-white w-[285px] h-[56px] flex justify-center items-center rounded-md me-3' onClick={() => handleMenuClick('عمليات الشراء')}>رجوع</button>
                                </div>
                            </div>



















                        








  )
}
export default Procedures;