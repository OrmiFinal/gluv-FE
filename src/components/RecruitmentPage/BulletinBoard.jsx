// BulletinBoard.js
import React from 'react';
import Margin from '../Margin';
import { Link, useNavigate } from "react-router-dom";

function BulletinBoard({ data }) {
  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };

  const formatDate = (datetimeString) => {
    const parsedDate = new Date(datetimeString);
    const formattedDate = parsedDate.toISOString().split('T')[0];
    return formattedDate;
  };

  return (
    <div style={textStyle}>
      <div className='flex flex-col'>
        <div className="flex items-center justify-start border p-2 rounded-md">
          <span className="w-[15vw]">글번호</span>
          <span className="w-[23vw]">제목</span>
          <span className="w-[10vw]">작성자</span>
          <span className="w-[15vw]">날짜</span>
          <span className="w-[5vw]">조회수</span>
        </div>
          {data && data.map((item, index) => (
            <Link to={`/RecruitmentPostDetailPage/${item.id}`} className="text-lg bold">
              <div key={index} className="flex items-center justify-start border p-2 rounded-md w-full hover:bg-gray-100">
                <span className='text-sm w-[15vw]'>{item.id}</span>
                <span className='text-sm w-[23vw]'>{item.title}</span>
                <span className='text-sm w-[10vw]'>{item.nickname}</span>
                <span className="text-sm w-[15vw]">{formatDate(item.created_at)}</span>
                <span className="text-sm w-[5vw]">{item.view_count}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default BulletinBoard;
