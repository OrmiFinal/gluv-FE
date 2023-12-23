// UnEnrollmentMemberPage.js

import React, { useState, useEffect, useContext } from 'react';

import TeamLeftMenu from '../components/TeamPage/TeamLeftMenu';
import { getTeamMembers } from '../api/team';
import { useParams } from 'react-router-dom';
import Margin from '../components/Margin';
import Contour from '../components/ui/Contour';

import TeamManagementBackDesin from '../components/TeamManagementBackDesin';
import TeamBoxLeader from '../components/TeamBoxLeader';
import TeamBoxCrew from '../components/TeamBoxCrew';
import { AuthContext } from '../context/AuthContext';
import {TeamContextProvider} from '../components/TeamPage/TeamContext';

function TeamManagement() {
  const { id } = useParams();
  const [teamMembers, setTeamMembers] = useState([]);
  const [pageReload, setPageReload] = useState(false);

  const { getDecodedToken } = useContext(AuthContext);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const members = await getTeamMembers({ id: id });
        setTeamMembers(members);
      } catch (error) {
        console.error('Fetching team members failed:', error.message);
      }
    };

    const decodedToken = getDecodedToken();
    if (decodedToken) {
      const user_id = decodedToken.user_id;
      setUserId(user_id);
    }

    fetchTeamMembers();
  }, [id, getDecodedToken,pageReload]);

  const IamLeader = teamMembers && teamMembers.some(member => member.user === userId && member.is_leader);
  {/* 단순 확인용 버튼 나중에 지워야합니다! */}
  const asd = () => {
    console.log(teamMembers);
    console.log(id);
  };

  return (
    <TeamContextProvider>
      <div className='flex'>
        <TeamLeftMenu />
          <div className='flex items-center justify-center bg-gray-100'>
            <TeamManagementBackDesin>
              <div className='m-3'>
                <div className='flex'>
                <div className='text-2xl font-bold '> 구성원 관리</div>
              </div>
              <Contour />
              {/* 단순 확인용 버튼 나중에 지워야합니다! */}
              <button onClick={asd}>Log Team Members</button>
              <Margin top='2' plustailwind='h-3' />
              <Margin top='3' plustailwind='h-3' />
      
    {teamMembers && teamMembers.length > 0 && teamMembers
      .filter(member => member.is_approved)
      .map((member, index) => (
        <div key={index}>
          {member.is_approved ? (
            IamLeader ? (
              <TeamBoxLeader
                profileData={member}
                postiId={id}
                setPageReload={setPageReload}
              />
            ) : (
              <TeamBoxCrew
                profileData={member}
                setPageReload={setPageReload}
                postiId={id}
                isMe={userId}
              />
            )
          ) : null}
        </div>
      ))}
  </div>
              <Margin top='3' plustailwind='h-3' />
              <Margin top='2' plustailwind='h-4' />
              <Contour />
              <Margin top='2' />
          </TeamManagementBackDesin>
        </div>
      </div>
      
    </TeamContextProvider>
  );
}

export default TeamManagement;
