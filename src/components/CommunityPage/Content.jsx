import React, { useState, useContext, useEffect } from 'react';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';

import 'react-datepicker/dist/react-datepicker.css';

import useWindowSize from '../../hooks/useWindowSzie';
import Contour from '../ui/Contour';
import TitleComponent from '../RecruitmentPage/TitleComponent'; // Adjust the path as needed
import BulletinBoard from '../RecruitmentPage/BulletinBoard';
import { ModelContext } from '../../context/ModelContextProvider';
import { SendAuthRequest } from '../../api/post';

function Content({ category }) {
    const { screenSize } = useWindowSize();
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const location = useLocation();
            const queryParams = new URLSearchParams(location.search);
            const category = queryParams.get('category');
   
            try {
                const response = await SendAuthRequest(
                    `/posts/?category=${category}`, 
                    'get');
        
                if (response && response.results) {
                const filteredContentResults = content.results.filter(result => result !== null);
                setPostData([...response.results, ...filteredContentResults]);
                }
            } catch (error) {
                console.error('Error fetching post:', error.message);
            }
        };
    
        fetchPost();
    }, []);


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
        fetchData()
    console.log(fetchData())

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
            <Contour></Contour>

            <Margin top="2" plustailwind="h-3" />

            <Margin top="2" />

            <Margin top="2" plustailwind="h-4" />

            <Contour></Contour>
            <Margin top="2" plustailwind="h-4" />
            <BulletinBoard data={postData} />
        
        <Margin top="2" plustailwind="h-4" />
        
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

export default Content;
