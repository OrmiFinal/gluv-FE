import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeamBox from "../components/TeamBox";
import Margin from "../components/Margin";
import Contour from "../components/ui/Contour";
import TitleComponent from "../components/PostListPage/TitleComponent";

function TeamManagementPage() {
  const [teamDataList, setTeamDataList] = useState([]);
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState([]);

  const handlePageChange = async (pageUrl) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = user?.access_token || "";
      if (!accessToken) {
        console.error("Access token not available");
        return null;
      }

      // 페이지 이동 시 해당 페이지의 데이터를 가져옴
      const response = await axios.get(pageUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      // 현재 페이지 데이터 및 페이지 이동 후 데이터 업데이트
      setTeamDataList(response.data.results);
      if (response.data.next) setNextPage(response.data.next)
      else setNextPage(null);
      if (response.data.previous) setPrevPage(response.data.previous)
      else setPrevPage(null);
    } catch (error) {
      console.error("Fetching data failed:", error.message);
    }
  };

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const accessToken = user?.access_token || "";
        if (!accessToken) {
          console.error("Access token not available");
          return null;
        }
        const response = await axios.get(
          "http://127.0.0.1:8000/teams/myteams/",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setTeamDataList(response.data["results"]);
        if (response.data["next"]) setNextPage(response.data["next"])
        else setNextPage(null);
        if (response.data["previous"]) setPrevPage(response.data["previous"])
        else setPrevPage(null);
        return response.data;
      } catch (error) {
        console.error("Fetching notice failed:", error.message);
        return null;
      }
    };
    fetchTeamData();
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-[65vw] bg-white rounded-md shadow-md p-6 ">
        <div className="w-full">
          <Margin top="3" />
          <div className="m-3">
            <div className="flex">
              <TitleComponent
                title="활동중인 모임"
                isFontBold="fontBold"
                plustailwind="text-sm font-bold underline"
              />
              <Link to="/teams/1/members/">
                <TitleComponent
                  title="신청중인 모임"
                  isFontBold="fontBold"
                  plustailwind="text-sm ml-4"
                />
              </Link>
              <Link to="/users/myposts/">
                <TitleComponent
                  title="내가 쓴 게시글"
                  isFontBold="fontBold"
                  plustailwind="text-sm ml-4"
                />
              </Link>
            </div>
            <Contour />
            <Margin top="2" plustailwind="h-3" />
            <div className="border p-2 flex flex-col rounded-md">
              <div className="m-8 ml-6">
                {teamDataList.map((teamData) => (
                  <Link to={`/teams/${teamData.id}`} key={teamData.id}>
                    <div>
                      <TeamBox teamData={teamData} />
                      <Margin top="3" plustailwind="h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <Margin top="2" plustailwind="h-4" />
            <Contour />
            <Margin top="2" />
            <div className="flex justify-center items-center">
              {/* 이전 페이지 링크 */}
              {prevPage && (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handlePageChange(prevPage)}
                  className="cursor-pointer text-blue-500 hover:underline mr-2"
                >
                  이전 페이지
                </div>
              )}

              {/* 다음 페이지 링크 */}
              {nextPage && (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handlePageChange(nextPage)}
                  className="cursor-pointer text-blue-500 hover:underline"
                >
                  다음 페이지
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamManagementPage;
