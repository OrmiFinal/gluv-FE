import React from 'react';
import Margin from './Margin';
import DynamicColorButton from './DynamicColorButton';

function EnrollTeamBox2({ profileData }) {
  const { profilePicture, nickname, description } = profileData;

  const AcceptanceBtn=()=>{
    console.log("수락")
  }
  const RefuseBtn=()=>{
    console.log("거절")
  }
  return (
    <div className='flex'>
      <div className='relative overflow-hidden rounded-full bg-black h-20 w-20'>
        <img
          src={profilePicture}
          alt='프로필 사진'
          className='프로필_이미지_스타일 rounded-full'
        />
      </div>
      <Margin left="3"  plustailwind="w-3"/>
      <div className='bg-gray-100 w-72 rounded-lg h-20 flex justify-center items-center'>
        <p className='text-lg font-bold'>{nickname}</p>
       
      </div>
      <Margin left="3"  plustailwind="w-6"/>
      <div className='flex flex-col  justify-center items-center'>
      <DynamicColorButton  btnstyle="w-24 h-8" color="blue" text="모임장 이전" onClick={AcceptanceBtn} />
  
      <DynamicColorButton btnstyle="w-24 h-8 mt-2" color="red" text="강퇴" onClick={RefuseBtn}></DynamicColorButton>
      </div>
      
      
      </div>



  );
}

export default EnrollTeamBox2;
