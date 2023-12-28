import React, { useState, useContext } from 'react';

import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import { OpenModalContext } from '../../context/OpenModalProvider';
import DynamicColorButton from '../DynamicColorButton';
function PasswordChangeForm({ onClose }) {
  const { openForm } = useContext(OpenModalContext);

  const gotoLoginForm = () => {
    openForm("loginForm");
  };

  const gotoRegisterForm = () => {
    openForm("registerForm");
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   

    if (!password) {
      setPasswordError('비밀번호를 입력하세요.');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // Add your form submission logic here
  };

  return (
    <ModalPortal>
      <PortalBg onClose={onClose}>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-96'>
            <h2 className='text-2xl font-bold mb-4'>비밀번호 찾기</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-600 text-sm font-medium mb-2'
                >
                  이메일:
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={handleEmailChange}
                  className={`border p-2 w-full rounded-md ${
                    emailError ? 'border-red-500' : ''
                  }`}
                  placeholder='이메일을 입력하세요.'
                />
                {emailError && (
                  <p className='text-red-500 text-sm mt-1'>{emailError}</p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='password'
                  className='block text-gray-600 text-sm font-medium mb-2'
                >
                  비밀번호:
                </label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={password}
                  onChange={handlePasswordChange}
                  className={`border p-2 w-full rounded-md ${
                    passwordError ? 'border-red-500' : ''
                  }`}
                  placeholder='비밀번호를 입력하세요.'
                />
                {passwordError && (
                  <p className='text-red-500 text-sm mt-1'>{passwordError}</p>
                )}
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='confirmPassword'
                  className='block text-gray-600 text-sm font-medium mb-2'
                >
                  비밀번호 확인:
                </label>
                <input
                  type='password'
                  id='confirmPassword'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className={`border p-2 w-full rounded-md ${
                    confirmPasswordError ? 'border-red-500' : ''
                  }`}
                  placeholder='비밀번호를 다시 입력하세요.'
                />
                {confirmPasswordError && (
                  <p className='text-red-500 text-sm mt-1'>
                    {confirmPasswordError}
                  </p>
                )}
              </div>
              <div className='flex items-center justify-center space-x-4'>
              <DynamicColorButton
                color="black"
                tabIndex={0} 
                text="비밀번호 찾기"
                btnstyle="py-1 px-1 w-full "
           
              />

             
              </div>
            </form>

            <div className='flex  justify-around'>

            <div
            role="button"
            tabIndex={0}  // 키보드 접근성을 위해 tabIndex 속성을 추가합니다.
            className='  text-sky-300 py-2 px-4 rounded-md transition duration-300'
            onClick={gotoLoginForm}
          >
             로그인
          </div>
               

                <div
            role="button"
            tabIndex={0}  // 키보드 접근성을 위해 tabIndex 속성을 추가합니다.
            className='  text-sky-300 py-2 px-4 rounded-md transition duration-300'
            onClick={gotoRegisterForm}
          >
              회원가입 돌아가기

</div>
            </div>
          </div>
        </div>
      </PortalBg>
    </ModalPortal>
  );
}

export default PasswordChangeForm;
