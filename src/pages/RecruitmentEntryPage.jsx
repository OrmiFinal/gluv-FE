import React, { useState } from 'react';

import { createRecruitsPost } from '../api/recruits';

import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import EditorComponent from '../components/ui/EditorComponent';
import InputField from '../components/InputField';
import SelectButton from '../components/ui/SelectButton';

import 'react-datepicker/dist/react-datepicker.css';
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
    setFormData((prevData) => ({ ...prevData, content: newContent }));
  };

  const handleChange = (e, field) => {
    setFormData((prevData) => ({ ...prevData, [field]: e.target.value }));
  };

  const formatDateInfo = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return { formattedDate };
  };

  const handleDateChange = (date) => {
    const formattedInfo = formatDateInfo(date);
    setFormData((prevData) => ({ ...prevData, date: formattedInfo.date }));
  };

  const handleSave = async () => {
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
      console.log("formData" ,formData)
    } catch (error) {
      console.error("Posting recruits failed:", error.message);
    }
  };

  const handleCategorySelect = (selectedCategory) => {
    setFormData((prevData) => ({ ...prevData, category: selectedCategory }));
  };

  const handleRegionSelect = (region) => {
    setFormData((prevData) => ({ ...prevData, region: region }));
  };

  const handleFrequencySelect = (selectedValue, type) => {
    if (selectedValue === "주기없음") {
      setFormData((prevData) => ({ ...prevData, week: "", day: "" }));
    }
    setFormData((prevData) => ({ ...prevData, [type]: selectedValue }));
  };

  const regions = [
    '서울', '경기', '충남', '충북', '강원', '경남', '경북', '제주', '전남', '전북'
  ];

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-[80vw] bg-white rounded-md shadow-md p-6">
        <Margin top="1" />
        <div className="w-full border-[1px] border-black">
          <Margin top="3" />
          <div className="m-3">
            <div className="text-xl font-bold mb-4">기본정보</div>

            <div className="w-full border p-4 mb-4">
              <div className="grid grid-cols-2 gap-4">
                <InputField label="최대인원" id="maxAttendance" value={formData.maxAttendance} onChange={(e) => handleChange(e, 'maxAttendance')} />
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
              <div className="flex justify-around mb-4">
                <SelectButton
                  className="text-sm text-left"
                  btnTitle={'주기없음'}
                  title="주기"
                  btnoptions={['주기없음', '매일', '매주', '매월']}
                  size="w-[30vw]"
                  text_center={true}
                  onOptionSelect={(selectedValue) => handleFrequencySelect(selectedValue, "frequency")}
                />
                {formData.frequency === "주기없음" ? (
                  <div className='flex flex-col justify-center items-center text-center'>
                    <div>{"주기없음"}</div>
                    <div className="mt-2 bg-white border inline-flex rounded-md h-10 py-3 px-4 justify-center items-center ">
                      <div>{"주기를 설정 하여 주세요"}</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <SelectButton
                      className="text-sm text-left"
                      btnTitle={'첫번째'}
                      title="주"
                      btnoptions={['첫번째', '두번째', '세번째', '네번째', '다섯번째']}
                      size="w-[30vw]"
                      text_center={true}
                      onOptionSelect={(selectedValue) => handleFrequencySelect(selectedValue, "week")}
                    />
                  </>
                )}

                {formData.frequency === "주기없음" ? (
                  <div className='flex flex-col justify-center items-center text-center'>
                    <div>{"주기없음"}</div>
                    <div className="mt-2 bg-white border inline-flex rounded-md h-10 py-3 px-4 justify-center items-center ">
                      <div>{"주기를 설정 하여 주세요"}</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <SelectButton
                      className="text-sm text-left"
                      btnTitle={'월요일'}
                      title="요일"
                      btnoptions={['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']}
                      size="w-[30vw]"
                      text_center={true}
                      onOptionSelect={(selectedValue) => handleFrequencySelect(selectedValue, "day")}
                    />
                  </>
                )}
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
              {/* <DynamicColorButton color="red" text="취소" btnstyle="" onClick={handleBack} /> */}
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
