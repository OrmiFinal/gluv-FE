import React from 'react';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';
import Contour from '../ui/Contour';


function TeamLeftMenu() {
  return (
    <div className='w-72 h-full flex justify-center items-center'>
<div className='mt-4 w-64 h-[500px] mx-4 bg-gray-100 flex flex-col items-center text-center rounded-lg '>
        {/* 상단 여백 적용 */}
        <Margin top="5" />

        {/* 프로필 정보 */}
        <div>
          <div className='relative overflow-hidden rounded-full bg-black h-28 w-28'>
            <img
              src='프로필사진의_이미지_경로.jpg'
              alt='프로필 사진'
              className='프로필_이미지_스타일 rounded-full'
            />
            asdasd
          </div>
          <Margin top="3" />
          <div className=' font-bold'>독서 토론 모임</div>
          <div className='  text-sm'>모임명</div>
          
        </div>
        <Margin bottom="1"/>
        {/* 수평 선 */}
        <Contour></Contour>
        <Margin top="2" />
        {/* 모집 정보 */}
        <div className='w-48'>
          <div className='text-lg font-bold'>모집명</div>
          <div className="flex flex-col"> 
            <div className='flex justify-between'>
              <div className=''>최대인원</div>
              <div className=''>6명</div>
            </div>
            <div className='flex justify-between'>
              <div  className=''>현재인원</div>
              <div  className=''>4명</div>
            </div>
            <div className='flex justify-between'>
              <div className=''>신청인원</div>
              <div className=''>1명</div>
            </div>
          </div>
        </div>

        {/* 리더 정보 */}
        <Margin top="2" />
        <div className='    '>내역할: 리더</div>
        <Margin top="1" />

        {/* 버튼 */}
        <DynamicColorButton color="blue" text="모임정보수정" />
        <Margin top="1" />
        <DynamicColorButton color="red" text="탈퇴하기" />
      </div>
    </div>
  );
}

export default TeamLeftMenu;
