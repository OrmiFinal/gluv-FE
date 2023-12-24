import React, { useState } from 'react';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EditorComponent from '../components/ui/EditorComponent';
import InputField from '../components/InputField';
import SelectButton from '../components/ui/SelectButton';
import { createRecruitsPost } from '../api/recruits';

function RecruitmentPostEntryPage() {
  const [formData, setFormData] = useState({

    author: '',
    title: '',
    content: '',
    region: '지역 무관',
    frequency: '',
    week: '',
    day: '',
    category: '',
    maxAttendance: '',

  });

  const handleContentChange = (newContent) => {
    setFormData({ ...formData, content: newContent });
    // You can perform additional actions with the new content if needed
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
    console.log(formData);
  };


  const regions = [
    '서울', '경기', '충남', '충북', '강원', '경남', '경북', '제주', '전남', '전북'
  ];

  const formatDateInfo = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return { formattedDate };
  };

  const handleDateChange = (date) => {
    console.log("Selected date:", date);
    const formattedInfo = formatDateInfo(date);
    console.log("Formatted info:", formattedInfo);
  
    setFormData({
      ...formData,
      date: formattedInfo.date,
    });
  
    console.log("Updated formData:", formData);
  };
  

  const handleSave = async () => {
    console.log('Save clicked. Form data:', formData);

    try {
      const postData = {

        author: formData.author,
        title: formData.title,
        content: formData.content,
        region: formData.region,
        frequency: formData.frequency,
        week: formData.week,
        day: formData.day,
        category: formData.category,
        maxAttendance: formData.maxAttendance,
      };

      const response = await createRecruitsPost(postData);

      console.log("Recruits post created successfully:", response);
    } catch (error) {
      console.error("Posting recruits failed:", error.message);
    }
  };

  const handleCategorySelect = (selectedCategory) => {
    setFormData({ ...formData, category: selectedCategory });
  };

  const handleRegionSelect = (region) => {
    setFormData({
      ...formData,
      region: region,
    });
  };
  const handleFrequencySelect = (selectedValue, type) => {
    console.log(selectedValue);
    setFormData({ ...formData, [type]: selectedValue });
  };
  

  const handleBack = () => {
    console.log('Register clicked. Form data:', formData);
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
              
             
                <InputField label="최대인원" id="maxAttendance" value={formData.maxAttendance} onChange={handleChange} />
                <div>
                  <Margin plustailwind="h-1" />
                  <SelectButton
                    className="text-sm text-left"
                    btnTitle="카테고리 선택"
                    btnoptions={[
                     
                    '독서모임',
                    '합평모임',
                    '책집필모임',

                
                    ]}
                    onOptionSelect={handleCategorySelect}
                  />
                </div>
               


              </div>
            </div>

            <div>
              <div className="flex  justify-around   mb-4">
              <SelectButton
                className="text-sm text-left"
                btnTitle={'주기없음'}
                title="주기"
                btnoptions={['주기없음', '매일', '매주', '매월']}
                size="w-[30vw]"
                onOptionSelect={(selectedValue) => handleFrequencySelect(selectedValue, "frequency")}
              />

              <SelectButton
                className="text-sm text-left"
                btnTitle={'첫번째'}
                title="주"
                btnoptions={['첫번째', '두번째', '세번째', '네번째', '다섯번째']}
                size="w-[30vw]"
                onOptionSelect={(selectedValue) => handleFrequencySelect(selectedValue, "week")}
                disabled={formData.frequency === '주기없음'}
              />

              <SelectButton
                className="text-sm text-left"
                btnTitle={'월요일'}
                title="요일"
                btnoptions={['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']}
                size="w-[30vw]"
                onOptionSelect={(selectedValue) => handleFrequencySelect(selectedValue, "day")}
                disabled={formData.frequency === '주기없음'}
              />

          
              </div>
            </div>

            <div className="w-full p-4 mb-4">
            <div className='text-xl font-bold w-[120px] mb-4'>글제목 </div>
              <input
                className='w-full border-b p-2 mb-4 rounded-md'
                value={formData.title}
                placeholder='글제목'
                onChange={(e) => handleChange(e, 'title')}
              />

              <div className='text-xl font-bold w-[120px] mb-4'>글작성 </div>

              <div className='flex'>
                <EditorComponent content={formData.content} onChange={handleContentChange} />
              </div>
            </div>

            <div className="w-full p-4 flex justify-end items-end">
              <DynamicColorButton color="red" text="취소" btnstyle=" " onClick={handleBack} />
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
