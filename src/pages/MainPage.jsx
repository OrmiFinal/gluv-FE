import React from 'react';
import BookBanner from '../components/MainPage/BookBanner';
import RecentRecruitCardList from '../components/MainPage/RecentRecruitCardList';
import RecentPostList from '../components/MainPage/RecentPostList';
import SliderBookBtn from '../components/MainPage/SliderBookBtn';
import Margin from '../components/Margin';


function MainPage() {
  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };

  const translateValue = -1224; // X 축 방향으로 -1224px만큼 이동
  const transitionDuration = 0; // 변화를 즉시 적용

  // 인기 게시글 데이터 (예시)
  const popularPosts = [
    { id: 1, title: '게시글 제목 1' },
    { id: 2, title: '게시글 제목 2' },
    { id: 3, title: '게시글 제목 3' },
    { id: 4, title: '게시글 제목 4' },
    { id: 5, title: '게시글 제목 5' },
    { id: 6, title: '게시글 제목 6' },
    { id: 7, title: '게시글 제목 7' },
    { id: 8, title: '게시글 제목 8' },
    { id: 9, title: '게시글 제목 9' },
    { id: 10, title: '게시글 제목 10' },
  ];

  return (
    <main className='h-full' style={textStyle}>
      <div className='flex h-full justify-center'>
        <div className="w-8/12">
          {/* 배너 이미지 */}
          <div className="w-full max-w-screen mx-auto rounded-lg overflow-hidden relative">
          <h2 className="font-bold text-black px-4 mt-2 mb-0 flex items-center md:px-0 md:mb-0 w-full">
          {/*타이틀*/}
          <div className='flex justify-between w-full'>
            <Margin left="3"></Margin>
          <span className="font-bold w-32">신간 도서</span>  <SliderBookBtn/>
          </div>
          </h2>
         
          <BookBanner />
            {/* 슬라이더 */}



        </div>
        <div className='flex-row max-w-screen-xl min-w-0'>
        <hr className="my-4 border-b-2 border-b-[#f5f5f5] border-t-0"></hr>
          {/* 최신 모집글 */}
          <div className="flex w-full relative">
            {/* 최신 모집글 라벨 */}
            <h2 className="font-bold text-black px-4 mb-3 flex items-center md:px-0 md:mb-4 w-full">
              <span className="font-bold">최신 모집글</span>
              <a className="text-gray-600 text-body1 md:text-subtitle font-medium ml-auto flex items-center" href="/library">
                <span>더보기</span>
              </a>
            </h2>
            {/* 최신 모집글 리스트 */}
          </div>
          <RecentRecruitCardList className="mb-10"></RecentRecruitCardList >
        </div>
        </div>
        {/* 화제의 게시글 */}
        <div className="w-3/12" 
          style={{textStyle}}>
          <div className='bg-gray-100 rounded-lg p-6 ml-10'>
            <div className="flex items-center mb-3"
              ><h3 className="text-gray-900 text-subtitle font-bold">화제의 게시물</h3>
              <a className="ml-auto text-gray-600 font-medium text-body1" href="/community/hot">더보기</a>
            </div>
            <div className="flex gap-2 whitespace-nowrap flex-wrap flex-row">
              <button type="button" className="flex gap-2 items-center px-[10px] h-[30px] rounded-full text-[13px] font-medium cursor-pointer select-none" style={{ backgroundColor: 'rgb(51, 51, 51)', color: 'white', border: '1px solid black' }}>실시간</button>
              <button type="button" className="flex gap-2 items-center px-[10px] h-[30px] rounded-full text-[13px] font-medium cursor-pointer select-none" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(102, 102, 102)', border: '1px solid rgb(230, 230, 230)' }}>주간</button>
              <button type="button" className="flex gap-2 items-center px-[10px] h-[30px] rounded-full text-[13px] font-medium cursor-pointer select-none" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(102, 102, 102)', border: '1px solid rgb(230, 230, 230)' }}>월간</button>
            </div>
            <div className="rounded-md px-4 md:px-0 md:mt-2">
              <ul className="divide-y divide-gray-200">
              {popularPosts.map((post, index) => (
                <li key={index}>
                <a className="text-body1 whitespace-nowrap flex py-2" href={`/posts/${post.id}`}>
                  <span className="font-bold text-gray-900 mr-3">1</span>
                  <span className="text-black mr-1.5 break-all font-medium min-w-0 overflow-hidden overflow-ellipsis">{post.title}</span>
                  <span className="text-key font-medium">{index + 1} views</span>
                </a>
                </li>
              ))}
              </ul>
            </div>  
          </div>
          
        </div>
      </div>
      {/* 카테고리 별 게시판 */}
      <div>
        <hr className="my-4 border-b-2 border-b-[#f5f5f5] border-t-0"></hr>
        <div className='grid grid-cols-3 gap-14 pt-6'>
          <RecentPostList category="게시판 1"/>
          <RecentPostList category="게시판 2"/>
          <RecentPostList category="게시판 3"/>
        </div>
        <hr className="my-4 border-b-2 border-b-[#f5f5f5] border-t-0"></hr>
      </div>
    </main>
  );
}


export default MainPage;
