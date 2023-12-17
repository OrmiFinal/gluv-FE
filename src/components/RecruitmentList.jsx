import React from "react";
import Contour from "./ui/Contour";

const RecruitmentList = ({ data }) => {
  const splitData = [];
  for (let i = 0; i < data.length; i += 2) {
    const chunk = data.slice(i, i + 2);
    splitData.push(chunk);
  }

  return (
    <div>
      {splitData.map((chunk, index) => (
        <div key={index} className="flex mb-4">
          {chunk.map((recruitment) => (
            <div key={recruitment.id} className="bg-white w-3/5 rounded-lg shadow-lg p-6 mr-4">
              <div className="flex justify-between">
              <div className="font-bold text-sm   mb-2">{recruitment.title}</div>
              <img src={recruitment.imageUrl} alt="팀" className="mb-2 rounded-full" style={{ maxWidth: "100%" }} />
              </div>
              <div className="text-gray-700 text-sm  mb-2">{recruitment.content}</div>
              
              <Contour />
              <div className="flex justify-between items-center text-gray-500 text-sm">
  <div className="flex flex-col text-center whitespace-nowrap">
    <div className="text-xs">{recruitment.date}</div>
    <div> 등록일</div>
  </div>
  <div className="flex flex-col text-center whitespace-nowrap">
    <div className="text-sm">{recruitment.views}</div>
    <div> 조회수</div>
  </div>
  <div className="flex flex-col text-center whitespace-nowrap">
    <div className="text-sm">{recruitment.likes}</div>
    <div> 좋아요</div>
  </div>
</div>


            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RecruitmentList;
