import React from "react";

import Margin from "./Margin";
import { Link } from "react-router-dom";

function TeamBox({ teamData }) {
  const { id, image, category, name } = teamData;
  // 지금은 방법을 알 수가 없어서 임시 조치를 합니다.
  // 기본 이미지들이 모델에 명시된 경로에 저장되지 않는 문제
  // base url이 명시되지 않는 문제를 해결한 후 다시 수정하겠습니다.
  const baseURL = import.meta.env.VITE_APP_API_KEY;

  return (
    <div className="flex">
      <Link to={`/teams/${id}`} key={id}>
        <div className="relative overflow-hidden rounded-full h-20 w-20 mr-2">
          <img
            src={image}
            alt="모임 사진"
            className="모임_이미지_스타일 rounded-full"
          />
        </div>
      </Link>
      <Margin left="3" />
      <Link to={`/teams/${id}`}>
        <div className="bg-gray-100 w-96 rounded-lg h-20 pt-2 pl-2">
          <p className="text-lg font-bold ml-1">{category}</p>
          <p className="pt-1 ml-1">{name}</p>
        </div>
      </Link>
    </div>
  );
}

export default TeamBox;
