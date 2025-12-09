import React from "react";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import ScrollToTop from "../scrolltop/scrollTop"; // استدعاء مكون ScrollToTop

const languages = [
  { code: "en", name: "English", country_code: "gb" },
  { code: "ar", name: "العربيه", country_code: "sa", dir: "rtl" },
];

export default function Footer() {
  const [cookies] = useCookies(["i18next"]);
  const currentLanguageCode = cookies.i18next || "en";
  const { t } = useTranslation();

  return (
    <>
      <ScrollToTop /> {/* لضمان العودة لأعلى الصفحة عند التغيير */}
      <div className="bg-[#2A4E84] px-10 pt-10 text-white">
        <div className="container m-auto flex flex-wrap justify-between border-b-2 items-start">
          <div className="w-full md:w-4/12 text-white">
            <h1 className="text-5xl font-bold">
              <span className="text-[#F88630]">{t("Let’s")}</span> {t("Learn")}{" "}
              <br />
              {t("Together")}
            </h1>
            <p className="pt-8">
              {t("Our goal is to provide high-quality, specialized training")}
              <br />
              {t(
                "that aligns with modern training trends, meets the requirements for developing work environments."
              )}
            </p>

            <div className="flex justify-start items-center mt-14 gap-2 mb-5">
              {[
                "x-twitter",
                "whatsapp",
                "youtube",
                "snapchat",
                "instagram",
              ].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-[40px] h-[40px] bg-[#2A4E84] border-2 border-white rounded-full flex justify-center items-center hover:border-[#F88630] hover:bg-[#F88630] transition-all duration-[0.5s]"
                >
                  <i className={`fa-brands fa-${icon} text-xl`}></i>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-8/12 flex justify-center mt-8 gap-y-4 flex-wrap">
            <div className="w-full md:w-[33%]">
              <h1 className="text-lg font-semibold mb-2">{t("Navigation")}</h1>
              {[
                { path: "/", label: "Home" },
                { path: "/categories", label: "categories" },
                { path: "/OurBranches", label: "OurBranches" },
                { path: "/aboutus", label: "aboutus" },
                { path: "/contactus", label: "contactus" },
                { path: "/PrivacyPolicy", label: "PrivacyPolicy" },
                { path: "/Terms", label: "Terms" },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p className="pt-1 font-thin">{t(item.label)}</p>
                </Link>
              ))}
            </div>

            <div className="w-full md:w-[33%]">
              <h1 className="text-lg font-semibold mb-3">{t("Contact us")}</h1>
              <div className="flex gap-2 items-center justify-start">
                <div className="w-[40px] h-[40px] bg-[#2A4E84] border-2 border-white rounded-full flex justify-center items-center hover:border-[#F88630] hover:bg-[#F88630] transition-all duration-[0.5s]">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div className="font-thin">
                  <h1>{t("Men")} : 0548459312-0548459312</h1>
                  <h2>{t("Women")} : 0548459312</h2>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-start mt-4">
                <div className="w-[40px] h-[40px] bg-[#2A4E84] border-2 border-white rounded-full flex justify-center items-center hover:border-[#F88630] hover:bg-[#F88630] transition-all duration-[0.5s]">
                  <i className="fa-regular fa-envelope text-xl"></i>
                </div>
                <h1 className="font-thin">info@alkhobar.edu.sa</h1>
              </div>
            </div>

            <div className="w-full md:w-[33%]">
              <h1 className="text-lg font-semibold mb-3">
                {t("Working Hours")}
              </h1>
              <div className="flex gap-2 items-center justify-start">
                <div className="w-[40px] h-[40px] bg-[#2A4E84] border-2 border-white rounded-full flex justify-center items-center hover:border-[#F88630] hover:bg-[#F88630] transition-all duration-[0.5s]">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div className="font-thin">
                  <h1>
                    {t("Sun - Thu")}: {t("8:00 AM - 5:00 PM")}
                  </h1>
                  <h2>
                    {t("Fri & Sat")}: {t("Closed")}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center py-5 font-thin">
          {t("Copyright ©2023 https://alkhobar.edu.sa. All Rights Reserved")}
        </p>
      </div>
    </>
  );
}
