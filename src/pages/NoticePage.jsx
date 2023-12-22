import React from 'react'
import RecruitmentLeftMenu from '../components/PostListPage/RecruitmentLeftMenu'
import NoticeContent from '../components/NoticePage/NoticeContent'

function NoticePage() {
    return (
    <div className='flex w-screen'>
    <RecruitmentLeftMenu/>
    <NoticeContent/>
    </div>
    )
}

export default NoticePage