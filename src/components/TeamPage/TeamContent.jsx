import React, { useState } from 'react';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function TeamContent() {
  const [formData, setFormData] = useState({
    introduction: '',
    address: '',
    date: '',
    month: '',
    creationDate: null, // Change to use a Date object for the datepicker
  });

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, creationDate: date });
  };

  const handleSave = () => {
    // Handle the logic for saving the form data
    console.log('Save clicked. Form data:', formData);
  };

  const handleRegister = () => {
    // Handle the logic for registering the form data
    console.log('Register clicked. Form data:', formData);
  };

  return (
    <div className="flex items-center justify-center w-full m-3 mt-0 h-full">
      <div className='mt-9 w-full h-[500px] overflow-hidden'>
        <div className='h-[22px]'>모집 상세 내용</div>
        <Margin top="1" />
        <div className='w-full border-[1px] h-[470px] border-black '>
          <Margin top="3" />
          <div className='m-3'> 
            <div className=''>모임 소개</div>
            <input
              className='w-full border-[1px] h-[150px] border-black'
              value={formData.introduction}
              onChange={(e) => handleChange(e, 'introduction')}
            />
            <div className=''>모임 주소</div>
            <input
              className='w-full border-[1px] h-[35px] border-black'
              value={formData.address}
              onChange={(e) => handleChange(e, 'address')}
            />
            <div className=''>모임 날짜</div>
            <input
              className='w-full border-[1px] h-[40px] border-black'
              value={formData.date}
              onChange={(e) => handleChange(e, 'date')}
            />
            <div className=''>모임 시간</div>
            <div className='flex'>
              달:    <input
                className='w-[100px] border-[1px] h-[40px] border-black'
                value={formData.month}
                onChange={(e) => handleChange(e, 'month')}
              />
              몇번째:    <input
                className='w-[100px] border-[1px] h-[40px] border-black'
                value={formData.dayOfMonth}
                onChange={(e) => handleChange(e, 'dayOfMonth')}
              />
              요일:    <input
                className='w-[100px] border-[1px] h-[40px] border-black'
                value={formData.dayOfWeek}
                onChange={(e) => handleChange(e, 'dayOfWeek')}
              />
            </div>
     
            <Margin top="4" />
            <div className='w-full border-[1px] h-[40px] flex items-end'>
              <div className='self-end'>모임 생성일</div>
              <Margin left="4" />
              <DatePicker
                selected={formData.creationDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                className='w-[120px] border-[1px] h-[35px] border-black text-sm'
              />
              <Margin left="4" />
              <DynamicColorButton
                color="red"
                text="둥록하기"
                btnstyle="py-2 px-2"
                onClick={handleRegister}
              />
              <Margin left="4" />
              <DynamicColorButton
                color="red"
                text="저장하기"
                btnstyle="py-2 px-2"
                onClick={handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamContent;
