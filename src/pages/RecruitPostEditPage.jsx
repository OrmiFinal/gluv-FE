import React from 'react'
import { useParams } from 'react-router-dom';

import TeamLeftMenu from '../components/TeamPage/TeamLeftMenu';
import EditPage from '../components/Recruit/EditPage'
import {TeamContextProvider} from '../context/TeamContext';

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