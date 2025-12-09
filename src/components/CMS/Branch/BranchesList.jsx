import React, { useEffect, useState } from "react";
import useBranches from "../../hooks/useBranches";

const BranchTable = ({ handleMenuClick, activeContent, children }) => {
  const { branches, loading, error, deleteBranch, fetchBranches } =
    useBranches();
  const [branchToUpdate, setBranchToUpdate] = useState({});

  useEffect(() => {
    fetchBranches();
  }, []);

  return (
    <div className="h-screen relative bg-[#FEFEFE] shadow m-8">
      <div className="flex justify-between items-center mx-5 pb-10 text-[#2A4E84]">
        <p className="text-[24px]">الفروع</p>
        <div
          onClick={() => handleMenuClick("إضافه فرع")}
          className="border cursor-pointer border-[#2A4E84] h-[56px] w-[214px] flex justify-center items-center mt-5 rounded-md"
        >
          <h1 className="text-[16px]">+ إضافة فرع</h1>
        </div>
      </div>

      {loading && <p className="text-center">جارٍ تحميل البيانات...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

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
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {branches.length > 0 ? (
              branches.map((branch) => (
                <tr
                  key={branch.id}
                  className="odd:bg-[#F6FAFF] even:bg-white text-center border-gray-200"
                >
                  <td className="px-6 py-4">📍</td>
                  <td className="px-6 py-4">{branch.name}</td>
                  <td className="px-6 py-4 text-lg">
                    <i className="fa-solid fa-eye me-1"></i>
                    <i
                      className="fa-regular fa-pen-to-square me-1"
                      onClick={() => {
                        handleMenuClick("تعديل الفرع", branch);
                        setBranchToUpdate(branch);
                        console.log("branch=============>", branch);
                      }}
                    ></i>

                    <i
                      className="fa-solid fa-trash-can text-[#CA152A] me-1 cursor-pointer"
                      onClick={() => deleteBranch(branch.id)}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">
                  لا توجد فروع متاحة
                </td>
              </tr>
            )} */}
            {children}
          </tbody>
        </table>
      </div>
      {activeContent === "تعديل الفرع" && (
        <EditBranch
          //    handleMenuClick={ ()=> setActiveContent() }
          branch={branchToUpdate}
        />
      )}
    </div>
  );
};

export default BranchTable;
