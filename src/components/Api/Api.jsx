import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BACKEND_URL from '../Config/Config';

const Api = () => {
  const [branches, setBranches] = useState([]);
  const [error, setError] = useState(null);

  const fetchBranches = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/categories`);
      console.log("Data received:", response.data); // ✅ طباعة البيانات في الـ console
      setBranches(response.data.branches); // تخزين البيانات في state
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("حدث خطأ أثناء جلب البيانات");
    }
  };

  useEffect(() => {
    fetchBranches(); // تحميل البيانات عند فتح الصفحة
  }, []);

  return (
    <>
    {/*<div>
      <h1>Branches List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {branches.length > 0 ? (
          branches.map((branch) => (
            <li key={branch.id}>
              <h2>{branch.name}</h2>
              <p>Address: {branch.address}</p>
              <p>Phone: {branch.phone}</p>
              {branch.map_url && <a href={branch.map_url} target="_blank" rel="noopener noreferrer">View on Map</a>}
              <p>Created at: {new Date(branch.created_at).toLocaleString()}</p>
            </li>
          ))
        ) : (
          <p>جاري تحميل البيانات...</p>
        )}
      </ul>
        </div>*/}
        </>
  );
};

export default Api;
