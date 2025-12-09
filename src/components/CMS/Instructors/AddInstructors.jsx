import React, { useState } from "react";
import useInstructors from "../../hooks/useInstructors";

const AddInstructors = ({ handleMenuClick }) => {
  const {
    instructors,
    loadingInstructor,
    errorInstructor,
    deleteInstructor,
    updateInstructor,
    addInstructor,
  } = useInstructors();
  // State for collecting form data
  const [nameAr, setNameAr] = useState("");
  const [bioAr, setBioAr] = useState("");
  const [coursesAr, setCoursesAr] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [bioEn, setBioEn] = useState("");
  const [coursesEn, setCoursesEn] = useState("");

  // Handle form submission
  const handleSubmit = async () => {
    if (!nameAr || !bioAr || !coursesAr || !nameEn || !bioEn || !coursesEn) {
      alert("يرجى ملء جميع الحقول المطلوبة.");
      return;
    }
    if (bioAr.length < 10 || bioEn.length < 10) {
      alert("يرجى ملء السيرة الذاتية على الاقل 10 حروف.");
      return;
    }

    const instructorData = {
      name_ar: nameAr,
      bio_ar: bioAr,
      expertise_ar: bioAr,
      name_en: nameEn,
      bio_en: bioEn,
      expertise_en: bioEn,
    };

    try {
      await addInstructor({
        ...instructorData,
        photo_url: "https://example.com/images/instructor-john.jpg",
        social_media: {
          twitter: "https://twitter.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
        },
        contact_info: {
          email: "john@example.com",
          phone: "+1-987-654-3210",
        },
      });
      handleMenuClick("المحاضرون");
      // Only reset if the request was successful
      setNameAr("");
      setBioAr("");
      setCoursesAr("");
      setNameEn("");
      setBioEn("");
      setCoursesEn("");
      alert("تم اضافة محاضر بنجاح.");
    } catch (error) {
      console.error("Error adding instructor:", error);
      alert("حدث خطأ أثناء إضافة المدرب. الرجاء المحاولة مرة أخرى.");
    }
  };

  return (
    <div className="h-screen relative bg-[#FEFEFE] shadow m-8">
      <h1 className="text-[24px] text-[#254574] pt-5 mx-5">إضافة مدرب</h1>
      <div className="w-[1200px] h-[132px] m-auto border-2 border-dashed border-[#2A4E84] flex justify-center items-center rounded-lg mt-7 bg-[#F2F2F2]">
        <div className="text-[16px] flex flex-col items-center">
          <i className="text-[#2A4E84] fa-solid fa-cloud-arrow-up text-[20px] mb-2"></i>
          <p className="text-[#0C1727]">اسحب الصورة هنا أو اضغط للتصفح</p>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="w-1/2 ms-5">
          <h1 className="text-[18px] text-[#254574] pt-7 mx-5">
            أسم المدرب بالعربية <span className="text-[#F88630]">*</span>
          </h1>
          <input
            type="text"
            value={nameAr}
            onChange={(e) => setNameAr(e.target.value)}
            className="w-full h-[56px] bg-[#F2F2F2] border-0 px-4 rounded-md mt-2"
            placeholder="ادخل أسم المدرب"
          />

          <h1 className="text-[18px] text-[#254574] pt-7 mx-5">
            نبذة تعريفية بالعربية <span className="text-[#F88630]">*</span>
          </h1>
          <input
            type="text"
            value={bioAr}
            onChange={(e) => setBioAr(e.target.value)}
            className="w-full h-[56px] bg-[#F2F2F2] border-0 px-4 rounded-md mt-2"
            placeholder="أضف نبذة تعريفية عن المدرب"
          />

          <h1 className="text-[18px] text-[#254574] pt-7 mx-5">
            الدورات المقدمة بالعربية <span className="text-[#F88630]">*</span>
          </h1>
          <input
            type="text"
            value={coursesAr}
            onChange={(e) => setCoursesAr(e.target.value)}
            className="w-full h-[56px] bg-[#F2F2F2] border-0 px-4 rounded-md mt-2"
            placeholder="أختر اسماء الدورات التي يقدمها المدرب"
          />
        </div>

        <div className="w-1/2 me-5">
          <h1 className="text-[18px] text-[#254574] pt-7 mx-5">
            أسم المدرب بالإنجليزية <span className="text-[#F88630]">*</span>
          </h1>
          <input
            type="text"
            value={nameEn}
            onChange={(e) => setNameEn(e.target.value)}
            className="w-full h-[56px] bg-[#F2F2F2] border-0 px-4 rounded-md mt-2"
            placeholder="ادخل أسم المدرب"
          />

          <h1 className="text-[18px] text-[#254574] pt-7 mx-5">
            نبذة تعريفية بالإنجليزية <span className="text-[#F88630]">*</span>
          </h1>
          <input
            type="text"
            value={bioEn}
            onChange={(e) => setBioEn(e.target.value)}
            className="w-full h-[56px] bg-[#F2F2F2] border-0 px-4 rounded-md mt-2"
            placeholder="أضف نبذة تعريفية عن المدرب"
          />

          <h1 className="text-[18px] text-[#254574] pt-7 mx-5">
            الدورات المقدمة بالإنجليزية{" "}
            <span className="text-[#F88630]">*</span>
          </h1>
          <input
            type="text"
            value={coursesEn}
            onChange={(e) => setCoursesEn(e.target.value)}
            className="w-full h-[56px] bg-[#F2F2F2] border-0 px-4 rounded-md mt-2"
            placeholder="أختر اسماء الدورات التي يقدمها المدرب"
          />
        </div>
      </div>

      <div className="absolute bottom-3 left-2 flex space-x-3">
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
          onClick={() => handleMenuClick("المحاضرون")}
        >
          إلغاء
        </button>
      </div>
    </div>
  );
};

export default AddInstructors;
