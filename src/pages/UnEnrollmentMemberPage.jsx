// UnEnrollmentMemberPage.js

import React, { useState, useEffect, useContext } from 'react';
import EnrollTeamBox2 from '../components/EnrollTeamBox2';
import TeamLeftMenu from '../components/TeamPage/TeamLeftMenu';
import { getTeamMembers } from '../api/team';
import { useParams } from 'react-router-dom';
import Margin from '../components/Margin';
import Contour from '../components/ui/Contour';
import { AuthContext } from '../context/authContext';
import UnEnollBackDesin from '../components/UnEnollBackDesin';

function UnEnrollmentMemberPage() {
  const { id } = useParams();
  const [teamMembers, setTeamMembers] = useState([]);
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
  }, [id, getDecodedToken]);

  const IamLeader = teamMembers && teamMembers.some(member => member.user === userId && member.is_leader);

  const asd = () => {
    console.log(teamMembers);
    console.log(IamLeader);
  };

  return (
    <div className='flex'>
      <TeamLeftMenu />
      <div className='flex items-center justify-center bg-gray-100'>
        <UnEnollBackDesin>
          <div className='m-3'>
            <div className='flex'>
              <div className='text-2xl font-bold '> 구성원 관리</div>
            </div>
            <Contour />
            <button onClick={asd}>Log Team Members</button>
            <Margin top='2' plustailwind='h-3' />
            <Margin top='3' plustailwind='h-3' />
            {IamLeader ? (

              // 내가팀장일떄 발생
              <div className='border p-2 flex flex-col rounded-md'>
                {teamMembers && teamMembers.length > 0 && teamMembers
                  .filter(member => member.is_approved)
                  .map((member, index) => (
                    <div key={index}>
                      {member.is_approved ? (
                        <EnrollTeamBox2
                          profileData={member}
                          role={member.is_leader ? '리더!' : '팀원!'}
                          postiId={id}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              // 내가 팀장이나리때발생
              <div className='border p-2 flex flex-col rounded-md'>
                {teamMembers && teamMembers.length > 0 && teamMembers
                  .filter(member => member.is_approved)
                  .map((member, index) => (
                    <div key={index}>
                      {member.is_approved ? (
                        <EnrollTeamBox2
                          profileData={member}
                          role={member.is_leader ? '리더!' : '팀원!'}
                          postiId={id}
                        />
                      ) : (
                        <></>
                      )}
                    </div>
                  ))}
              </div>
            )}
            <Margin top='3' plustailwind='h-3' />
            <Margin top='2' plustailwind='h-4' />
            <Contour />
            <Margin top='2' />
          
          </div>
        </UnEnollBackDesin>
      </div>
    </div>
  );
}

export default UnEnrollmentMemberPage;
