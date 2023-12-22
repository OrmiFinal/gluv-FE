import { Link } from "react-router-dom";

import React from "react";
import Margin from "./Margin";

function TeamBox({ teamData }) {
  const { id, image, category, name } = teamData;

  return (
    <div className="flex">
      <Link to={`/teams/${id}`} key={id}>
        <div className="relative overflow-hidden rounded-full bg-black h-20 w-20 mr-2">
          <img
            src={image}
            alt="모임 사진"
            className="모임_이미지_스타일 rounded-full"
          />
        </div>
      </Link>
      <Margin left="3" />
      <Link to={`/teams/${id}`} key={id}>
        <div className="bg-gray-100 w-96 rounded-lg h-20 pt-2 pl-2">
          <p className="text-lg font-bold ml-1">{category}</p>
          <p className="pt-1 ml-1">{name}</p>
        </div>
      </Link>
    </div>
  );
}

export default TeamBox;
