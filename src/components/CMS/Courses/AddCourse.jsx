import React, { useState } from "react";
import Swal from "sweetalert2";

const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    title_ar: "",
    title_en: "",
    description_ar: "",
    description_en: "",
    price: "",
    learn_ar: "",
    learn_en: "",
    instructor: "",
    start_date: "",
    study_duration: "",
    hours: "",
    training_type: "",
    study_days: "",
    training_period: "",
    course_time: "",
    seats: "",
    image_url: "",
    duration: "",
    level: "",
    category_id: "",
    instructor_id: "",
    category: "", // This will store the selected category value
  });

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Define category options
  const categoryOptions = [
    { value: "الدبلومات التدريبية", label: "الدبلومات التدريبية" },
    { value: "الدورات التطويرية", label: "الدورات التطويرية" },
    { value: "اللغة الإنجليزية", label: "اللغة الإنجليزية" },
    { value: "اللغة الصينية", label: "اللغة الصينية" },
    { value: "دورات الإعداد", label: "دورات الإعداد" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "alzrqaa"); // Replace with your Cloudinary preset
    data.append("cloud_name", "db0dvbqbn"); // Replace with your Cloudinary cloud name

    setLoading(true);

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/db0dvbqbn/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const uploadedImageUrl = await res.json();

      if (uploadedImageUrl.url) {
        setFormData((prev) => ({
          ...prev,
          image_url: uploadedImageUrl.url,
        }));
        Swal.fire("تم!", "تم رفع الصورة بنجاح!", "success");
      } else {
        Swal.fire("خطأ!", "حدث خطأ أثناء رفع الصورة!", "error");
      }
    } catch (error) {
      Swal.fire("خطأ!", "حدث خطأ أثناء الاتصال بالخادم!", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Basic validation for required fields
    const requiredFields = [
      "title_ar",
      "title_en",
      "description_ar",
      "description_en",
      "price",
      "learn_ar",
      "learn_en",
      "instructor",
      "start_date",
      "study_duration",
      "hours",
      "training_type",
      "study_days",
      "training_period",
      "course_time",
      "seats",
      "image_url",
      "duration",
      "level",
      "category_id",
      "instructor_id",
      "category",
    ];

    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      Swal.fire("تنبيه!", "يرجى ملء جميع الحقول المطلوبة", "warning");
      setSubmitting(false);
      return;
    }

    const courseData = {
      title_ar: formData.title_ar,
      title_en: formData.title_en,
      description_ar: formData.description_ar,
      description_en: formData.description_en,
      price: parseFloat(formData.price),
      learn_ar: formData.learn_ar,
      learn_en: formData.learn_en,
      instructor: formData.instructor,
      start_date: formData.start_date,
      study_duration: parseInt(formData.study_duration),
      hours: parseInt(formData.hours),
      training_type: formData.training_type,
      study_days: formData.study_days,
      training_period: formData.training_period,
      course_time: formData.course_time,
      seats: parseInt(formData.seats),
      image_url: formData.image_url,
      duration: parseInt(formData.duration),
      level: formData.level,
      category_id: parseInt(formData.category_id),
      instructor_id: parseInt(formData.instructor_id),
      category: formData.category,
      created_at: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:4000/api/v1/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(courseData),
      });

      if (response.ok) {
        Swal.fire("تم!", "تمت إضافة الدورة بنجاح!", "success");
        setFormData({
          title_ar: "",
          title_en: "",
          description_ar: "",
          description_en: "",
          price: "",
          learn_ar: "",
          learn_en: "",
          instructor: "",
          start_date: "",
          study_duration: "",
          hours: "",
          training_type: "",
          study_days: "",
          training_period: "",
          course_time: "",
          seats: "",
          image_url: "",
          duration: "",
          level: "",
          category_id: "",
          instructor_id: "",
          category: "",
        });
      } else {
        const errorData = await response.json();
        Swal.fire(
          "خطأ!",
          errorData.error || "حدث خطأ أثناء إضافة الدورة!",
          "error"
        );
      }
    } catch (error) {
      Swal.fire("خطأ!", "حدث خطأ أثناء الاتصال بالخادم!", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen relative shadow m-8 bg-white">
        <h1 className="text-[24px] text-[#254574] pt-5 mx-5">إضافة دورة</h1>
        <div
          className="w-[1200px] h-[132px] m-auto border-2 border-dashed border-[#2A4E84] flex justify-center items-center rounded-lg mt-7 bg-[#F2F2F2] cursor-pointer"
          onClick={() => document.getElementById("fileInput").click()}
        >
          <div className="text-[16px] flex flex-col items-center">
            <i className="text-[#2A4E84] fa-solid fa-cloud-arrow-up text-[20px] mb-2"></i>
            <p className="text-[#0C1727]">
              {loading
                ? "جاري تحميل الصورة..."
                : "اسحب الصورة هنا أو اضغط للتصفح"}
            </p>
          </div>
        </div>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {formData.image_url && (
          <div className="mt-4 flex justify-center">
            <img
              src={formData.image_url}
              alt="Course"
              className="w-40 h-40 rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Arabic Section */}
        <h1 className="text-[24px] text-[#254574] font-semibold text-center pt-5 mx-5">
          باللغة العربية
        </h1>
        <div className="flex justify-around items-start mx-2">
          <div className="w-[584px]">
            <div className="mt-7">
              <h1 className="text-[18px] text-[#254574] ms-1">
                عنوان الدورة <span className="text-[#F88630]">*</span>
              </h1>
              <input
                type="text"
                name="title_ar"
                value={formData.title_ar}
                onChange={handleChange}
                placeholder="ادخل عنوان الدورة"
                className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md border-none focus:outline-none focus:ring-0"
                style={{ boxShadow: "none" }}
              />
            </div>

            <div className="mt-7">
              <h1 className="text-[18px] text-[#254574] ms-1">
                وصف الدورة <span className="text-[#F88630]">*</span>
              </h1>
              <textarea
                name="description_ar"
                value={formData.description_ar}
                onChange={handleChange}
                placeholder="ادخل وصف للدورة"
                className="w-full h-[112px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md pt-3 resize-none border-none focus:outline-none focus:ring-0"
                style={{ boxShadow: "none" }}
              />
            </div>

            <div className="w-full bg-[#F2F2F2] mt-7 text-[16px] rounded-md">
              <h1 className="text-[18px] text-[#254574] py-5 ps-3">
                تفاصيل الدورة
              </h1>
              <div className="flex justify-between mb-3 flex-wrap items-center mx-5">
                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    تاريخ بداية الدورة <span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    مدة دراسة الدورة <span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="number"
                    name="study_duration"
                    value={formData.study_duration}
                    onChange={handleChange}
                    placeholder="أدخل مدة الدراسة"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    عدد الساعات<span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="number"
                    name="hours"
                    value={formData.hours}
                    onChange={handleChange}
                    placeholder="ادخل عدد الساعات"
                    className="w-[257px] h-[40px] bg-[#FEFEFE(audio, video, document) rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    نوع التدريب <span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="text"
                    name="training_type"
                    value={formData.training_type}
                    onChange={handleChange}
                    placeholder="أدخل نوع التدريب"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    أيام الدراسة<span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="text"
                    name="study_days"
                    value={formData.study_days}
                    onChange={handleChange}
                    placeholder="ادخل أيام الدراسة"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    فترة التدريب <span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="text"
                    name="training_period"
                    value={formData.training_period}
                    onChange={handleChange}
                    placeholder="أدخل فترة التدريب"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    وقت الدورة<span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="text"
                    name="course_time"
                    value={formData.course_time}
                    onChange={handleChange}
                    placeholder="ادخل وقت الدورة"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    عدد المقاعد<span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="number"
                    name="seats"
                    value={formData.seats}
                    onChange={handleChange}
                    placeholder="أدخل عدد المقاعد"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    المدة (بالثواني) <span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="ادخل المدة بالثواني"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    المستوى <span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="text"
                    name="level"
                    value={formData.level}
                    onChange={handleChange}
                    placeholder="ادخل المستوى (مبتدئ/متوسط/متقدم)"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    رقم الفئة <span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="number"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    placeholder="ادخل رقم الفئة"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>

                <div className="w-[257px] mb-6">
                  <h1 className="ps-1 mb-1">
                    رقم المحاضر <span className="text-[#F88630]">*</span>
                  </h1>
                  <input
                    type="number"
                    name="instructor_id"
                    value={formData.instructor_id}
                    onChange={handleChange}
                    placeholder="ادخل رقم المحاضر"
                    className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
                    style={{ boxShadow: "none" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[584px]">
            <div className="mt-7">
              <h1 className="text-[18px] text-[#254574] ms-1">
                سعر الدورة <span className="text-[#F88630]">*</span>
              </h1>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="أضف سعر الدورة"
                className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md border-none focus:outline-none focus:ring-0"
                style={{ boxShadow: "none" }}
              />
            </div>

            <div className="mt-7">
              <h1 className="text-[18px] text-[#254574] ms-1">
                الفئة <span className="text-[#F88630]">*</span>
              </h1>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md border-none focus:outline-none focus:ring-0"
                style={{ boxShadow: "none" }}
              >
                <option value="" disabled>
                  اختر الفئة
                </option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-7">
              <h1 className="text-[18px] text-[#254574] ms-1">
                ماذا ستتعلم؟<span className="text-[#F88630]">*</span>
              </h1>
              <textarea
                name="learn_ar"
                value={formData.learn_ar}
                onChange={handleChange}
                placeholder="ادخل محتوى الدورة"
                className="w-full h-[112px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md pt-3 resize-none border-none focus:outline-none focus:ring-0"
                style={{ boxShadow: "none" }}
              />
            </div>

            <div className="mt-7">
              <h1 className="text-[18px] text-[#254574] ms-1">
                أسم المحاضر<span className="text-[#F88630]">*</span>
              </h1>
              <input
                type="text"
                name="instructor"
                value={formData.instructor}
                onChange={handleChange}
                placeholder="ادخل أسم المحاضر"
                className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md border-none focus:outline-none focus:ring-0"
                style={{ boxShadow: "none" }}
              />
            </div>
          </div>
        </div>

        {/* English Section */}
        <h1 className="text-[24px] text-[#254574] font-semibold text-center pt-5 mx-5">
          باللغة الإنجليزية
        </h1>
        <div className="flex justify-around items-start mx-2">
          <div className="w-[584px]">
            <div className="mt-7">
              <h1 className="text-[18px] text-[#254574] ms-1">
                Course Title <span className="text-[#F88630]">*</span>
              </h1>
              <input
                type="text"
                name="title_en"
                value={formData.title_en}
                onChange={handleChange}
                placeholder="Enter course title"
                className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md border-none focus:outline-none focus:ring-0"
                style={{ boxShadow: "none" }}
              />
            </div>

            <div className="mt-7">
              <h1 className="text-[18px] text-[#254574] ms-1">
                Course Description <span className="text-[#F88630]">*</span>
              </h1>
              <textarea
                name="description_en"
                value={formData.description_en}
                onChange={handleChange}
                placeholder="Enter course description"
                className="w-full h-[112px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md pt-3 resize-none border-none focus:outline-none focus:ring-0"
                style={{ boxShadow: "none" }}
              />
            </div>
          </div>

          <div className="w-[584px]">
            <div className="mt-7">
              <h1 className="text-[18px] text-[#254574] ms-1">
                What will you learn? <span className="text-[#F88630]">*</span>
              </h1>
              <textarea
                name="learn_en"
                value={formData.learn_en}
                onChange={handleChange}
                placeholder="Enter course content"
                className="w-full h-[112px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md pt-3 resize-none border-none focus:outline-none focus:ring-0"
                style={{ boxShadow: "none" }}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 left-2 flex space-x-4">
          <button
            type="submit"
            disabled={submitting}
            className={`w-[285px] h-[56px] flex justify-center items-center rounded-md me-3 ${
              submitting ? "bg-gray-400" : "bg-[#2A4E84] text-white"
            }`}
          >
            {submitting ? "جاري الإضافة..." : "إضافة"}
          </button>
          <button
            type="button"
            onClick={() =>
              setFormData({
                title_ar: "",
                title_en: "",
                description_ar: "",
                description_en: "",
                price: "",
                learn_ar: "",
                learn_en: "",
                instructor: "",
                start_date: "",
                study_duration: "",
                hours: "",
                training_type: "",
                study_days: "",
                training_period: "",
                course_time: "",
                seats: "",
                image_url: "",
                duration: "",
                level: "",
                category_id: "",
                instructor_id: "",
                category: "",
              })
            }
            className="border-2 text-[#2A4E84] border-[#2A4E84] w-[285px] h-[56px] flex justify-center items-center rounded-md"
          >
            إلغاء
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddCourseForm;
