import React from 'react'

const EditFeedBack = ({ handleMenuClick }) => {
    
  return (
   


    <div className='h-screen relative bg-[#FEFEFE] shadow m-8'>
        <h1 className='text-[24px] text-[#254574] pt-5 mx-5'>
            تعليق رقم #12547
        </h1>

        <div className='flex justify-around items-start mx-2'>
            <div className='w-[584px]'>
                <div className='mt-7'>
                    <h1 className='text-[18px] text-[#254574] ms-1'>
                        أسم العميل
                    </h1>
                    <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-md'>
                        <input
                            type="text"
                            value="Ahmed Hasan"
                            className="bg-[#F2F2F2] w-full border-none focus:outline-none focus:ring-0"
                            style={{ boxShadow: 'none' }}
                        />
                    </div>
                </div>
                <div className='mt-7'>
                    <h1 className='text-[18px] text-[#254574] ms-1'>
                        القسم
                    </h1>
                    <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-md'>
                        <input
                            type="text"
                            value="دورات تأهيلية"
                            className="bg-[#F2F2F2] w-full border-none focus:outline-none focus:ring-0"
                            style={{ boxShadow: 'none' }}
                        />
                    </div>
                </div>

                <div class="flex items-center space-x-2 mt-7 space-x-reverse mb-4">
                    <input
                        type="checkbox"
                        class="w-6 h-6 border-2 border-[#21355E] rounded-md focus:outline-none focus:ring-0 checked:bg-[#21355E] checked:border-[#21355E] checked:text-white checked:focus:outline-none checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27white%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M5 13l4 4L19 7%27 /%3E%3C/svg%3E')] bg-center bg-no-repeat" />
                    <label class="text-[#21355E] text-lg">إضافة الى صفحة الدورة .</label>
                </div>

                <div class="flex items-center space-x-2 space-x-reverse">
                    <input
                        type="checkbox"
                        class="w-6 h-6 border-2 border-[#21355E] rounded-md focus:outline-none focus:ring-0 checked:bg-[#21355E] checked:border-[#21355E] checked:text-white checked:focus:outline-none checked:bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27white%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M5 13l4 4L19 7%27 /%3E%3C/svg%3E')] bg-center bg-no-repeat" />
                    <label class="text-[#21355E] text-lg">إضافة الى الصفحة الرئيسية .</label>
                </div>


            </div>
            <div className='w-[584px]'>
                <div className='mt-7'>
                    <div class="w-full ">
                        <label class="block text-[#254574] text-[18px] mb-2">الدورة</label>
                        <div>
                            <select class="block appearance-none w-full h-[55px] bg-[#F5F5F5] border-0 text-gray-500 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring-0 focus:border-transparent">
                                <option>دبلوم الحاسب تخصص شبكات الحاسب</option>
                                <option>الدورة 1</option>
                                <option>الدورة 2</option>
                                <option>الدورة 3</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='mt-7'>
                    <h1 className='text-[18px] text-[#254574] ms-1'>
                        محتوى التعليق
                    </h1>
                    <div className='w-full  bg-[#F2F2F2] flex justify-start items-start mt-2 ps-3 text-[16px] rounded-md'>
                        <textarea
                            placeholder=""
                            value='هذا نص وهمي يستخدم لملء المساحات في التصميم. يمكنك استبداله بالمحتوى الفعلي لاحقًا. يتم استخدام هذا النص لاختبار الشكل العام للصفحة دون الحاجة إلى إدخال المحتوى الحقيقي. العناصر البصرية وتجربة المستخدم قبل العناصر البصرية وتجربة المستخدم قبل  '
                            className="bg-[#F2F2F2] w-full h-[130px] rounded-md pt-3 resize-none border-none focus:outline-none focus:ring-0"
                            style={{ boxShadow: 'none' }}
                        />
                    </div>
                </div>

            </div>
        </div>
        <div className='absolute bottom-3 left-2 flex space-x-4'>
            <button className='bg-[#2A4E84] text-white w-[285px] h-[56px] flex justify-center items-center rounded-md me-3'>حفظ</button>
            <button className='border-2 text-[#2A4E84] border-[#2A4E84] w-[285px] h-[56px] flex justify-center items-center rounded-md'>إلغاء</button>
        </div>
    </div>
















  )
}
export default EditFeedBack;