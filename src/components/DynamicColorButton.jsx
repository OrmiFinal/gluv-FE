import React from 'react';

function DynamicColorButton({ color , text ,btnstyle,onClick }) {
  const getButtonColor = () => {
    switch (color) {
      case 'red':
        return 'bg-red-500 hover:bg-red-700';
      case 'blue':
        return 'bg-blue-500 hover:bg-blue-700';
      // 추가적인 색상에 대한 케이스를 필요에 따라 추가할 수 있습니다.
      default:
        return 'bg-gray-500 hover:bg-gray-700';
    }
  };

  return (
    <button className={`text-white font-bold rounded ${getButtonColor()} ${btnstyle}`}
    onClick={onClick}
    >
      {text}
    </button>
  );
}

export default DynamicColorButton;
