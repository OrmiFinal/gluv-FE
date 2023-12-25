// LoginRegister.js

import React, { useContext, useState } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import { OpenModalContext } from '../../context/OpenModalProvider';
import DynamicColorButton from '../DynamicColorButton';
import LoginInput from './LoginInput';
import SelectButton from '../../components/ui/SelectButton';
import { AuthContext } from '../../context/AuthContextProvider';

function LoginRegister() {
  const { closeForm, openForm } = useContext(OpenModalContext);
  const { registerUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    selectedRegion: '',
    error: '',
  });

  const { email, password, confirmPassword, nickname, selectedRegion, error } = formData;

  const onClose = () => {
    closeForm();
  };

  const gotoLogin = () => {
    openForm('loginForm');
  };

  const gotoPassWordChange =()=>{
    openForm('passwordChangeForm');
  }
  const handleLogin = async () => {

    await registerUser(formData);
  };

  const handleRegister = async () => {
    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      setFormData({
        ...formData,
        error: "Passwords don't match",
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
      error: '',
    });
  };

  const handleRegionSelect = (region) => {
    setFormData({
      ...formData,
      selectedRegion: region,
    });
  };

  const regions = [
    '서울', '경기', '충남', '충북' ,'강원' ,'경남', '경북', '제주', '전남' ,'전북'
  ];

  return (
    <ModalPortal>
      <PortalBg onClose={onClose}>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-96 z-50'>
            <h2 className='text-2xl font-bold mb-4 z-50'>회원가입</h2>
            <div>
              <div className=''>{error}</div>

              <SelectButton
                btnTitle={selectedRegion || '지역 선택'}
                btnoptions={regions}
                onOptionSelect={handleRegionSelect}
                title="지역 선택"
                size="w-[30vw]"
              />

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

              
            </div>
            <div className='flex items-center justify-center'>
              <DynamicColorButton
                color='black'
                tabIndex={0}
                text='회원가입'
                btnstyle='py-1 px-1 w-full '
                onClick={handleLogin}
              />
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
                onClick={gotoPassWordChange}
              >
                비밀번호 찾기
              </div>
            </div>
          </div>
        </div>
      </PortalBg>
    </ModalPortal>
  );
}

export default LoginRegister;
