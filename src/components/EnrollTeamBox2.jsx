import React from 'react';
import Margin from './Margin';
import DynamicColorButton from './DynamicColorButton';
import crew from '../assets/crew.png';
import leader from '../assets/leader.png';
import { applyToTeam, kickTeamMember } from '../api/team';

function EnrollTeamBox2({ profileData, aa, postiId }) {
  const { profilePicture,  is_leader, user } = profileData;

  // is_leader true 일때  파티장 변경 ??? 할줄모르겠어요 -> 새로운파티장 넣기 -> 파티장삭제요청
  const AcceptanceBtn = () => {
    console.log('모임장 이전');
  console.log(profilePicture)
  };

  // 리더 킥! (팀장일때만 하니까 리더킥만 있으면 됩니다!) 에러가뜹니다 '../api/team'; 에있습니다
  const RefuseBtn = async () => {
    console.log('강퇴');
    try {
      await kickTeamMember({ id: postiId, userToKickId: user });
      console.log('Successfully kicked the team member');
      aa(); // Assuming 'aa' is a function to refresh or update the component
    } catch (error) {
      console.error('Failed to kick the team member:', error.message);
    }
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
        <DynamicColorButton btnstyle='w-24 h-8' color='blue' text='모임장 이전' onClick={AcceptanceBtn} />
        <DynamicColorButton btnstyle='w-24 h-8 mt-2' color='red' text='강퇴' onClick={RefuseBtn}></DynamicColorButton>
      </div>
    </div>
  );
}

export default EnrollTeamBox2;
