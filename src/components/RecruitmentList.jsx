import React from "react";
import Contour from "./ui/Contour";
import { Link } from "react-router-dom";

const formatDate = (timestamp) => {
  const createdAt = new Date(timestamp);

  // Extract only the date part (YYYY-MM-DD)
  const formattedDate = createdAt.toISOString().split('T')[0];

  return formattedDate;
};

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
            <Link key={recruitment.id} to={`/recruits/${recruitment.id}`} className="w-full">
              <div className="bg-white rounded-lg shadow-lg p-6 mr-4">
                <div className="flex justify-between">
                  <div className="font-bold text-sm mb-2">{recruitment.title}</div>
                  <img src={recruitment.imageUrl} alt="팀" className="mb-2 rounded-full" style={{ maxWidth: "100%" }} />
                </div>
                <div className="text-gray-700 text-sm mb-2">
                  <div dangerouslySetInnerHTML={{ __html: recruitment.content }} />
                </div>

                <Contour />
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <div className="flex flex-col text-center whitespace-nowrap">
                    <div className="text-xs">{formatDate(recruitment.created_at)}</div>
                    <div>등록일</div>
                  </div>
                  <div className="flex flex-col text-center whitespace-nowrap">
                    <div className="text-sm">{recruitment.view_count}</div>
                    <div>조회수</div>
                  </div>
                  <div className="flex flex-col text-center whitespace-nowrap">
                    <div className="text-sm">{recruitment.likes || 0}</div>
                    <div>좋아요</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RecruitmentList;
