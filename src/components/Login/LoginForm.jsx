import React, { useContext } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import { OpenModalContext } from '../../context/OpenModalProvider';
import DynamicColorButton from '../DynamicColorButton'
function LoginForm() {
  const { closeForm, openForm } = useContext(OpenModalContext);

  const onClose = () => {
    // 로그인 성공 시 로직 추가

    closeForm(); // Replace "loginForm" with the desired form category
  };

  const gotoRegister = () => {
    openForm("registerForm"); // Replace "loginForm" with the desired form category
  };

  return (
    <ModalPortal>
      <PortalBg onClose={onClose}>
        <div className='flex items-center justify-center '>
          <div className='bg-white p-6 rounded-md w-96 z-50'>
            <h2 className='text-2xl font-bold mb-4 z-50'>로그인</h2>
            <form>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='block text-gray-600 text-sm font-medium mb-2 z-50'
                >
                  이메일:
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='border p-2 w-full rounded-md z-50'
                  placeholder='이메일을 입력하세요.'
                />
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
                  className='border p-2 w-full rounded-md'
                  placeholder='비밀번호를 입력하세요.'
                />
              </div>
              <div className='flex items-center justify-center'>
              
              <DynamicColorButton
                color="black"
                tabIndex={0} 
                text="로그인"
                btnstyle="py-1 px-1 w-full "
                onClick={onClose}
              />

              </div>
            </form>
            <div
            role="button"
            tabIndex={0}  // 키보드 접근성을 위해 tabIndex 속성을 추가합니다.
            className='  text-sky-300 py-2 px-4 rounded-md transition duration-300'
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
