import React from 'react'
import { useParams } from 'react-router-dom';

import EditPage from '../components/Recruit/EditPage'
import TeamDetailLeftMenuPage from '../components/TeamDetailPage/TeamDetailLeftMenuPage';

function RecruitPostEditPage() {
    const { id } = useParams();

    return (
    <div className='flex'>
        {/* 구성 : 메뉴, 기본 설정, 구성원 관리, 신청인원 관리, 모임 삭제 */}
        {/* <TeamDetailLeftMenuPage></TeamDetailLeftMenuPage> */}
        
        <EditPage postID={id}></EditPage>
    </div>
    )
}

export default RecruitPostEditPage