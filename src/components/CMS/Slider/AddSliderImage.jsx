import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddSliderImage = ({ handleMenuClick }) => {
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [displayOrder, setDisplayOrder] = useState(""); // state لحفظ قيمة display_order
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageFile(file);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "alzrqaa");
    data.append("cloud_name", "db0dvbqbn");

    setLoading(true);
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/db0dvbqbn/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const uploadedImage = await res.json();
      if (uploadedImage.url) {
        setImageUrl(uploadedImage.url);
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

  const handleSubmit = async () => {
    if (!imageUrl) {
      Swal.fire("تنبيه!", "الرجاء رفع الصورة أولاً", "warning");
      return;
    }
    if (displayOrder === "") {
      Swal.fire("تنبيه!", "الرجاء إدخال ترتيب العرض", "warning");
      return;
    }
    setSubmitting(true);
    try {
      // الحصول على التوكن
      const token = localStorage.getItem("token");
      if (!token) {
        Swal.fire("خطأ!", "التوكن غير متوفر، يرجى تسجيل الدخول", "error");
        return;
      }
      // بناء الـ payload بالشكل المطلوب مع قيمة display_order الديناميكية
      const payload = {
        photo: imageUrl,
        display_order: Number(displayOrder),
      };

      await axios.post("http://localhost:4000/api/v1/sliders", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      Swal.fire("تم!", "تمت إضافة الصورة بنجاح!", "success");
      setImageFile(null);
      setImageUrl("");
      setDisplayOrder(""); // تفريغ حقل ترتيب العرض

      if (handleMenuClick) {
        handleMenuClick("صور الغلاف");
      }
    } catch (error) {
      Swal.fire(
        "خطأ!",
        error.response?.data?.message || "حدث خطأ، يرجى المحاولة مرة أخرى.",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-screen relative bg-[#FEFEFE] shadow m-8">
      <h1 className="text-[24px] text-[#254574] pt-5 mx-5">
        إضافة صورة للغلاف
      </h1>
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
      {imageUrl && (
        <div className="mt-4 flex justify-center">
          <img
            src={imageUrl}
            alt="Slider"
            className="w-40 h-40 rounded-lg shadow-md"
          />
        </div>
      )}
      {/* حقل إدخال ترتيب العرض */}
      <div className="mt-4 flex justify-center">
        <input
          type="number"
          value={displayOrder}
          onChange={(e) => setDisplayOrder(e.target.value)}
          placeholder="أدخل ترتيب العرض"
          className="w-[200px] h-[40px] px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-0"
        />
      </div>
      <div className="absolute bottom-3 left-2 flex space-x-4">
        <button
          className="bg-[#2A4E84] text-white w-[265px] h-[56px] flex justify-center items-center rounded-md me-3"
          onClick={handleSubmit}
          disabled={submitting}
        >
          {submitting ? "جاري الحفظ..." : "حفظ"}
        </button>
        <button
          className="border-2 text-[#2A4E84] border-[#2A4E84] w-[265px] h-[56px] flex justify-center items-center rounded-md"
          onClick={() => {
            setImageFile(null);
            setImageUrl("");
            setDisplayOrder("");
            if (handleMenuClick) {
              handleMenuClick("صور الغلاف");
            }
          }}
        >
          إلغاء
        </button>
      </div>
    </div>
  );
};

export default AddSliderImage;
