import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../Config/Config";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loadingCourse, setLoadingCourse] = useState(false);
  const [errorCourse, setErrorCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoadingCourse(true);
    try {
      const token = localStorage.getItem("token"); // جلب التوكين
      const response = await axios.get(`${BACKEND_URL}/courses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(response.data.courses);
    } catch (err) {
      setErrorCourse("حدث خطأ أثناء جلب البيانات");
    }
    setLoadingCourse(false);
  };

  const deleteCourse = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BACKEND_URL}/courses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(courses.filter((course) => course.id !== id));
    } catch (err) {
      console.error("فشل حذف الكورس:", err);
    }
  };

  const updateCourse = async (id, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${BACKEND_URL}/courses/${id}`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // تحديث الحالة بعد نجاح العملية
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.id === id ? response.data.course : course
        )
      );
    } catch (err) {
      console.error("فشل تحديث الكورس:", err);
    }
  };

  return { courses, loadingCourse, errorCourse, deleteCourse, updateCourse };
};

export default useCourses;
