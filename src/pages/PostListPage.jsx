import {React, useState} from 'react'

import Content from '../components/PostListPage/Content'
import RecruitmentLeftMenu from '../components/PostListPage/RecruitmentLeftMenu'

function PostListPage() {
  return (
    <div className='flex'>
    <RecruitmentLeftMenu/>
    <Content />
    </div>
  )
}

export default PostListPage