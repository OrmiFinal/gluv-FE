import React from 'react';
import Margin from './Margin';

function TeamBox({ profileData }) {
  const { profilePicture, nickname, description } = profileData;

  return (
    <div className='flex'>
      <div className='relative overflow-hidden rounded-full bg-black h-20 w-20'>
        <img
          src={profilePicture}
          alt='프로필 사진'
          className='프로필_이미지_스타일 rounded-full'
        />
      </div>
      <Margin left="3" />
      <div className='bg-gray-100 w-80 rounded-lg h-20'>
        <p className='text-lg font-bold'>{nickname}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TeamBox;
