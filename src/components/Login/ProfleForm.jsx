import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';  // axios 라이브러리 추가
import ModalPortal from '../ui/ModalPortal';
import PortalBgRight from '../ui/PortalBgRight';
import { OpenModalContext } from '../../context/OpenModalProvider';
import Contour from '../ui/Contour';
import Margin from '../Margin';
import { AuthContext } from '../../context/AuthContext';

const gotoAlertFormMain = () => {
  openForm('alertFormMain');
};


function ProfileForm() {
  const { openForm } = useContext(OpenModalContext);
  const { logout, isAuthenticated, getDecodedToken, getUserInfo } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    profile_image: '',
    nickname: '',
    email: '',
  });


  const gotoProfile =()=>{

  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // getUserInfo 함수를 호출하고 반환된 데이터를 받아옵니다.
        const data = await getUserInfo();
        setProfileData({
          profile_image: data.profile_image,
          nickname: data.nickname || '',
          email: data.email || '',
        });

      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };
  
    fetchData();

  }, []);

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
                <img src={profileData.profile_image}
                  alt="프로필 사진"
                  className="rounded-full  w-16 h-16 mb-4"
                />
                <Margin top="3" plustailwind="h-5"></Margin>
                <p className="mb-2 text-sm ">닉네임: {profileData.nickname}</p>
                <Margin top="3" plustailwind="h-2"></Margin>
                <p className=' text-sm'>Email: {profileData.email}</p>
              </div>
              <Margin top="3" plustailwind="h-5"></Margin>
              <Contour></Contour>
              <div className="modal-footer">
                <Margin top="3" plustailwind="h-3"></Margin>
                <div className='flex'>
                  <div
                    role="button"
                    tabIndex={0}
                    className='  text-sky-300 py-2 px-4 rounded-md transition duration-300'
                    onClick={gotoProfile}
                  >
                    내프로필
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
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

export default ProfileForm;
