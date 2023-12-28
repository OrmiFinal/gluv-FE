import React, { useState, useEffect } from "react";

import axios from "axios";

import TeamBox from "../TeamBox";
import Margin from "../Margin";
import Contour from "../ui/Contour";

function MainContents() {
  const [teamDataList, setTeamDataList] = useState([]);
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = async (pageUrl) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = user?.access_token || "";
      if (!accessToken) {
        console.error("Access token not available");
        return null;
      }

      // 페이지 이동 시 해당 페이지의 데이터를 요청
      const response = await axios.get(pageUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setTeamDataList(response.data.results);
      // 페이지네이션 처리
      if (response.data.next) setNextPage(response.data.next);
      else setNextPage(null);
      if (response.data.previous) setPrevPage(response.data.previous);
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
        const baseURL = import.meta.env.VITE_APP_API_KEY;

        const response = await axios.get(
          `${baseURL}/teams/myteams/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );


        setTeamDataList(response.data["results"]);
        if (response.data["next"]) setNextPage(response.data["next"]);
        else setNextPage(null);
        if (response.data["previous"]) setPrevPage(response.data["previous"]);
        else setPrevPage(null);

        return response.data;
      } catch (error) {
        console.error("Fetching data failed:", error.message);
        return null;
      }
    };
    fetchTeamData();
  }, []);
  return (
    <div>
      <div className="border p-2 flex flex-col rounded-md h-[520px]">
        <div className="m-8 ml-6">
          {teamDataList.map((teamData) => (
              <div key={teamData.id}>
                <TeamBox teamData={teamData} />
                <Margin top="3" plustailwind="h-3" />
              </div>
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
            onClick={() => {
              handlePageChange(prevPage);
              setCurrentPage(currentPage - 1);
            }}
            className="cursor-pointer text-blue-500 hover:underline mr-2"
          >
            prev
          </div>
        )}

        <div className="mr-2">{currentPage}</div>

        {/* 다음 페이지 링크 */}
        {nextPage && (
          <div
            role="button"
            tabIndex={0}
            onClick={() => {
              handlePageChange(nextPage);
              setCurrentPage(currentPage + 1);
            }}
            className="cursor-pointer text-blue-500 hover:underline"
          >
            next
          </div>
        )}
      </div>
    </div>
  );
}

export default MainContents;
