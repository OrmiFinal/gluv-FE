// LoginRegister.js

import React, { useContext, useState } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import { OpenModalContext } from '../../context/OpenModalProvider';
import DynamicColorButton from '../DynamicColorButton';
import LoginInput from './LoginInput';
import { AuthContext } from '../../context/AuthContext';
import SelectRegion from '../RecruitmentPage/SelectRegion';

function LoginRegister() {
  const { closeForm, openForm } = useContext(OpenModalContext);
  const { login, register } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    selectedRegion: '',
    error: '', // Add a field for error message
  });

  const { email, password, confirmPassword, nickname, selectedRegion, error } = formData;

  const onClose = () => {
    closeForm();
  };

  const gotoLogin = () => {
    openForm('loginForm');
  };

  const gotoPasswordChange = () => {
    openForm('passwordChangeForm');
  };

  const handleLogin = async () => {
    console.log(formData);
    login(formData);
  };

  const handleRegister = async () => {
    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      setFormData({
        ...formData,
        error: "Passwords don't match", // Set the error in state
      });
      return;
    }

    // Call your registration function
    register({ email, password, nickname, region: selectedRegion });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      error: '', // Clear the error when the user makes changes
    });
  };

  const handleRegionSelect = (region) => {
    setFormData({
      ...formData,
      selectedRegion: region,
    });
  };

  return (
    <ModalPortal>
      <PortalBg onClose={onClose}>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-96 z-50'>
            <h2 className='text-2xl font-bold mb-4 z-50'>로그인</h2>
            <div>
              <div className=''>{error}</div>
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
                label='닉네임'
                type='text'
                id='nickname'
                name='nickname'
                value={nickname}
                onChange={handleChange}
                placeholder='닉네임을 입력하세요.'
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

              <LoginInput
                label='비밀번호 확인'
                type='password'
                id='confirmPassword'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                placeholder='비밀번호를 확인하세요.'
              />

              <SelectRegion onRegionSelect={handleRegionSelect} />

              <div className='flex items-center justify-center'>
                <DynamicColorButton
                  color='black'
                  tabIndex={0}
                  text='회원가입'
                  btnstyle='py-1 px-1 w-full '
                  onClick={handleLogin}
                />
              </div>
            </div>
            <div className='flex justify-around'>
              <div
                role='button'
                tabIndex={0}
                className='text-sky-300 py-2 px-4 rounded-md transition duration-300'
                onClick={gotoLogin}
              >
                로그인
              </div>
              <div
                role='button'
                tabIndex={0}
                className='text-sky-300 py-2 px-4 rounded-md transition duration-300'
                onClick={gotoPasswordChange}
              >
                비밀번호찾기
              </div>
            </div>
          </div>
        </div>
      </PortalBg>
    </ModalPortal>
  );
}

export default LoginRegister;
