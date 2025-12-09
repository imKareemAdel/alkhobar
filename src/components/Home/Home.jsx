import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import { motion } from "framer-motion";

import Slider from "../Slider/Slider";
import Categories from "../Categories/Categories";
import MostPopular from "../MostPopular/MostPopular";
import Branches from "../Branches/Branches";
import { Component } from "../Carousell/Carousell";

// 👇 حط صورك هنا من مجلد assets

import img1 from "../../assets/cardimg.jpg";
import img2 from "../../assets/cardimg.jpg";
import img3 from "../../assets/cardimg.jpg";

export default function Home() {
  const [cookies] = useCookies(["i18next"]);
  const currentLanguageCode = cookies.i18next || "en";
  const { t } = useTranslation();

  // 👇 الصور ثابتة بدون API
  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // تغيير الصورة تلقائيًا كل 4 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Link to={"/CMS"}>
        <button className="fixed right-4 bottom-8 bg-[#2A4E84] text-white py-3 px-6 rounded-full z-40 font-bold shadow-lg hover:bg-[#0C1727] transition-all duration-300">
          CMS
        </button>
      </Link>

      <div className="min-h-screen">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-12 items-center container m-auto mt-14">
          {/* النص */}
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <h2 className="text-7xl font-semibold">
              <span className="text-[#2A4E84]">{t("Learn")}</span>{" "}
              {t("the skills")} <br /> {t("of Tomorrow.")}
            </h2>
            <p className="text-[#757575] mt-5 py-8 text-[25px]">
              {t("We offer high-quality education with international")}
              <br />
              {t("standards to meet educational institutions' goals.")}
            </p>

            <Link to="/Categories">
              <button className="rounded-full w-[343px] md:w-[547px] lg:w-[305px] bg-[#2A4E84] mt-5 py-4 h-[56px] px-20 text-white font-semibold hover:bg-[#0C1727] transition-all duration-[0.5s] text-xl">
                {t("Join for free")}
              </button>
            </Link>
          </div>

          {/* الاسلايدر */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="w-[343px] md:w-[580px] lg:w-[600px] lg:h-[416px] relative">
              <motion.div
                key={currentIndex}
                className="rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-lg border-4 border-[#2A4E84]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <img
                  src={images[currentIndex]}
                  alt="carousel"
                  className="lg:w-[600px] lg:h-[416px] rounded-tr-3xl rounded-bl-3xl"
                />
              </motion.div>

              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`block w-3 h-3 rounded-full ${
                      index === currentIndex ? "bg-[#2A4E84]" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Slider />
        <Categories />
        <MostPopular />
        <Branches />
        <Component />
      </div>
    </>
  );
}
