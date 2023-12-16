import React from 'react'
import RecruitmentContent from '../components/RecruitmentPage/RecruitmentContent';
import RecruitmentLeftMenu from '../components/RecruitmentPage/RecruitmentLeftMenu';
import useWindowSize from '../hooks/useWindowSzie';
function RecruitmentPage() {
  const { screenSize } = useWindowSize();
  return (
    <div className='flex  justify-center items-center'>
      {["sm","md"].includes(screenSize)?(<></>):( <RecruitmentLeftMenu/>)}
   
    <RecruitmentContent/>

    </div>
  )
}

export default RecruitmentPage