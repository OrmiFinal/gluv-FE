import React from 'react'

import {TeamContextProvider} from '../components/TeamPage/TeamContext';

import TeamLeftMenu from '../components/TeamPage/TeamLeftMenu';
import EditPage from '../components/Recruit/EditPage'

function RecruitPostEditPage() {
    return (
        <TeamContextProvider>
            <div className='flex'>
                <TeamLeftMenu></TeamLeftMenu>
                <EditPage></EditPage>
            </div>
        </TeamContextProvider>
    )
}

export default RecruitPostEditPage