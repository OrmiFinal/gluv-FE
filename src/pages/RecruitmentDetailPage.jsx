import React, { useEffect, useState } from 'react';
import Margin from '../components/Margin.jsx';
import DynamicColorButton from '../components/DynamicColorButton.jsx';
import useWindowSize from '../hooks/useWindowSzie.jsx';
import CommentList from '../components/CommentList.jsx';
import Contour from '../components/ui/Contour.jsx';
import { Link, useParams } from 'react-router-dom';
import { FetchPostData } from '../api/post.js';
import { FetchRecruits } from '../api/recruits.js';
import { FetchTeam } from '../api/team.js';

function RecruitmentDetailPage() {
  const { screenSize } = useWindowSize();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [comments, setComments] = useState([
    { user: '@사용자ㄷㄷㄷㄷ', content: 'ㄴㄴㄴㄴ 님 안녕하세요' },
    // Add other comments as needed
  ]);
  useEffect(() => {
    const getPost = async () => {
      try {
        const postData = await FetchRecruits({ id });
        setData((prev) => ({
          ...prev,
          ...postData,
        }));
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };
  
    const getTeam = async () => {
      try {
        const teamData = await FetchTeam({ id });
        setData((prev) => ({
          ...prev,
          ...teamData,
        }));
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
  
    getPost();
    getTeam();
  }, []);
  
 console.log(data)
    console.log(data)
  if (!data) {
    // You can render a loading spinner or message here
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <div className='w-[80vw] rounded-md  p-6'>
        <div className='flex items-center justify-center w-[60px] h-[30px] bg-gray-200 text-sm font-roboto rounded-md text-center'>
          {data.category}
        </div>

        <Margin top="1" />
        <div className='w-full'>

          <div>
            <div className='text-2xl font-bold'>{data.title}</div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='bg-black w-8 h-8 rounded-full mr-2'></div>
                <div className='font-bold text-lg'>{data.author}</div>
                <Margin left="1"  plustailwind="w-3" />
                <div className='text-sm  text-gray-600 '>{NowformatDate(data.created_at)}</div>
              </div>
              <div className='flex flex-col items-center p-2'>
                <div className='flex'>
                  <div className='text-sm '>좋아요:</div>
                  <div className='text-sm '>{data.likes}</div>
                </div>
                <div className='flex'>
                  <div className='text-sm '>조회수:</div>
                  <div className='text-sm '>{data.view_count}</div>
                </div>
              </div>
            </div>

            <Contour />
            
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='grid grid-cols-2 gap-3'>
                  <InfoItem title="카테고리" content={data.category} />
                  <InfoItem title="지역" content={data.region} />
                  <InfoItem title="최대인원" content={data.max_attendance} />
                  <InfoItem title="현재인원" content={data.current_attendance} />
                </div>
              </div>
              <div className='flex flex-col items-center p-2'>
                <div className='flex'>
                  <div className='text-sm '>작성일:</div>
                  <div className='text-sm '>{formatDate(data.created_at)}</div>
                </div>
                <div className='flex'>
                  <div className='text-sm '>수정일:</div>
                  <div className='text-sm '>{formatDate(data.updated_at)}</div>
                </div>
              </div>
            </div>
            
            <Contour />

            <Margin top="4" />
            <div className='text-xl w-ful border-black font-bold mb-4'>
         
            </div>
            
            <Margin top="3" plustailwind="h-3 w-1"  />
            <div className='border p-2 w-full h-[350px] overflow-scroll rounded-md'>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
            
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
                <Link to="/recruits">
                <DynamicColorButton
                  text="목록으로"
                  btnstyle="py-1 px-2 ml-0 items-end flex-shrink-0"
                />
                </Link>
              </div>
            </div>

            <div>
              <Margin top="4" />
              <div className='text-2xl font-bold mb-4'>댓글</div>
              
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
            
            <div className='flex justify-between items-center'>
              <CommentList comments={comments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Example of a reusable InfoItem component
const InfoItem = ({ title, content }) => (
  <div className='flex justify-start items-center'>
    <div className='font-bold text-lg'>{title}</div>
    <Margin left="1"  plustailwind='w-3' />
    <div className='text-sm  text-gray-600'>{content}</div>
  </div>
);

// Example of a utility function to format date
const formatDate = (dateString) => {
  if (!dateString) return ''; // Handle the case when dateString is undefined or null

  // Extract only the date part (YYYY-MM-DD)
  const formattedDate = dateString.substring(0, 10);

  return formattedDate;
};

// Example of a utility function to format date
const NowformatDate = (dateString) => {
  if (!dateString) return ''; // Handle the case when dateString is undefined or null

  // Extract only the date part (YYYY-MM-DD)
  const formattedDate = dateString.substring(0, 10);

  // Get the current date in the same format
  const currentDate = new Date().toISOString().substring(0, 10);

  // Compare the extracted date with the current date
  if (formattedDate === currentDate) {
    return '오늘';
  } else {
    // Calculate the difference in days
    const date1 = new Date(formattedDate);
    const date2 = new Date(currentDate);
    const timeDifference = date1.getTime() - date2.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    return `${daysDifference}일 전`;
  }
};



export default RecruitmentDetailPage;
