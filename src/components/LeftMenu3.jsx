import React, { useContext, useEffect, useState } from 'react';
import Margin from './Margin';
import DynamicColorButton from './DynamicColorButton';
import Contour from './ui/Contour';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextProvider';

function LeftMenu() {
  // 사용되는 페이지가 없습니다.

  const { getUserInfo } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({
    profilePicture: '',
    nickname: '',
    profile_content: '',
    profile_image:'',
  });



  useEffect(() => {
    console.log("나는 레프트 매뉴 3이다")
    const fetchData = async () => {
      try {
        const data = await getUserInfo();
        setProfileData({
          profile_image: data.profile_image || '',
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
      <div className='mt-4 w-64 h-[500px] mx-4 border-[1px]  rounded-md bg-gray-100 flex flex-col items-center text-center'>

        {/* 상단 여백 적용 */}
        <Margin top="5" plustailwind="h-5" />

        {/* 프로필 정보 */}
        <div>
          <div className='relative overflow-hidden rounded-full bg-black h-28 w-28'>
            <img
              src={userInfo?.profile_image || '프로필사진의_이미지_경로.jpg'}
              alt='프로필 사진'
              className='프로필_이미지_스타일 rounded-full'
            />
          </div>
          <Margin top="3" />

          <Margin top="5" plustailwind="h-5" />
          <Link to="/users/profile">
            <DynamicColorButton color="blue" text="프로필수정" />
          </Link>
          <Margin top="5" plustailwind="h-5" />
        </div>
        <Margin top="3" />
        {/* 수평 선 */}
        <Contour ></Contour>

        {/* 모집 정보 */}
        <div className='w-48 flex flex-col justify-start h-32'>
          <div className='text-lg font-semibold self-start'>자기소개</div>
          <div className="self-start">
            {userInfo?.content || '자기 소개 api 받기'}
          </div>
        </div>
        <Contour ></Contour>

        <div className='w-48 flex flex-col justify-start'>
          <div className='text-lg font-semibold'>활동</div>
          <div className="flex flex-col">
            <div className='flex justify-between'>
              <div className=''>작성 게시글</div>
              <div className=''>{userInfo?.written_posts || '0'}명</div>
            </div>
            <div className='flex justify-between'>
              <div className=''>작성한 댓글</div>
              <div className=''>{userInfo?.received_likes || '0'}명</div>
            </div>
          </div>
        </div>

        <Margin top="3" />

      </div>
    </div>
  );
}

export default LeftMenu;
