import React, { useEffect, useState, useContext } from 'react';

import { FetchPostData ,FetchDelete} from '../api/post.js';
import { checkIfLike, likePost, unlikePost } from '../api/likes.js';
import { FetchAllCommentsData, FetchCreateComments } from '../api/comment.js';
import { submitReport } from '../api/report.js';
import { AuthContext } from '../context/AuthContextProvider.jsx';

import Margin from '../components/Margin.jsx';
import DynamicColorButton from '../components/DynamicColorButton.jsx';
import CommentList from '../components/CommentList.jsx';
import Contour from '../components/ui/Contour.jsx';
import { useParams } from 'react-router-dom';
import { Link ,useNavigate} from "react-router-dom";


const baseURL = import.meta.env.VITE_APP_API_KEY;

function PostDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [insertComment, setInsertComment] = useState('');
  const { getDecodedToken } = useContext(AuthContext);
  const [selectedCommentUser, setSelectedCommentUser] = useState({id:'',nickname:''});
  const [isAuthor, setIsAuthor] = useState(false);

  const postId = id; 
  const navigate = useNavigate();
  
  
  // 댓글 입력 핸들러
  const handleInputChange = (event) => {
    setInsertComment(event.target.value);
  };
  
  // 추천 상태 확인
  const checkIfLiked = async () => {
    try {
      const liked = await checkIfLike(postId);
      setIsLiked(liked);
    } catch (error) {
      console.error('Error checking if liked:', error);
    }

 
    
  };

  // 댓글 태그 기능 핸들러
  const handleCommentClick = (commentUser) => {

    setSelectedCommentUser({id:commentUser.id,nickname:commentUser.nickname});
  };

  // 댓글 리스트 조회
  const commentFetch =async()=>{
    let a = await FetchAllCommentsData({id:id,page:currentPage});
    setComments({a})
  }

  
  useEffect(() => {
  
    const getPost = async () => {
      try {
        const postData = await FetchPostData({ id });
        checkIsAuthor(JSON.stringify(postData.author_info.id));
        setData(postData);
    
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    };
    commentFetch()
    getPost();
    checkIfLiked();
    
  
  }, [currentPage, isLiked]);

function checkIsAuthor(author) {
  const decodedToken = getDecodedToken();

  if (decodedToken.user_id == author){
    setIsAuthor(true);
  }
}

const CreatComment = async (e) => {
  try {
    await FetchCreateComments({
      post_id: id,
      content: insertComment,
      to_user: selectedCommentUser.id || ''
    });
    await commentFetch(); // Fetch and update comments after creating a new comment
  } catch (error) {
    console.error('Error creating comment:', error);
  }
};


  const handleLikeClick = async () => {
    try {
      await likePost(postId);
      setIsLiked(true);
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  const handleUnlikeClick = async () => {
    try {
      await unlikePost(postId);
      setIsLiked(false);
    } catch (error) {
      console.error('Error unliking the post:', error);
    }

  };
  const ReportClick = async()=>{

    let a=await submitReport({user_id:data.author,content:`포스트${id}를 신고했습니다.`})

  }

  const handlePageClick = (page) => {
    setCurrentPage(page+1);
  };

  const deletePost = async () => {
    try {
      const postData = await FetchDelete({ id });
      setData(postData);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

const deleteClick = async()=>{
  deletePost({id});
  navigate('/posts/notices/')
}


  if (!data) {
    // You can render a loading spinner or message here
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center">
      <div className='w-[80vw] rounded-md  p-6'>
      <div className='flex items-center justify-center w-[60px] h-[30px] bg-gray-200 text-sm font-roboto rounded-md text-center overflow-hidden'>
  {data.category}
</div>


        <Margin top="1" />
        <div className='w-full'>

          <div>
            <div className='text-2xl font-bold'>{data.title}</div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
              
                <img
                src={data.author_info.profile_image}
                alt="포스트 사진"
                className="w-8 h-8 rounded-full mr-2"
              />
               
               <div className='font-bold text-lg'>{data.author_info.nickname}</div>

                <Margin left="1"  plustailwind="w-3" />
                <div className='text-sm  text-gray-600  ' >{NowformatDate(data.created_at)}</div>
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
              내용
            </div>
            <Contour />
            
            <Margin top="3" plustailwind="h-3 w-1"  />
            <div className="min-h-[400px] w-full flex   z-10">
      <div dangerouslySetInnerHTML={{ __html: data.content }} /></div>

            <Margin top="4" />
            <div className={`w-full border p-4 flex`}>
              <div className='flex w-1/2'>
                {isLiked ? (
                    <DynamicColorButton
                    className={`py-2 px-4 text-sm`} // Apply text-sm class for smaller text
                    onClick={handleUnlikeClick}
                    text="좋아요 취소"
                    color="red"
                  />
                  ) : (
                  <DynamicColorButton
                    color="blue"
                    text="좋아요"
                    btnstyle="py-2 px-4"
                    onClick={handleLikeClick}
                  />
                )}
              <DynamicColorButton
                color="red"
                text="신고"
                btnstyle="py-2 px-4 mx-2"
                onClick={ReportClick}
              />
            </div>
              <div className='flex w-1/2 justify-end'>
                <div className='ml-auto'>
                  <DynamicColorButton
                    color="red"
                    text="삭제하기"
                    onClick = {deleteClick}
                    btnstyle="py-1 px-2 flex-shrink-0"
                  />
                </div>
                <div className=''>
                  <Margin left="2" />
                  <Link to="/posts/notices/">
                  <DynamicColorButton
                    text="목록으로"
                    btnstyle="py-1 px-2 ml-0 items-end flex-shrink-0"
                  />
                  </Link>
                  {isAuthor && (
                    <Link to={`/posts/${id}/edit`}>
                      <DynamicColorButton
                        color="black"
                        text="수정하기"
                        btnstyle="py-1 px-2 flex-shrink-0"
                      />
                    </Link>
                  )}
                </div>
              </div>
            <Margin left="4" />
            </div>
            <div>
              {selectedCommentUser? selectedCommentUser.nickname +"님을 선택을 하였습니다":""}
              <Margin top="4" />
              <Contour />
              <div className='flex items-center justify-center'>
                <div className='text-2xl font-bold px-2'></div>
               
                <input
                  className='border p-3 grow rounded-md'
                  placeholder='댓글 입력...'
                  value={insertComment}
                  onChange={handleInputChange}
                />
                <DynamicColorButton
                  color="black"
                  text="댓글 달기"
                  btnstyle="ml-2"
                  onClick={CreatComment}
                />
              </div>
              <Margin top="4" />
              <Contour />
            </div>

            
            <div className='flex justify-between items-center  px-4'>
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
    <Margin left="1" plustailwind="w-3" />
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


export default PostDetailPage