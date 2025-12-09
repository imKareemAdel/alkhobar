import React, { useEffect, useState } from "react";
import axios from "axios";

const SliderImage = ({ handleMenuClick }) => {
  const [images, setImages] = useState([]);
  const token = localStorage.getItem("token"); // ضع التوكن هنا أو اجلبه من localStorage

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/sliders", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("API Response:", response.data); // فحص البيانات
        if (response.data && Array.isArray(response.data.sliders)) {
          setImages(response.data.sliders);
        } else {
          console.error("Unexpected API response format:", response.data);
          setImages([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setImages([]);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/sliders/${id}`, {
        headers: { Authorization: `Bearer ${token}` }, // إضافة التوكن هنا
      })
      .then(() => {
        setImages((prevImages) =>
          prevImages.filter((image) => image.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting image:", error));
  };

  return (
    <div className="h-screen relative bg-[#FEFEFE] shadow m-8">
      <div className="flex justify-between items-center mx-5 pb-10 text-[#2A4E84]">
        <p className="text-[24px]">صور الغلاف</p>
        <div
          onClick={() => handleMenuClick("إضافه صوره")}
          className="border cursor-pointer border-[#2A4E84] h-[56px] w-[214px] flex justify-center items-center mt-5 rounded-md"
        >
          <h1 className="text-[16px]">+ إضافة صورة</h1>
        </div>
      </div>
      <div className="flex flex-wrap mx-2 gap-y-2">
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} className="w-3/12">
              <div className="m-2">
                <div className="w-full h-[155px] flex justify-center items-center rounded-md bg-[#ECF1F9]">
                  <img
                    src={image.photo}
                    alt="slider"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="flex justify-center gap-2 items-center my-4">
                  <i className="fa-solid fa-eye me-1 text-[#2B3F6C]"></i>
                  <i
                    className="fa-solid fa-trash-can text-[#CA152A] me-1 cursor-pointer"
                    onClick={() => handleDelete(image.id)}
                  ></i>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-full text-[#2A4E84]">لا توجد صور متاحة</p>
        )}
      </div>
    </div>
  );
};

export default SliderImage;
