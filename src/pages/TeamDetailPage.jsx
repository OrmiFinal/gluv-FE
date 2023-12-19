import React from 'react'
import TeamDetailContentPage from '../components/TeamDetailPage/TeamDetailContentPage'
import TeamDetailLeftMenuPage from '../components/TeamDetailPage/TeamDetailLeftMenuPage'

function TeamDetailPage() {
  return (
    <div className='flex'>
    <TeamDetailLeftMenuPage></TeamDetailLeftMenuPage>
    <TeamDetailContentPage></TeamDetailContentPage>
    </div>
  )
}

export default TeamDetailPage