import { useEffect, useState } from "react";
import axios from "axios";
import BACKEND_URL from "../Config/Config";

const useBranches = () => {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBranches();
  }, []);

  console.log("from the use branches ===>", branches);

  const fetchBranches = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token"); // جلب التوكين
      const response = await axios.get(`${BACKEND_URL}/branches`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBranches(response.data.branches);
    } catch (err) {
      setError("حدث خطأ أثناء جلب البيانات");
    }
    setLoading(false);
  };

  const addBranchRequest = async (branchData) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token"); // جلب التوكين
      const response = await axios.post(`${BACKEND_URL}/branches`, branchData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      setBranches((prev) => [...prev, response.data.category]);

      return response.data;
    } catch (err) {
      setError(err.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  const deleteBranch = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BACKEND_URL}/branches/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBranches(branches.filter((branch) => branch.id !== id));
    } catch (err) {
      console.error("فشل حذف الفرع:", err);
    }
  };

  const updateBranch = async (id, updatedData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${BACKEND_URL}/branches/${id}`,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Update state after successful API call
      setBranches((prevBranches) =>
        prevBranches.map((branch) =>
          branch.id === id ? response.data.branch : branch
        )
      );
    } catch (err) {
      console.error("فشل تحديث الفرع:", err);
    }
  };

  return {
    branches,
    loading,
    error,
    deleteBranch,
    updateBranch,
    addBranchRequest,
    fetchBranches,
  };
};

export default useBranches;
