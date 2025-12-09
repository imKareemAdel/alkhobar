import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../Config/Config";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState({});

  const [loadingCategory, setLoadingCategory] = useState(false);
  const [errorCategory, setErrorCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);
  console.log("categories from useCategories==>", categories);
  console.log("categories from newCategory==>", newCategory);

  const fetchCategories = async () => {
    setLoadingCategory(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BACKEND_URL}/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(response.data.categories);
    } catch (err) {
      setErrorCategory("حدث خطأ أثناء جلب البيانات");
    }
    setLoadingCategory(false);
  };

  const deleteCategory = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BACKEND_URL}/categories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(categories.filter((category) => category.id !== id));
    } catch (err) {
      console.error("فشل حذف الفئة:", err);
    }
  };

  const updateCategory = async (id, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${BACKEND_URL}/categories/${id}`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.id === id ? response.data.category : category
        )
      );
    } catch (err) {
      console.error("فشل تحديث الفئة:", err);
    }
  };

  const addCategory = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${BACKEND_URL}/categories`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories((prev) => [...prev, response.data.category]);
      setNewCategory(response.data.category);
      console.log("response.data.category", response.data.category);
    } catch (err) {
      console.error("فشل تحديث الفئة:", err);
    }
  };
  return {
    categories,
    loadingCategory,
    errorCategory,
    deleteCategory,
    updateCategory,
    addCategory,
    fetchCategories,
    newCategory,
  };
};

export default useCategories;
