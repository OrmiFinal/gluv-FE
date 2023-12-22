import React, { useState, useEffect, useContext } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import useWindowSize from '../hooks/useWindowSzie';
import { ModelContext } from '../context/ModelContextProvider';
import TitleComponent from '../components/PostListPage/TitleComponent';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import Contour from '../components/ui/Contour';
import BulletinBoard from '../components/PostListPage/BulletinBoard';
import { FetchNoticeData } from '../api/post';

function ProfileEditingPage() {
  const { screenSize } = useWindowSize();
  const [noticeData, setNoticeData] = useState([]);

  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        const response = await FetchNoticeData();
        console.log(response)
        console.log("response.results")
        console.log(response.results)
        if (response && response.results) {
          setNoticeData(response.results);
        }
        
      } catch (error) {
        console.error('Error fetching notice data:', error.message);
      }
    };

    fetchNoticeData();
  }, []); // Run the effect only once on component mount

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

  const { selectedCategory } = useContext(ModelContext);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className='w-[65vw] bg-white rounded-md shadow-md p-6'>
        <div className='w-full'>
          <Margin top="3" />
          <div className='m-3'>
            <div className='text-2xl font-bold mb-4 '>{selectedCategory.category}</div>
            <Contour></Contour>
            <Margin top="2" plustailwind="h-3"/>
            <Margin top="2" />
            <div className='border p-2 flex rounded-md'>
              <TitleComponent title="활동중인 모임" isFontBold={"fontBold"} plustailwind="text-lg font-bold " />
              <Margin left="4" plustailwind="w-2"/>
              <TitleComponent title="게시물" isFontBold={"fontBold"} plustailwind="text-lg font-roboto " />
              <Margin left="3" />
              <TitleComponent title="댓글" isFontBold={"fontBold"} plustailwind="text-lg font-roboto " />
              <Margin left="3" />
            </div>
            <Margin top="2" plustailwind="h-4"/>
            <Contour></Contour>
            <Margin top="2" plustailwind="h-4"/>
            {/* Use the fetched noticeData instead of jsonData */}
            <BulletinBoard data={noticeData} />
            <Margin top="2" plustailwind="h-4"/>
            <div>
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
            <div className='flex justify-between items-center'>{}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEditingPage;
