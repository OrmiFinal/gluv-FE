// BulletinBoard.js
import React from 'react';
import Margin from '../Margin';
import { Link, useNavigate } from "react-router-dom";
function BulletinBoard({ data }) {
  const formatDate = (datetimeString) => {
    const parsedDate = new Date(datetimeString);
    const formattedDate = parsedDate.toISOString().split('T')[0];
    return formattedDate;
  };

  return (
    <div>
      <div className='flex flex-col'>
        <div className="flex items-center justify-start border p-2 rounded-md">
          <span className="font-bold w-[15vw]">게시판</span>
          <span className="font-semibold w-[23vw]">제목</span>
          <span className=" w-[10vw] font-lato">작성자</span>
          <span className=" w-[15vw] font-lato">날짜</span>
          <span className=" w-[5vw] font-lato">조회수</span>
        </div>

{data && data.map((item, index) => (
  <Link to={`/posts/${item.id}`} className="font-bold text-lg px-3 bold">
    <div key={index} className="flex items-center justify-start border p-2 rounded-md w-full hover:bg-gray-100">
      <span className='font-semibold text-sm w-[15vw]'>{item.id}</span>
      <span className='font-lato text-sm w-[23vw]'>{item.title}</span>
      <span className='font-lato text-sm w-[10vw]'>{item.author}</span>
      <span className="text-sm w-[15vw] font-lato">{formatDate(item.created_at)}</span>
      <span className="text-sm w-[5vw] font-lato">{item.view_count}</span>
    </div>
  </Link>
))}


      </div>
    </div>
  );
}

export default BulletinBoard;
