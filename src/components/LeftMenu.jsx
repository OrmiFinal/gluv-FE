import React from 'react'
import Margin from './Margin'
import DynamicColorButton from './DynamicColorButton'
import Contour from './ui/Contour'
import { Link } from 'react-router-dom'

function LeftMenu() {
  return (
    <div className='w-72 h-full flex justify-center items-center'>
    <div className='mt-4 w-64 h-[500px] mx-4 border-[1px]  rounded-md bg-gray-100 flex flex-col items-center text-center'>

      {/* 상단 여백 적용 */}
      <Margin top="5"   plustailwind="h-5" />

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

        <Margin top="5"   plustailwind="h-5" />
        <Link to="/users/profile">
        <DynamicColorButton color="blue" text="프로필수정" />
        </Link>
        <Margin top="5"   plustailwind="h-5" />
      </div>
      <Margin top="3" />
        {/* 수평 선 */}
        <Contour ></Contour>
   
      {/* 모집 정보 */}
      <div className='w-48 flex flex-col justify-start   h-32'>
        <div className='text-lg   font-semibold  self-start'>자기소개</div>
        <div className="self-start "> 
          자기 소개 api 받기
        </div>
      </div>
      <Contour ></Contour>

      <div className='w-48 flex flex-col justify-start'>
        <div className='text-lg   font-semibold'>활동</div>
        <div className="flex flex-col"> 
          <div className='flex justify-between'>
            <div className=''>받은 좋아요</div>
            <div className=''>6명</div>
          </div>
          <div className='flex justify-between'>
            <div  className=''>작성 게시글</div>
            <div  className=''>4명</div>
          </div>
       
        </div>
      </div>

      <Margin top="3" />
   
    </div>
  </div>
  )
}

export default LeftMenu