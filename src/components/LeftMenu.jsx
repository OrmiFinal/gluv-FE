import React, { useState, useEffect } from "react";
import axios from "axios";
import Margin from './Margin'
import DynamicColorButton from './DynamicColorButton'
import Contour from './ui/Contour'
import { Link } from 'react-router-dom'

function LeftMenu() {
  const [userDataList, setUserDataList] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
          console.error("Access token not available");
          return null;
        }
        const response = await axios.get(
          "http://127.0.0.1:8000/users/4/profile/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUserDataList(response.data);

        return response.data;
      } catch (error) {
        console.error("Fetching data failed:", error.message);
        return null;
      }
    };
    fetchUserData();
  }, []);
  return (
    <div className='w-72 h-full flex justify-center items-center'>
    <div className='mt-4 w-64 h-full mx-4 border-[1px]  rounded-md bg-gray-100 flex flex-col items-center text-center'>

      {/* 상단 여백 적용 */}
      <Margin top="5"   plustailwind="h-5" />

      {/* 프로필 정보 */}
      <div>
        <div className='relative overflow-hidden rounded-full bg-black h-28 w-28'>
          <img
            src={userDataList.profile_image}
            alt='프로필 사진'
            className='프로필_이미지_스타일 rounded-full'
          />
        </div>
        <Margin top="5"   plustailwind="h-5" />
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
          {userDataList.profile_content}
        </div>
      </div>
      <Contour />
      <div className='w-48 h-32 flex flex-col justify-start'>
        <div className='text-lg font-semibold mt-2'>활동</div>
        <div className="flex flex-col mt-4"> 
          <div className='flex justify-between'>
            <div className=''>받은 좋아요</div>
            <div className=''>0명</div>
          </div>
          <div className='flex justify-between'>
            <div  className=''>작성 게시글</div>
            <div  className=''>0명</div>
          </div>
       
        </div>
      </div>

      <Margin top="3" />
   
    </div>
  </div>
  )
}

export default LeftMenu