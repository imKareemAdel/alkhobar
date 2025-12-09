import { useState } from "react";
import useCourses from "../../hooks/useCourses";
import Swal from "sweetalert2";

const EditCourse = ({ course }) => {
  const { updateCourse } = useCourses();

  // Normalize start_date to YYYY-MM-DD format
  const normalizeDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; // Extracts YYYY-MM-DD
  };

  // Initialize state with the course data, ensuring start_date is in YYYY-MM-DD format
  const [editedCourse, setEditedCourse] = useState({
    title_ar: course.title_ar || "",
    title_en: course.title_en || "",
    description_ar: course.description_ar || "",
    description_en: course.description_en || "",
    price: course.price || "",
    learn_ar: course.learn_ar || "",
    learn_en: course.learn_en || "",
    instructor: course.instructor || "",
    start_date: normalizeDate(course.start_date), // Normalize date here
    study_duration: course.study_duration || "",
    hours: course.hours || "",
    training_type: course.training_type || "",
    study_days: course.study_days || "",
    training_period: course.training_period || "",
    course_time: course.course_time || "",
    seats: course.seats || "",
    image_url: course.image_url || "",
    duration: course.duration || "",
    level: course.level || "",
    category_id: course.category_id || "",
    instructor_id: course.instructor_id || "",
    category: course.category || "",
  });

  const [loading, setLoading] = useState(false);

  console.log("course from edit course ====================>", course);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCourse((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image upload
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
        setEditedCourse((prev) => ({
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

  // Handle update button click
  const handleUpdate = async () => {
    try {
      // Ensure start_date is in YYYY-MM-DD format before sending
      const updatedCourseData = {
        ...editedCourse,
        start_date: editedCourse.start_date, // Already in YYYY-MM-DD from input
      };

      await updateCourse(course.id, updatedCourseData);
      Swal.fire("تم!", "تم تعديل الدورة بنجاح!", "success");
    } catch (error) {
      Swal.fire(
        "خطأ!",
        error.response?.data?.error || "حدث خطأ أثناء تعديل الدورة!",
        "error"
      );
    }
  };

  // Handle cancel button click (reset to original course data)
  const handleCancel = () => {
    setEditedCourse({
      title_ar: course.title_ar || "",
      title_en: course.title_en || "",
      description_ar: course.description_ar || "",
      description_en: course.description_en || "",
      price: course.price || "",
      learn_ar: course.learn_ar || "",
      learn_en: course.learn_en || "",
      instructor: course.instructor || "",
      start_date: normalizeDate(course.start_date), // Normalize date here
      study_duration: course.study_duration || "",
      hours: course.hours || "",
      training_type: course.training_type || "",
      study_days: course.study_days || "",
      training_period: course.training_period || "",
      course_time: course.course_time || "",
      seats: course.seats || "",
      image_url: course.image_url || "",
      duration: course.duration || "",
      level: course.level || "",
      category_id: course.category_id || "",
      instructor_id: course.instructor_id || "",
      category: course.category || "",
    });
  };

  return (
    <div className="relative min-h-screen bg-[#FEFEFE] shadow m-8">
      <h1 className="text-[24px] text-[#254574] pt-5 mx-6">تعديل الدورة</h1>

      {/* Image Upload Section */}
      <div
        className="w-[584px] h-[132px] mx-6 mt-7 border-2 border-dashed border-[#2A4E84] flex justify-center items-center rounded-lg bg-[#F2F2F2] cursor-pointer"
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
      {editedCourse.image_url && (
        <div className="mt-4 flex justify-start mx-6">
          <img
            src={editedCourse.image_url}
            alt="Course"
            className="w-40 h-40 rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Arabic Section */}
      <h1 className="text-[24px] text-[#254574] font-semibold text-center pt-5 mx-5">
        باللغة العربية
      </h1>
      <div className="flex justify-around items-start mx-2 mt-7">
        <div className="w-[584px]">
          <div className="mt-7">
            <h1 className="text-[18px] text-[#254574] ms-1">
              عنوان الدورة <span className="text-[#F88630]">*</span>
            </h1>
            <input
              type="text"
              name="title_ar"
              value={editedCourse.title_ar}
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
              value={editedCourse.description_ar}
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
                  value={editedCourse.start_date}
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
                  value={editedCourse.study_duration}
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
                  value={editedCourse.hours}
                  onChange={handleChange}
                  placeholder="ادخل عدد الساعات"
                  className="w-[257px] h-[40px] bg-[#FEFEFE] rounded-md ps-3 text-[12px] border-none focus:outline-none focus:ring-0"
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
                  value={editedCourse.training_type}
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
                  value={editedCourse.study_days}
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
                  value={editedCourse.training_period}
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
                  value={editedCourse.course_time}
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
                  value={editedCourse.seats}
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
                  value={editedCourse.duration}
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
                  value={editedCourse.level}
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
                  value={editedCourse.category_id}
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
                  value={editedCourse.instructor_id}
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
              value={editedCourse.price}
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
            <input
              type="text"
              name="category"
              value={editedCourse.category}
              onChange={handleChange}
              placeholder="ادخل اسم الفئة"
              className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md border-none focus:outline-none focus:ring-0"
              style={{ boxShadow: "none" }}
            />
          </div>

          <div className="mt-7">
            <h1 className="text-[18px] text-[#254574] ms-1">
              ماذا ستتعلم؟<span className="text-[#F88630]">*</span>
            </h1>
            <textarea
              name="learn_ar"
              value={editedCourse.learn_ar}
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
              value={editedCourse.instructor}
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
      <div className="flex justify-around items-start mx-2 mt-7">
        <div className="w-[584px]">
          <div className="mt-7">
            <h1 className="text-[18px] text-[#254574] ms-1">
              Course Title <span className="text-[#F88630]">*</span>
            </h1>
            <input
              type="text"
              name="title_en"
              value={editedCourse.title_en}
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
              value={editedCourse.description_en}
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
              value={editedCourse.learn_en}
              onChange={handleChange}
              placeholder="Enter course content"
              className="w-full h-[112px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-md pt-3 resize-none border-none focus:outline-none focus:ring-0"
              style={{ boxShadow: "none" }}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-3 left-2 flex space-x-4">
        <button
          type="button"
          onClick={handleUpdate}
          className="bg-[#2A4E84] text-white w-[285px] h-[56px] flex justify-center items-center rounded-md me-3"
        >
          تعديل
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="border-2 text-[#2A4E84] border-[#2A4E84] w-[285px] h-[56px] flex justify-center items-center rounded-md"
        >
          إلغاء
        </button>
      </div>
    </div>
  );
};

export default EditCourse;
