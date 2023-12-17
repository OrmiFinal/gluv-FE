import React, { useState } from 'react';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import useWindowSize from '../hooks/useWindowSzie.jsx';
import CommentList from '../components/CommentList.jsx';
import Contour from '../components/ui/Contour.jsx';
function RecruitmentPostDetailPage() {
  const { screenSize } = useWindowSize();


  const [comments, setComments] = useState([
    { user: '@사용자ㄷㄷㄷㄷ', content: 'ㄴㄴㄴㄴ 님 안녕하세요' },
    // 다른 댓글들도 유사한 구조로 추가
  ]);



  return (
    <div className="flex items-center justify-center">
          
      <div className='w-[80vw] rounded-md  p-6'>
      <div className='flex items-center justify-center w-[60px] h-[30px] bg-gray-200 text-sm font-roboto rounded-md text-center'>
        게시글
      </div>

        <Margin top="1" />
        <div className='w-full'>

          <div className=''>
            <div className='text-2xl font-bold '>게시글 제목 수원 취미 밴드에서 여자 보컬님을 모집합니다!</div>

            {/* 프로필 */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='bg-black w-8 h-8 rounded-full mr-2'></div>
                <div className='font-bold text-lg'>작성자</div>
                  <Margin left="1" />
                  <div className='text-sm font-mono text-gray-600 '>5시간전</div>

              </div>
              <div className='flex flex-col items-center p-2'>
                <div className='flex'>
                  <div className=' text-sm font-mono'>좋아요:</div>
                  <div  className=' text-sm font-mono'>25</div>
                </div>
                <div className='flex'>
                  <div className=' text-sm font-mono'>조회수:</div>
                  <div className=' text-sm font-mono'>205</div>
                </div>
              </div>
            </div>

            <Contour/>
       {/* 내용 */}
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='font-bold text-lg'>게시판</div>
                  <Margin left="1" />
                  <div className='text-sm font-mono text-gray-600 '>창작게시판</div>

              </div>
              <div className='flex flex-col items-center p-2'>
                <div className='flex'>
                  <div className=' text-sm font-mono'>작성일:</div>
                  <div className=' text-sm font-mono'>2025,03.91</div>
                </div>
                <div className='flex'>
                  <div className=' text-sm font-mono'>수정일:</div>
                  <div className=' text-sm font-mono'>2051,13,24</div>
                </div>
              </div>
            </div>
<Contour/>


            <Margin top="4" />
            <div className='text-xl w-ful border-black font-bold mb-4'>
              
              게시글 내용
              </div>
            <Margin top="3" plustailwind="h-3 w-1"  />
            <div className='border p-2 w-full h-[350px] overflow-scroll rounded-md'></div>
            <Margin top="2" />
            <div className='flex justify-center'>
            <DynamicColorButton
                color="blue"
                text="좋아요"
                btnstyle="py-2 px-4"
              />
                 <Margin left="4" />
              <DynamicColorButton
                color="red"
                text="신고"
                btnstyle="py-2 px-4 mr-2"
              />
              
            </div>

            <Margin top="4" />
            <div>
              <div className={`w-full border p-4 flex ${['lg', 'xl', 'xxl'].includes(screenSize) ? 'justify-between items-start' : 'flex-col items-start'}`}>
                <div className='flex'>
                  <DynamicColorButton
          
                    text="신청 현황"
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
                    color="red"
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
                 
                    text="목록으로"
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
                  color="black"
                  text="댓글 달기"
                  btnstyle="py-2 px-2 ml-2"
                />
              </div>

            
              </div>
            </div>

<div className='flex justify-between items-center'>


<CommentList comments={comments} />
          
        
          </div>
        </div>
      </div>
    </div>
  );
};


export default RecruitmentPostDetailPage