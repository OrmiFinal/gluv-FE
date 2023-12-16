import React, { useState } from 'react';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';

import 'react-datepicker/dist/react-datepicker.css';

import useWindowSize from '../../hooks/useWindowSzie';
import Contour from '../ui/Contour';


function RecruitmentContent() {
  // useWindowSize 훅을 이용하여 화면 크기 정보를 가져옵니다.
  const { screenSize } = useWindowSize();

  // 화면 크기에 따라 입력창의 너비를 설정하는 클래스들을 정의합니다.
  const inputClasses = {
    xl: 'w-2/3',
    xxl: 'w-2/3',
    lg: 'w-1/2',
    md: 'w-2/3',
    sm: 'w-1/2',
  };

  // 현재 화면 크기에 따라 적절한 클래스를 조합합니다.
  const combinedClasses = Object.entries(inputClasses)
    .map(([size, classValue]) => (screenSize === size ? classValue : ''))
    .join(' ');

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className='w-[80vw] bg-white rounded-md shadow-md p-6'>
        {/* 상단 여백 추가 */}
        <Margin top="1" />

        <div className='w-full'>
          <Margin top="3" />
          <div className='m-3'>
            {/* 모임 상세 내용 제목 */}
            <div className='text-2xl font-bold mb-4  border-black'>모임 상세 내용</div>
            <Contour></Contour>

            <Margin top="2" />
            {/* 내용 영역 */}
            <div className='border p-2 w-full h-[350px] overflow-scroll rounded-md'>
            <div className='text-2xl font-bold mb-4  border-black'>모임 소개</div>

            </div>
            <Margin top="2" />

            {/* 댓글 섹션 */}
            <div>
              <Margin top="4" />

              {/* 댓글 입력창과 버튼 */}
              <div className={`flex items-center text-center ${screenSize === 'sm' ? 'justify-start' : 'justify-center'}`}>
                {/* 더미 박스 */}
                <div className='w-20 h-10 border border-black'></div>
                <Margin left="2" />
                {/* 검색 입력창 */}
                <input
                  className={`border p-2 rounded-md ${combinedClasses}`}
                  placeholder='검색 입력...'
                />
                {/* 검색 버튼 */}
                <DynamicColorButton
                  color="blue"
                  text="검색"
                  btnstyle="py-2 px-2 ml-2"
                />
              </div>
            </div>

            <div className='flex justify-between items-center'>
              {/* 필요에 따라 내용을 추가합니다. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentContent;
