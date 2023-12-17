import React from 'react'
import RecruitmentContent from '../components/RecruitmentPage/RecruitmentContent'
import RecruitmentLeftMenu from '../components/RecruitmentPage/RecruitmentLeftMenu'

function RecruitmentPage() {
  return (
    <div className='flex w-screen'>
    <RecruitmentLeftMenu/>
    <RecruitmentContent/>
    </div>
  )
}

export default RecruitmentPage