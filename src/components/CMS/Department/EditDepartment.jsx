import React, { useState } from "react";
import useCategories from "../../hooks/useCategories";

const EditDepartment = ({ setActiveContent, department, onUpdate }) => {
  // Extract functions from useCategories hook
  const {
    categories,
    loadingCategory,
    errorCategory,
    deleteCategory,
    updateCategory,
    fetchCategories,
  } = useCategories();

  // Separate state for each input field
  const [nameEn, setNameEn] = useState(department?.name_en || "");
  const [descriptionEn, setDescriptionEn] = useState(
    department?.description_en || ""
  );
  const [nameAr, setNameAr] = useState(department?.name_ar || "");
  const [descriptionAr, setDescriptionAr] = useState(
    department?.description_ar || ""
  );

  // Handle form submission
  const handleSubmit = () => {
    if (!nameEn || !descriptionEn || !nameAr || !descriptionAr) {
      alert("يرجى ملء جميع الحقول المطلوبة.");
      return;
    }

    const updatedData = {
      name_en: nameEn,
      description_en: descriptionEn,
      name_ar: nameAr,
      description_ar: descriptionAr,
    };

    updateCategory(department.id, updatedData); // Fire update action with changed values
  };

  return (
    <div className="relative h-screen bg-[#FEFEFE] shadow m-8">
      <h1 className="text-[24px] text-[#254574] pt-5 mx-6">تعديل قسم</h1>

      <div className="flex justify-between mt-9 mx-6">
        <div className="h-[276px] w-[584px] flex justify-center items-center bg-[#ECF1F9] rounded-lg relative">
          <i className="text-[#2A4E84] text-9xl fa-solid fa-graduation-cap"></i>
          <div className="absolute bottom-4 left-4 h-[40px] w-[40px] flex justify-center items-center text-white rounded-full bg-[#2A4E84]">
            <i className="fa-regular fa-pen-to-square"></i>
          </div>
        </div>

        <div className="container">
          {/* English Name */}
          <div className="w-[584px] h-[98px]">
            <h1 className="text-[18px] text-[#254574] pt-5 ms-1">
              عنوان القسم بالإنجليزية <span className="text-[#F88630]">*</span>
            </h1>
            <input
              type="text"
              value={nameEn}
              onChange={(e) => setNameEn(e.target.value)}
              className="w-full h-[56px] bg-[#F2F2F2] border-0 px-3 text-[16px] rounded-lg mt-2"
              placeholder="أدخل عنوان القسم بالإنجليزية"
            />
          </div>

          {/* English Description */}
          <div className="w-[584px] h-[98px]">
            <h1 className="text-[18px] text-[#254574] pt-5 ms-1">
              وصف القسم بالإنجليزية <span className="text-[#F88630]">*</span>
            </h1>
            <input
              type="text"
              value={descriptionEn}
              onChange={(e) => setDescriptionEn(e.target.value)}
              className="w-full h-[56px] bg-[#F2F2F2] border-0 px-3 text-[16px] rounded-lg mt-2"
              placeholder="أدخل وصف القسم بالإنجليزية"
            />
          </div>

          {/* Arabic Name */}
          <div className="w-[584px] h-[98px]">
            <h1 className="text-[18px] text-[#254574] pt-5 ms-1">
              عنوان القسم بالعربية <span className="text-[#F88630]">*</span>
            </h1>
            <input
              type="text"
              value={nameAr}
              onChange={(e) => setNameAr(e.target.value)}
              className="w-full h-[56px] bg-[#F2F2F2] border-0 px-3 text-[16px] rounded-lg mt-2"
              placeholder="أدخل عنوان القسم بالعربية"
            />
          </div>

          {/* Arabic Description */}
          <div className="w-[584px] h-[98px]">
            <h1 className="text-[18px] text-[#254574] pt-5 ms-1">
              وصف القسم بالعربية <span className="text-[#F88630]">*</span>
            </h1>
            <input
              type="text"
              value={descriptionAr}
              onChange={(e) => setDescriptionAr(e.target.value)}
              className="w-full h-[56px] bg-[#F2F2F2] border-0 px-3 text-[16px] rounded-lg mt-2"
              placeholder="أدخل وصف القسم بالعربية"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-2 flex space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-[#2A4E84] text-white w-[265px] h-[56px] flex justify-center items-center rounded-md me-3"
        >
          تعديل
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

export default EditDepartment;
