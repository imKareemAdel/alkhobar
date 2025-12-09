import React, { useState } from "react";
import useBranches from "../../hooks/useBranches";

const EditBranch = ({ branch }) => {
  const { updateBranch } = useBranches();

  // Initialize state with the branch data
  const [editedBranch, setEditedBranch] = useState(branch);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBranch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "alzrqaa"); // استبدل بالقيمة الصحيحة

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/db0dvbqbn/image/upload", // استبدل db0dvbqbn بـ Cloud Name الخاص بك
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      if (data.secure_url) {
        setEditedBranch((prev) => ({
          ...prev,
          photo_url: data.secure_url,
        }));
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  // Handle update button click
  const handleUpdate = () => {
    updateBranch(branch.id, editedBranch);
  };

  return (
    <div className="h-screen relative bg-[#FEFEFE] shadow m-8">
      <h1 className="text-[24px] text-[#254574] pt-5 mx-6">تعديل الفرع</h1>

      <p className="text-[18px] text-red-500 mx-6">معرف الفرع: {branch.id}</p>

      <div className="flex justify-between mt-9 mx-6">
        {/* Branch Image */}
        <div className="h-[276px] w-[584px] flex justify-center items-center bg-[#ECF1F9] rounded-lg relative">
          {editedBranch.photo_url ? (
            <img
              src={editedBranch.photo_url}
              alt="Branch"
              className="h-full w-full object-cover rounded-lg"
            />
          ) : (
            <i className="text-[#2A4E84] text-9xl fa-solid fa-graduation-cap"></i>
          )}
          <div className="absolute bottom-4 left-4 h-[40px] w-[40px] flex justify-center items-center text-white rounded-full bg-[#2A4E84] cursor-pointer">
            <label htmlFor="file-upload" className="cursor-pointer">
              <i className="fa-regular fa-pen-to-square"></i>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        {/* Editable form fields */}
        <div className="w-[584px]">
          <label className="text-[18px] text-[#254574] ms-1">
            أسم الفرع <span className="text-[#F88630]">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={editedBranch.name}
            onChange={handleChange}
            className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-lg"
          />

          <label className="text-[18px] text-[#254574] pt-5 ms-1">
            عنوان الفرع <span className="text-[#F88630]">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={editedBranch.address}
            onChange={handleChange}
            className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-lg"
          />

          <label className="text-[18px] text-[#254574] pt-5 ms-1">
            رقم التليفون <span className="text-[#F88630]">*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={editedBranch.phone}
            onChange={handleChange}
            className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-lg"
          />

          <label className="text-[18px] text-[#254574] pt-5 ms-1">
            خريطة جوجل <span className="text-[#F88630]">*</span>
          </label>
          <input
            type="text"
            name="map_url"
            value={editedBranch.map_url}
            onChange={handleChange}
            className="w-full h-[56px] bg-[#F2F2F2] mt-2 ps-3 text-[16px] rounded-lg"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-3 left-2 flex space-x-4">
        <button
          onClick={handleUpdate}
          className="bg-[#2A4E84] text-white w-[285px] h-[56px] flex justify-center items-center rounded-md me-3"
        >
          تعديل
        </button>
        <button className="border-2 text-[#2A4E84] border-[#2A4E84] w-[285px] h-[56px] flex justify-center items-center rounded-md">
          إلغاء
        </button>
      </div>
    </div>
  );
};

export default EditBranch;
