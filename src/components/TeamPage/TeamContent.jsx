import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';
import Contour from '../ui/Contour';
import { Link } from 'react-router-dom';

const TeamContent = () => {
  const [formData, setFormData] = useState({
    introduction: '',
    address: '',
    date: '',
    month: '',
    creationDate: null,
  });

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = () => {
    console.log('Save clicked. Form data:', formData);
  };

  const handleRegister = () => {
    console.log('Register clicked. Form data:', formData);
  };

  return (
    <div className="flex items-center justify-center w-full m-3 mt-0 h-full">
      <div className="mt-9 w-full p-6 rounded-md">
        <div className="text-lg font-bold mb-3">모집 상세 내용</div>
        <Contour></Contour>
      
        <div className="w-full border-[1px] p-4 rounded-md">
          <div>
            <div className="text-sm font-semibold mb-1">모임 소개</div>
            <div
              className="w-full h-[150px] border-[1px] p-2 text-base "
              // 기존 코드에서 제공한 예시 텍스트 대신 formData.introduction을 사용
              // formData.introduction 값이 없는 경우 기본 텍스트를 사용하려면 || 연산자를 활용할 수 있습니다.
            >
              {formData.introduction || '모임 소개 예시'}
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">모임 주소</div>
            <div
              className="w-full h-[35px]  p-2 text-base "
            >
              {formData.address || '모임 주소 예시'}
            </div>
          </div>
          <Margin top="2" />
          <Contour></Contour>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">모임 날짜</div>
            <div
              className="w-full h-[40px]  p-2 text-base "
            >
              {formData.date || '모임 날짜 예시'}
            </div>
          </div>
          <Margin top="2" />
          <Contour></Contour>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">모임 시간</div>
            <div className="flex space-x-2">
              <div
                className="w-[100px] h-[40px]  p-2 text-base "
              >
                {formData.month || '3월'}
              </div>
              <div
                className="w-[100px] h-[40px] p-2 text-base "
              >
                {formData.dayOfMonth || '2일'}
              </div>
              <div
                className="w-[100px] h-[40px]  p-2 text-base "
              >
                {formData.dayOfWeek || '14시'}
              </div>
            </div>
          </div>

          <Margin   plustailwind="h-10" />
       
          <div className="w-full h-[40px] flex items-end  justify-between">
            <div className='flex'>
            <div className="self-end  w-24">모임 생성일</div>
            <div
              className="self-end "
            >
              2020.03.01
            </div>
            </div>
            <div className='flex'>
            <Margin left="4" />
            <Link to="/recruits/1">
            <DynamicColorButton
         
              text="모집글가기"
              btnstyle="py-2 px-2 self-end"
              onClick={handleRegister}
            />
            </Link>
            <Margin left="4" />
            <DynamicColorButton
              color="blue"
              text="채팅방입장"
              btnstyle="py-2 px-2 self-end"
              onClick={handleSave}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContent;
