import React, { useEffect, useState, useContext } from "react";

import { TeamContext } from './TeamContext';
import {  TeamLeave, TeamDelete } from "../../api/team";
import { CheckRecruitsApplied } from "../../api/recruits";

import Margin from "../Margin";
import Contour from "../ui/Contour";
import { Link, useParams } from "react-router-dom";
import { Request } from "../../api/api";



function TeamLeftMenu() {
  
  const teamContext = useContext(TeamContext);
  const [teamImage, setTeamImage] = useState(null);

  const [appliedMemberData, setAppliedMemberData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
 
    fetchAppliedMemberData();

    fetchTeamInfo()
  }, [teamContext]);


  const fetchTeamInfo = async () => {
    try {

   
      const response = await Request('get', `/teams/${teamContext.teamData.id}/`, {}, {}, {});
    

      setTeamImage(response.image);
    } catch (error) {
      console.error('Error fetching TeamInfo:', error.message);
    }
  };





  const fetchAppliedMemberData = async () => {
    try {
      // 모집글이 없을 경우, 그대로 종료
      if(teamContext.teamData.recruit_id===0){
        return
      }
      
      const appliedMemberData = await CheckRecruitsApplied(teamContext.teamData.recruit_id);
      if (appliedMemberData) {
        setAppliedMemberData(appliedMemberData.length);
      }
    } catch (error) {
      console.error("Error fetching applied member data:", error.message);
    }
  };

  const teamLeave = async () => {
    try {
        const result = await TeamLeave({ id });
        console.log("TeamLeave")
        window.location.href = "/users/myteams/";
    } catch (error) {
        console.error("Error in teamLeave:", error.message);
    }
};
  const teamDelete = async () => {

    try {
        const result = await TeamDelete({ id });
        console.log("TeamDelete")
        window.location.href = "/users/myteams/";
    } catch (error) {
        console.error("Error in teamDelete:", error.message);
    }
};



  return (
    <div className="w-72 h-full flex justify-center items-center">
      <div className="mt-4 w-64 h-full mx-4 bg-gray-100 flex flex-col items-center text-center rounded-lg ">
        {/* 상단 여백 적용 */}
        <Margin plustailwind='h-10 w-3' />

        {/* 프로필 정보 */}
        <div>
          <div className="relative overflow-hidden rounded-full h-28 w-28">
          <Margin plustailwind='h-10 w-3' />
            <img
              src={teamImage || "/media/defalut_team.png"}
              alt="프로필 사진"
              className="w-32 h-32 rounded-full"
            />
          </div>
          <Margin top="3" />
          <div className=" font-bold">{teamContext.teamData.category}</div>
          <div className="  text-sm">{teamContext.teamData.name}</div>
        </div>
        <Margin bottom="1" />
        {/* 수평 선 */}
        <Contour></Contour>
        <Margin top="2" />
        {/* 모집 정보 */}
        <div className="w-48">
          <div className="text-lg font-bold pb-4">
            모집 중 {teamContext.teamData.is_closed ? "❌" : "✔️"}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="">최대인원</div>
              <div className="">{teamContext.teamData.max_attendance}명</div>
            </div>
            <div className="flex justify-between">
              <div className="">현재인원</div>
              <div className="">{teamContext.teamData.current_attendance}명</div>
            </div>
            <div className="flex justify-between">
              <div className="">신청인원</div>
              <div className="">{teamContext.teamData.applied_member}명</div>
            </div>
          </div>
        </div>

        {/* 리더 정보 */}
        <Margin top="2" />
        <div className="text-lg mt-2 mb-5">
          내 역할: {teamContext.teamData.is_leader ? "리더" : "구성원"}
        </div>
        <Margin top="1" />

        <Margin top="1" />
        <Contour />
        <Link to={`/teams/${teamContext.teamData.id}/`}>
          <div className="menu-item cursor-pointer m-1">모임 상세 정보</div>
        </Link>
        <Contour />
        <Link to={`/teams/${teamContext.teamData.id}/edit/`}>
          <div className="menu-item cursor-pointer m-1">모임 정보 수정</div>
        </Link>
        <Contour />
        <Link to={`/teams/${teamContext.teamData.id}/members/`}>
          <div className="menu-item cursor-pointer m-1">구성원 관리</div>
        </Link>
        <Contour />
        <Link to={`/teams/${teamContext.teamData.id}/apply/`}>
          <div className="menu-item  cursor-pointer m-1">신청인원 관리</div>
        </Link>
        <Contour />
        <div className="menu-item  cursor-pointer m-1" onClick={teamDelete}>모임 삭제</div>
        <Contour />
        <div className="menu-item cursor-pointer m-1" onClick={teamLeave}>모임 탈퇴</div>
        <Contour />
      </div>
    </div>
  );
}

export default TeamLeftMenu;
