// CommentList.jsx

import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div className=''>
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <div key={index} className='flex items-start my-3 py-1'>
            <div className='bg-black w-8 h-8 rounded-full mr-2'></div>
            <div>
              <strong className='font-semibold'>{comment.user}</strong>
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
