import React, { useEffect, useState } from "react";
import useCategories from "../../hooks/useCategories";
import Swal from "sweetalert2";

const AddDepartment = ({ setActiveContent }) => {
  const { categories, addCategory, fetchCategories } = useCategories();

  // State for input fields
  const [formData, setFormData] = useState({
    arabicTitle: "",
    englishTitle: "",
    arabicDescription: "",
    englishDescription: "",
  });
  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle input change
  const handleChange = (e, lang) => {
    setFormData((prev) => ({ ...prev, [lang]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = () => {
    if (
      !formData.arabicTitle ||
      !formData.englishTitle ||
      !formData.arabicDescription ||
      !formData.englishDescription
    ) {
      Swal.fire("تنبيه!", "الرجاء ملء جميع الحقول", "warning");
      return;
    }
    if (
      formData.arabicDescription.length < 10 ||
      formData.englishDescription.length < 10
    ) {
      Swal.fire(
        "تنبيه!",
        "يرجى ملء وصف القسم والعنوان على الاقل 10 حروف",
        "warning"
      );
      return;
    }

    const data = {
      name_ar: formData.arabicTitle,
      name_en: formData.englishTitle,

      description_en: formData.englishDescription,
      // "Courses and tutorials about various programming languages and techniques.",
      description_ar: formData.arabicDescription,
      // "دورات وشروحات حول لغات وتقنيات البرمجة المتنوعة.",
    };

    addCategory(data);
    setActiveContent("الأقسام");
  };
  console.log("categories from add department==>", categories);

  return (
    <div className="h-screen relative bg-[#FEFEFE] shadow m-8">
      <h1 className="text-[24px] text-[#254574] pt-5 mx-5">إضافة قسم</h1>

      <div className="w-[1200px] h-[132px] m-auto border-2 border-dashed border-[#2A4E84] flex justify-center items-center rounded-lg mt-7 bg-[#F2F2F2]">
        <div className="text-[16px] flex flex-col items-center">
          <i className="text-[#2A4E84] fa-solid fa-cloud-arrow-up text-[20px] mb-2"></i>
          <p className="text-[#0C1727]">اسحب الصورة هنا أو اضغط للتصفح</p>
        </div>
      </div>

      {[
        {
          label: "العربية",
          titleKey: "arabicTitle",
          descriptionKey: "arabicDescription",
        },
        {
          label: "الإنجليزية",
          titleKey: "englishTitle",
          descriptionKey: "englishDescription",
        },
      ].map(({ label, titleKey, descriptionKey }) => (
        <div key={titleKey}>
          {/* Title Input */}
          <h1 className="text-[18px] text-[#254574] pt-7 mx-5">
            عنوان القسم بال{label}
            <span className="text-[#F88630]">*</span>
          </h1>
          <div className="w-[1200px] h-[56px] rounded-lg m-auto">
            <input
              type="text"
              className="w-full h-full px-4 bg-[#F2F2F2] border-0 rounded-md mt-2"
              placeholder={`إدخل عنوان القسم بال${label}`}
              value={formData[titleKey]}
              onChange={(e) => handleChange(e, titleKey)}
            />
          </div>

          {/* Description Input */}
          <h1 className="text-[18px] text-[#254574] pt-7 mx-5">
            وصف القسم بال{label}
            <span className="text-[#F88630]">*</span>
          </h1>
          <div className="w-[1200px] h-[56px] rounded-lg m-auto">
            <input
              type="text"
              className="w-full h-full px-4 bg-[#F2F2F2] border-0 rounded-md mt-2"
              placeholder={`إدخل وصف القسم بال${label}`}
              value={formData[descriptionKey]}
              onChange={(e) => handleChange(e, descriptionKey)}
            />
          </div>
        </div>
      ))}

      <div className="absolute bottom-3 left-2 flex space-x-4">
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="bg-[#2A4E84] text-white w-[265px] h-[56px] flex justify-center items-center rounded-md me-3"
        >
          إضافة
        </button>
        <button
          className="border-2 text-[#2A4E84] border-[#2A4E84] w-[265px] h-[56px] flex justify-center items-center rounded-md"
          onClick={() => setActiveContent("الأقسام")}
        >
          إلغاء
        </button>
      </div>
    </div>
  );
};

export default AddDepartment;
