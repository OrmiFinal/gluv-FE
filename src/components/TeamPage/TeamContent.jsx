import React, { useEffect, useContext, useState } from "react";

import { TeamContext } from './TeamContext';

import Margin from "../Margin";
import DynamicColorButton from "../DynamicColorButton";
import Contour from "../ui/Contour";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from "react-router-dom";



const TeamContent = () => {
  const teamContext = useContext(TeamContext);
  const { id } = useParams();
  
  return (
    <div className="flex items-center justify-center w-full m-3 mt-0 h-full">
      <div className="mt-4 w-full p-6 rounded-md border shadow-md">
        <div className="flex justify-between text-center justify-items-center ">
          <div className="text-lg font-bold p-2">{teamContext.teamData.name}</div>
          {/* <div className="text-sm font-bold mb-3 border p-2 rounded-full ">{teamContext.teamData.category}</div> */}
        </div>
        <Contour></Contour>
        <div className="w-full p-1">
          <div className="border rounded-md">
            <div className="font-semibold mb-1 rounded-md p-2 m-2">팀 소개</div>
            <div className="px-2 mx-2">
              <Contour></Contour>
            </div>
            <div
              className="w-full h-[150px] text-base p-2 m-4">
              {teamContext.teamData.introduce || "아직 소개가 없습니다."}
            </div>
          </div>
          <Margin top="4"/>
          <div className="border rounded-md">
          <div className="flex justify-between text-center justify-items-center ">
            <div className="font-semibold mb-1 rounded-md p-2 m-2">모임 정보</div>
            <div className="text-sm font-bold  border rounded-full p-2 m-2">{teamContext.teamData.category}</div>
          </div>
            <div className="px-2 mx-2">
              <Contour></Contour>
            </div>
            <div className="flex p-1 text-center justify-items-center items-center text-center m-1">
              <div className="flex-1 p-2">
                <div className="font-semibold">지역</div>
                <div className="text-base">
                  {teamContext.teamData.location}
                </div>
              </div>
              <div className="flex-1 p-2">
                <div className="font-semibold">일정</div>
                <div className="flex justify-center">
                  <div className="text-base px-1" style={{ whiteSpace: "nowrap" }}>
                    {teamContext.teamData.frequency}
                  </div>
                  <div className="text-base" style={{ whiteSpace: "nowrap" }}>
                    {teamContext.teamData.frequency === '매월' ? 
                      teamContext.teamData.week : '' }
                  </div>
                  <div className="text-base px-1" style={{ whiteSpace: "nowrap" }}>
                  {teamContext.teamData.frequency === '매일' ? 
                    '' : teamContext.teamData.day }
                  </div>

                </div>
              </div>
              <div className="flex-1 p-2">
                <div className="font-semibold">시간</div>
                <div className="text-base">
                  {teamContext.teamData.start_time && teamContext.teamData.end_time ? (
                    `${teamContext.teamData.start_time} ~ ${teamContext.teamData.end_time}`
                  ) : teamContext.teamData.start_time ? (
                    teamContext.teamData.start_time
                  ) : '미정'}
                </div>
              </div>
              <div className="flex-1 p-2">
                <div className="font-semibold">참여인원</div>
                <div className="text-base ">
                  {teamContext.teamData.current_attendance +'/'+teamContext.teamData.max_attendance}
                </div>
              </div>
            </div>
          </div>
          <div>
          </div>
          <Margin plustailwind="h-4" />
          <div className="flex w-full  justify-end items-center">
            {teamContext.teamData.recruit_id !== 0 && (
              <Link to={`/recruits/${teamContext.teamData.recruit_id}`}>
                <DynamicColorButton
                  text="모집글가기"
                  btnstyle="py-2 px-2 self-end mr-2"
                />
              </Link>
            )}
            <Link to={`/chatroom/${teamContext.teamData.chatroom_id}/`}>
            <DynamicColorButton
              color="blue"
              text="채팅방입장"
              btnstyle="py-2 px-2 self-end"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContent;
