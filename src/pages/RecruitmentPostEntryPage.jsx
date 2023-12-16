import React, { useState } from 'react';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function RecruitmentPostEntryPage() {
  const [formData, setFormData] = useState({
    introduction: '',
    address: '',
    date: '',
    month: '',
    dayOfMonth: '',
    dayOfWeek: '',
    weekOfMonth: '', // Added weekOfMonth field
    creationDate: null,
    targetAudience: '',
    maxParticipants: '',
    content: '',
  });

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const formatDateInfo = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const [month, day, year, dayOfWeek] = formattedDate.split(' ');
    return { month, day, year, dayOfWeek };
  };
  const handleDateChange = (date) => {
    const formattedInfo = formatDateInfo(date);
  
    // Calculate the week of the month
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeekFirstDay = firstDayOfMonth.getDay();
    const dayOfMonth = date.getDate();
    const weekOfMonth = Math.ceil((dayOfMonth + dayOfWeekFirstDay) / 7);
  
    // Remove trailing comma and trim any leading/trailing whitespaces
    const month = formattedInfo.month.replace(/,\s*$/, '');

    setFormData({
      ...formData,
      creationDate: date,
      month: month,
      dayOfMonth: dayOfMonth,
      dayOfWeek: formattedInfo.dayOfWeek,
      weekOfMonth: weekOfMonth,
    });
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
    <div className="flex items-center justify-center bg-gray-100">
      <div className='w-[80vw] bg-white rounded-md shadow-md p-6'>
        <Margin top="1" />
        <div className='w-full border-[1px] border-black '>
          <Margin top="3" />
          <div className='m-3'> 
            <div className='text-2xl font-bold mb-4'>모집글 제목</div>
            <input
              className='w-full border p-2 mb-4 rounded-md'
              value={formData.introduction}
              onChange={(e) => handleChange(e, 'introduction')}
            />
            <div className='text-xl font-bold mb-4'>기본정보 제목</div>
            
            <div className='w-full border p-4 mb-4'>
              <div className='flex justify-start'>
                <div className='flex'>
                  <div className='text-center'>대상모임</div>
                  <input
                    className='border p-2 w-[80px] rounded-md'
                    value={formData.targetAudience}
                    onChange={(e) => handleChange(e, 'targetAudience')}
                  />
                </div>
                <div className='flex ml-3'>
                  <div className='text-center'>최대인원</div>
                  <input
                    className='border p-2 w-[80px] rounded-md'
                    value={formData.maxParticipants}
                    onChange={(e) => handleChange(e, 'maxParticipants')}
                  />
                </div>
              </div>
              <div className='flex justify-start mt-2'>
                <div className='flex'>
                  <div className='text-center'>카테고리</div>
                  <input
                    className='border p-2 w-[80px] rounded-md'
                    value={formData.targetAudience}
                    onChange={(e) => handleChange(e, 'targetAudience')}
                  />
                </div>
                <div className='flex ml-3'>
                  <div className='text-center'>지역</div>
                  <input
                    className='border p-2 w-[80px] rounded-md'
                    value={formData.maxParticipants}
                    onChange={(e) => handleChange(e, 'maxParticipants')}
                  />
                </div>
              </div>
            </div>

            <div className='flex mb-4'>
              <div className='mr-4'>모임 날짜</div>
              <div className='flex'>
                <input
                  className='border p-2 w-[150px] rounded-md'
                  placeholder='Month'
                  value={formData.month}
                  onChange={(e) => handleChange(e, 'month')}
                />
                <input
                  className='border p-2 w-[50px] rounded-md ml-2'
                  placeholder='Day'
                  value={formData.dayOfMonth}
                  onChange={(e) => handleChange(e, 'dayOfMonth')}
                />
                <input
                  className='border p-2 w-[150px] rounded-md ml-2'
                  placeholder='Year'
                  value={formData.dayOfWeek}
                  onChange={(e) => handleChange(e, 'dayOfWeek')}
                />
                <input
                  className='border p-2 w-[50px] rounded-md ml-2'
                  placeholder='Week'
                  value={formData.weekOfMonth}
                  onChange={(e) => handleChange(e, 'weekOfMonth')}
                />
              </div>
            
            </div>
            <div className='flex mb-4'>
            <div className=''>모임 생성일</div>
              <DatePicker
                selected={formData.creationDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                className='border p-2 w-[120px] rounded-md ml-2 text-sm'
              />
          </div>
            <div className='w-full border p-4 mb-4'>
              <div className='text-2xl font-bold mb-4'>상세내용</div>
              <input
                className='w-full border p-2 h-[300px] rounded-md'
                value={formData.content}
                onChange={(e) => handleChange(e, 'content')}
              />
            </div>

            <div className='w-full border p-4 flex justify-end items-end'>
              <DynamicColorButton
                color="red"
                text="등록하기"
                btnstyle="py-2 px-1 mr-2"
                onClick={handleRegister}
              />
              <DynamicColorButton
                color="blue"
                text="저장하기"
                btnstyle="py-2 px-4"
                onClick={handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentPostEntryPage;
