import React, { useState, useContext, useEffect } from 'react';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';

import 'react-datepicker/dist/react-datepicker.css';

import useWindowSize from '../../hooks/useWindowSzie';
import Contour from '../ui/Contour';
import TitleComponent from './TitleComponent'; // Adjust the path as needed
import BulletinBoard from './BulletinBoard';
import { ModelContext } from '../../context/ModelContextProvider';
import { FetchNoticeData } from '../../api/post';

function RecruitmentContent() {
  const { screenSize } = useWindowSize();
  const [posturl, setPostUrl] = useState({
    category: "",
    subcategorie: "",
  });
 
  const [noticeData, setNoticeData] = useState([]);

  const { selectedCategory } = useContext(ModelContext);
  const categories = [
    { name: '공지사항', subcategories: [] },
    { name: '질문게시판', subcategories: [] },
    {
      name: '자유게시판',
      subcategories: ['전체', '잡담', '소설', '수필', '시'],
    },
    {
      name: '창작게시판',
      subcategories: ['전체', '소설', '수필', '시'],
    },
  ];

  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        const response = await FetchNoticeData();
        console.log()
        if (response && response.results) {
          setNoticeData(response.results);
        }
      } catch (error) {
        console.error('Error fetching notice data:', error.message);
      }
    };

    fetchNoticeData();
  }, []); // Run the effect only once on component mount



  useEffect(() => {
   console.log(noticeData)
   setPostUrl((prev) => ({
    ...prev,
    category:selectedCategory,
   
  }));
  console.log("posturl")
  console.log("posturl")
  console.log(posturl)
  console.log("posturl")
  console.log("posturl")
  }, [noticeData]); // Run the effect only once on component mount

  const inputClasses = {
    xl: 'w-2/3',
    xxl: 'w-2/3',
    lg: 'w-1/2',
    md: 'w-2/3',
    sm: 'w-1/2',
  };

  const SubCategory = (url) => {
    
    setPostUrl((prev) => ({
      category: selectedCategory.category,
      subcategorie: url,
    }));
    console.log(posturl)

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
            <div className='text-2xl font-bold mb-4 '>{selectedCategory.category}</div>
            <Contour></Contour>

            <Margin top="2" plustailwind="h-3" />

            <Margin top="2" />
            <div className='border p-2 flex rounded-md'>
              {categories.map((category, index) => (
                selectedCategory.category === category.name && category.subcategories.map((subcategory, subIndex) => (
                  <React.Fragment key={subIndex}>
                    {subIndex > 0 && <Margin left="3" />}
                    <TitleComponent
                      title={subcategory}
                      isFontBold={"fontBold"}
                      plustailwind="text-lg font-roboto"
                      onClick={() => SubCategory(subcategory)}
                    />
                               <Margin left="2" />
                  </React.Fragment>
                ))
              ))}
              <div style={{ visibility: 'hidden' }}>서브메뉴</div>
            </div>

            <Margin top="2" plustailwind="h-4" />

            <Contour></Contour>
            <Margin top="2" plustailwind="h-4" />
            <BulletinBoard data={noticeData} />
            <Margin top="2" plustailwind="h-4" />

            <Margin top="2" />
            <div className={`flex items-center text-center ${screenSize === 'sm' ? 'justify-start' : 'justify-center'}`}>
              <div className='w-20 h-10 border border-black'></div>
              <Margin left="2" />
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
        </div>
      </div>
    </div>
  );
}

export default RecruitmentContent;
