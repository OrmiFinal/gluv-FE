import React, { useState, useEffect, useContext } from 'react';
import TeamLeftMenu from '../components/TeamPage/TeamLeftMenu';
import { getTeamMembers } from '../api/team';
import { useParams } from 'react-router-dom';
import Margin from '../components/Margin';
import Contour from '../components/ui/Contour';

import TeamManagementBackDesin from '../components/TeamManagement/TeamManagementBackDesin';

import { AuthContext } from '../context/AuthContext';
import {TeamContextProvider} from '../context/TeamContext';
import TeamManagementFooter from '../components/TeamManagement/TeamManagementFooter';
import TeamApply from '../components/TeamManagement/TeamApply';

function TeamRegistrationManagement() {
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


  return (
    <div>
    <TeamContextProvider>
       <div className='flex'>
      <TeamLeftMenu />

      <div className='flex items-center justify-center bg-gray-100'>
        <TeamManagementBackDesin>
          <div className='m-3'>
            <div className='flex'>
              <div className='text-2xl font-bold '> 신청인원 관리</div>
            </div>
            <Contour />

 
           

            <Margin top='2' plustailwind='h-3' />
            <Margin top='3' plustailwind='h-3' />

           
            {teamMembers && teamMembers.length > 0 && teamMembers
              .filter(member => !member.is_approved   )
              .map((member, index) => (
                <div key={index}>
                  {!member.is_approved && IamLeader && (
                    <TeamApply
                      profileData={member}
                      postiId={id}
                    />
                  )}
                </div>
              ))}

            <Margin top='3' plustailwind='h-3' />
            <Margin top='2' plustailwind='h-4' />
            <Contour />
            <Margin top='2' />
          </div>
        </TeamManagementBackDesin>
      </div>
    </div>
    </TeamContextProvider>
    <TeamManagementFooter></TeamManagementFooter>
    </div>
  );
}

export default TeamRegistrationManagement;
