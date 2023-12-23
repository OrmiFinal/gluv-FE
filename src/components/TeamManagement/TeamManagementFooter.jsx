import React from 'react'
import Contour from '../ui/Contour'
import Margin from '../Margin'

function TeamManagementFooter() {
  return (
    <div>  <div className='flex w-full top-10 items-end  bg-gray-100 flex-col' >
    <Contour /><div>
            <Margin top="2" />
            <div className='text-sm flex  m-5 '>
              <a href="https://www.flaticon.com/kr/free-icons/" title="포켓몬 아이콘">제작자: Darius Dan</a>
              <a href="https://www.flaticon.com/kr/free-icons/" title="캐릭터 아이콘">제작자: Swifticons</a>
            </div>
            </div>
      </div></div>
  )
}

export default TeamManagementFooter