import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
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

export default function Categories() {

  const [cookies] = useCookies(['i18next']);
  const currentLanguageCode = cookies.i18next || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();




  return (
    <>
      <div>
        <div className='container m-auto mt-16 '>
          <h1 className='text-center text-4xl font-semibold pb-11'>{t("Explore our categories")}</h1>

          <div className='flex flex-wrap justify-center  items-center'>

            <div className='w-full md:w-[413px] h-[132px] px-2'><Link to={"/PreparatoryCourses"}>
              <div className='my-3  border-2 rounded-full py-4 border-[#2A4E84] flex justify-start items-center transition-all duration-[0.5s] group  hover:bg-[#2A4E84]'>

                <div>
                  <div className='mx-5 w-[80px] h-[80px] bg-[#ECF1F9]   rounded-full flex justify-center items-center  '>
                    <i className="fa-solid fa-graduation-cap text-3xl text-[#2A4E84]"></i>
                  </div>
                </div>
                <div >
                  <h1 className='text-[#2A4E84] font-bold group-hover:text-white  transition-all duration-[0.5s]'>{t("Training Diploma")}</h1>
                  <h2 className='text-[#757575] group-hover:text-white  transition-all duration-[0.5s]'>{t("04 Courses")}</h2>
                </div>
              </div>
              </Link>
            </div>
            <div className='w-full md:w-[413px] h-[132px] px-2'><Link  to={"/PreparatoryCourses"}>

              <div className='my-3   border-2 rounded-full py-4 border-[#2A4E84] flex justify-start items-center transition-all duration-[0.5s] group  hover:bg-[#2A4E84]'>
                <div>
                  <div className='mx-5 w-[80px] h-[80px] bg-[#ECF1F9]   rounded-full flex justify-center items-center  '>
                    <i className="fa-solid fa-book text-3xl text-[#2A4E84]"></i>
                  </div>
                </div>
                <div >
                  <h1 className='text-[#2A4E84] font-bold group-hover:text-white  transition-all duration-[0.5s]'>{t("Preparatory Courses")}</h1>
                  <h2 className='text-[#757575] group-hover:text-white  transition-all duration-[0.5s]'>{t("05 Courses")}</h2>
                </div>
              </div>
             </Link>

            </div>
            <div className=' w-full md:w-[413px] h-[132px] px-2'><Link  to={"/PreparatoryCourses"}>
            
            
              <div className='my-3  border-2 rounded-full py-4 border-[#2A4E84] flex justify-start items-center transition-all duration-[0.5s] group  hover:bg-[#2A4E84]'>

                <div>
                  <div className='mx-5 w-[80px] h-[80px] bg-[#ECF1F9]   rounded-full flex justify-center items-center  '>
                    <i className="fa-solid fa-arrow-up-right-dots text-3xl text-[#2A4E84]"></i>
                  </div>
                </div>
                <div >
                  <h1 className='text-[#2A4E84] font-bold group-hover:text-white  transition-all duration-[0.5s]'>{t("Development Courses")}</h1>
                  <h2 className='text-[#757575] group-hover:text-white  transition-all duration-[0.5s]'>{t("23 Courses")}</h2>
                </div>




              </div>
             </Link>

            </div>
            <div className='w-full md:w-[413px] h-[132px] px-2 '><Link  to={"/PreparatoryCourses"}>

              <div className='my-3   border-2 rounded-full py-4 border-[#2A4E84] flex justify-start items-center transition-all duration-[0.5s] group  hover:bg-[#2A4E84]'>

                <div>
                  <div className='mx-5 w-[80px] h-[80px] bg-[#ECF1F9]   rounded-full flex justify-center items-center  '>
                    <i className="fa-solid fa-language text-3xl text-[#2A4E84]"></i>
                  </div>
                </div>
                <div >
                  <h1 className='text-[#2A4E84] font-bold group-hover:text-white  transition-all duration-[0.5s]'>{t("English Language")}</h1>
                  <h2 className='text-[#757575]  group-hover:text-white  transition-all duration-[0.5s]'>{t("04 Courses")}</h2>
                </div>




              </div>
             </Link>

            </div>

            <div className='w-full md:w-[413px] h-[132px] px-2 '><Link  to={"/PreparatoryCourses"}>
           
              <div className='my-3  border-2 rounded-full py-4 border-[#2A4E84] flex justify-start items-center transition-all duration-[0.5s] group  hover:bg-[#2A4E84]'>
                <div>
                  <div className='mx-5 w-[80px] h-[80px] bg-[#ECF1F9]   rounded-full flex justify-center items-center  '>
                    <i className="fa-solid fa-language text-3xl text-[#2A4E84]"></i>
                  </div>
                </div>
                <div >
                  <h1 className='text-[#2A4E84] font-bold group-hover:text-white  transition-all duration-[0.5s]'>{t("Chinese Language")}</h1>
                  <h2 className='text-[#757575] group-hover:text-white  transition-all duration-[0.5s]'>{t("01 Courses")}</h2>
                </div>
              </div>
             </Link>
            </div>
          </div>


        </div>


      </div>




    </>
  )
}
