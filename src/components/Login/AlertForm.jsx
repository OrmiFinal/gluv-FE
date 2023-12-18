import React, { useState } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import { OpenModalContext } from '../../context/OpenModalProvider';

function AlertForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const { openForm } = useContext(OpenModalContext);




  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Add email validation logic here if needed
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Add password validation logic here if needed
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    // Add confirm password validation logic here if needed
    setConfirmPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic before submitting the form
    if (!email) {
      setEmailError('이메일을 입력하세요.');
      return;
    }
    // Add more email validation logic if needed

    if (!password) {
      setPasswordError('비밀번호를 입력하세요.');
      return;
    }
    // Add more password validation logic if needed

    if (password !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다.');
      return;
    }

    // Submit the form if all validations pass
    // Add your form submission logic here
  };

  return (
    <ModalPortal>
      <PortalBg>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-96'>
            <h2 className='text-2xl font-bold mb-4'>AlertForm</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-600 text-sm font-medium mb-2'
                >
                  AlertForm:
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
              <div className='flex items-center justify-center'>
                <button
                  type='submit'
                  className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
                >
                  회원가입
                </button>
              </div>
            </form>
          </div>
        </div>
      </PortalBg>
    </ModalPortal>
  );
}

export default AlertForm;
