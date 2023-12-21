import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';  // axios 라이브러리 추가
import ModalPortal from '../ui/ModalPortal';
import PortalBgRight from '../ui/PortalBgRight';
import { OpenModalContext } from '../../context/OpenModalProvider';
import Contour from '../ui/Contour';
import Margin from '../Margin';
import { AuthContext } from '../../context/AuthContext';
import {jwtDecode} from 'jwt-decode';

const getDecodedToken = () => {

  const token = localStorage.getItem('user');

  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }
  return null;
};

const gotoAlertFormMain = () => {
  openForm('alertFormMain');
};


function ProfileForm() {
  const { openForm } = useContext(OpenModalContext);
  const { logout, isAuthenticated } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    profilePicture: '',
    nickname: '',
    email: '',
  });


 

  const gotoProfile =()=>{

  }

  useEffect(() => {
    const decodedToken = getDecodedToken();
    if (decodedToken) {
      const tokenObject = JSON.parse(localStorage.getItem('user'));
      const accessToken = tokenObject.access_token;
      const userId = decodedToken.user_id;
      
      axios.get(`http://127.0.0.1:8000/users/${userId}/profile`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(response => {
        const data = response.data;
        setProfileData({
          profilePicture: data.profilePicture,
          nickname: data.nickname,
          email: data.email,
        });
      })
      .catch(error => {
        console.error('Failed to fetch user profile:', error);
      });
    }
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
