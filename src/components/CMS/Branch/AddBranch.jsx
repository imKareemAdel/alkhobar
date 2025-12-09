import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BACKEND_URL from "../../Config/Config";
import useBranches from "../../hooks/useBranches";

const AddBranch = ({ handleMenuClick }) => {
  const [branchData, setBranchData] = useState({
    name: "",
    address: "",
    phone: "",
    map_url: "",
    photo_url: "",
  });
  const { branches, deleteBranch, fetchBranches, addBranchRequest } =
    useBranches();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false); // حالة إرسال البيانات

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

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

      const uploadedImageUrl = await res.json();

      if (uploadedImageUrl.url) {
        setBranchData((prevData) => ({
          ...prevData,
          photo_url: uploadedImageUrl.url,
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
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire("خطأ!", "لم يتم العثور على التوكن، يرجى تسجيل الدخول", "error");
      return;
    }

    if (
      !branchData.name ||
      !branchData.address ||
      !branchData.phone ||
      !branchData.map_url ||
      !branchData.photo_url
    ) {
      Swal.fire("تنبيه!", "الرجاء ملء جميع الحقول", "warning");
      return;
    }
    if (branchData.address.length < 10) {
      Swal.fire("تنبيه!", "يرجى ملء العنوان  على الاقل 10 حروف", "warning");
      return;
    }

    setSubmitting(true);

    try {
      addBranchRequest(branchData);
      handleMenuClick("الفروع");
      Swal.fire("تم!", "تمت إضافة الفرع بنجاح!", "success");
      setBranchData({
        name: "",
        address: "",
        phone: "",
        map_url: "",
        photo_url: "",
      }); // تفريغ الحقول بعد الإضافة
      handleMenuClick("الفروع");
    } catch (error) {
      console.log({ error });

      Swal.fire(
        "خطأ!",
        error.response?.data?.message || "حدث خطأ، يرجى المحاولة مرة أخرى.",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranchData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="h-screen relative bg-[#FEFEFE] shadow m-8">
      <h1 className="text-[24px] text-[#254574] pt-5 mx-5">إضافة فرع</h1>

      {/* مربع رفع الصورة */}
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

      {/* عرض الصورة بعد رفعها */}
      {branchData.photo_url && (
        <div className="mt-4 flex justify-center">
          <img
            src={branchData.photo_url}
            alt="Branch"
            className="w-40 h-40 rounded-lg shadow-md"
          />
        </div>
      )}

      {/* نموذج إدخال البيانات */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        <div className="w-1/2 ms-5">
          {["name", "address", "phone", "map_url"].map((field, index) => (
            <div key={index}>
              <h1 className="text-[18px] text-[#254574] pt-7 mx-5">
                {field === "name" && "أسم الفرع بالعربية"}
                {field === "address" && "عنوان الفرع بالعربية"}
                {field === "phone" && "رقم التليفون بالعربية"}
                {field === "map_url" && "قوقل مابس"}{" "}
                <span className="text-[#F88630]">*</span>
              </h1>
              <div className="w-full h-[56px] rounded-lg m-auto">
                <input
                  type="text"
                  name={field}
                  value={branchData[field]}
                  onChange={handleChange}
                  className="w-full h-full px-4 bg-[#F2F2F2] border-0 rounded-md mt-2 focus:outline-none focus:ring-0"
                  placeholder={`ادخل ${
                    field === "map_url"
                      ? "لينك موقع الفرع على قوقل مابس"
                      : `بيانات ${field}`
                  }`}
                  style={{ boxShadow: "none" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-3 left-2 flex space-x-3">
          <button
            type="submit"
            disabled={submitting}
            className={`w-[265px] h-[56px] flex justify-center items-center rounded-md me-3 ${
              submitting ? "bg-gray-400" : "bg-[#2A4E84] text-white"
            }`}
          >
            {submitting ? "جاري الإضافة..." : "إضافة"}
          </button>
          <button
            type="button"
            onClick={() => {
              setBranchData({
                name: "",
                address: "",
                phone: "",
                map_url: "",
                photo_url: "",
              });
              handleMenuClick("الفروع");
            }}
            className="border-2 text-[#2A4E84] border-[#2A4E84] w-[265px] h-[56px] flex justify-center items-center rounded-md"
          >
            إلغاء
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBranch;
