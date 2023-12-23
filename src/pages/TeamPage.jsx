import React, {useEffect, useContext } from 'react'
import TeamLeftMenu from '../components/TeamPage/TeamLeftMenu';
import TeamContent from '../components/TeamPage/TeamContent';
import {TeamContextProvider} from '../components/TeamPage/TeamContext';


function TeamPage() {
  return (
    <TeamContextProvider>
      <div className='flex'>
        <TeamLeftMenu></TeamLeftMenu>
        <TeamContent></TeamContent>
      </div>
    </TeamContextProvider>
  )
}

export default TeamPage