import React from "react";
import { Card } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import PreparatoryCourses from "../PreparatoryCourses/PreparatoryCourses";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import useCategories from "../hooks/useCategories";
import Categories from "../Categories/Categories";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربيه",
    country_code: "sa",
    dir: "rtl",
  },
];
export default function Courses() {
  return (
    <>
      <Categories />
    </>
  );
}
