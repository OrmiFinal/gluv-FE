import React from 'react'
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'

function RecruitmentLeftMenu() {
  return (
    <div className='flex flex-col'>
    <div><TopMenu></TopMenu></div>
    <div><BottomMenu></BottomMenu></div>
    </div>
  )
}

export default RecruitmentLeftMenu