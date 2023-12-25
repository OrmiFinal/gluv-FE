import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Contour from '../ui/Contour';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';



const TeamDetailContentPage = () => {
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

    
    <div className="flex items-center justify-center  w-screen mt-0 h-full">
      <div className="mt-9   p-6 rounded-md w-[600px]">
        <div className="text-4xl ml-2 font-bold mb-3">모임 정보</div>

        <div className=' mx-auto overflow-hidden rounded-full bg-black h-28 w-28'>
            <img
              src='프로필사진의_이미지_경로.jpg'
              alt='프로필 사진'
              className='프로필_이미지_스타일 rounded-full'
            />
            asdasd
          </div>


        <Contour></Contour>
        <Margin top="2" />
        <div className="w-full border-[1px] p-4 rounded-md">
          <div>
            <div className="text-lg font-semibold mb-1">모임명</div>
            <div
              className="w-full text-base "
          
            >
              {formData.introduction || '모임명 예시'}
            </div>
            <Contour></Contour>
          </div>
          <div className="mt-4">
            <div className="text-sm font-semibold mb-1">모임 소개 예시</div>
            <div
              className="w-full h-[150px]  border-[1px] border-gray-200  p-2 text-base "
            >
              {formData.address || '모임 소개 예시'}
            </div>

          </div>
          <div className="mt-4">
            <div className="text-lg font-semibold mb-2">모임 주소</div>
            <div
              className="w-full text-base "
            >
              {formData.address || '모임 주소 예시'}
            </div>
          </div>
   
          <Contour></Contour>


          <Margin plustailwind='h-2' top="3" />
          <div className="mt-4">
            <div className="text-lg font-semibold mb-2">모임 날짜</div>
            <div
              className="w-full   text-base "
            >
                <div className='flex'>

                <div
                className="w-[100px]  text-base "
              >
                {formData.month || '3월'}
              </div>
              <div
                className="w-[100px] text-base "
              >
                {formData.month || '3일'}
              </div>
                </div>
            
            
            </div>
          </div>
       
          <Contour></Contour>
          <Margin plustailwind='h-3' top="3" />
          <div className="mt-4">
            <div className="text-lg font-semibold mb-1">모임 시간</div>
            <div className="flex space-x-2">
              <div
                className="w-[100px] text-base "
              >
                {formData.month || '3부터'}
              </div>
              <div
                className="w-[100px] text-base "
              >
                {formData.dayOfMonth || '2까지'}
              </div>
             
            </div>
          </div>
          
          <Contour></Contour>
          <Margin plustailwind='h-3' top="3" />
          <div className="mt-4">
            <div className="text-lg font-semibold my-1">모임 최대 인원</div>
            <div className="flex space-x-2">
              <div
                className="w-[100px] text-base  flex"
              >
              <div> '20'  </div> 
              <div> /</div> 
              <div> '30' </div> 
              <div>명 </div>
              </div>
             
             
            </div>
          </div>
          <Margin top="2" />
          <Contour></Contour>

          <Margin   plustailwind="h-10" />
 
          <div className="w-full h-[40px]  ">
            
            <div className='flex  justify-end'>
    
         
            <Margin left="4" />
            <DynamicColorButton
              color="blue"
              text="확인"
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

export default TeamDetailContentPage;
