import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import MyNavbar from '../Navbarr/Navbar';
import SmallNavbar from '../SmallNavbar/SmallNavbar';

export default function Layout() {
  const location = useLocation();

  // تحديد المسارات التي لا تريد إظهار الشريط العلوي فيها
  const hideNavbarRoutes = ['/Login', '/Signup' , '/Checkout' , '/ForgetPassword' ,'/Email' , '/Payment','/ReceivedMessage' , '/CMS']; // أضف أي مسار تريد إخفاء الـ Navbar فيه
  const hidemyNavbarRoutes = [ '/CMS'];
  const hidefooterRoutes = [ '/CMS'];
  return (
    <>
   

     {!hidemyNavbarRoutes.includes(location.pathname) && <MyNavbar /> }
      {!hideNavbarRoutes.includes(location.pathname) && <SmallNavbar /> }
      <Outlet />
      {!hidefooterRoutes.includes(location.pathname) && <Footer /> }
    </>
  );
}