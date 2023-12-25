import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Margin from './Margin'
import DynamicColorButton from './DynamicColorButton'
import Contour from './ui/Contour'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContextProvider.jsx';

function LeftMenu() {
  // 사용되는 페이지 = /users/myteams/, /recruits/
  

  const { getUserInfo } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    profilePicture: '',
    nickname: '',
    profile_content: '',
    profile_image:'',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserInfo();
        setProfileData({
          profile_image: data.profile_image || '/media/default_image.png',
          nickname: data.nickname || '',
          email: data.email || '',
          profile_content: data.profile_content || "안녕하세요.",
        });

      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchData();
  } ,[]);


  return (
    <div className='w-72 h-full flex justify-center items-center'>
    <div className='mt-4 w-64 h-full mx-4 border-[1px]  rounded-md bg-gray-100 flex flex-col items-center text-center'>

      {/* 상단 여백 적용 */}
      <Margin top="5"   plustailwind="h-5" />

      {/* 프로필 정보 */}
      <div>
        <div className='relative overflow-hidden rounded-full h-28 w-28'>
          <img
            src={profileData.profile_image}
            alt='프로필 사진'
            className='프로필_이미지_스타일 rounded-full'
          />
        </div>
        <Margin top="5"   plustailwind="h-5" />
        <div>
          <p>{profileData.nickname}</p>
        </div>
        
        <Link to="/users/edit/">
          <DynamicColorButton color="blue" text="프로필수정" />
        </Link>
        <Margin top="5"   plustailwind="h-5" />
      </div>
        <Contour />
   
      {/* 모집 정보 */}
      <div className='w-48 flex flex-col justify-start   h-56'>
        <div className='text-lg   font-semibold  self-start'>자기소개</div>
        <div className="self-start "> 
          {profileData.profile_content}
        </div>
      </div>
      <Contour />
      <div className='w-48 h-32 flex flex-col justify-start'>
        <div className='text-lg font-semibold mt-2'>활동</div>
        <div className="flex-row flex-col mt-4"> 
          <div className='flex justify-between'>
            <div  className=''>작성 게시글</div>
            <div  className=''>{profileData?.getUsersPostCnt || '0'}명</div>
          </div>
          <div className='flex justify-between'>
            <div className=''>받은 좋아요</div>
            <div className=''>{profileData?.getUsersCommentCnt || '0'}명</div>
          </div>
       
        </div>
      </div>

      <Margin top="3" />
   
    </div>
  </div>
  )
}

export default LeftMenu