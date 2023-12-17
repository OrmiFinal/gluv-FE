import React, { useState,useContext } from 'react';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';

import 'react-datepicker/dist/react-datepicker.css';

import useWindowSize from '../../hooks/useWindowSzie';
import Contour from '../ui/Contour';
import TitleComponent from './TitleComponent'; // Adjust the path as needed
import BulletinBoard from './BulletinBoard';
import { ModelContext } from '../../context/ModelContextProvider';


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
// SampleData.js
const jsonData = [
  {
    title: '게시물 1',
    content: '내용 1',
    author: '작성자 1',
    date: '2023-01-01',
    views: 100,
  },
  {
    title: '게시물 2',
    content: '내용 2',
    author: '작성자 2',
    date: '2023-02-01',
    views: 150,
  },
  {
    title: '게시물 3',
    content: '내용 3',
    author: '작성자 3',
    date: '2023-03-01',
    views: 200,
  },
  {
    title: '게시물 4',
    content: '내용 4',
    author: '작성자 4',
    date: '2023-04-01',
    views: 250,
  },
  {
    title: '게시물 5',
    content: '내용 5',
    author: '작성자 5',
    date: '2023-05-01',
    views: 300,
  },
  {
    title: '게시물 6',
    content: '내용 6',
    author: '작성자 6',
    date: '2023-06-01',
    views: 350,
  },
  {
    title: '게시물 7',
    content: '내용 7',
    author: '작성자 7',
    date: '2023-07-01',
    views: 400,
  },
  {
    title: '게시물 8',
    content: '내용 8',
    author: '작성자 8',
    date: '2023-08-01',
    views: 450,
  },
  {
    title: '게시물 9',
    content: '내용 9',
    author: '작성자 9',
    date: '2023-09-01',
    views: 500,
  },
  {
    title: '게시물 10',
    content: '내용 10',
    author: '작성자 10',
    date: '2023-10-01',
    views: 550,
  },
  {
    title: '게시물 1',
    content: '내용 1',
    author: '작성자 1',
    date: '2023-01-01',
    views: 100,
  },
  {
    title: '게시물 2',
    content: '내용 2',
    author: '작성자 2',
    date: '2023-02-01',
    views: 150,
  },
  {
    title: '게시물 3',
    content: '내용 3',
    author: '작성자 3',
    date: '2023-03-01',
    views: 200,
  },
  {
    title: '게시물 4',
    content: '내용 4',
    author: '작성자 4',
    date: '2023-04-01',
    views: 250,
  },
  {
    title: '게시물 5',
    content: '내용 5',
    author: '작성자 5',
    date: '2023-05-01',
    views: 300,
  },
  {
    title: '게시물 6',
    content: '내용 6',
    author: '작성자 6',
    date: '2023-06-01',
    views: 350,
  },
  {
    title: '게시물 7',
    content: '내용 7',
    author: '작성자 7',
    date: '2023-07-01',
    views: 400,
  },
  {
    title: '게시물 8',
    content: '내용 8',
    author: '작성자 8',
    date: '2023-08-01',
    views: 450,
  },
  {
    title: '게시물 9',
    content: '내용 9',
    author: '작성자 9',
    date: '2023-09-01',
    views: 500,
  },
  {
    title: '게시물 10',
    content: '내용 10',
    author: '작성자 10',
    date: '2023-10-01',
    views: 550,
  },
  // Repeat the pattern for more items if needed
];


  
  // 현재 화면 크기에 따라 적절한 클래스를 조합합니다.
  const combinedClasses = Object.entries(inputClasses)
    .map(([size, classValue]) => (screenSize === size ? classValue : ''))
    .join(' ');
    const { selectedCategory } = useContext(ModelContext);
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className='w-[65vw] bg-white rounded-md  shadow-md p-6'>
        {/* 상단 여백 추가 */}
        <div className='w-full'>
          <Margin top="3" />
          <div className='m-3'>
            {/* 모임 상세 내용 제목 */}
            <div className='text-2xl font-bold mb-4 '>{selectedCategory.category}</div>
            <Contour></Contour>

            <Margin top="2" plustailwind="h-3"/>
       
            <Margin top="2" />
            {/* 내용 영역 */}
            <div className='border p-2    flex rounded-md'>
            <TitleComponent title="전체" isFontBold={"fontBold"} plustailwind="text-lg font-bold " />
            <Margin left="4" />
            <TitleComponent title="잡담" isFontBold={"fontBold"} plustailwind="text-lg font-roboto " />
            <Margin left="3" />
            <TitleComponent title="소설" isFontBold={"fontBold"} plustailwind="text-lg font-roboto " />
            <Margin left="3" />
            <TitleComponent title="수필" isFontBold={"fontBold"} plustailwind="text-lg font-roboto " />
            <Margin left="3" />
            <TitleComponent title="시" isFontBold={"fontBold"}  plustailwind="text-lg font-roboto " />
           

            </div>
            <Margin top="2" plustailwind="h-4"/>
       
            <Contour></Contour>
            <Margin top="2" plustailwind="h-4"/>
            <BulletinBoard data={jsonData} />
            <Margin top="2" plustailwind="h-4"/>
           


            {/* 댓글 섹션 */}
            <Margin top="2" />
            <div>
              

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
