import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/scrolltop/scrollTop"; // استيراد ScrollToTop
import Courses from "./components/CategoriesPage/CategoriesPage";
import OurBranches from "./components/OurBranches/OurBranches";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import NotFound from "./components/NotFound/NotFound";
import PreparatoryCourses from "./components/PreparatoryCourses/PreparatoryCourses";
import PageMostPopular from "./components/PageMostPopular/PageMostPopular";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Coursedetails from "./components/Coursedetails/Coursedetails";
import Checkout from "./components/Checkout/Checkout";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Terms from "./components/Terms/Terms";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Email from "./components/Email/Email";
import Payment from "./components/Payment/Payment";
import ReceivedMessage from "./components/ReceivedMessage/ReceivedMessage";
import CMS from "./components/CMS/CMS";
import Api from "./components/Api/Api";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Categories", element: <Courses /> },
      { path: "OurBranches", element: <OurBranches /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "ContactUs", element: <ContactUs /> },
      { path: "*", element: <NotFound /> },
      { path: "PreparatoryCourses", element: <PreparatoryCourses /> },
      { path: "PageMostPopular", element: <PageMostPopular /> },
      { path: "Signup", element: <Signup /> },
      { path: "Login", element: <Login /> },
      { path: "Coursedetails", element: <Coursedetails /> },
      { path: "Checkout", element: <Checkout /> },
      { path: "PrivacyPolicy", element: <PrivacyPolicy /> },
      { path: "Terms", element: <Terms /> },
      { path: "ForgetPassword", element: <ForgetPassword /> },
      { path: "Email", element: <Email /> },
      { path: "Payment", element: <Payment /> },
      { path: "ReceivedMessage", element: <ReceivedMessage /> },
      { path: "CMS", element: <CMS /> },
      { path: "Api", element: <Api /> },
    ],
  },
]);

function App() {
  return (
    <>
      {/* لضمان التمرير للأعلى عند كل تغيير للصفحة */}
      <RouterProvider router={router}>
        <ScrollToTop />{" "}
      </RouterProvider>
    </>
  );
}

export default App;
