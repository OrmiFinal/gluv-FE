import React, { useState, useContext, useEffect } from 'react';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';

import 'react-datepicker/dist/react-datepicker.css';

import useWindowSize from '../../hooks/useWindowSzie';
import Contour from '../ui/Contour';
import TitleComponent from './TitleComponent'; // Adjust the path as needed
import BulletinBoard from './BulletinBoard';
import { ModelContext } from '../../context/ModelContextProvider';
import { FetchAllContext,FetchNoticeData } from '../../api/post';
import { Link } from 'react-router-dom';

function RecruitmentContent() {
  const { screenSize } = useWindowSize();
  const [posturl, setPostUrl] = useState({
    category: "공지상황",
    subcategorie: "",
    page:""
  });

  
  const { selectedCategory,content,ToggleMiniChatModel } = useContext(ModelContext);
 
  const [postData, setPostData] = useState([]);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10; // 페이지당 아이템 수


  const [postPage, setPostPage] = useState(1);
  const [noticeData, setNoticeData] = useState([]);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
    ToggleMiniChatModel({
      content: {  page: currentPage },
    });

  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    ToggleMiniChatModel({
      content: {  page: currentPage},
    });
  };

  
  
  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        const response = await FetchNoticeData();
  
        if (response && response.results) {
          // Filter out null values from content.results
          const filteredContentResults = content.results.filter(result => result !== null);
  
          // Combine noticeData and filteredContentResults using the spread operator
          setNoticeData([...response.results, ...filteredContentResults]);
        }
        const totalItems = content.count || 0;
        setTotalPages(Math.ceil(totalItems / itemsPerPage));

      } catch (error) {
        console.error('Error fetching notice data:', error.message);
      }
    };
  
    fetchNoticeData();
  }, [content.results]);


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

  const handleSearchClick = () => {
    ToggleMiniChatModel({
      content: {  search: inputValue },
    });
  };


  
  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        const response = await FetchNoticeData();

        if (response && response.results) {
          if(content.results !== null){
      if(response.results !== null && response.results !== undefined){
        setNoticeData(response.results+content.results);
      }
            
          }
          setNoticeData(response.results)
        }
      } catch (error) {
        console.error('Error fetching notice data:', error.message);
      }
    };

    fetchNoticeData();
  }, []); // Run the effect only once on component mount



  useEffect(() => {

   setPostUrl((prev) => ({
    ...prev,
    category:selectedCategory,
   
  }));
  
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
    
    }));



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
        
            <Margin top="2" plustailwind="h-4" />

            <Margin top="2" />
            <div className={`flex items-center text-center ${screenSize === 'sm' ? 'justify-start' : 'justify-center'}`}>
            <Link to="/posts/create"><div className='w-20 h-10 border border-black'
             >글작성</div></Link> 
              
              <Margin left="2" />
              <input
        className="border p-2 rounded-md"
        placeholder="검색 입력..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <DynamicColorButton
        color="blue"
        text="검색"
        btnstyle="py-2 px-2 ml-2"
        onClick={handleSearchClick}
      />
       </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
        <div>
      {/* 페이지네이션 버튼 */}
      <button onClick={handlePrevPage}>뒤로가기</button>
      <div>{currentPage}</div>
      <button onClick={handleNextPage}>다음으로가기</button>

      {/* 실제로 현재 페이지에 따라 데이터를 보여주는 로직이 필요 */}
      {/* 이 부분은 실제 백엔드 API 호출 등으로 대체되어야 합니다. */}
      <div>
        {/* 예시: 현재 페이지에 해당하는 데이터만 보여줌 */}
        {postData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(post => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
    </div>
       </div>
    </div>
  );
}

export default RecruitmentContent;
