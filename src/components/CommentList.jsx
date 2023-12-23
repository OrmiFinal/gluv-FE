// CommentList.jsx

import React from 'react';
import Margin from './Margin';

const CommentList = ({ comments, onCommentClick }) => {
  console.log("comments");
  console.log("comments");
  console.log(comments);
  return (
    <div className='mt-4'>
      {comments && comments.a && comments.a.results && comments.a.results.length > 0 ? (
        comments.a.results.map((comment, index) => (
          <div
            key={index}
            className='flex items-start  my-3 py-1'
            onClick={() => onCommentClick(comment.user_id)}
            style={{ cursor: 'pointer' }}
          >
            <div className='bg-black w-8 h-8 rounded-full mr-2'></div>
            <div>
              <strong className='font-semibold'>{comment.user_id}님</strong>
              <Margin left='3' plustailwind='w-3'></Margin>
              <strong className='font-semibold'>
                {comment.to_user ? comment.to_user + '에게' : ''}
              </strong>
              <p className='font-mono'>{comment.content}</p>
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
