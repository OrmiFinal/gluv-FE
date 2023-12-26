// CommentList.jsx

import React from 'react';

import Margin from './Margin';

const CommentList = ({ comments, onCommentClick }) => {

  return (
    <div className='w-full mt-4'>
      {comments && comments.a && comments.a.results && comments.a.results.length > 0 ? (
        comments.a.results.map((comment, index) => (
          <div
            key={index}
            className='flex items-start  my-3 py-1'
            onClick={() => onCommentClick({id:comment.user_id,nickname:comment.nickname})}
            style={{ cursor: 'pointer' }}
          >

            {/* 아래는 유저의 사진정보  */}
           <img
            src={comment.user.profile_image}
            alt='프로필 사진'
            className='프로필_이미지_스타일 rounded-full'
          />


            <div>
              <strong className='font-semibold'>{comment.nickname}님</strong>
              <Margin left='3' plustailwind='w-3'></Margin>
              <strong className='font-semibold'>

                   {/* 아래는 to_user 의 닉네임 이있으면  사진정보를 보여줌 */}

                   {comment.to_user_info ? comment.to_user_info.nickname + '에게' : ''}


              </strong>
              <p className=''>{comment.content}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  );
};

export default CommentList;
