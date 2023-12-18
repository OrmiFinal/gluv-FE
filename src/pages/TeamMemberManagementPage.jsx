import React from 'react'
import DynamicColorButton from '../components/DynamicColorButton'
import Margin from '../components/Margin'
import BulletinBoard from '../components/RecruitmentPage/BulletinBoard'
import Contour from '../components/ui/Contour'
import TitleComponent from '../components/RecruitmentPage/TitleComponent'
import TeamBox from '../components/TeamBox'

function TeamMemberManagementPage() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
    <div className='w-[65vw] bg-white rounded-md  shadow-md p-6  '>
      {/* 상단 여백 추가 */}
      <div className='w-full'>
        <Margin top="3" />
        <div className='m-3'>
          {/* 모임 상세 내용 제목 */}
          <div className='flex'>
          <TitleComponent title="활동중인 모집" isFontBold={"fontBold"} plustailwind="text-sm  font-mono  " />
          <Margin left="3" />
          <TitleComponent title="신청중인 모임" isFontBold={"fontBold"} plustailwind="text-sm font-mono " />
          </div>
          <Contour></Contour>

          <Margin top="2" plustailwind="h-3"/>
     
          <Margin top="2" />
          {/* 내용 영역 */}
          <div className='border p-2    flex flex-col rounded-md'>
          <TeamBox></TeamBox>  
          <Margin top="3" />
          <TeamBox></TeamBox>  
          <Margin top="3" />
          <TeamBox></TeamBox>  
</div>



   


          <Margin top="2" plustailwind="h-4"/>
     
          <Contour></Contour>
      

          {/* 아래 */}
          <Margin top="2" />
      

          <div className='flex justify-center items-center'>
          1,2,3,4
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TeamMemberManagementPage