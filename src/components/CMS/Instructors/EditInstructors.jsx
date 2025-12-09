import react from 'react'

const EditInstructors = ({ handleMenuClick }) => {
    
    return (
        
    
                            <div className='h-screen relative bg-[#FEFEFE] shadow m-8'>
                                <h1 className='text-[24px] text-[#254574] pt-5 mx-6'>
                                    تعديل بيانات المدرب
                                </h1>
                                <div className='flex justify-between  mt-9 mx-6'>
                                    <div className='h-[276px] w-[584px] flex justify-center items-center bg-[#ECF1F9] rounded-lg relative'>

                                        <i className="text-[#2A4E84] text-9xl fa-solid fa-graduation-cap"></i>


                                        <div className='absolute bottom-4 left-4 h-[40px] w-[40px] flex justify-center items-center text-white  rounded-full   bg-[#2A4E84]'>
                                            <i className="  fa-regular fa-pen-to-square"></i>
                                        </div>
                                    </div>
                                    <div className='w-[584px] h-[98px]'>
                                        <h1 className='text-[18px] text-[#254574]  ms-1'>
                                            أسم المدرب <span className='text-[#F88630]'>*</span>
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>أحمد عبدالسلام</p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            المسمى الوظيفي <span className='text-[#F88630]'>*</span>
                                        </h1>
                                        <div className='w-full h-[56px] bg-[#F2F2F2] flex justify-start items-center mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>بكالوريوس إدارة اعمال </p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            نبذة تعريفية<span className='text-[#F88630]'>*</span>
                                        </h1>
                                        <div className='w-full h-[112px] bg-[#F2F2F2] flex justify-start items-center pe-2 mt-2 ps-3 text-[16px] rounded-lg'>
                                            <p>هذا نص وهمي يستخدم لملء المساحات في التصميم. يمكنك استبداله بالمحتوى الفعلي لاحقًا. يتم استخدام هذا النص لاختبار الشكل العام للصفحة دون الحاجة إلى إدخال المحتوى الحقيقي. العناصر البصرية وتجربة المستخدم قبل العناصر البصرية وتجربة المستخدم قبل  </p>

                                        </div>
                                        <h1 className='text-[18px] text-[#254574] pt-5 ms-1'>
                                            الدورات المقدمة<span className='text-[#F88630]'>*</span>
                                        </h1>
                                        <div className='w-full h-[112px] bg-[#F2F2F2] flex justify-start items-start mt-2 pt-3 ps-8 text-[16px] rounded-lg'>
                                            <ul className='list-decimal leading-relaxed'>
                                                <li>التقنية الإدارية تخصص الموارد البشرية - عن بعد</li>
                                                <li>التقنية الإدارية تخصص الموارد البشرية - عن بعد</li>
                                            </ul>

                                        </div>



                                    </div>

                                </div>
                                <div className='absolute bottom-3 left-2 flex space-x-4'>
                                    <button className='bg-[#2A4E84] text-white w-[285px] h-[56px] flex justify-center items-center rounded-md me-3'>تعديل</button>
                                    <button className='border-2 text-[#2A4E84] border-[#2A4E84] w-[285px] h-[56px] flex justify-center items-center rounded-md'>إلغاء</button>
                                </div>










                            </div>


 )}
 export default EditInstructors;