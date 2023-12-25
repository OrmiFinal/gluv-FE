import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import { useSearchParams } from 'react-router-dom';

import { FetchAllContext,FetchPost } from '../../api/post';
import { Link } from 'react-router-dom';

import Header from './Header.jsx';
import SubCategoryPage from './SubCategoryPage.jsx'
import { ModelContext } from '../../context/ModelContextProvider'
import Pagination from './Pagination.jsx';
import Margin from '../Margin';
import DynamicColorButton from '../DynamicColorButton';
import useWindowSize from '../../hooks/useWindowSize';
import BulletinBoard from './BulletinBoard';

function Content() {
    const [searchParams, setSearchParams]=useSearchParams();

    
    const location = useLocation();
    const endPoint = location.pathname;
    
    const { selectedCategory, content } = useContext(ModelContext);

    const { screenSize } = useWindowSize();
    const [posturl, setPostUrl] = useState({
        category: "공지사항",
        subcategories: "",
        page:""
    });

    const [category, setCategory] = useState('');

    // 페이지네이션 관련
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page'),10) || 1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 10; // 페이지당 아이템 수
    
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

    // 공지 리스트
    const [noticeData, setNoticeData] = useState([]);
    // 일반 게시글 리스트
    const [postData, setPostData] = useState([]);

    // 검색창
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const navigate = useNavigate();
   


    useEffect(() => {
      const parseParams = async () => {
        setCategory(searchParams.get('category')|| '')
      };
    
      parseParams();
    }, [location]);

  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        const params = {
          category : searchParams.get('category'),
          page : currentPage,
          search: inputValue
        }
        const response = await FetchPost(endPoint, params);
        if (response && response.results) {
          setNoticeData([...response.results]);
        }
        const totalItems = content.count || 0;
        setTotalPages(Math.ceil(response.count / itemsPerPage));

      } catch (error) {
        console.error('Error fetching notice data:', error.message);
      }
    };
  
    fetchNoticeData();
  }, [currentPage, inputValue,category]);

  const handleSearchClick = () => {
  };

  const handleWritePost = () => {
    navigate('/posts/create')
  };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className='w-[60vw] bg-white rounded-md shadow-md p-6'>
                <div className='w-full'>
                    <Header Category={selectedCategory.category}></Header>
                    <SubCategoryPage></SubCategoryPage>
                    <BulletinBoard data={noticeData} />
                    
                    <Margin top="2" plustailwind="h-4" />
                    <Margin top="2" plustailwind="h-4" />
                    <Margin top="2" />
                </div>
            <div>
            <div className='flex'>
              <input
                  className="flex-1 rounded-l-md p-2 ml-2 border"
                  placeholder="검색 입력..."
                  value={inputValue}
                  onChange={handleInputChange}/>
                <DynamicColorButton
                  color="white"
                  text="검색"
                  btnstyle="py-2 px-2 mr-4"
                  onClick={handleSearchClick}/>
   
                <DynamicColorButton
                  color="black"
                  text="글 작성"
                  btnstyle="py-2 px-2 ml-2"
                  onClick={handleWritePost}/>
              </div>
          
          </div>
          <div className='flex justify-center items-center'>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>
        </div>
        </div>
        
    </div>
  );
}

export default Content;
