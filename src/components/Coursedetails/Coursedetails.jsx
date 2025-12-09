
import img1 from '../../assets/photo1.jpeg';
import { Card } from "flowbite-react";
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import img2 from '../../assets/imgDetails.jpeg';
import img3 from '../../assets/imgDetails2.jpeg';
import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import img from '../../assets/cardimg.jpg';

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'ar',
        name: 'العربيه',
        country_code: 'sa',
        dir: 'rtl'
    },
];


export default function () {

    const [showMore, setShowMore] = useState(false);
    const [height, setHeight] = useState(0);
    const containerRef = useRef(null);
    

    const courses = [
        { img: img3, title: "Maintenance of Railway Signaling and Communication Systems", lessons: "30 Lesson", duration: "60h", students: "1000 Student", price: "600 SAR" },
        { img: img2, title: "Maintenance of Railway Signaling and Communication Systems", lessons: "30 Lesson", duration: "60h", students: "1000 Student", price: "600 SAR" },
        { img: img3, title: "Maintenance of Railway Signaling and Communication Systems", lessons: "30 Lesson", duration: "60h", students: "1000 Student", price: "600 SAR" },
        { img: img2, title: "Maintenance of Railway Signaling and Communication Systems", lessons: "30 Lesson", duration: "60h", students: "1000 Student", price: "600 SAR" },
        { img: img3, title: "Maintenance of Railway Signaling and Communication Systems", lessons: "30 Lesson", duration: "60h", students: "1000 Student", price: "600 SAR" },

    ];
    useEffect(() => {
        if (containerRef.current) {
                setHeight(containerRef.current.scrollHeight)}}); 
    const visibleCourses = showMore ? courses : courses.slice(0, 5);
    const [cookies] = useCookies(['i18next']);
    const currentLanguageCode = cookies.i18next || 'en';
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
    const { t } = useTranslation();
    return (
        <>
            <div className='container m-auto mt-16'>
                <div className='flex flex-wrap justify-around items-stretch flex-col-reverse md:flex-row '>
                    <div className='w-full md:w-6/12'>
                        <div>
                            <div className='mx-2'>
                                <h1 className='text-4xl leading-tight font-semibold text-[#254574]'>
                                    Modern Methods of Accounting <br />and Financial Management
                                </h1>
                                <p className='my-5 text-xl font-medium'>
                                    Turn Numbers into Successful Decisions
                                </p>
                                <p className='text-[#757575] text-lg'>
                                    According to the best practical training methods, this course provides trainees with the fundamentals of computer and operating systems, as well as the specialized and professional skills and knowledge required for data entry, word processing, and professional keyboard typing skills, preparing them for effective use.
                                </p>

                            </div>
                            <div className='my-16 mx-2'>
                                <h1 className='text-2xl font-semibold my-4 text-[#254574]'>
                                    What you will learn ?
                                </h1>
                                <ul className='text-lg list-disc ps-6 mt-3 leading-loose'>
                                    <li>Understand financial management and its importance for managers.</li>
                                    <li>Prepare income statements, balance sheets, and cash flow statements.</li>
                                    <li>Apply accounting techniques to enhance profitability and efficiency.</li>
                                    <li>Analyze financial reports to assess business performance.</li>
                                    <li>Identify and evaluate profitable investment opportunities.</li>
                                    <li>Recognize, assess, and monitor financial risks effectively.</li>
                                </ul>

                            </div>
                            <div className=' px-6 border-2 border-[#254574] rounded-3xl py-3'>

                                <h1 className='text-2xl font-semibold mb-2 text-[#254574]'>
                                    Course details
                                </h1>
                                <div className='flex flex-wrap '>
                                    <div className='w-full md:w-6/12'>
                                        <div>

                                            <div className='mx-1'>
                                                <ul className='text-lg leading-loose'>
                                                    <li>
                                                        Start date :<span className='text-[#757575] '> 12\80\2025</span>
                                                    </li>
                                                    <li>
                                                        Number of Hours : <span className='text-[#757575] '> 80 Hours.</span>
                                                    </li>
                                                    <li>
                                                        Study Days : <span className='text-[#757575] '> Sun - Thu.</span>
                                                    </li>
                                                    <li>
                                                        Course Time : <span className='text-[#757575] '> 9:00 - 12:30.</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='w-full md:w-6/12'>
                                        <div>

                                            <div className='mx-1'>
                                                <ul className='text-lg leading-loose'>
                                                    <li>
                                                        Duration : <span className='text-[#757575] '>  2.5 Years .</span>
                                                    </li>
                                                    <li>
                                                        Training Type : <span className='text-[#757575] '> Online.</span>
                                                    </li>
                                                    <li>
                                                        Training Period : <span className='text-[#757575] '> Evening.</span>
                                                    </li>
                                                    <li>
                                                        Number of Seats : <span className='text-[#757575] '> 1000 Seats. </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>
                            <div className='mx-2 py-10'>
                                <h1 className='text-2xl font-semibold my-8 text-[#254574]'>
                                    Instructor
                                </h1>
                                <div className='flex flex-wrap items-center'>
                                    <div>
                                        <img className=' rounded-full h-[200px] w-[200px] ' src={img1} />
                                    </div>
                                    <div className='mx-6'>
                                        <h1 className='font-semibold text-xl my-2'>
                                            Ahmed Abdelsalam
                                        </h1>
                                        <p className='text-[#757575] font-sans my-2 '>
                                            Financial Accountant
                                        </p>
                                    </div>
                                </div>
                                <div className='mt-7 text-lg'>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                    <p className='cursor-pointer'>Show More</p>
                                </div>
                            </div>
                            <div className='mx-2'>
            <h1 className='text-2xl font-semibold my-8 text-[#254574]'>
                Recommended for you
            </h1>

            {/* عرض الدورات مع تأثير "smooth" باستخدام height */}
            <div
                ref={containerRef}
                className={`transition-all duration-[1s] overflow-hidden`}
                style={{
                    height: showMore ? `${height}px` : '825px', // تغيير الارتفاع تدريجيًا
                }}
            >
                {visibleCourses.map((course, index) => (
                    <div key={index} className='border-b-2'>
                        <div className="rounded-3xl shadow-none border-none group my-4">
                            <div className='flex flex-wrap items-center'>
                                <div className='rounded-2xl w-4/12'>
                                    <div className='text-9xl flex justify-center items-center'>
                                        <img className='w-full rounded-3xl' src={course.img} alt="Course Image" />
                                    </div>
                                </div>
                                <div className='w-7/12 mx-4'>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {course.title}
                                    </h5>
                                    <div className="mb-5 mt-2.5 ">
                                        <div className='flex items-center justify-between p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin'>
                                            <div><i className="fa-regular fa-paste pe-1"></i> {course.lessons}</div>
                                            <div><i className="fa-regular fa-clock pe-1"></i> {course.duration}</div>
                                            <div><i className="fa-solid fa-users pe-1"></i> {course.students}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-[#2A4E84] dark:text-white">{course.price}</span>
                                        <button className='relative rounded-full bg-[#2A4E84] py-2 px-9 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]'>
                                            Details
                                            <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2`}>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* زر "See More" أو "See Less" */}
            <button
                type="button"
                onClick={() => setShowMore(!showMore)} // عكس القيمة الحالية
                className="duration-[0.5s] text-[#2A4E84] my-4 border-2 border-[#2A4E84] hover:bg-[#2A4E84] hover:text-white mb-4 font-medium rounded-2xl w-full px-5 py-3 text-center text-xl">
                {showMore ? "See Less" : "See More"}
            </button>
        </div>

                        </div>
                    </div>
                    <div className='w-full md:w-[414px] md:h-[500px] flex flex-col  md:sticky top-40 mb-6  '>
    <div>
        <div className='mx-2'>
            <div className='md:border-2 md:border-[#2A4E84] rounded-3xl'>
                <div className='flex p-5 justify-center items-center'>
                    <img className='w-{414px} h-{341px} rounded-3xl' src={img} />
                </div>
                <div className='mx-6'>
                    <h1 className="text-3xl font-bold text-[#2A4E84] my-6">
                        345 SAR
                    </h1>
                    <Link to={'/Checkout'}>
                        <button type="submit" class="text-white duration-[0.5s] bg-[#2A4E84] hover:bg-[#ECF1F9] mb-4 font-medium rounded-2xl w-full px-5 py-3 text-center text-xl">
                            Enroll Now
                        </button>
                    </Link>
                    <div className='flex gap-4 items-center'>
                        <div class="relative z-0 mb-5 group w-full">
                            <input type="text" name="floating_first_name" id="floating_first_name" class="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer" placeholder=" " required />
                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-lg ps-4 text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Enter coupon</label>
                        </div>
                        <div className='w-auto'>
                            <button type="submit" class="text-white duration-[0.5s] bg-[#2A4E84] hover:bg-[#ECF1F9] mb-4 font-medium rounded-2xl px-6 py-3 text-center text-xl">
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


                </div>


            </div>






        </>
    )
}



