
import React, { useState } from 'react';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';


function PostEntryPage() {
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
            <div className='text-2xl font-bold mb-4'>글제목</div>
            <input
              className='w-full border p-2 mb-4 rounded-md'
              value={formData.introduction}
              onChange={(e) => handleChange(e, 'introduction')}
            />
            <div className='text-xl font-bold mb-4'>기본정보 </div>
            
            <div className='w-full border p-4 mb-4'>

              <div className='d-flex '> {/* 가운데 정렬 부분 */}
                <div className='flex'>
                  <div className='text-center'>개시판</div>
                  <Margin left="3" />
                  <input
                    className='border p-2 w-[80px] rounded-md'
                    value={formData.targetAudience}
                    onChange={(e) => handleChange(e, 'targetAudience')}
                  />
                </div>
              </div>
            </div>



            <div className='w-full border p-4 flex justify-end items-end'>
              <DynamicColorButton
                color="red"
                text="취소"
                btnstyle="py-1 px-1 mr-2"
                onClick={handleRegister}
              />
              <DynamicColorButton
                color="blue"
                text="작성"
                btnstyle="py-1 px-1"
                onClick={handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostEntryPage