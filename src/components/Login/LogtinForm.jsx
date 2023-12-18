import React from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';

function LogtinForm({onClose}) {
  return (
    <ModalPortal>
      <PortalBg onClose={onClose}>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-96'>
            <h2 className='text-2xl font-bold mb-4'>로그인</h2>
            <form>
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
                  className='border p-2 w-full rounded-md'
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
                <button
                  type='submit'
                  className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300'
                >
                  로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      </PortalBg>
    </ModalPortal>
  );
}

export default LogtinForm;
