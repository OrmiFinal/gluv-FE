import React from 'react'

import TeamLeftMenu from '../components/TeamPage/TeamLeftMenu';
import TeamContent from '../components/TeamPage/TeamContent';
function TeamPage() {
  return (
 <div className='flex'>
  <TeamLeftMenu></TeamLeftMenu>
  <TeamContent></TeamContent>

 </div>
  )
}

export default TeamPage