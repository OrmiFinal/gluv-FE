import React, { useState, useContext, useEffect } from 'react';

import TitleComponent from '../components/PostListPage/TitleComponent';
import Margin from '../components/Margin';
import DynamicColorButton from '../components/DynamicColorButton';
import Contour from '../components/ui/Contour';
import RecruitmentList from '../components/RecruitmentList';
import SelectButton from '../components/ui/SelectButton';
import { FetchAllTeamData } from '../api/team';

import { FetchRecruitsPost } from '../api/recruits';
import { Link, useNavigate } from 'react-router-dom';


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

]
function RecruitmentListPage() {


  const [teamData, setTeamData] = useState([]);
  const [recruitsData, setRecruitsData] = useState([]);
  const [filters, setFilters] = useState({
    page: 1,
    search: '',

    
  });
  const [Count, setCount] = useState(1);

  const navigate = useNavigate();
  const handleRegionSelect = (selectedRegion) => {
    setFilters({ ...filters, region: selectedRegion });
    console.log('Selected Region:', selectedRegion);
  };
  const [currentPage, setCurrentPage] = useState(1);
  

  const handleCategorySelect = (selectedCategory) => {
    setFilters({ ...filters, category: selectedCategory });
    console.log('Selected Category:', selectedCategory);
  };

  const handleOrderSelect = (selectedOrder) => {
    setFilters({ ...filters, order_by: selectedOrder });
    console.log('Selected Order:', selectedOrder);
  };

  const handleSortSelect = (selectedSort) => {
    setFilters({ ...filters, order: selectedSort });
    console.log('Selected Sort:', selectedSort);
  };

  const handleSearchChange = (event) => {
    setFilters({ ...filters, search: event.target.value });
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleSearchClick = () => {
    
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchRecruitsPost({ ...filters, page: currentPage });
        // const RecruitsData = await FetchRecruitsPost({...filters, page: currentPage })
        console.log("fetchData")
        console.log("fetchData")
        console.log(data)
        if (data) {
          console.log("fetchDataindata")
          console.log("fetchDataindata")
          console.log(data)
          setTeamData(data.results);
          setCount(data.count);
          // setTotalPages(data.total_pages);
        }
        // if(RecruitsData){
        //   // setRecruitsData(RecruitsData)
        // }
        console.log()
      } catch (error) {
        console.error('Error fetching team data:', error.message);
      }
    };
    console.log("Count")
    console.log("Count")
console.log(Count)
    fetchData();
  }, [filters, currentPage]);

  const inputClasses = {
    xl: 'w-2/3',
    xxl: 'w-2/3',
    lg: 'w-1/2',
    md: 'w-2/3',
    sm: 'w-1/2',
  };
const handleWritePost=()=>{
  navigate('/recruits/create')
}
  const combinedClasses = Object.entries(inputClasses)
    .map(([size, classValue]) => (false === size ? classValue : ''))
    .join(' ');
 
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-[65vw] bg-white rounded-md shadow-md p-6">
        <div className="w-full">
          <Margin top="3" />
          <div className="m-3">
            <div className="text-2xl font-bold mb-4">팀원 모집</div>
            <Margin top="2" plustailwind="h-3" />
            <Contour></Contour>
            <div className="flex">
            <TitleComponent
              title="전체"
              isFontBold={"fontBold"}
              plustailwind="text-lg font-bold "
              onClick={handleCategorySelect}
              subcategory="전체" // You can modify this as needed
            />
              <Margin left="2" plustailwind="w-2" />
              <TitleComponent
              title="독서모임"
              isFontBold={"fontBold"}
              plustailwind="text-lg font-bold "
              onClick={handleCategorySelect}
              subcategory="독서모임" // You can modify this as needed
            />
          
              <Margin left="2" plustailwind="w-2" />
               <TitleComponent
              title="합평모임"
              isFontBold={"fontBold"}
              plustailwind="text-lg font-bold "
              onClick={handleCategorySelect}
              subcategory="합평모임" // You can modify this as needed
            />
             
              <Margin left="2" plustailwind="w-2" />
              <TitleComponent
              title="책집필모임"
              isFontBold={"fontBold"}
              plustailwind="text-lg font-bold "
              onClick={handleCategorySelect}
              subcategory="책집필모임" // You can modify this as needed
            />
          
            </div>
            <Margin top="1" plustailwind="h-1" />
            <Contour></Contour>
            <div className='flex  justify-around'>
            <SelectButton
                btnTitle="region"
                btnoptions={[
                  '서울',
                  '경기',
                  '강원',
                  '충남',
                  '충북', 
                  '전남',
                  '전북',
                  '경남',
                  '제주',
            
                ]}
                title=" "
                size="32"
                onOptionSelect={handleRegionSelect}
              />
              <SelectButton
                btnTitle="Order By"
                btnoptions={[
                  'views',
                  'create_at',
                
                ]}
                size="32"
                title=" "
                onOptionSelect={handleOrderSelect}
              />
              <SelectButton
                btnTitle="Sort"
                btnoptions={[
                  'desc',
                  'asc',
                ]}
                title=" "
                size="32"
                onOptionSelect={handleSortSelect}
              />
            </div>
            <div className="border p-2 rounded-md">
              <RecruitmentList data={teamData ? teamData : sampleData} />
            </div>
            <Margin top="2" plustailwind="h-4" />
            <Contour></Contour>
            <div>
              <div className={`flex items-center text-center ${false === 'sm' ? 'justify-start' : 'justify-center'}`}>
                
                <input
                  className={`border p-2 rounded-md ${combinedClasses}`}
                  placeholder='검색 입력...'
                  value={filters.search}
                  onChange={handleSearchChange}
                />
                <DynamicColorButton
                  color="blue"
                  text="Search"
                  btnstyle="py-2 px-2 ml-2"
                  onClick={handleSearchClick}
                />
                  <DynamicColorButton
                  color="black"
                  text="글 작성"
                  btnstyle="py-2 px-2 ml-2"
                  onClick={handleWritePost}/>
              </div>


              
      
            </div>
            <div className='flex justify-between items-center'>
              <div className=' w-full '>
             

              <div className="flex justify-center items-center w-full text-center">
  {Array.from({ length: Math.ceil(Count ? Count / 5 : 1) }, (_, index) => (
    <span
      key={index}
      className={`cursor-pointer mx-1  text-center ${currentPage === index + 1 ? 'font-bold' : ''}`}
      onClick={() => handlePageClick(index + 1)}
    >
      {index + 1}
    </span>
  ))}
</div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecruitmentListPage;
