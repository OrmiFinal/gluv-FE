import React from 'react';

function Margin({ top, right, bottom, left, plustailwind }) {
  const marginClass = ` 
    ${top !== undefined ? `mt-${top}` : ''} 
    ${right !== undefined ? `mr-${right}` : ''} 
    ${bottom !== undefined ? `mb-${bottom}` : ''} 
    ${left !== undefined ? `ml-${left}` : ''} 
    ${plustailwind || ''}`;

  return (
    <div className={marginClass}>
      {/* 내용 */}
    </div>
  );
}

export default Margin;
