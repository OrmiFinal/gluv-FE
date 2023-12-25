import React, { useEffect, useState } from 'react';
import Margin from '../components/Margin.jsx';
import DynamicColorButton from '../components/DynamicColorButton.jsx';

import CommentList from '../components/CommentList.jsx';
import Contour from '../components/ui/Contour.jsx';
import { Link, useParams ,useNavigate} from 'react-router-dom';
import { FetchPostData } from '../api/post.js';
import { FetchDelectRecruits, FetchRecruits } from '../api/recruits.js';
import { FetchAllReqCommentsData, FetchCreateComments } from '../api/comment.js';
import { FetchTeam } from '../api/team.js';
import { submitReport } from '../api/report.js';
import { checkIfReLike, likeRecruit, unlikeRecruit } from '../api/likes.js';
import { checkRecruitApplication } from '../api/applyRecruit';
import { applyForRecruit ,cancelRecruitApplication} from '../api/applyRecruit';

function RecruitmentDetailPage() {

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    { user: '@사용자ㄷㄷㄷㄷ', content: 'ㄴㄴㄴㄴ 님 안녕하세요' },
    // Add other comments as needed
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [inserComment, setInserComment] = useState('');
  const [AmIRecruit, setAmIRecruit] = useState('');
  const [TeamID, setTeamID] = useState(0);

  const handleInputChange = (event) => {
    setInserComment(event.target.value);
  };
  const postId = id


  const navigate = useNavigate();

  const RecruitApplication = async () => {
    try {
      const IRecruit = await checkRecruitApplication(id );
      setAmIRecruit((prev) => ({

        IRecruit,
      }));


    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  
  useEffect(() => {
    const checkLike = async () => {
      const liked = await checkIfReLike(id);
      setIsLiked(liked)
    };
    checkLike()
  }, [isLiked]);



  useEffect(() => {
    const getPost = async () => {
      try {
        const postData = await FetchRecruits({ id });
        console.log(postData)
        setData((prev) => ({
        
          ...postData,
        }));
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };

   

  
 
    commentFetch()
    getPost();

    RecruitApplication()
    setTeamID((prev)=>{prev+1})
  }, []);
  


  useEffect(() => {
    const getTeam = async (teamId) => {
      try {
        const teamData = await FetchTeam({ id: teamId });
        console.log("teamData", teamData);
  
        setData((prev) => ({
          ...prev,
          ...teamData,
        }));
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };
  
    if (data !== null) {
      const teamId = data.team;
  
      // Ensure teamId is valid (not null or undefined) before calling getTeam
      if (teamId) {
        console.log("teamId", teamId);
        getTeam(teamId);
      }
    }
  
  }, [data]); // Re-run the effect whenever data changes
  


  const AmIReClikc=()=>{
    RecruitApplication()

    const isUserInArray = AmIRecruit.IRecruit.some(item => item.user = 2);

    let a = isUserInArray ? "신청중입니다": "신청 상태가 없는 상태 입니다" ;

    alert( a)

    
  }

 const RecruitBtn=async()=>{
    applyForRecruit(id)
    RecruitApplication()
  }
  const UnRecruitBtn=async()=>{
    cancelRecruitApplication(id)
    RecruitApplication()
  }

 const RecruitDelectBtn=async()=>{
  try{

    await FetchDelectRecruits({id})
    navigate('/recruits')
  }catch{

  }

}

const gotoListBtn = () => {
  
  navigate('/recruits')
};
  
  
  const handlePageClick = (page) => {
    setCurrentPage(page+1);
  };

  const commentFetch =async()=>{
    let a = await FetchAllReqCommentsData({id:id,page:currentPage}); // 하드코드
    setComments({a})
  }



  const handleLikeClick = async () => {
    try {
      await likeRecruit(postId);
      setIsLiked(true);
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  const handleUnlikeClick = async () => {
    try {
      await unlikeRecruit(postId);
      setIsLiked(false);
    } catch (error) {
      console.error('Error unliking the post:', error);
    }

  };
  const ReportClick = async()=>{
    console.log("data")
    console.log("data")
    console.log(data)
    let a=await submitReport({user_id:data.author,content:`모집글${id}를 신고 당했습니다.`})
    console.log(a)
  }



  const [selectedCommentUser, setSelectedCommentUser] = useState(null);

  // Define the click handler
  const handleCommentClick = (commentUser) => {
    console.log(commentUser);
    // Set the selected comment user using the state setter
    setSelectedCommentUser(commentUser);
  };



const CreatComment = async (e) => {

  console.log("asd")
  try {
    await FetchCreateComments({
      post_id: id,
      content: inserComment,
      to_user: selectedCommentUser || ''
    });
    await commentFetch(); // Fetch and update comments after creating a new comment
  } catch (error) {
    console.error('Error creating comment:', error);
  }
};






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
            {isLiked ? (
                   <DynamicColorButton
                   color="red"
                   text="추천 취소"
                   btnstyle="py-2 px-4 text-sm"
                   onClick={handleUnlikeClick}
                 />
      
      ) : (
        <DynamicColorButton
        className={`py-2 px-4 text-sm`} // Apply text-sm class for smaller text
        onClick={handleLikeClick}
        text="추천"
        color="blue"
      >
      
      </DynamicColorButton>
      )}

              <Margin left="4" />
              <DynamicColorButton
                color="red"
                text="신고"
                btnstyle="py-2 px-4 mr-2"
                onClick={ReportClick}
              />
            </div>

            <Margin top="4" />
            <div className={`w-full border p-4 flex  justify-between items-start`}>
              <div className='flex'>
              
              <DynamicColorButton
    color="blue"
    text="신청확인"
    btnstyle="py-1 px-2 ml-0 items-end flex-shrink-0"
    onClick={AmIReClikc}
  /> 


                <Margin left="1" />
           
                <Margin left="1" />
                <DynamicColorButton
                  color="red"
                  text="삭제하기"
                  btnstyle="py-1 px-2 flex-shrink-0"
                  onClick={RecruitDelectBtn}
                />
              </div>
             
              <div className='flex flex-wrap'>
              <DynamicColorButton
    color="blue"
    text="신청하기"
    btnstyle="py-1 px-2 ml-0 items-end flex-shrink-0"
    onClick={RecruitBtn}
  /> 
  
  <DynamicColorButton
    color="blue"
    text="신청해제"
    btnstyle="py-1 px-2 ml-0 items-end flex-shrink-0"
    onClick={UnRecruitBtn}
  />
                <Margin left="1" />
                <Link to="/recruits">
              
                <DynamicColorButton
                  text="목록으로"
                  btnstyle="py-1 px-2 ml-0 items-end flex-shrink-0"
                  onClick={gotoListBtn}
                />
                </Link>
              </div>
            </div>

            <div>
            {selectedCommentUser? selectedCommentUser +"님을 선택을 하였습니다":""}
              <Margin top="4" />
              <div className='text-2xl font-bold mb-4'>댓글</div>
              
              <div className='flex items-center justify-center'>
              <input
        className='border p-2 w-3/4 rounded-md'
        placeholder='댓글 입력...'
        value={inserComment}
        onChange={handleInputChange}
      />
                <DynamicColorButton
                  color="black"
                  text="댓글 달기"
                  btnstyle="py-2 px-2 ml-2"
                  onClick={CreatComment}
                />
              </div>
            </div>
            
            <div className='flex justify-between items-center'>
            <CommentList comments={comments} onCommentClick={handleCommentClick} />
    
            </div>
          </div>

          <div className='flex w-full justify-center items-center'>
              {Array.from({ length: Math.ceil(comments.a ? comments.a.count / 5 : 1) }, (_, index) => (
    <span
      key={index}
      className={`cursor-pointer mx-1  text-center ${currentPage === index + 1 ? 'font-bold' : ''}`}
      onClick={() => handlePageClick(index )}
    >{index+1}</span>
              ))}
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
