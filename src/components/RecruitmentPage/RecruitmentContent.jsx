import React, { useState } from 'react';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CommentList from '../CommentList';
import useWindowSize from '../../hooks/useWindowSzie';


function RecruitmentContent()  {
  const { screenSize } = useWindowSize();

console.log(screenSize)
  const [comments, setComments] = useState([
    { user: '@사용자ㄷㄷㄷㄷ', content: 'ㄴㄴㄴㄴ 님 안녕하세요' },
    // 다른 댓글들도 유사한 구조로 추가
  ]);
  const inputClasses = {
    xl: 'w-2/3',
    xxl: 'w-2/3',
    lg: 'w-1/2',
    md: 'w-2/3',
    sm: 'w-1/2',
  };


  const combinedClasses = Object.entries(inputClasses)
  .map(([size, classValue]) => screenSize == size ? classValue : '')
  .join(' ');

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className='w-[80vw] bg-white rounded-md shadow-md p-6'>
        <Margin top="1" />
        <div className='w-full'>
          <Margin top="3" />
          <div className='m-3'>
            <div className='text-2xl font-bold mb-4 border-b border-black '>공지 게시판</div>

            <Margin top="2" />
            <div className='border p-2 w-full h-[350px] overflow-scroll rounded-md'></div>
            <Margin top="2" />
           

            {/* 댓글 섹션 */}
            <div>
              <Margin top="4" />
      

              {/* 댓글 입력창과 버튼 */}
              <div className={` ${screenSize =="sm"?'justify-start':'justify-center' }  flex items-center text-center`}>
              <div className={`w-20 h-10  border border-black`}> </div>
              <Margin left="2" />
              {/* xl=w-2/3 xxl=w-2/3 l-1/4 md-1/4 sm-1/6 */}
             
                 <input
                    className={`border p-2 rounded-md ${combinedClasses}`}
                    placeholder='검색 입력...'
                  />
                <DynamicColorButton
                  color="blue"
                  text="검색"
                  btnstyle="py-2 px-2 ml-2"
                />
              </div>

     
            </div>

<div className='flex justify-between items-center'>


     
</div>
            

          </div>
        </div>
      </div>
    </div>
  );
};


export default RecruitmentContent