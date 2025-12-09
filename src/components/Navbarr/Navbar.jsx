import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import i18n from "../../i18n";
import logo2 from "../../assets/imglogo.png";
const languages = [
  { code: "en", name: "English", country_code: "gb" },
  { code: "ar", name: "العربيه", country_code: "sa", dir: "rtl" },
];

export default function MyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cookies] = useCookies(["i18next"]);
  const currentLanguageCode = cookies.i18next || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  const [toggle, setToggle] = useState(i18n.language || "ar");

  function handleLanguageChange(lan) {
    i18n
      .changeLanguage(lan)
      .then(() => {
        setToggle(lan);
      })
      .catch((err) => console.error("Error changing language:", err));
  }

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function toggleSearch() {
    setSearchOpen(!searchOpen);
  }

  return (
    <>
      <div className="shadow-md fixed w-full bg-white z-50">
        <div className="flex justify-between items-center container mx-auto p-2">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className="sm:block lg:hidden md:block cursor-pointer"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars text-2xl text-[#2A4E84]"></i>
            </div>
            <div className="flex md:w-[90px] w-[90px] h-[62px] ">
              <img
                src={logo2}
                className="md:w-[90px] h-[62px] ml-4"
                alt="Logo"
              />
            </div>

            <h1 className="ms-4 text-lg bg-gradient-to-r from-[#21B4E4] via-[#4A6FA5] to-[#1E3B72] bg-clip-text text-transparent font-bold">
              معهد الخبر العالي الحديث للتدريب
            </h1>
          </div>

          {/* Search for Large Screens */}
          <div className="hidden md:block">
            <form className=" lg:w-[500px]   lg:mb-0  ">
              <div className="relative ">
                <input
                  type="text"
                  placeholder={t("What do you want to learn ?")}
                  className="w-[500px]  py-3  rounded-full border-2 text-sm focus:border-[#2A4E84] focus:ring-0 outline-none transition-all"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#2A4E84] p-2 rounded-full cursor-pointer transition-all hover:bg-[#1E3B72]">
                  <Search className="h-5 w-5 text-white" />
                </div>
              </div>
            </form>
          </div>

          {/* Search Icon for Small Screens */}
          <div className="md:hidden relative">
            <div
              onClick={toggleSearch}
              className="cursor-pointer p-2 rounded-full bg-[#2A4E84] text-white"
            >
              <Search className="sm:w-5 h-5 " />
            </div>
            {searchOpen && (
              <input
                type="text"
                placeholder={t("What do you want to learn ?")}
                className="absolute right-0 top-10 sm:w-64 p-2 rounded border shadow-md focus:outline-none"
              />
            )}
          </div>

          {/* Buttons for Large Screens */}
          <div className="hidden lg:flex sm:hidden md:hidden space-x-4 items-center">
            <div className="flex items-center bg-[#ECF1F9] rounded-full px-1">
              <span
                onClick={() => handleLanguageChange("en")}
                className={`text-sm px-3 py-2 rounded-full cursor-pointer ${
                  toggle === "en" ? "text-white bg-[#2A4E84]" : "text-gray-700"
                }`}
              >
                EN
              </span>
              <span
                onClick={() => handleLanguageChange("ar")}
                className={`text-sm px-3 py-2 rounded-full cursor-pointer ${
                  toggle === "ar" ? "text-white bg-[#2A4E84]" : "text-gray-700"
                }`}
              >
                AR
              </span>
            </div>
            <Link to="/Login">
              <button className="border-2 border-[#2A4E84] text-[#2A4E84] py-2 px-5 rounded-full hover:bg-[#ECF1F9]">
                {t("login")}
              </button>
            </Link>
            <Link to="/Signup">
              <button className="bg-[#2A4E84] text-white py-2 px-5 rounded-full hover:bg-[#1E3B72]">
                {t("signup")}
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:flex md:flex lg:hidden  flex-col items-start bg-white shadow-md p-4">
            <div className="flex items-center bg-[#ECF1F9] rounded-full px-1 py-1">
              <span
                onClick={() => handleLanguageChange("en")}
                className={`text-sm px-3 py-2 rounded-full cursor-pointer ${
                  toggle === "en" ? "text-white bg-[#2A4E84]" : "text-gray-700"
                }`}
              >
                EN
              </span>
              <span
                onClick={() => handleLanguageChange("ar")}
                className={`text-sm px-3 py-2 rounded-full cursor-pointer ${
                  toggle === "ar" ? "text-white bg-[#2A4E84]" : "text-gray-700"
                }`}
              >
                AR
              </span>
            </div>
            <Link to="/Login">
              <button className="w-full border-2 border-[#2A4E84] text-[#2A4E84] py-2 px-5 rounded-full hover:bg-[#ECF1F9] mt-2">
                {t("login")}
              </button>
            </Link>
            <Link to="/Signup">
              <button className="w-full bg-[#2A4E84] text-white py-2 px-5 rounded-full hover:bg-[#1E3B72] mt-2">
                {t("signup")}
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
