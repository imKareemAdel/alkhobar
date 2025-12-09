import React, { useEffect } from "react";
import { Search } from "lucide-react";
import img1 from "../../assets/photo1.jpeg";
import logo from "../../assets/logoooo.png";
import { useState } from "react";
import Swal from "sweetalert2";
import loginImg from "../../assets/imglogo.png";
import logo2 from "../../assets/logo2.png";
import AddCourseForm from "./Courses/AddCourse";
import DepartmentsTable from "./Department/DepartmentTable";
import AddDepartment from "./Department/AddDepartment";
import EditDepartment from "./Department/EditDepartment";
import AddBranch from "./Branch/AddBranch";
import EditBranch from "./Branch/EditBranch";
import BranchTable from "./Branch/BranchesList";
import CourseTable from "./Courses/CourseTable";
import All from "./Courses/All";
import EditCourse from "./Courses/EditCourse";
import InstructorsTable from "./Instructors/InstructorsTable";
import AddInstructors from "./Instructors/AddInstructors";
import Purchase from "./Purchase/Purchase";
import Procedures from "./Purchase/Procedures";
import FeedBackTable from "./FeedBacks/FeedBackTable";
import AddFeedBack from "./FeedBacks/AddFeedBack";
import EditFeedBack from "./FeedBacks/EditFeedBack";
import AddSliderImage from "./Slider/AddSliderImage";
import SliderImage from "./Slider/SliderImage";
import LogIn from "./LogIn/LogIn";
import useBranches from "../hooks/useBranches";
import useCourses from "../hooks/useCourses";
import useCategories from "../hooks/useCategories";

const showSuccessAlert = () => {
  Swal.fire({
    title: "تم بنجاح!",
    text: "تمت العملية بنجاح",
    icon: "success",
    confirmButtonText: "حسناً",
    confirmButtonColor: "#FFA500",
  });
};

const MenuComponent = () => {
  const [activeContent, setActiveContent] = useState("تسجيل الدخول");
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [branchToUpdate, setBranchToUpdate] = useState({});
  const [courseToUpdate, setCourseToUpdate] = useState({});
  const [departmentToUpdate, setDepartmentToUpdate] = useState({});

  // console.log({ branchToUpdate });

  const [selectedBranchId, setSelectedBranchId] = useState(null); // إضافة حالة لحفظ معرف الفرع
  const { branches, loading, error, deleteBranch, fetchBranches } =
    useBranches();
  const { courses, loadingCourse, errorCourse, deleteCourse, updateCourse } =
    useCourses();
  const {
    categories,
    loadingCategory,
    errorCategory,
    deleteCategory,
    updateCategory,
    fetchCategories,
    newCategory,
  } = useCategories();

  useEffect(() => {
    if (activeContent === "الأقسام") {
      fetchCategories();
    }

    if (activeContent === "الفروع") {
      fetchBranches();
    }
  }, [activeContent]);

  console.log({ newCategory });
  console.log("categories from cms==>", categories);

  const handleMenuClick = (content) => {
    setActiveContent(content);
    setActiveMenu(content);
    if (content === "الدورات") {
      setIsOpen(!isOpen); // عكس القيمة عند الضغط على "الدورات"
    }
  };

  const isActive = (content) =>
    activeContent === content ? "text-[#F88630]" : "";

  return (
    <>
      <div className="flex  bg-[#F2F2F2] min-h-screen" dir="rtl">
        <div className="w-[300px] bg-[#2A4E84] text-white">
          <div className="w-[67px] h-[80px] m-auto pt-[24px]">
            <img src={logo2} className="w-full" />
          </div>
          <div className="flex">
            {/* القائمة الجانبية */}
            <ul className="mt-[42px] w-[169px] m-auto text-center px-9">
              <li
                className="h-[66px] w-[159px] text-[18px] flex items-center cursor-pointer"
                onClick={() => handleMenuClick("الأقسام")}
              >
                <i
                  className={`fa-solid fa-boxes-stacked ${isActive(
                    "edit"
                  )} ${isActive("إضافه قسم")} ${isActive("الأقسام")}`}
                ></i>
                <span
                  className={`ms-4 ${isActive("edit")} ${isActive(
                    "إضافه قسم"
                  )} ${isActive("الأقسام")}`}
                >
                  الأقسام
                </span>
              </li>
              <div>
                {/* عنصر "الدورات" مع الأيقونة */}
                <li
                  className="h-[66px] w-[169px] text-[18px] flex items-center cursor-pointer"
                  onClick={() => handleMenuClick("الدورات")}
                >
                  <i
                    className={`fa-solid fa-book-open ${isActive(
                      "تعديل الدورة"
                    )} ${isActive("إضافه دورة")} ${isActive("الدورات")}`}
                  ></i>
                  <span
                    className={`ms-4 ${isActive("تعديل الدورة")} ${isActive(
                      "إضافه دورة"
                    )} ${isActive("الدورات")}`}
                  >
                    الدورات
                  </span>
                  {/* أيقونة السهم */}
                  <i
                    className={`ms-2 fa-solid ${isActive(
                      "تعديل الدورة"
                    )} ${isActive("إضافه دورة")}  ${isActive("الدورات")}  ${
                      isOpen ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </li>

                {/* القائمة المنسدلة */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "max-h-[300px] opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <ul className="w-fit bg-[#2A4E84] text-start text-white list-disc rounded-lg ms-4 text-[16px]">
                    <li
                      className="cursor-pointer rounded-md ps-2 py-2 text-nowrap  hover:bg-white hover:text-[#F0A500]"
                      onClick={() => handleItemSelection("الكل")}
                    >
                      الكل
                    </li>
                    <li
                      className="cursor-pointer rounded-md ps-2 py-2 text-nowrap hover:bg-white hover:text-[#F0A500]"
                      onClick={() => handleItemSelection("الدبلومات التدريبية")}
                    >
                      الدبلومات التدريبية
                    </li>
                    <li
                      className="cursor-pointer rounded-md ps-2 py-2 text-nowrap hover:bg-white hover:text-[#F0A500]"
                      onClick={() => handleItemSelection("الدورات التأهيلية")}
                    >
                      الدورات التأهيلية
                    </li>
                    <li
                      className="cursor-pointer rounded-md ps-2  py-2 text-nowrap hover:bg-white hover:text-[#F0A500]"
                      onClick={() => handleItemSelection("الدورات التطويرية")}
                    >
                      الدورات التطويرية
                    </li>
                    <li
                      className="cursor-pointer rounded-md ps-2 py-2 text-nowrap hover:bg-white hover:text-[#F0A500]"
                      onClick={() => handleItemSelection("اللغة الانجليزية")}
                    >
                      اللغة الانجليزية
                    </li>
                    <li
                      className="cursor-pointer rounded-md ps-2 py-2 text-nowrap hover:bg-white hover:text-[#F0A500]"
                      onClick={() => handleItemSelection("اللغة الصينية")}
                    >
                      اللغة الصينية
                    </li>
                  </ul>
                </div>
              </div>

              <li
                className="h-[66px] w-[159px] text-[18px] flex items-center cursor-pointer"
                onClick={() => handleMenuClick("الفروع")}
              >
                <i
                  className={`fa-solid fa-location-dot  ${isActive(
                    "تعديل الفرع"
                  )} ${isActive("إضافه فرع")} ${isActive("الفروع")}`}
                ></i>
                <span
                  className={`ms-4 ${isActive("تعديل الفرع")} ${isActive(
                    "إضافه فرع"
                  )} ${isActive("الفروع")}`}
                >
                  الفروع
                </span>
              </li>
              <li
                className="h-[66px] w-[159px] text-[18px] flex items-center cursor-pointer"
                onClick={() => handleMenuClick("المحاضرون")}
              >
                <i
                  className={`fa-regular fa-user ${isActive(
                    "تعديل بيانات المدرب"
                  )} ${isActive("إضافه مدرب")} ${isActive("المحاضرون")}`}
                ></i>
                <span
                  className={`ms-4  ${isActive(
                    "تعديل بيانات المدرب"
                  )} ${isActive("إضافه مدرب")} ${isActive("المحاضرون")}`}
                >
                  المحاضرون
                </span>
              </li>
              <li
                className="h-[66px] w-[159px] text-[18px] flex items-center cursor-pointer"
                onClick={() => handleMenuClick("عمليات الشراء")}
              >
                <i
                  className={`fa-solid fa-wallet ${isActive(
                    "الإجراءات"
                  )} ${isActive("عمليات الشراء")}`}
                ></i>
                <span
                  className={`ms-4   ${isActive("الإجراءات")} ${isActive(
                    "عمليات الشراء"
                  )}`}
                >
                  عمليات الشراء
                </span>
              </li>
              <li
                className="h-[66px] w-[159px] text-[18px] flex items-center cursor-pointer"
                onClick={() => handleMenuClick("التعليقات")}
              >
                <i
                  className={`fa-regular fa-comment-dots ${isActive(
                    "تعديل تعليق"
                  )} ${isActive("إضافه تعليق")} ${isActive("التعليقات")}`}
                ></i>
                <span
                  className={`ms-4  ${isActive("تعديل تعليق")} ${isActive(
                    "إضافه تعليق"
                  )} ${isActive("التعليقات")}`}
                >
                  التعليقات
                </span>
              </li>
              <li
                className="h-[66px] w-[159px] text-[18px] flex items-center cursor-pointer"
                onClick={() => handleMenuClick("صور الغلاف")}
              >
                <i
                  className={`fa-regular fa-image  ${isActive(
                    "إضافه صوره"
                  )} ${isActive("صور الغلاف")}`}
                ></i>
                <span
                  className={`ms-4   ${isActive("إضافه صوره")} ${isActive(
                    "صور الغلاف"
                  )}`}
                >
                  صور الغلاف
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full  ">
          <div className="w-full flex justify-around items-center h-[80px] bg-[#2A4E84]">
            <div className="w-[773px] ">
              <div className="flex-1 focus:border-[#2A4E84]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="بحث عن..."
                    className="w-full h-[48px] rounded-lg font-semibold border-2 text-sm focus:border-black outline-none text-right ps-10"
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2  p-1.5 rounded-lg cursor-pointer">
                    <Search className="h-4 w-4 text-black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[159px]">
              <div className="flex flex-wrap items-center">
                <div>
                  <img
                    className=" rounded-full w-[48px] h-[48px]"
                    src={img1}
                    onClick={() => handleMenuClick("تسجيل الدخول")}
                  />
                </div>
                <div className=" w-[94px] text-right text-white  text-[14px]  ms-3">
                  <h1 className="font-medium">محمد مصطفي</h1>
                  <p className=" font-sans ">المسؤول</p>
                </div>
              </div>
            </div>
          </div>

          {activeContent === "الأقسام" && (
            <DepartmentsTable
              handleMenuClick={setActiveContent}
              children={
                Array.isArray(categories) && categories.length > 0 ? (
                  categories.map((category) => (
                    <tr
                      key={category.id}
                      className="odd:bg-[#F6FAFF] even:bg-white text-center border-gray-200"
                    >
                      <td className="px-6 py-4">{"color"}</td>
                      <td className="px-6 py-4"> {category.name_en} </td>
                      <td className="px-6 py-4">{category.name_en}</td>
                      <td className="px-6 py-4 text-lg">
                        <i className="fa-solid fa-eye me-1 cursor-pointer"></i>
                        <i
                          className="fa-regular fa-pen-to-square me-1 cursor-pointer"
                          onClick={() => {
                            handleMenuClick("تعديل القسم");
                            setDepartmentToUpdate(category);
                          }}
                        ></i>
                        <i
                          className="fa-solid fa-trash-can text-[#CA152A] me-1 cursor-pointer"
                          onClick={() => deleteCategory(category.id)}
                        ></i>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center">
                      لا توجد فئات متاحة
                    </td>
                  </tr>
                )
              }
            />
          )}
          {activeContent === "إضافه قسم" && (
            <AddDepartment setActiveContent={setActiveContent} />
          )}
          {activeContent === "تعديل القسم" && (
            <EditDepartment
              setActiveContent={setActiveContent}
              department={departmentToUpdate}
            />
          )}

          {activeContent === "الدورات" && (
            <CourseTable
              handleMenuClick={setActiveContent}
              activeContent={activeContent}
              children={
                Array.isArray(courses) && courses.length > 0 ? (
                  courses.map((course) => (
                    //   console.log(
                    //     "branch**********************",
                    //     course,
                    //     courses
                    //   )

                    <tr
                      key={course.id}
                      className="odd:bg-[#F6FAFF] even:bg-white text-center border-gray-200"
                    >
                      <td className="px-6 py-4">📍</td>
                      <td className="px-6 py-4">{course.title_en}</td>
                      <td className="px-6 py-4 text-lg">
                        <i className="fa-solid fa-eye me-1"></i>
                        <i
                          className="fa-regular fa-pen-to-square me-1"
                          onClick={() => {
                            handleMenuClick("تعديل الدورة", course);
                            setCourseToUpdate(course);
                          }}
                        ></i>

                        <i
                          className="fa-solid fa-trash-can text-[#CA152A] me-1 cursor-pointer"
                          onClick={() => deleteCourse(course.id)}
                        ></i>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center">
                      لا توجد فروع متاحة
                    </td>
                  </tr>
                )
              }
            />
          )}

          {activeContent === "الكل" && (
            <All handleMenuClick={setActiveContent} />
          )}

          {activeContent === "تعديل الدورة" && (
            <EditCourse
              handleMenuClick={setActiveContent}
              course={courseToUpdate}
            />
          )}

          {activeContent === "إضافه دورة" && (
            <AddCourseForm handleMenuClick={setActiveContent} />
          )}

          {activeContent === "الفروع" && (
            <BranchTable
              handleMenuClick={setActiveContent}
              activeContent={activeContent}
              children={
                Array.isArray(branches) && branches.length > 0 ? (
                  branches.map((branch) => (
                    //   console.log(
                    //     "branch**********************",
                    //     branch,
                    //     branches
                    //   )

                    <tr
                      key={branch.id}
                      className="odd:bg-[#F6FAFF] even:bg-white text-center border-gray-200"
                    >
                      <td className="px-6 py-4">📍</td>
                      <td className="px-6 py-4">{branch.name}</td>
                      <td className="px-6 py-4 text-lg">
                        <i className="fa-solid fa-eye me-1"></i>
                        <i
                          className="fa-regular fa-pen-to-square me-1"
                          onClick={() => {
                            handleMenuClick("تعديل الفرع", branch);
                            setBranchToUpdate(branch);
                          }}
                        ></i>

                        <i
                          className="fa-solid fa-trash-can text-[#CA152A] me-1 cursor-pointer"
                          onClick={() => deleteBranch(branch.id)}
                        ></i>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="px-6 py-4 text-center">
                      لا توجد فروع متاحة
                    </td>
                  </tr>
                )
              }
            />
          )}
          {activeContent === "إضافه فرع" && (
            <AddBranch handleMenuClick={setActiveContent} />
          )}
          {activeContent === "تعديل الفرع" && (
            <EditBranch
              handleMenuClick={() => setActiveContent()}
              branch={branchToUpdate}
            />
          )}

          {activeContent === "المحاضرون" && (
            <InstructorsTable handleMenuClick={setActiveContent} />
          )}
          {activeContent === "إضافة مدرب" && (
            <AddInstructors handleMenuClick={setActiveContent} />
          )}
          {activeContent === "تعديل بيانات المدرب" && (
            <AddInstructors handleMenuClick={setActiveContent} />
          )}

          {activeContent === "عمليات الشراء" && (
            <Purchase handleMenuClick={setActiveContent} />
          )}
          {activeContent === "الإجراءات" && (
            <Procedures handleMenuClick={setActiveContent} />
          )}

          {activeContent === "التعليقات" && (
            <FeedBackTable handleMenuClick={setActiveContent} />
          )}
          {activeContent === "إضافه تعليق" && (
            <AddFeedBack handleMenuClick={setActiveContent} />
          )}
          {activeContent === "تعديل تعليق" && (
            <EditFeedBack handleMenuClick={setActiveContent} />
          )}

          {activeContent === "صور الغلاف" && (
            <SliderImage handleMenuClick={setActiveContent} />
          )}
          {activeContent === "إضافه صوره" && (
            <AddSliderImage handleMenuClick={setActiveContent} />
          )}

          {activeContent === "تسجيل الدخول" && (
            <LogIn handleMenuClick={setActiveContent} />
          )}
        </div>
      </div>
    </>
  );
};

export default MenuComponent;
