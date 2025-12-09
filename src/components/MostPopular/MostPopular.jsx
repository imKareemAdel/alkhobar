import React from 'react'
import MyCard from '../Card/Card'
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

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

export default function MostPopular() {

  const [cookies] = useCookies(['i18next']);
  const currentLanguageCode = cookies.i18next || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();


  return (
    <>
    <div className='container m-auto mt-14'>
<h1 className='text-center text-4xl font-semibold pb-11'>
    {t("Most Popular")}
</h1>
<MyCard/>




    </div>
    
    
    
    </>
  )
}
