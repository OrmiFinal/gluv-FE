import React from 'react';
import Contour from '../ui/Contour';
import { Link } from 'react-router-dom';

function TeamDetailLeftMenuPage() {
  return (
    <div className='w-72 h-full flex   mt-20 my-4'>
      <div className='  w-52 h-[230px] border-[1px] rounded-md bg-gray-100 flex flex-col p-4'>
        <div className='menu-item  cursor-pointer'>
          메뉴
         
        </div>
        <Contour />
        <Link to="/users/profile">
        <div className='menu-item cursor-pointer'>
          기본 설정
         
        </div>
        </Link>
        
        <Contour />
        <Link to="/teams/:id/member/">
        <div className='menu-item cursor-pointer'>
          구성원 관리
  
        </div>
        <Contour />
        </Link>
        <Link to="/teams/:id/apply/">
        <div className='menu-item  cursor-pointer'>
          신청인원 관리
         
        </div>
        </Link>
        <Contour />
        <Link to="/recruits">
        <div className='menu-item  cursor-pointer'>
          모임 삭제
    
        </div>
        </Link>
        <Contour />
      </div>
    </div>
  );
}

export default TeamDetailLeftMenuPage;
