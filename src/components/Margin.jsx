import React from 'react';

function Margin({ top, right, bottom, left, plustailwind }) {
  const marginClass = ` 
    ${top !== null ? `mt-${top}` : ''} 
    ${right !== null ? `mr-${right}` : ''} 
    ${bottom !== null ? `mb-${bottom}` : ''} 
    ${left !== null ? `ml-${left}` : ''} 
    ${plustailwind || ''}`;

  return (
    <div className={marginClass}>
      {/* 내용 */}
    </div>
  );
}

export default Margin;
