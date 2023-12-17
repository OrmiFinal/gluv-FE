import React from 'react'

function TitleComponent({plustailwind,onClick,title}) {
  return (
    <div>  <div
    className={`text-2xl border-black cursor-pointer ${plustailwind}`}
    onClick={onClick}
  >
    {title}
  </div></div>
  )
}

export default TitleComponent