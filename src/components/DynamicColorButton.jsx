import React from 'react';

function DynamicColorButton({ color, text, btnstyle, onClick }) {
  const getButtonStyle = () => {
    switch (color) {
      case 'red':
        return 'border border-rose-400 bg-gray-200 hover:bg-light-300 text-rose-400 hover:bg-rose-100';
      case 'blue':
        return 'border border-sky-400 bg-gray-200 hover:bg-light-300 text-sky-400 hover:bg-sky-100';
      case 'black':
        return ' bg-black text-white';
      // 추가적인 색상에 대한 케이스를 필요에 따라 추가할 수 있습니다.
      default:
        return ' border border-gray-400 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-800';
    }
  };

  return (
    <button
      className={`font-bold rounded w-24 h-12  ${getButtonStyle()} ${btnstyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default DynamicColorButton;
