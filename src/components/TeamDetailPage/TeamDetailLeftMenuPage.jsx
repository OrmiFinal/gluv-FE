import React from 'react';

import Contour from '../ui/Contour';
import { Link } from 'react-router-dom';

function TeamDetailLeftMenuPage() {
  return (
    <div className='w-72 h-full flex   mt-20 my-4'>
      <div className='  w-52 h-[190px] border-[1px] rounded-md bg-gray-100 flex flex-col p-4'>
        <Link to="/teams/:id/edit/">
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
        {/* <Link to="/teams/:id/delete"> */}
        {/* 확인페이지를 만들어서 Link하거나, 공수가 안된다면 여기서 바로 삭제하겠습니다. */}
          <div className='menu-item  cursor-pointer'>
            모임 삭제
          </div>
        {/* </Link> */}
        <Contour />
      </div>
    </div>
  );
}

export default TeamDetailLeftMenuPage;
