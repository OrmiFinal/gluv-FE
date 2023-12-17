import React from 'react'
import Contour from '../ui/Contour'
import Margin from '../Margin'

function TopMenu() {
  return (
    <div>  
    <div className='w-72 h-full flex justify-center items-center'>
    <div className='mt-12 w-[25vw] mx-4 border-[1px] rounded-lg border-black flex flex-col   text-center'>

      {/* 상단 여백 적용 */}


      {/* 프로필 정보 */}
    

        <div className='flex  self-start mx-3 my-8'>
        <div className='relative overflow-hidden rounded-ful  rounded-full bg-black h-6 w-6  '>
          <img
            src='프로필사진의_이미지_경로.jpg'
            alt='프로필 사진'
            className='h-7 w-7 rounded-full'
          />
     
          

       
  
        </div>
        <Margin left="3"></Margin>
        <div className=''>유저 A</div>
      </div>


<Contour></Contour>

<div className='m-3 flex  justify-around'>
      {/* 버튼 */}
      <div className='font-mono rounded   w-20 h-8 border border-gray-400 bg-gray-200
       hover:bg-gray-300 text-gray-700 hover:text-gray-800
        justify-center align-middle
       '
        >
          게시물 0
        </div>

      <div className='font-mono rounded w-20 h-8 border border-gray-400 bg-gray-200
       hover:bg-gray-300 text-gray-700 hover:text-gray-800
       justify-center align-middle
       '
        >
          댓글 0
        </div>
    </div>
    </div>
  </div></div>
  )
}

export default TopMenu