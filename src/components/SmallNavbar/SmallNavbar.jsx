import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import i18n from "../../i18n";  // تأكد من المسار الصحيح حسب هيكل المشروع

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









export default function SmallNavbar() {






    const [cookies] = useCookies(['i18next']);
  const currentLanguageCode = cookies.i18next || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  return (
    <>

<div className='pt-[88px]'>
  <div className='container max-w-[1350px] py-[15px] rounded-full m-auto bg-[#ECF1F9]'>
    <ul className='flex flex-wrap justify-around items-center px-11 font-semibold text-[#2A4E84] gap-1'>
      <li><NavLink to={''}>{t("Home")}</NavLink></li>
      <li><NavLink to={'Categories'}>{t("Categories")}</NavLink></li>
      <li><NavLink to={'OurBranches'}>{t("Branches")}</NavLink></li>
      <li><NavLink to={'AboutUs'}>{t("About Us")}</NavLink></li>
      <li><NavLink to={'ContactUs'}>{t("Contact Us")}</NavLink></li>
    </ul>
  </div>
</div>

    </>
  )
}
