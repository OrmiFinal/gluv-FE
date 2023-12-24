import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import Margin from "../Margin";
import DynamicColorButton from "../DynamicColorButton";
import BulletinBoard from "../PostListPage/BulletinBoard";

function MainContents() {
  const [postDataList, setPostDataList] = useState([]);
  
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
          `${baseURL}/teams/myteams/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setPostDataList(response.data["results"]);
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
    <div className="flex flex-col">
      <Margin top="2" plustailwind="h-4" />

      <BulletinBoard data={postDataList} />
      <Margin top="2" plustailwind="h-4" />
      <div>
        <div
          className={`flex items-center text-center `}
        >
          <div className="w-20 h-10 border border-black"></div>
          <Margin left="2" />
          <input
            className={`border p-2 rounded-md`}
            placeholder="검색 입력..."
          />
          <DynamicColorButton
            color="blue"
            text="검색"
            btnstyle="py-2 px-2 ml-2"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">{}</div>
    </div>
  );
}

export default MainContents;
