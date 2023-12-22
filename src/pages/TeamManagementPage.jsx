import React from 'react';
import DynamicColorButton from '../components/DynamicColorButton';
import Margin from '../components/Margin';
import BulletinBoard from '../components/PostListPage/BulletinBoard';
import Contour from '../components/ui/Contour';
import TitleComponent from '../components/PostListPage/TitleComponent';
import TeamBox from '../components/TeamBox';
import { Link } from 'react-router-dom';

function TeamManagementPage() {
  const profileDataList = [
    {
      profilePicture: '프로필사진의_이미지_경로1.jpg',
      nickname: '둥그런 닉네임 1',
      description: '프로필에 대한 설명 또는 추가 정보 1',
    },
    {
      profilePicture: '프로필사진의_이미지_경로2.jpg',
      nickname: '둥그런 닉네임 2',
      description: '프로필에 대한 설명 또는 추가 정보 2',
    },
    {
      profilePicture: '프로필사진의_이미지_경로2.jpg',
      nickname: '둥그런 닉네임 2',
      description: '프로필에 대한 설명 또는 추가 정보 2',
    },
    {
      profilePicture: '프로필사진의_이미지_경로2.jpg',
      nickname: '둥그런 닉네임 2',
      description: '프로필에 대한 설명 또는 추가 정보 2',
    },
    {
      profilePicture: '프로필사진의_이미지_경로2.jpg',
      nickname: '둥그런 닉네임 2',
      description: '프로필에 대한 설명 또는 추가 정보 2',
    },
    // 추가 프로필 데이터
  ];

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className='w-[65vw] bg-white rounded-md shadow-md p-6 '>
        <div className='w-full'>
          <Margin top="3" />
          <div className='m-3'>
            <div className='flex'>
              <TitleComponent title="활동중인 모집" isFontBold={"fontBold"} plustailwind="text-sm  " />
              <Margin left="4" plustailwind="w-2"/>
              <Link to="/teams/1/members/">
              <TitleComponent title="신청중인 모임" isFontBold={"fontBold"} plustailwind="text-sm  " />
              </Link>
            </div>
            <Contour />
            <Margin top="2" plustailwind="h-3" />
            <Margin top="3" plustailwind="h-3" />
            <div className='border p-2 flex flex-col rounded-md'>
              <div className='m-8 ml-6'>
              {profileDataList.map((profileData, index) => (
                <Link to="/teams/1">
                <div key={index} >
                  <TeamBox profileData={profileData} />
                  <Margin top="3" plustailwind="h-3" />
                </div>
                </Link>
              ))}
              </div>
            </div>
            <Margin top="2" plustailwind="h-4" />
            <Contour />
            <Margin top="2" />
            <div className='flex justify-center items-center'>
              1,2,3,4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamManagementPage;
