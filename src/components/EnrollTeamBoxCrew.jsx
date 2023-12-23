import React from 'react';
import Margin from './Margin';
import DynamicColorButton from './DynamicColorButton';
import crew from '../assets/crew.png';
import leader from '../assets/leader.png';
import { TeamLeave, applyToTeam, kickTeamMember } from '../api/team';

function EnrollTeamBoxCrew({ profileData,  postiId,isMe }) {
  const { profilePicture,  is_leader, user } = profileData;



  // 나가기버튼
  const RefuseBtn = async () => {
    
    await TeamLeave({id:postiId})
  };
  

  // Define a dynamic class for the profile image style
  const profileImageStyle = is_leader ? '프로필_이미지_스타일_leader' : '프로필_이미지_스타일_member';

  return (
    <div className={`flex ${is_leader ? 'bg-red-100' : 'bg-blue-100'}`}>
      <div className={`relative overflow-hidden rounded-full ${is_leader ? 'bg-red-500' : 'bg-blue-500'} h-20 w-20`}>
        <img
          src={profilePicture ? profilePicture : is_leader ? leader : crew}
          alt='프로필 사진'
          className={profileImageStyle}
        />
      </div>
      <Margin left='3' plustailwind='w-3' />
      <div className={` w-72 rounded-lg h-20 flex justify-center items-center ${is_leader ? 'border-red-200 border-2' : 'border-blue-200 border-2'}`}>
        {is_leader ? '현재 팀장입니다' : '팀원 입니다'}
      </div>
      <Margin left='3' plustailwind='w-6' />
      <div className='flex flex-col justify-center items-center'>
  {user==isMe?(<DynamicColorButton btnstyle='w-24 h-8 mt-2' color='red' text='나가기' onClick={RefuseBtn}></DynamicColorButton>):(<></>)}

      </div>
    </div>
  );
}

export default EnrollTeamBoxCrew;
