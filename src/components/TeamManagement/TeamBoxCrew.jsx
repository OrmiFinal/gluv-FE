import React from 'react';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';
import crew from '../../assets/crew.png';
import leader from '../../assets/leader.png';
import { TeamLeave, applyToTeam, kickTeamMember } from '../../api/team';


function TeamBoxCrew({ profileData,  postiId,isMe ,setPageReload}) {
  const { profilePicture, user,nickname } = profileData;



  // 나가기버튼
  const RefuseBtn =  async () => {
    try{
      await TeamLeave({id:postiId})

  
     setPageReload((prev)=>{prev+1})
  }
    catch{  setPageReload((prev)=>{prev+1})}

  };
  



  return (
    <div className={`flex  bg-blue-100`}>
      <div className={`relative overflow-hidden rounded-full bg-blue-500 h-20 w-20`}>
        <img
          src={profilePicture ? profilePicture  : crew}
          alt='프로필 사진'
       
        />
      </div>
      <Margin left='3' plustailwind='w-3' />
      <div className={` w-72 rounded-lg h-20 flex justify-center items-center border-blue-200 border-2`}>
      {nickname} {'팀원 입니다'}
      </div>
      <Margin left='3' plustailwind='w-6' />
      <div className='flex flex-col justify-center items-center'>
  {user==isMe?(<DynamicColorButton btnstyle='w-24 h-8 mt-2' color='red' text='나가기' onClick={RefuseBtn}></DynamicColorButton>):(<></>)}

      </div>
    </div>
  );
}

export default TeamBoxCrew;
