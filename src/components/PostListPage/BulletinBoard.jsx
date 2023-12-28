// BulletinBoard.js
import React from 'react';

import Margin from '../Margin';

import { Link } from "react-router-dom";

function BulletinBoard({ data }) {
  const formatDate = (datetimeString) => {
    try {
      const parsedDate = new Date(datetimeString);

      if (isNaN(parsedDate)) {
        throw new Error('Invalid date');
      }

      const formattedDate = parsedDate.toISOString().split('T')[0];
      return formattedDate;
    } catch (error) {
      console.error(`Error formatting date: ${error.message}`);
      return 'Invalid Date';
    }
  };

  return (
    <div>
      <Margin top="2" plustailwind="h-4" />
      <div className='flex flex-col'>
        <div className="flex items-center justify-start border p-2 rounded-md">
          <span className="w-[15vw]">번호</span>
          <span className="w-[23vw]">제목</span>
          <span className="w-[10vw] text-center">작성자</span>
          <span className="w-[15vw] text-center">날짜</span>
          <span className="w-[5vw] text-center">조회수</span>
        </div>

        {data && data.map((item, index) => (
          <Link to={`/posts/${item.id}`} className="" key={index}>
            <div className="flex items-center justify-start border rounded-md w-full hover:bg-gray-100 px-3 py-2">
              <span className='text-sm w-[15vw]'>{item.id}</span>
              <span className='text-sm w-[23vw] text-left'>{item.title}</span>
              <span className='text-sm w-[10vw] text-center'>{item.nickname}</span>
              <span className="text-sm w-[15vw] text-center">{formatDate(item.created_at)}</span>
              <span className="text-sm w-[5vw] text-center">{item.view_count}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BulletinBoard;
