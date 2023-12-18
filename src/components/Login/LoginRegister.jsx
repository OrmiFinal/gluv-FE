import React, { useState, useContext } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import { OpenModalContext } from '../../context/OpenModalProvider';

function LoginRegister({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [nicknameError, setNicknameError] = useState('');

  const { openForm } = useContext(OpenModalContext);

  const gotoRegister = () => {
    openForm('loginForm'); // Replace 'loginForm' with the desired form category
  };

  const gotoPasswordChangeForm = () => {
    openForm('passwordChangeForm'); // Replace 'passwordChangeForm' with the desired form category
  };

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

  const handlenicknameChange = (e) => {
    const value = e.target.value;
    setNickname(value);
    setNicknameError('');
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

    // Add more nickname validation logic if needed
    if (!nickname) {
      setNicknameError('닉네임을 입력하세요.');
      return;
    }

    // Submit the form if all validations pass
    // Add your form submission logic here
  };

  return (
    <ModalPortal>
      <PortalBg onClose={onClose}>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-96'>
            <h2 className='text-2xl font-bold mb-4'>회원가입</h2>
            <form onSubmit={handleSubmit}>
              {renderInput('이메일', 'email', email, handleEmailChange, emailError)}
              {renderInput('닉네임', 'nickname', nickname, handlenicknameChange, nicknameError)}
              {renderInput('비밀번호', 'password', password, handlePasswordChange, passwordError)}
              {renderInput('비밀번호 확인', 'confirmPassword', confirmPassword, handleConfirmPasswordChange, confirmPasswordError)}
              <div className='flex items-center justify-center'>
                <button
                  type='submit'
                  className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
                >
                  회원가입
                </button>
              </div>
            </form>
            <button
              className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
              onClick={gotoRegister}
            >
              로그인 가기
            </button>

            <button
              className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
              onClick={gotoPasswordChangeForm}
            >
              비밀번호 찾기
            </button>
          </div>
        </div>
      </PortalBg>
    </ModalPortal>
  );
}

// Helper function to render input fields with common styling
function renderInput(label, id, value, onChange, error) {
  return (
    <div className='mb-4'>
      <label htmlFor={id} className='block text-gray-600 text-sm font-medium mb-2'>
        {label}:
      </label>
      <input
        type={id.includes('password') ? 'password' : 'text'}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`border p-2 w-full rounded-md ${error ? 'border-red-500' : ''}`}
        placeholder={` ${label}을 입력하세요.`}
      />
      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  );
}

export default LoginRegister;
