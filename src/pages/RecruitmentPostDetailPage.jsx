import React, { useState } from 'react';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import useWindowSize from '../hooks/useWindowSzie.jsx';
import CommentList from '../components/CommentList.jsx';
function RecruitmentPostDetailPage() {
  const { screenSize } = useWindowSize();


  const [comments, setComments] = useState([
    { user: '@사용자ㄷㄷㄷㄷ', content: 'ㄴㄴㄴㄴ 님 안녕하세요' },
    // 다른 댓글들도 유사한 구조로 추가
  ]);



  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className='w-[80vw] bg-white rounded-md shadow-md p-6'>
        <Margin top="1" />
        <div className='w-full border-[1px] border-black'>
          <Margin top="3" />
          <div className='m-3'>
            <div className='text-2xl font-bold mb-4'>게시글 제목</div>

            {/* 프로필 */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='bg-black w-8 h-8 rounded-full mr-2'></div>
                <div>작성자</div>
                <div>5시간전</div>
              </div>
              <div className='flex flex-col items-center'>
                <div className='flex'>
                  <div>작성일:</div>
                  <div>2023.12.25</div>
                </div>
                <div className='flex'>
                  <div>수정일:</div>
                  <div>2023.12.25</div>
                </div>
              </div>
            </div>

            <Margin top="4" />
            <div className='text-xl w-full border-b border-black font-bold mb-4'>게시글 내용</div>
            <Margin top="2" />
            <div className='border p-2 w-full h-[350px] overflow-scroll rounded-md'></div>
            <Margin top="2" />
            <div className='flex justify-center'>
              <DynamicColorButton
                color="red"
                text="취소"
                btnstyle="py-2 px-4 mr-2"
              />
              <DynamicColorButton
                color="blue"
                text="작성"
                btnstyle="py-2 px-4"
              />
            </div>

            <Margin top="4" />
            <div>
              <div className={`w-full border p-4 flex ${['lg', 'xl', 'xxl'].includes(screenSize) ? 'justify-between items-start' : 'flex-col items-start'}`}>
                <div className='flex'>
                  <DynamicColorButton
                    color="blue"
                    text="신청 현황 확인"
                    btnstyle="py-1 px-2 flex-shrink-0"
                  />
                  <Margin left="1" />
                  <DynamicColorButton
                    color="blue"
                    text="수정하기"
                    btnstyle="py-1 px-2 flex-shrink-0"
                  />
                  <Margin left="1" />
                  <DynamicColorButton
                    color="blue"
                    text="삭제하기"
                    btnstyle="py-1 px-2 flex-shrink-0"
                  />
                </div>
                {['lg', 'xl', 'xxl'].includes(screenSize) ? (<></>) : (<Margin top="3" />)}
                <div className='flex flex-wrap'>
                  <DynamicColorButton
                    color="blue"
                    text="신청하기"
                    btnstyle="py-1 px-2 ml-0 items-end flex-shrink-0"
                  />
                  <Margin left="1" />
                  <DynamicColorButton
                    color="blue"
                    text="목록으로 이동"
                    btnstyle="py-1 px-2 ml-0 items-end flex-shrink-0"
                  />
                </div>
              </div>
            </div>

            {/* 댓글 섹션 */}
            <div>
              <Margin top="4" />
              <div className='text-2xl font-bold mb-4'>댓글</div>

              {/* 댓글 입력창과 버튼 */}
              <div className='flex items-center justify-center'>
                <input
                  className='border p-2 w-3/4 rounded-md'
                  placeholder='댓글 입력...'
                />
                <DynamicColorButton
                  color="blue"
                  text="댓글 달기"
                  btnstyle="py-2 px-2 ml-2"
                />
              </div>

              {/* 댓글 목록 버튼 */}
              <div className='flex justify-end mt-3'>
                <DynamicColorButton
                  color="blue"
                  text="댓글 목록"
                  btnstyle="py-2 px-4"
                />
              </div>
            </div>

<div className='flex justify-between items-center'>


<CommentList comments={comments} />
            <DynamicColorButton
                  color="blue"
                  text="댓글 목록"
                  btnstyle="py-1 px-1 h-min"
                />
</div>
            

          </div>
        </div>
      </div>
    </div>
  );
};


export default RecruitmentPostDetailPage