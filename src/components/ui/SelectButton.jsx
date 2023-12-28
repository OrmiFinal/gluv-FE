import React, { useState } from 'react';

import Margin from '../Margin';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion, useAnimation } from 'framer-motion';


/**
 * SelectButton 컴포넌트
 * @component
 * @param {Object} props - 버튼 및 드롭다운 설정
 * @param {string} props.btnTitle - 버튼의 타이틀
 * @param {string[]} props.btnoptions - 드롭다운 메뉴 리스트 []
 * @param {function} props.onOptionSelect - 옵션 선택 시 호출되는 콜백 함수
 * @returns {JSX.Element} SelectButton 컴포넌트
 */
const SelectButton = ({ btnTitle, btnoptions, onOptionSelect,title,size,text_center }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(btnTitle);

  const options = btnoptions;

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect(option);
  };

  const containerControls = useAnimation();
  const dropdownControls = useAnimation();

  const handleOpen = async () => {
    await containerControls.start({ opacity: 1 });
    await dropdownControls.start({ y: 0, opacity: 1 });
  };

  const handleClose = async () => {
    await dropdownControls.start({ y: -10, opacity: 0 });
    await containerControls.start({ opacity: 0 });
  };

  return (
    <div className=''>
<div className={`text-sm ${text_center === undefined ? 'text-left' : 'text-center'}`}>{title==undefined?"카테고리":title}</div>
      <Margin plustailwind="h-2" />
      <div className={`relative flex flex-col ${size ? `w-${size}` : 'w-60' } `}>
      
       
      <motion.button
        className={` bg-light-100 border text-black py-2 px-4 ${size ? `w-${size}` : 'w-[30vw] ' } 
        
        rounded-xl focus:outline-none flex items-center relative z-[100]`}
        onClick={() => {
          setIsOpen(!isOpen);
          isOpen ? handleClose() : handleOpen();
        }}
      >
        <span className="mr-2">{selectedOption}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </motion.button>

      <div className='w-full flex justify-center'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={containerControls}
          className="absolute top-full mt-2 bg-white border inline-flex rounded-md shadow-md overflow-hidden whitespace-nowrap z-[1000]"
        >
          {isOpen && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={dropdownControls}
              className="py-2"
            >
              {options.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                  style={{ zIndex: 1000 }}
                >
                  {option}
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default SelectButton;
