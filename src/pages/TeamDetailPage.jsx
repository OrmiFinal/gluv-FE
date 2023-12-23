import React from 'react'
import TeamDetailContentPage from '../components/TeamDetailPage/TeamDetailContentPage'
import TeamLeftMenu from '../components/TeamPage/TeamLeftMenu';

function TeamDetailPage() {
  return (
    <div className='flex'>
   
    <TeamLeftMenu></TeamLeftMenu>
    <TeamDetailContentPage></TeamDetailContentPage>
    </div>
  )
}

export default TeamDetailPage