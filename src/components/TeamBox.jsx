import React from 'react'
import Margin from './Margin'

function TeamBox() {
  return (
    <div>  <div className='flex'>

    <div className='relative overflow-hidden rounded-full bg-black   h-20 w-20'>
      <img
        src='프로필사진의_이미지_경로.jpg'
        alt='프로필 사진'
        className='프로필_이미지_스타일 rounded-full'
      />
    </div>
    <Margin left="3" />
    <div className=' bg-gray-100 w-80  rounded-lg  h-20'></div>
    </div>
</div>
  )
}

export default TeamBox