import React, { useState } from 'react';
import axios from 'axios';
import loginImg from '../../../assets/imglogo.png';
import BACKEND_URL from '../../Config/Config';

const LogIn = ({ handleMenuClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/auth/login`, {
        email,
        password,
      });

      console.log('Login Successful:', response.data);
      const { token, user } = response.data;

      if (user.role === 'staff') {
        localStorage.setItem('token', token);
        handleMenuClick("الأقسام");
      } else {
        setError('ليس لديك صلاحية الوصول إلى الأقسام.');
      }
    } catch (err) {
      setError('فشل تسجيل الدخول، يرجى التحقق من البيانات');
    }
  };

  return (
    <div className='h-screen flex bg-[#FEFEFE] shadow m-8'>
      <div className='w-1/2'>
        <h1 className='text-[40px] text-center mt-[80px] font-semibold text-[#2A4E84]'>
          تسجيل الدخول
        </h1>
        <div className='mx-5'>
          <h1 className='text-[18px] text-[#254574] pt-28 mx-5'>
            الأيميل
          </h1>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full h-[56px] px-4 bg-[#F2F2F2] border-0 rounded-md mt-2 focus:outline-none focus:ring-0'
            placeholder='أدخل الأيميل'
          />
          <h1 className='text-[18px] text-[#254574] pt-8 mx-5'>
            كلمة المرور
          </h1>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full h-[56px] px-4 bg-[#F2F2F2] border-0 rounded-md mt-2 focus:outline-none focus:ring-0'
            placeholder='أدخل كلمة المرور'
          />
          {error && <p className='text-red-500 text-center mt-4'>{error}</p>}
          <button 
            onClick={handleLogin} 
            className='bg-[#2B4D81] w-full mt-14 h-14 rounded-md text-white text-lg font-medium'>
            تسجيل الدخول
          </button>
        </div>
      </div>
      <div className='w-1/2 bg-[#2A4E84] flex justify-center items-center'>
        <img className='w-[310px] h-[298px]' src={loginImg} alt='Login Illustration' />
      </div>
    </div>
  );
};

export default LogIn;
