import React from 'react'
import RecruitmentContent from '../components/PostListPage/RecruitmentContent'
import RecruitmentLeftMenu from '../components/PostListPage/RecruitmentLeftMenu'

function PostListPage() {
  return (
    <div className='flex w-screen'>
    <RecruitmentLeftMenu/>
    <RecruitmentContent/>
    </div>
  )
}

export default PostListPage