import react from "react";
import useInstructors from "../../hooks/useInstructors";
const InstructorsTable = ({ handleMenuClick }) => {
  const {
    instructors,
    loadingInstructor,
    errorInstructor,
    deleteInstructor,
    updateInstructor,
  } = useInstructors();

  return (
    <div className="h-screen relative bg-[#FEFEFE] shadow m-8">
      <div className="flex justify-between items-center mx-5 pb-10 text-[#2A4E84]">
        <p className="text-[24px]">المدربون</p>
        <div
          onClick={() => handleMenuClick("إضافة مدرب")}
          className="border cursor-pointer border-[#2A4E84] h-[56px] w-[214px] flex justify-center items-center mt-5 rounded-md"
        >
          <h1 className="text-[16px] ">+ إضافة مدرب</h1>
        </div>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg mx-6">
        <table className="w-full text-center  rtl:text-right text-gray-500 text-[18px] mb-10">
          <thead className="text-[18px] text-gray-700 uppercase text-center  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                الصورة
              </th>
              <th scope="col" className="px-6 py-3">
                الاسم
              </th>
              <th scope="col" className="px-6 py-3">
                القسم
              </th>
              <th scope="col" className="px-6 py-3">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(instructors) && instructors.length > 0 ? (
              instructors.map((instructor) => (
                <tr
                  key={instructor.id}
                  className="odd:bg-[#F6FAFF]  even:bg-white  text-center border-gray-200"
                >
                  <td className="px-6 py-4">{instructor.name_en}</td>
                  <td className="px-6 py-4"> {instructor.expertise_e}n</td>
                  <td className="px-6 py-4">{instructor.expertise_en}</td>
                  <td className="px-6 py-4 text-lg">
                    <i className="fa-solid fa-eye me-1"></i>
                    {/* <i
                      className="fa-regular fa-pen-to-square me-1"
                      onClick={() => handleMenuClick("تعديل بيانات المدرب")}
                    ></i> */}
                    <i
                      className="fa-solid fa-trash-can text-[#CA152A] me-1"
                      onClick={() => deleteInstructor(instructor.id)}
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
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default InstructorsTable;
