import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

const instructors = [
  {
    name: "Ahmed Abdelsalam",
    title: "Financial Accountant",
    image: "https://flowbite.com/docs/images/carousel/carousel-1.svg"
  },
  {
    name: "John Doe",
    title: "Project Manager",
    image: "https://flowbite.com/docs/images/carousel/carousel-2.svg"
  },
  {
    name: "Jane Smith",
    title: "Software Developer",
    image: "https://flowbite.com/docs/images/carousel/carousel-3.svg"
  }
];

export function Component() {
  const [cookies] = useCookies(['i18next']);
  const currentLanguageCode = cookies.i18next || 'en';
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % instructors.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container m-auto my-16">
      <h1 className="text-center text-4xl font-semibold pb-11">
        {t("Meet our instructors")}
      </h1>
      <div className="grid  grid-cols-3  gap-4">
        {instructors.map((instructor, index) => (
          <motion.div
            key={index}
            className="border-2 p-5 border-[#2A4E84] rounded-3xl relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="rounded-3xl overflow-hidden"
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={instructors[currentIndex].image} className="rounded-3xl" alt={t(instructors[currentIndex].name)} />
            </motion.div>
            <div className="text-center text-[#2A4E84]">
              <h1>{t(instructors[currentIndex].name)}</h1>
              <p>{t(instructors[currentIndex].title)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}