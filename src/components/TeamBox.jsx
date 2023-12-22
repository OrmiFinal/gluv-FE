import React from 'react';
import Margin from './Margin';

function TeamBox({ teamData }) {
  const { id, image, category, name } = teamData;

  return (
    <div className='flex'>
      <div className='relative overflow-hidden rounded-full bg-black h-20 w-20'>
        <img
          src={image}
          alt='모임 사진'
          className='모임_이미지_스타일 rounded-full'
        />
      </div>
      <Margin left="3" />
      <div className='bg-gray-100 w-80 rounded-lg h-20 pt-2'>
        <p className='text-lg font-bold'>{category}</p>
        <p className='pt-1'>{name}</p>
      </div>
    </div>
  );
}

export default TeamBox;
