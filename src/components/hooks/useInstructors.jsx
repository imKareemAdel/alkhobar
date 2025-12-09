import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../Config/Config";

const useInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loadingInstructor, setLoadingInstructor] = useState(false);
  const [errorInstructor, setErrorInstructor] = useState(null);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    setLoadingInstructor(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BACKEND_URL}/instructors`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInstructors(response.data.instructors);
    } catch (err) {
      setErrorInstructor("حدث خطأ أثناء جلب البيانات");
    }
    setLoadingInstructor(false);
  };

  const deleteInstructor = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BACKEND_URL}/instructors/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInstructors(instructors.filter((instructor) => instructor.id !== id));
    } catch (err) {
      console.error("فشل حذف المدرب:", err);
    }
  };

  const updateInstructor = async (id, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${BACKEND_URL}/instructors/${id}`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setInstructors((prevInstructors) =>
        prevInstructors.map((instructor) =>
          instructor.id === id ? response.data.instructor : instructor
        )
      );
    } catch (err) {
      console.error("فشل تحديث بيانات المدرب:", err);
    }
  };

  const addInstructor = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BACKEND_URL}/instructors`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("response.data.instructors", response);
      // setInstructors(...instructors, response.data);
    } catch (err) {
      console.error("فشل تحديث الفئة:", err);
    }
  };

  return {
    instructors,
    loadingInstructor,
    errorInstructor,
    deleteInstructor,
    updateInstructor,
    addInstructor,
  };
};

export default useInstructors;
