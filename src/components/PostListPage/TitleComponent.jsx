import React from 'react';

function TitleComponent({ plustailwind, onClick, title, subcategory }) {
  return (
    <div>
      <div
        className={`text-2xl border-black cursor-pointer ${plustailwind}`}
        onClick={() => onClick(subcategory)}
      >
        {title}
      </div>
    </div>
  );
}

export default TitleComponent;
