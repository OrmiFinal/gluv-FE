import React from 'react';
import Contour from '../ui/Contour';

function TeamDetailLeftMenuPage() {
  return (
    <div className='w-72 h-full flex   mt-20 my-4'>
      <div className='  w-52 h-[230px] border-[1px] rounded-md bg-gray-100 flex flex-col p-4'>
        <div className='menu-item  cursor-pointer'>
          메뉴
          <Contour />
        </div>
        <div className='menu-item cursor-pointer'>
          기본 설정
          <Contour />
        </div>
        <div className='menu-item cursor-pointer'>
          구성원 관리
          <Contour />
        </div>
        <div className='menu-item  cursor-pointer'>
          신청인원 관리
          <Contour />
        </div>
        <div className='menu-item  cursor-pointer'>
          모임 삭제
          <Contour />
        </div>
      </div>
    </div>
  );
}

export default TeamDetailLeftMenuPage;
