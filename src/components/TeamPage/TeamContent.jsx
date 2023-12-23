import React, { useEffect, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Margin from "../Margin";
import DynamicColorButton from "../DynamicColorButton";
import Contour from "../ui/Contour";
import { Link, useParams } from "react-router-dom";

import { TeamContext } from '../../context/TeamContext';

const TeamContent = () => {
  const teamContext = useContext(TeamContext);
  const { id } = useParams();

  const handleSave = () => {
  
  };

  const handleRegister = () => {
  
  };

  return (
    <div className="flex items-center justify-center w-full m-3 mt-0 h-full">
      <div className="mt-9 w-full p-6 rounded-md">
        <div className="text-lg font-bold mb-3">{teamContext.teamData.name}</div>
        <Contour></Contour>

        <div className="w-full border-[1px] p-4 rounded-md">
          <div>
            <div className="text-sm font-semibold mb-1">팀 소개</div>
            <div
              className="w-full h-[150px] border-[1px] p-2 text-base">
              {teamContext.teamData.introduction || "아직 소개가 없습니다."}
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">모임 주소</div>
            <div className="w-full h-[35px]  p-2 text-base ">
              {teamContext.teamData.location}
            </div>
          </div>
          <Margin top="2" />
          <Contour></Contour>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">참여인원</div>
            <div className="w-full h-[40px]  p-2 text-base ">
              {teamContext.teamData.max_attendance}
            </div>
          </div>
          <Margin top="2" />
          <Contour></Contour>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">모임 시간</div>
            <div className="flex space-x-2">
              <div className="text-base" style={{ whiteSpace: "nowrap" }}>
                {teamContext.teamData.frequency}
              </div>
              <div className="text-base" style={{ whiteSpace: "nowrap" }}>
                {teamContext.teamData.week} 주
              </div>
              <div className="text-base" style={{ whiteSpace: "nowrap" }}>
                {teamContext.teamData.day}
              </div>
            </div>
          </div>

          <Margin plustailwind="h-4" />

          <div className="w-full h-[40px] flex items-end  justify-between">
            <div className="flex">
              <div className="text-sm font-semibold mb-1">모임 시작일</div>
              <div className="self-end ml-4 mb-4">{teamContext.teamData.start_time || ""}</div>
            </div>
          </div>
          <div className="flex w-full  justify-end items-center">
            <Link to={`/recruits/${id}`}>
              <DynamicColorButton
                text="모집글가기"
                btnstyle="py-2 px-2 self-end mr-2"
                onClick={handleRegister}
              />
            </Link>
            {/* <Link to={`/chatrooms/${id}/`}> */}
            <DynamicColorButton
              color="blue"
              text="채팅방입장"
              btnstyle="py-2 px-2 self-end"
              onClick={handleSave}
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContent;
