import { React, createContext, useState, useEffect } from "react";

import { FetchTeam } from "../../api/team";

import { useParams } from "react-router-dom";

const TeamContext = createContext();

const TeamContextProvider = ({ children }) => {
    const { id } = useParams();

    const [teamData, setTeamData] = useState({
        id: "",
        name: "",
        category: "",
        day: "",
        week: "",
        max_attendance: 0,
        current_attendance: 0,
        frequency: "",
        location: "지역 무관",
        is_leader: false,
        is_closed: false,
        applied_member : 0,
        start_time : '',
        end_time : '',
        recruit_id : 0,
        introduce : '',
        chatroom_id : 0,
    });

    const fetchTeamData = async () => {
        try {
            const teamData = await FetchTeam({ id });
            console.log(teamData)
            if (teamData) {
                setTeamData({
                    id: teamData.id,
                    name: teamData.name || "",
                    category: teamData.category || "",
                    day: teamData.day || "",
                    week: teamData.week || "무관",
                    max_attendance: teamData.max_attendance || 0,
                    current_attendance: teamData.current_attendance || 0,
                    frequency: teamData.frequency || "",
                    location: teamData.location || "지역 무관",
                    is_leader: teamData.is_leader,
                    is_closed: teamData.is_closed,
                    applied_member : teamData.applied_member,
                    start_time : teamData.start_time,
                    end_time : teamData.end_time,
                    recruit_id : teamData.recruit_id,
                    introduce : teamData.introduce,
                    chatroom_id : teamData.chatroom_id,
                });
            }
        } catch (error) {
            console.error("Error fetching team data:", error.message);
        }
    };

    useEffect(() => {
        fetchTeamData();
    }, [id]);

    return (
        <TeamContext.Provider value={{ teamData }}>
        {children}
        </TeamContext.Provider>
    );
};

export {TeamContext, TeamContextProvider};
