import React, { useEffect, useState } from "react";
import Margin from "../Margin";
import DynamicColorButton from "../DynamicColorButton";
import Contour from "../ui/Contour";
import { Link, useParams } from "react-router-dom";
import { FetchTeam } from "../../api/team";
import { FetchCheckRecruitsApplied } from "../../api/recruits";


function TeamLeftMenu() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    day: "",
    week: "",
    max_attendance: "",
    current_attendance: "",
    frequency: 1,
    location: "무관",
    is_leader: false,
    is_closed: false,
    applied_count: 0,
  });
  const [appliedMemberData, setAppliedMemberData] = useState([]);

  const { id } = useParams();

  const fetchTeamData = async () => {
    try {
      const teamData = await FetchTeam({ id });

      if (teamData) {
        setFormData({
          name: teamData.name || "",
          category: teamData.category || "",
          day: teamData.day || "",
          week: teamData.week || "무관",
          max_attendance: teamData.max_attendance || "",
          current_attendance: teamData.current_attendance || "",
          frequency: teamData.frequency || "",
          location: teamData.location || "없음",
          is_leader: teamData.s_leader,
          is_closed: teamData.is_closed,
        });
      }
    } catch (error) {
      console.error("Error fetching team data:", error.message);
    }
  };

  const fetchAppliedMemberData = async () => {
    try {
      const appliedMemberData = await FetchCheckRecruitsApplied({ id });

      if (appliedMemberData) {

        setAppliedMemberData(
          appliedMemberData.length
        );
      }
    } catch (error) {
      console.error("Error fetching applied member data:", error.message);
    }
  }

  useEffect(() => {
    fetchTeamData();
    fetchAppliedMemberData();
  }, [id]);
  return (
    <div className="w-72 h-full flex justify-center items-center">
      <div className="mt-4 w-64 h-[500px] mx-4 bg-gray-100 flex flex-col items-center text-center rounded-lg ">
        {/* 상단 여백 적용 */}
        <Margin top="5" />

        {/* 프로필 정보 */}
        <div>
          <div className="relative overflow-hidden rounded-full bg-black h-28 w-28">
            <img
              src="프로필사진의_이미지_경로.jpg"
              alt="프로필 사진"
              className="프로필_이미지_스타일 rounded-full"
            />
            asdasd
          </div>
          <Margin top="3" />
          <div className=" font-bold">{formData.category}</div>
          <div className="  text-sm">{formData.name}</div>
        </div>
        <Margin bottom="1" />
        {/* 수평 선 */}
        <Contour></Contour>
        <Margin top="2" />
        {/* 모집 정보 */}
        <div className="w-48">
          <div className="text-lg font-bold">
            모집 중 {formData.is_closed ? "" : "✔️"}
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div className="">최대인원</div>
              <div className="">{formData.max_attendance}명</div>
            </div>
            <div className="flex justify-between">
              <div className="">현재인원</div>
              <div className="">{formData.current_attendance}명</div>
            </div>
            <div className="flex justify-between">
              <div className="">신청인원</div>
              <div className="">{appliedMemberData}명</div>
            </div>
          </div>
        </div>

        {/* 리더 정보 */}
        <Margin top="2" />
        <div className="text-lg mt-2 mb-5">
          내 역할: {formData.is_leader ? "리더" : "구성원"}
        </div>
        <Margin top="1" />

        {/* 버튼 */}
        <DynamicColorButton color="blue" text="모임정보수정" />
        <Margin top="1" />
        <DynamicColorButton color="red" text="탈퇴하기" />
      </div>
    </div>
  );
}

export default TeamLeftMenu;
