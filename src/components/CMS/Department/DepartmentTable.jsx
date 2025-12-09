import React from "react";

const DepartmentsTable = ({ handleMenuClick, children }) => {
  return (
    <div className="h-screen bg-[#FEFEFE] shadow m-8">
      <div className="flex justify-between items-center mx-5 pb-10 text-[#2A4E84]">
        <p className="text-[24px]">جميع الأقسام</p>
        <div
          onClick={() => handleMenuClick("إضافه قسم")}
          className="border cursor-pointer border-[#2A4E84] h-[56px] w-[214px] flex justify-center items-center mt-5 rounded-md"
        >
          <h1 className="text-[16px]">+ إضافه قسم</h1>
        </div>
      </div>

      <div className="relative overflow-x-auto sm:rounded-lg mx-6">
        <table className="w-full text-center rtl:text-right text-gray-500 text-[18px] mb-10">
          <thead className="text-[18px] text-gray-700 uppercase text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                الصورة
              </th>
              <th scope="col" className="px-6 py-3">
                الاسم
              </th>
              <th scope="col" className="px-6 py-3">
                الدورات
              </th>
              <th scope="col" className="px-6 py-3">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {["Silver", "White", "Black", "Gray", "Red"].map((color, index) => (
              <tr
                key={index}
                className="odd:bg-[#F6FAFF] even:bg-white text-center border-gray-200"
              >
                <td className="px-6 py-4">{color}</td>
                <td className="px-6 py-4">الدبلومات التدريبية</td>
                <td className="px-6 py-4">4 دورات</td>
                <td className="px-6 py-4 text-lg">
                  <i className="fa-solid fa-eye me-1 cursor-pointer"></i>
                  <i
                    className="fa-regular fa-pen-to-square me-1 cursor-pointer"
                    onClick={() => handleMenuClick("edit")}
                  ></i>
                  <i className="fa-solid fa-trash-can text-[#CA152A] me-1 cursor-pointer"></i>
                </td>
              </tr>
            ))} */}

            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentsTable;
