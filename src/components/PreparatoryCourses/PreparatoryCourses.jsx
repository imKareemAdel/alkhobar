import React from 'react'
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import { Card } from "flowbite-react";
import { Link, NavLink } from 'react-router-dom';
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
export default function PreparatoryCourses() {


  const [cookies] = useCookies(['i18next']);
  const currentLanguageCode = cookies.i18next || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();


  return (
    <>
     <div className='container m-auto mt-16'>
     <h1 className='text-center text-4xl font-semibold pb-11'>{t("Preparatory Courses")}</h1>

<div className='flex flex-wrap gap-y-5 mb-10 justify-center  gap-7 items-center'>



      <Card
          className="max-w-sm border-2 border-[#2A4E84] rounded-3xl md:w-[413px] h-[479px] w-full group">
          <div className='bg-[#ECF1F9] rounded-2xl'>
            <img className='w-[365px] h-[196px] rounded-2xl' src={img}/>
          </div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             {t("Modern Methods of Accounting and Financial Management")}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 ">
            <div className='flex items-center justify-between p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin'>
              <div><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
              <div><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
              <div><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2A4E84] dark:text-white">{t("345 SAR")}</span>
            <Link to={'/Coursedetails'}>
            <button className='relative  rounded-full bg-[#2A4E84] py-2 px-9 text-white font-semibold  transition-all group-hover:bg-[#0C1727]    duration-[0.5s]'> {t("Details")} 
              <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2`}>
              <i className="fa-solid fa-angle-right  "></i>
            </span></button>
            </Link>


          </div>
        </Card>
        <Card
          className="max-w-sm border-2 border-[#2A4E84] rounded-3xl md:w-[413px] h-[479px] w-full  group">
          <div className='bg-[#ECF1F9] rounded-2xl'>
            <img className='w-[365px] h-[196px] rounded-2xl' src={img}/>
          </div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {t("Maintenance of Railway Signaling and Communication Systems")}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 ">
            <div className='flex items-center justify-between p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin'>
              <div><i className="fa-regular fa-paste pe-1"></i> {t("30 Lesson")}</div>
              <div><i className="fa-regular fa-clock pe-1"></i> {t("60h")}</div>
              <div><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2A4E84] dark:text-white">{t("600 SAR")}</span>
            <Link to={'/Coursedetails'}>
            <button className='relative  rounded-full bg-[#2A4E84] py-2 px-9 text-white font-semibold  transition-all group-hover:bg-[#0C1727]    duration-[0.5s]'> {t("Details")} 
              <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2`}>
              <i className="fa-solid fa-angle-right  "></i>
            </span></button>
            </Link>


          </div>
        </Card>
        <Card
          className="max-w-sm border-2 border-[#2A4E84] rounded-3xl md:w-[413px] h-[479px] w-full  group">
          <div className='bg-[#ECF1F9] rounded-2xl'>
            <img className='w-[365px] h-[196px] rounded-2xl' src={img}/>
          </div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {t("Strategic Management in Organizational Development")}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 ">
            <div className='flex items-center justify-between p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin'>
              <div><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
              <div><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
              <div><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2A4E84] dark:text-white">{t("345 SAR")}</span>
            <Link to={'/Coursedetails'}>
            <button className='relative  rounded-full bg-[#2A4E84] py-2 px-9 text-white font-semibold  transition-all group-hover:bg-[#0C1727]    duration-[0.5s]'> {t("Details")} 
              <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2`}>
              <i className="fa-solid fa-angle-right  "></i>
            </span></button>
            </Link>

          </div>
        </Card>
        <Card
          className="max-w-sm border-2 border-[#2A4E84] rounded-3xl md:w-[413px] h-[479px] w-full  group">
          <div className='bg-[#ECF1F9] rounded-2xl'>
            <img className='w-[365px] h-[196px] rounded-2xl' src={img}/>
          </div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             {t("Maintenance of Railway Signaling and Communication Systems")}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 ">
            <div className='flex items-center justify-between p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin'>
              <div><i className="fa-regular fa-paste pe-1"></i> {t("30 Lesson")}</div>
              <div><i className="fa-regular fa-clock pe-1"></i> {t("60h")}</div>
              <div><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2A4E84] dark:text-white">{t("600 SAR")}</span>
            <Link to={'/Coursedetails'}>
            <button className='relative  rounded-full bg-[#2A4E84] py-2 px-9 text-white font-semibold  transition-all group-hover:bg-[#0C1727]    duration-[0.5s]'> {t("Details")} 
              <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2`}>
              <i className="fa-solid fa-angle-right  "></i>
            </span></button>
            </Link>

          </div>
        </Card>
        <Card
          className="max-w-sm border-2 border-[#2A4E84] rounded-3xl md:w-[413px] h-[479px] w-full  group">
          <div className='bg-[#ECF1F9] rounded-2xl'>
            <img className='w-[365px] h-[196px] rounded-2xl' src={img}/>
          </div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             {t("Strategic Management in Organizational Development")}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 ">
            <div className='flex items-center justify-between p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin'>
              <div><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
              <div><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
              <div><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2A4E84] dark:text-white">{t("345 SAR")}</span>
            <Link to={'/Coursedetails'}>
            <button className='relative  rounded-full bg-[#2A4E84] py-2 px-9 text-white font-semibold  transition-all group-hover:bg-[#0C1727]    duration-[0.5s]'> {t("Details")} 
              <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2`}>
              <i className="fa-solid fa-angle-right  "></i>
            </span></button>
            </Link>


          </div>
        </Card>
        <Card
          className="max-w-sm border-2 border-[#2A4E84] rounded-3xl md:w-[413px] h-[479px] w-full  group">
          <div className='bg-[#ECF1F9] rounded-2xl'>
            <img className='w-[365px] h-[196px] rounded-2xl' src={img}/>
          </div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             {t("Modern Methods of Accounting and Financial Management")}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 ">
            <div className='flex items-center justify-between p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin'>
              <div><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
              <div><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
              <div><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2A4E84] dark:text-white">{t("345 SAR")}</span>
            <Link to={'/Coursedetails'}>
            <button className='relative  rounded-full bg-[#2A4E84] py-2 px-9 text-white font-semibold  transition-all group-hover:bg-[#0C1727]    duration-[0.5s]'> {t("Details")} 
              <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2`}>
              <i className="fa-solid fa-angle-right  "></i>
            </span></button>
            </Link>


          </div>
        </Card>
        <Card
          className="max-w-sm border-2 border-[#2A4E84] rounded-3xl md:w-[413px] h-[479px] w-full  group">
          <div className='bg-[#ECF1F9] rounded-2xl'>
            <img className='w-[365px] h-[196px] rounded-2xl' src={img}/>
          </div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             {t("Modern Methods of Accounting and Financial Management")}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 ">
            <div className='flex items-center justify-between p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin'>
              <div><i className="fa-regular fa-paste pe-1"></i> {t("Lesson")}</div>
              <div><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
              <div><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2A4E84] dark:text-white">{t("345 SAR")}</span>
            <Link to={'/Coursedetails'}>
            <button className='relative  rounded-full bg-[#2A4E84] py-2 px-9 text-white font-semibold  transition-all group-hover:bg-[#0C1727]    duration-[0.5s]'> {t("Details")} 
              <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2`}>
              <i className="fa-solid fa-angle-right  "></i>
            </span></button>
            </Link>


          </div>
        </Card>
        <Card
          className="max-w-sm border-2 border-[#2A4E84] rounded-3xl md:w-[413px] h-[479px] w-full  group">
          <div className='bg-[#ECF1F9] rounded-2xl'>
            <img className='w-[365px] h-[196px] rounded-2xl' src={img}/>
          </div>
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             {t("Maintenance of Railway Signaling and Communication Systems")}
            </h5>
          </a>
          <div className="mb-5 mt-2.5 ">
            <div className='flex items-center justify-between p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin'>
              <div><i className="fa-regular fa-paste pe-1"></i> {t("30 Lesson")}</div>
              <div><i className="fa-regular fa-clock pe-1"></i> {t("60h")}</div>
              <div><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#2A4E84] dark:text-white">{t("600 SAR")}</span>
            <Link to={'/Coursedetails'}>
            <button className='relative  rounded-full bg-[#2A4E84] py-2 px-9 text-white font-semibold  transition-all group-hover:bg-[#0C1727]    duration-[0.5s]'> {t("Details")} 
              <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2`}>
              <i className="fa-solid fa-angle-right  "></i>
            </span></button>
            </Link>

          </div>
        </Card>
       
      </div>

     
     </div>
    
    
    
    
    </>
  )
}
