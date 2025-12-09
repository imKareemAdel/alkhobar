import React from 'react'
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import { Card } from "flowbite-react";
import img from '../../assets/cardimg.jpg';
import { Link, NavLink } from 'react-router-dom';

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







export default function PageMostPopular() {


  const [cookies] = useCookies(['i18next']);
  const currentLanguageCode = cookies.i18next || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();



  return (
    <>
      <div className='container m-auto mt-8 mb-10'>
        <h1 className='text-center text-4xl font-semibold pb-10'>{t("Most Popular")}</h1>
        <div>
          <ul className='flex flex-wrap justify-around gap-y-6 gap-x-3 items-center mx-10 font-medium mb-10'>
            <li className='cursor-pointer'>{t("All")}</li>
            <li className='cursor-pointer'>{t("Training Diploma")}</li>
            <li className='cursor-pointer'>{t("Preparatory Courses")}</li>
            <li className='cursor-pointer'>{t("Development Courses")}</li>
            <li className='cursor-pointer'>{t("English Language")}</li>
            <li className='cursor-pointer'>{t("Chinese Language")}</li>
          </ul>
        </div>
        <div className='flex flex-wrap gap-y-5  justify-center   items-center'>



          <div className="w-[253px] sm:w-[413px] min-h-[313px] sm:min-h-[460px] border-2 border-[#2A4E84] rounded-3xl m-auto group">
            {/* صورة الدورة */}
            <div className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl m-auto mt-5">
              <img className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl" src={img} alt="Course Image" />
            </div>

            {/* عنوان الدورة */}
            <h5 className="text-base sm:text-xl font-semibold px-5 tracking-tight text-gray-900 pt-4 sm:pt-6">
              {t("Modern Methods of Accounting and Financial Management")}
            </h5>

            {/* معلومات الدورة */}
            <div className="mt-4 sm:mt-8 px-5 mb-5">
              <div className="flex items-center justify-between p-2 sm:p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin">
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
              </div>
            </div>

            {/* السعر وزر التفاصيل */}
            <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-3 sm:mt-5">
              <span className="text-[19px] sm:text-[25px] font-bold text-[#2A4E84] mb-3 md:mb-2">{t("345 SAR")}</span>
              <Link to="/Coursedetails">
                <button className="relative flex items-center mb-1 w-full sm:w-auto rounded-full bg-[#2A4E84] py-2 sm:px-9 px-16 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]">
                  {t("Details")}
                  <span className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[253px] sm:w-[413px] min-h-[313px] sm:min-h-[460px] border-2 border-[#2A4E84] rounded-3xl m-auto group">
            {/* صورة الدورة */}
            <div className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl m-auto mt-5">
              <img className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl" src={img} alt="Course Image" />
            </div>

            {/* عنوان الدورة */}
            <h5 className="text-base sm:text-xl font-semibold px-5 tracking-tight text-gray-900 pt-4 sm:pt-6">
              {t("Maintenance of Railway Signaling and Communication Systems")}
            </h5>

            {/* معلومات الدورة */}
            <div className="mt-4 sm:mt-8 px-5 mb-5">
              <div className="flex items-center justify-between p-2 sm:p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin">
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
              </div>
            </div>

            {/* السعر وزر التفاصيل */}
            <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-3 sm:mt-5">
              <span className="text-[19px] sm:text-[25px] font-bold text-[#2A4E84] mb-3 md:mb-2">{t("345 SAR")}</span>
              <Link to="/Coursedetails">
                <button className="relative flex items-center mb-1 w-full sm:w-auto rounded-full bg-[#2A4E84] py-2 sm:px-9 px-16 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]">
                  {t("Details")}
                  <span className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[253px] sm:w-[413px] min-h-[313px] sm:min-h-[460px] border-2 border-[#2A4E84] rounded-3xl m-auto group">
            {/* صورة الدورة */}
            <div className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl m-auto mt-5">
              <img className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl" src={img} alt="Course Image" />
            </div>

            {/* عنوان الدورة */}
            <h5 className="text-base sm:text-xl font-semibold px-5 tracking-tight text-gray-900 pt-4 sm:pt-6">
              {t("Strategic Management in Organizational Development")}
            </h5>

            {/* معلومات الدورة */}
            <div className="mt-4 sm:mt-8 px-5 mb-5">
              <div className="flex items-center justify-between p-2 sm:p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin">
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
              </div>
            </div>

            {/* السعر وزر التفاصيل */}
            <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-3 sm:mt-5">
              <span className="text-[19px] sm:text-[25px] font-bold text-[#2A4E84] mb-3 md:mb-2">{t("345 SAR")}</span>
              <Link to="/Coursedetails">
                <button className="relative flex items-center mb-1 w-full sm:w-auto rounded-full bg-[#2A4E84] py-2 sm:px-9 px-16 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]">
                  {t("Details")}
                  <span className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[253px] sm:w-[413px] min-h-[313px] sm:min-h-[460px] border-2 border-[#2A4E84] rounded-3xl m-auto group">
            {/* صورة الدورة */}
            <div className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl m-auto mt-5">
              <img className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl" src={img} alt="Course Image" />
            </div>

            {/* عنوان الدورة */}
            <h5 className="text-base sm:text-xl font-semibold px-5 tracking-tight text-gray-900 pt-4 sm:pt-6">
              {t("Maintenance of Railway Signaling and Communication Systems")}
            </h5>

            {/* معلومات الدورة */}
            <div className="mt-4 sm:mt-8 px-5 mb-5">
              <div className="flex items-center justify-between p-2 sm:p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin">
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
              </div>
            </div>

            {/* السعر وزر التفاصيل */}
            <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-3 sm:mt-5">
              <span className="text-[19px] sm:text-[25px] font-bold text-[#2A4E84] mb-3 md:mb-2">{t("345 SAR")}</span>
              <Link to="/Coursedetails">
                <button className="relative flex items-center mb-1 w-full sm:w-auto rounded-full bg-[#2A4E84] py-2 sm:px-9 px-16 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]">
                  {t("Details")}
                  <span className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[253px] sm:w-[413px] min-h-[313px] sm:min-h-[460px] border-2 border-[#2A4E84] rounded-3xl m-auto group">
            {/* صورة الدورة */}
            <div className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl m-auto mt-5">
              <img className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl" src={img} alt="Course Image" />
            </div>

            {/* عنوان الدورة */}
            <h5 className="text-base sm:text-xl font-semibold px-5 tracking-tight text-gray-900 pt-4 sm:pt-6">
              {t("Strategic Management in Organizational Development")}
            </h5>

            {/* معلومات الدورة */}
            <div className="mt-4 sm:mt-8 px-5 mb-5">
              <div className="flex items-center justify-between p-2 sm:p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin">
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
              </div>
            </div>

            {/* السعر وزر التفاصيل */}
            <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-3 sm:mt-5">
              <span className="text-[19px] sm:text-[25px] font-bold text-[#2A4E84] mb-3 md:mb-2">{t("345 SAR")}</span>
              <Link to="/Coursedetails">
                <button className="relative flex items-center mb-1 w-full sm:w-auto rounded-full bg-[#2A4E84] py-2 sm:px-9 px-16 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]">
                  {t("Details")}
                  <span className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[253px] sm:w-[413px] min-h-[313px] sm:min-h-[460px] border-2 border-[#2A4E84] rounded-3xl m-auto group">
            {/* صورة الدورة */}
            <div className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl m-auto mt-5">
              <img className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl" src={img} alt="Course Image" />
            </div>

            {/* عنوان الدورة */}
            <h5 className="text-base sm:text-xl font-semibold px-5 tracking-tight text-gray-900 pt-4 sm:pt-6">
              {t("Modern Methods of Accounting and Financial Management")}
            </h5>

            {/* معلومات الدورة */}
            <div className="mt-4 sm:mt-8 px-5 mb-5">
              <div className="flex items-center justify-between p-2 sm:p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin">
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
              </div>
            </div>

            {/* السعر وزر التفاصيل */}
            <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-3 sm:mt-5">
              <span className="text-[19px] sm:text-[25px] font-bold text-[#2A4E84] mb-3 md:mb-2">{t("345 SAR")}</span>
              <Link to="/Coursedetails">
                <button className="relative flex items-center mb-1 w-full sm:w-auto rounded-full bg-[#2A4E84] py-2 sm:px-9 px-16 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]">
                  {t("Details")}
                  <span className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[253px] sm:w-[413px] min-h-[313px] sm:min-h-[460px] border-2 border-[#2A4E84] rounded-3xl m-auto group">
            {/* صورة الدورة */}
            <div className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl m-auto mt-5">
              <img className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl" src={img} alt="Course Image" />
            </div>

            {/* عنوان الدورة */}
            <h5 className="text-base sm:text-xl font-semibold px-5 tracking-tight text-gray-900 pt-4 sm:pt-6">
              {t("Modern Methods of Accounting and Financial Management")}
            </h5>

            {/* معلومات الدورة */}
            <div className="mt-4 sm:mt-8 px-5 mb-5">
              <div className="flex items-center justify-between p-2 sm:p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin">
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
              </div>
            </div>

            {/* السعر وزر التفاصيل */}
            <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-3 sm:mt-5">
              <span className="text-[19px] sm:text-[25px] font-bold text-[#2A4E84] mb-3 md:mb-2">{t("345 SAR")}</span>
              <Link to="/Coursedetails">
                <button className="relative flex items-center mb-1 w-full sm:w-auto rounded-full bg-[#2A4E84] py-2 sm:px-9 px-16 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]">
                  {t("Details")}
                  <span className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[253px] sm:w-[413px] min-h-[313px] sm:min-h-[460px] border-2 border-[#2A4E84] rounded-3xl m-auto group">
            {/* صورة الدورة */}
            <div className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl m-auto mt-5">
              <img className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl" src={img} alt="Course Image" />
            </div>

            {/* عنوان الدورة */}
            <h5 className="text-base sm:text-xl font-semibold px-5 tracking-tight text-gray-900 pt-4 sm:pt-6">
              {t("Maintenance of Railway Signaling and Communication Systems")}
            </h5>

            {/* معلومات الدورة */}
            <div className="mt-4 sm:mt-8 px-5 mb-5">
              <div className="flex items-center justify-between p-2 sm:p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin">
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
              </div>
            </div>

            {/* السعر وزر التفاصيل */}
            <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-3 sm:mt-5">
              <span className="text-[19px] sm:text-[25px] font-bold text-[#2A4E84] mb-3 md:mb-2">{t("345 SAR")}</span>
              <Link to="/Coursedetails">
                <button className="relative flex items-center mb-1 w-full sm:w-auto rounded-full bg-[#2A4E84] py-2 sm:px-9 px-16 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]">
                  {t("Details")}
                  <span className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="w-[253px] sm:w-[413px] min-h-[313px] sm:min-h-[460px] border-2 border-[#2A4E84] rounded-3xl m-auto group">
            {/* صورة الدورة */}
            <div className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl m-auto mt-5">
              <img className="w-[215px] sm:w-[365px] h-[115px] sm:h-[196px] rounded-2xl" src={img} alt="Course Image" />
            </div>

            {/* عنوان الدورة */}
            <h5 className="text-base sm:text-xl font-semibold px-5 tracking-tight text-gray-900 pt-4 sm:pt-6">
              {t("Strategic Management in Organizational Development")}
            </h5>

            {/* معلومات الدورة */}
            <div className="mt-4 sm:mt-8 px-5 mb-5">
              <div className="flex items-center justify-between p-2 sm:p-4 text-[#2A4E84] bg-[#ECF1F9] rounded-full font-thin">
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-paste pe-1"></i> {t("15 Lesson")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-regular fa-clock pe-1"></i> {t("45h")}</div>
                <div className="text-xs sm:text-sm"><i className="fa-solid fa-users pe-1"></i> {t("1000 Student")}</div>
              </div>
            </div>

            {/* السعر وزر التفاصيل */}
            <div className="flex flex-col md:flex-row items-center justify-between px-5 mt-3 sm:mt-5">
              <span className="text-[19px] sm:text-[25px] font-bold text-[#2A4E84] mb-3 md:mb-2">{t("345 SAR")}</span>
              <Link to="/Coursedetails">
                <button className="relative flex items-center mb-1 w-full sm:w-auto rounded-full bg-[#2A4E84] py-2 sm:px-9 px-16 text-white font-semibold transition-all group-hover:bg-[#0C1727] duration-[0.5s]">
                  {t("Details")}
                  <span className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 transition-all duration-[0.5s] group-hover:translate-x-2">
                    <i className="fa-solid fa-angle-right"></i>
                  </span>
                </button>
              </Link>
            </div>
          </div>









        </div>



      </div>
    </>
  )
}
