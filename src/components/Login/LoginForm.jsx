// LoginForm.js

import React, { useContext, useState } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import { OpenModalContext } from '../../context/OpenModalProvider';
import DynamicColorButton from '../DynamicColorButton';
import LoginInput from './LoginInput'; // Import the new component
import { AuthContext } from '../../context/AuthContextProvider';

function LoginForm() {
  const { closeForm, openForm } = useContext(OpenModalContext);
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onClose = () => {
    closeForm();
  };

  const gotoRegister = () => {
    openForm('registerForm');
  };

  const handleLogin = async () => {
    try {
      const result = await login(formData);
      // 로그인이 성공하면 Modal을 닫습니다.
      if(result === true){
        closeForm();
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ModalPortal>
      <PortalBg onClose={onClose}>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-96 z-50'>
            <h2 className='text-2xl font-bold mb-4 z-50'>로그인</h2>
            <div>
              {/* Use the new LoginInput component */}
              <LoginInput
                label='이메일'
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='이메일을 입력하세요.'
              />

              <LoginInput
                label='비밀번호'
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='비밀번호를 입력하세요.'
              />

              <div className='flex items-center justify-center'>
                {/* Handle click event directly */}
                <DynamicColorButton
                  color='black'
                  tabIndex={0}
                  text='로그인'
                  btnstyle='py-1 px-1 w-full '
                  onClick={handleLogin}
                />
              </div>
            </div>
            <div
              role='button'
              tabIndex={0}
              className='text-sky-300 py-2 px-4 rounded-md transition duration-300'
              onClick={gotoRegister}
            >
              등록하기
            </div>
          </div>
        </div>
      </PortalBg>
    </ModalPortal>
  );
}

export default LoginForm;
