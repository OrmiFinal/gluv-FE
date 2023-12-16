import React, { useState } from 'react';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EditorComponent from '../components/ui/EditorComponent';
import InputField from '../components/InputField';

function RecruitmentPostEntryPage() {
  const [formData, setFormData] = useState({
    introduction: '',
    address: '',
    month: '',
    dayOfMonth: '',
    dayOfWeek: '',
    weekOfMonth: '',
    creationDate: null,
    targetAudience: '',
    maxParticipants: '',
    content: '',
    category: ''
  });

  const handleContentChange = (newContent) => {
    setFormData({ ...formData, content: newContent });
    // You can perform additional actions with the new content if needed
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
    console.log(formData);
  };

  const formatDateInfo = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const [month, day, year, dayOfWeek] = formattedDate.split(' ');
    return { month, day, year, dayOfWeek };
  };

  const handleDateChange = (date) => {
    const formattedInfo = formatDateInfo(date);

    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeekFirstDay = firstDayOfMonth.getDay();
    const dayOfMonth = date.getDate();
    const weekOfMonth = Math.ceil((dayOfMonth + dayOfWeekFirstDay) / 7);

    const month = formattedInfo.month.replace(/,\s*$/, '');
// 달력으로 얼마나 정하는지 회의
    setFormData({
      ...formData,
      creationDate: date,
      month: month,
      dayOfMonth: dayOfMonth,
      dayOfWeek: formattedInfo.dayOfWeek,
      weekOfMonth: weekOfMonth
    });
    console.log(formData);
  };

  const handleSave = () => {
    console.log('Save clicked. Form data:', formData);
    // Add logic for saving the form data
  };

  const handleRegister = () => {
    console.log('Register clicked. Form data:', formData);
    // Add logic for registering the form data
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-[80vw] bg-white rounded-md shadow-md p-6">
        <Margin top="1" />
        <div className="w-full border-[1px] border-black ">
          <Margin top="3" />
          <div className="m-3">
            <div className="text-xl font-bold mb-4">기본정보</div>

            <div className="w-full border p-4 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <InputField label="대상모임" id="targetAudience" value={formData.targetAudience} onChange={handleChange} />
                <InputField label="최대인원" id="maxParticipants" value={formData.maxParticipants} onChange={handleChange} />
                <InputField label="카테고리" id="category" value={formData.category} onChange={handleChange} />
                <InputField label="지역" id="address" value={formData.address} onChange={handleChange} />
              </div>
            </div>

<div> 
   <div className="mr-4">모임 날짜
              <DatePicker
                selected={formData.creationDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
                className="border p-2 w-[150px] rounded-md ml-2 text-sm"
              /></div>
            <div className="flex mb-4">
      
              <InputField label="달" id="month" value={formData.month} onChange={handleChange} />
              <InputField label="한달에몇번" id="dayOfMonth" value={formData.dayOfMonth} onChange={handleChange} />
              <InputField label="한주에몇번" id="dayOfWeek" value={formData.dayOfWeek} onChange={handleChange} />
              <InputField label="한달에 몇주" id="weekOfMonth" value={formData.weekOfMonth} onChange={handleChange} />
            </div>

            </div>

            
            <div className="w-full p-4 mb-4">
              <input
                className='w-full border-b p-2 mb-4 rounded-md'
                value={formData.introduction}
                placeholder='글제목'
                onChange={(e) => handleChange(e, 'introduction')}
              />

              <div className='text-xl font-bold w-[120px] mb-4'>글작성 </div>

              <div className='flex'>
                <EditorComponent content={formData.content} onChange={handleContentChange} />
              </div>
            </div>

            <div className="w-full p-4 flex justify-end items-end">
              <DynamicColorButton color="red" text="취소" btnstyle=" " onClick={handleRegister} />
              <Margin left="2"></Margin>
              <DynamicColorButton color="blue" text="작성" btnstyle="" onClick={handleSave} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentPostEntryPage;
