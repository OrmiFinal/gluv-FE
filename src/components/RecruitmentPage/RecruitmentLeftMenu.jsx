import React from 'react'
import DynamicColorButton from '../DynamicColorButton';
import Margin from '../Margin';
function lefrMenu() {
  return (
      
    <div className='w-72 h-full flex justify-center items-center'>
    <div className='mt-12 w-64 h-[500px] mx-4 border-[1px] border-black flex flex-col items-center text-center'>

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
        <div>독서 토론 모임</div>
        <div className='text-sm'>모임명</div>
      </div>




      {/* 수평 선 */}
      <div className='w-full h-[1px] mt-2 bg-black'></div>

      {/* 모집 정보 */}
      <div className='w-48'>
        <div className='text-lg'>모집명</div>
        <div className="flex flex-col"> 
          <div className='flex justify-between'>
            <div>최대인원</div>
            <div>6명</div>
          </div>
          <div className='flex justify-between'>
            <div>현재인원</div>
            <div>4명</div>
          </div>
          <div className='flex justify-between'>
            <div>신청인원</div>
            <div>1명</div>
          </div>
        </div>
        <div>독서 토론 모임</div>
      </div>

      {/* 리더 정보 */}
      <Margin top="2" />
      <div>내역할: 리더</div>
      <Margin top="1" />

      {/* 버튼 */}
      <DynamicColorButton color="blue" text="모임정보수정" btnstyle=" py-2 px-4" />
      <Margin top="1" />
      <DynamicColorButton color="red" text="탈퇴하기" btnstyle=" py-2 px-4" />
    </div>
  </div>
  )
}

export default lefrMenu