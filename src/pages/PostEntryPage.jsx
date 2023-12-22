import React, { useState } from 'react';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import EditorComponent from '../components/ui/EditorComponent';
import SelectButton from '../components/ui/SelectButton';
import { FetchCreatePost } from '../api/post';
import { Link } from 'react-router-dom';

function PostEntryPage() {
  const [formData, setFormData] = useState({
    introduction: '', //제목
    targetAudience: '', // 어떤게시판이지
    content: '', // 내용
    selectedCategory: '' // 새로운 state 추가
  });



  const handleContentChange = (newContent) => {
    setFormData({ ...formData, content: newContent });
  };

  const handleChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSave = async () => {
    const response = await FetchCreatePost({
      title: formData.introduction,
      content: formData.content,
      category: formData.selectedCategory
    });

    console.log('Save clicked. Form data:', formData);
    
    if (response) {
      console.log('Post created successfully:', response);
      // Additional actions upon successful creation
    } else {
      console.error('Failed to create post');
      // Handle failure or provide feedback to the user
    }
  };

  const handleBack = () => {
    console.log('Cancel clicked. Form data:', formData);
    // Handle the logic for canceling the form data
  };

  const handleCategorySelect = (selectedCategory) => {
    setFormData({ ...formData, selectedCategory });
    console.log('Selected Category:', selectedCategory);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className='w-[80vw] bg-white rounded-md shadow-md p-6'>
        <Margin top="1" />
        <div className='w-full border-[1px] border-black '>
          <Margin top="3" />
          <div className='m-3'>
            <div className='text-xl font-bold mb-4'>게시물작성</div>
            <div className='w-full border py-4 pl-0 pr-4 mb-4'>
              <div className='d-flex '>
                <div className='flex w-full'>
                  <Margin plustailwind="w-4" left="4" />
                  <SelectButton
                    btnTitle="카테고리 선택"
                    btnoptions={[
                      'notice',       
                      'qna',
                      'creation-novel',
                      'creation-poem',
                      'creation-essay',
                      'comm-novel',
                      'comm-poem',
                      'comm-essay'
                    ]}
                    onOptionSelect={handleCategorySelect}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className='text-2xl font-bold mb-4'></div>
              <input
                className='w-full border-b p-2 mb-4 rounded-md'
                value={formData.introduction}
                placeholder='글제목'
                onChange={(e) => handleChange(e, 'introduction')}
              />
              <div className='text-xl font-bold w-[120px] text-black mb-4'>글작성 </div>
              <div className='flex'>
                <EditorComponent content={formData.content} onChange={handleContentChange} />
              </div>
            </div>
            <Margin top="3" plustailwind="h-10" />
            <div className='w-full border p-4 flex justify-end items-end'>
            <Link to="/PostListPage">
              <DynamicColorButton
                color="red"
                text="취소"
                btnstyle="py-1 px-1 mr-2"
                onClick={handleBack}
              /></Link> 
              <DynamicColorButton
                color="blue"
                text="작성"
                btnstyle="py-1 px-1 "
                onClick={handleSave}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostEntryPage;
