import React, { useState, useContext } from 'react';
import useWindowSize from '../hooks/useWindowSzie';
import { ModelContext } from '../context/ModelContextProvider';
import TitleComponent from '../components/RecruitmentPage/TitleComponent';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import Contour from '../components/ui/Contour';
import RecruitmentList from '../components/RecruitmentList';
import SelectButton from '../components/ui/SelectButton';

// Sample Data
const sampleData = [
  {
    id: 1,
    title: "첫 번째 모집글",
    content: "이 모집글은 모든 모집글의 내용입니다.",
    date: "2023-12-20", // 등록일
    views: 150, // 조회수
    likes: 30, // 좋아요 수
    imageUrl: "https://example.com/image1.jpg", // 이미지 URL
  },
  {
    id: 2,
    title: "두 번째 모집글",
    content: "이 모집글은 모든 모집글의 내용입니다.",
    date: "2023-12-21",
    views: 120,
    likes: 25,
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    id: 3,
    title: "세 번째 모집글",
    content: "이 모집글은 모든 모집글의 내용입니다.",
    date: "2023-12-22",
    views: 200,
    likes: 40,
    imageUrl: "https://example.com/image3.jpg",
  },
  {
    id: 4,
    title: "네 번째 모집글",
    content: "이 모집글은 모든 모집글의 내용입니다.",
    date: "2023-12-23",
    views: 180,
    likes: 35,
    imageUrl: "https://example.com/image4.jpg",
  },
  {
    id: 5,
    title: "네 번째 모집글",
    content: "이 모집글은 모든 모집글의 내용입니다.",
    date: "2023-12-23",
    views: 180,
    likes: 35,
    imageUrl: "https://example.com/image4.jpg",
  },
  {
    id: 6,
    title: "네 번째 모집글",
    content: "이 모집글은 모든 모집글의 내용입니다.",
    date: "2023-12-23",
    views: 180,
    likes: 35,
    imageUrl: "https://example.com/image4.jpg",
  },
  // 추가적인 모집글을 필요한 만큼 배열에 추가할 수 있습니다.
];

function TeamSearchPage() {
  const { screenSize } = useWindowSize();
  const { selectedCategory } = useContext(ModelContext);

  const [formData, setFormData] = useState({
    introduction: '',
    targetAudience: '',
    content: '',
    region: '',
  });

  const handleCategorySelect = (selectedRegion) => {
    setFormData({ ...formData, region: selectedRegion });
    console.log('Selected Region:', selectedRegion);
  };

  const inputClasses = {
    xl: 'w-2/3',
    xxl: 'w-2/3',
    lg: 'w-1/2',
    md: 'w-2/3',
    sm: 'w-1/2',
  };

  const combinedClasses = Object.entries(inputClasses)
    .map(([size, classValue]) => (screenSize === size ? classValue : ''))
    .join(' ');

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className='w-[65vw] bg-white rounded-md shadow-md p-6'>
        <div className='w-full'>
          <Margin top="3" />
          <div className='m-3'>
            <div className='text-2xl font-bold mb-4'>팀원 모집</div>
            <Margin top="2" plustailwind="h-3"/>
            <Contour></Contour>
            <div className='flex'>
              <TitleComponent title="전체" isFontBold={"fontBold"} plustailwind="text-lg font-bold " />
              <Margin left="4" />
              <TitleComponent title="독서모임" isFontBold={"fontBold"} plustailwind="text-lg font-roboto " />
              <Margin left="3" />
              <TitleComponent title="합평모임" isFontBold={"fontBold"} plustailwind="text-lg font-roboto " />
              <Margin left="3" />
              <TitleComponent title="책집필모임" isFontBold={"fontBold"} plustailwind="text-lg font-roboto " />
              <Margin left="3" />
              <SelectButton
                btnTitle="지역 선택"
                btnoptions={[
                  '서울',
                  '경기',
                  '강원',
                  '충청북도',
                  '충청남도',
                  '전라북도',
                  '전라남도',
                  '경상북도',
                  '경상남도',
                  '제주특별자치도'
                ]}
                title=" "
                onOptionSelect={handleCategorySelect}
              />
              <Margin right="36" plustailwind="w-2" />
            </div>
            <Margin top="1" plustailwind="h-1"/>
            <Contour></Contour>
            <div className='border p-2 rounded-md'>
              <RecruitmentList data={sampleData} />
            </div>
            <Margin top="2" plustailwind="h-4"/>
            <Contour></Contour>
            <div>
              <div className={`flex items-center text-center ${screenSize === 'sm' ? 'justify-start' : 'justify-center'}`}>
                <div className='w-20 h-10 border border-black'></div>
                <input
                  className={`border p-2 rounded-md ${combinedClasses}`}
                  placeholder='검색 입력...'
                />
                <DynamicColorButton
                  color="blue"
                  text="검색"
                  btnstyle="py-2 px-2 ml-2"
                />
              </div>
            </div>
            <div className='flex justify-between items-center'>
              {/* 필요에 따라 내용을 추가합니다. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSearchPage;
