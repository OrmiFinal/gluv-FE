import React, { useContext } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBgRight from '../ui/PortalBgRight';
import { OpenModalContext } from '../../context/OpenModalProvider';
import Contour from '../ui/Contour'
import Margin from '../Margin';
import { AuthContext } from '../../context/AuthContext';
function ProfleForm() {
  const {  openForm } = useContext(OpenModalContext);
  const {  logout } = useContext(AuthContext);


  // 가상의 프로필 데이터 (이 부분은 실제 데이터로 대체해야 합니다.)
  const profileData = {
    profilePicture: '프로필 사진 URL',
    nickname: '둥그런 닉네임',
    email: 'example@example.com',
  };

  const gotoAlertFormMain = () => {
    openForm('alertFormMain');
  };

  return (
    <ModalPortal>
      <PortalBgRight>
        <div>
        <div className='bg-white p-6   w-72 z-50'>
            <div className="flex flex-col justify-center items-center">
              <div className="modal-header">
                <h3 className="text-lg font-bold">내 프로필</h3>
              
              </div>
              <Margin top="3" plustailwind="h-5"></Margin>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={profileData.profilePicture}
                  alt="프로필 사진"
                  className="rounded-full  w-16 h-16 mb-4"
                />
                 <Margin top="3" plustailwind="h-5"></Margin>
                <p className="mb-2 text-sm font-mono">닉네임: {profileData.nickname}</p>
                <Margin top="3" plustailwind="h-2"></Margin>
                <p className='font-mono text-sm'>Email: {profileData.email}</p>
              </div>
              <Margin top="3" plustailwind="h-5"></Margin>
              <Contour></Contour>
              <div className="modal-footer">
              <Margin top="3" plustailwind="h-3"></Margin>
              <div className='flex'>

              <div
            role="button"
            tabIndex={0}  // 키보드 접근성을 위해 tabIndex 속성을 추가합니다.
            className='  text-sky-300 py-2 px-4 rounded-md transition duration-300'
          
          >
              내프로필

          </div>
          <div
            role="button"
            tabIndex={0}  // 키보드 접근성을 위해 tabIndex 속성을 추가합니다.
            className='  text-sky-300 py-2 px-4 rounded-md transition duration-300'
            onClick={logout}
          >
              로그아웃

        </div>

              </div>
              </div>
            </div>
          </div>
        </div>
      </PortalBgRight>
    </ModalPortal>
  );
}

export default ProfleForm;
