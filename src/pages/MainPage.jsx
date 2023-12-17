import React from 'react';

const RecentPostList = ({ category }) => {
  const postData = [
    { id: 1, title: 'Title 1', views: '1', likes: '1' , author : 'User-01'},
    { id: 2, title: 'Title 2', views: '2', likes: '2' , author : 'User-02'},
    { id: 3, title: 'Title 3', views: '3', likes: '3' , author : 'User-03'},
  ]
  return (
    <div>
      <div className="flex items-start h-10">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 my-0.5">
          <circle cx="10" cy="10" r="10" fill="black"></circle>
          <path d="M7 6V8H13V6H14.0035C14.2775 6 14.5 6.2225 14.5 6.4965V14.5035C14.4999 14.6351 14.4475 14.7613 14.3544 14.8544C14.2613 14.9475 14.1351 14.9999 14.0035 15H5.9965C5.86486 14.9999 5.73865 14.9475 5.64557 14.8544C5.55248 14.7613 5.50013 14.6351 5.5 14.5035V6.4965C5.5 6.2225 5.7225 6 5.9965 6H7ZM8 5H12V7H8V5Z" fill="white"></path>
        </svg>
        <h4 className="text-black font-bold text-title">{category} 게시판</h4>
        <a className="text-body1 text-gray-600 font-medium ml-auto" href="/community?category=1">더보기</a>
      </div><hr className="border-t-gray-200 border-t-2 mb-5"/>
      <ul className="flex flex-col gap-4">
      {postData.map((card) => (
        <li>
        <a key={card.id} className="flex leading-5" href="/community/view/3177?category=1">
          <div className="flex mr-2 min-w-0">
            <div className="font-medium whitespace-nowrap overflow-hidden mr-2 text-subtitle overflow-ellipsis">{card.title}</div>
          </div>
          <div className="flex items-center gap-0.5 ml-auto">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00173 2.5C11.5964 2.5 14.5871 5.08667 15.2144 8.5C14.5877 11.9133 11.5964 14.5 8.00173 14.5C4.40706 14.5 1.4164 11.9133 0.789062 8.5C1.41573 5.08667 4.40706 2.5 8.00173 2.5ZM8.00173 13.1667C9.36138 13.1664 10.6807 12.7045 11.7436 11.8568C12.8066 11.009 13.5503 9.82552 13.8531 8.5C13.5492 7.17554 12.805 5.99334 11.7421 5.14668C10.6793 4.30003 9.3606 3.83902 8.00173 3.83902C6.64286 3.83902 5.32419 4.30003 4.26131 5.14668C3.19844 5.99334 2.45424 7.17554 2.1504 8.5C2.45313 9.82552 3.19685 11.009 4.25983 11.8568C5.32281 12.7045 6.64208 13.1664 8.00173 13.1667ZM8.00173 11.5C7.20608 11.5 6.44302 11.1839 5.88041 10.6213C5.3178 10.0587 5.00173 9.29565 5.00173 8.5C5.00173 7.70435 5.3178 6.94129 5.88041 6.37868C6.44302 5.81607 7.20608 5.5 8.00173 5.5C8.79738 5.5 9.56044 5.81607 10.123 6.37868C10.6857 6.94129 11.0017 7.70435 11.0017 8.5C11.0017 9.29565 10.6857 10.0587 10.123 10.6213C9.56044 11.1839 8.79738 11.5 8.00173 11.5ZM8.00173 10.1667C8.44376 10.1667 8.86768 9.99107 9.18024 9.67851C9.4928 9.36595 9.6684 8.94203 9.6684 8.5C9.6684 8.05797 9.4928 7.63405 9.18024 7.32149C8.86768 7.00893 8.44376 6.83333 8.00173 6.83333C7.5597 6.83333 7.13578 7.00893 6.82322 7.32149C6.51066 7.63405 6.33506 8.05797 6.33506 8.5C6.33506 8.94203 6.51066 9.36595 6.82322 9.67851C7.13578 9.99107 7.5597 10.1667 8.00173 10.1667Z" fill="#D8D8D8"></path>
            </svg>
            <span className="text-gray-600 text-body1">{card.views}</span>
          </div>
        </a>
      </li>
      ))}
      </ul>
    </div>  
  )
}

const RecentRecruitCardList = () => {
  const imgStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
    position: 'absolute',
    inset: '0px',
    boxSizing: 'border-box',
    padding: '0px',
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: '0px',
    height: '0px',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  };
  
  const cardData = [
    {
      id: 1, title: 'Title 1', 
      description: 'Description for Card 1', 
      category :'Category 1',
      team_name : 'Team 1',
      views : '1',
    },
    {
      id: 2, title: 'Title 2', 
      description: 'Description for Card 2', 
      category :'Category 2',
      team_name : 'Team 2',
      views : '2',
    },
    {
      id: 3, title: 'Title 3', 
      description: 'Description for Card 3', 
      category :'Category 3',
      team_name : 'Team 3',
      views : '3',
    },
  ];

  return (
    <div className="flex max-w-screen-xl min-w-0">
      <div className="flex w-full relative items-center flex-wrap gap-4">
      {cardData.map((card) => (
        <div key={card.id} className="w-1/4 max-w-sm overflow-hidden flex-shrink-0">
          <a className="bg-gray-200 mb-2 rounded-lg md:rounded-lg overflow-hidden flex items-center justify-center cursor-pointer relative md:mb-3" href="/announcement/view/1879"><span>
            <img draggable="false" sizes="100vw"  src="/" decoding="async" data-nimg="fill" style={{ height: '240px', objectFit: 'cover' }}/>
            </span>
          </a>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="-mt-1">
                <div className="flex gap-y-1.5 gap-x-2 py-1 whitespace-nowrap flex-wrap items-center">
                  <span className="text-caption inline-block py-0.5 md:text-body1 bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 md:!text-body3">{card.category}</span>
                </div>
              </div>
              <div className="text-body2 leading-[14.4px] flex items-center gap-1">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00173 2.5C11.5964 2.5 14.5871 5.08667 15.2144 8.5C14.5877 11.9133 11.5964 14.5 8.00173 14.5C4.40706 14.5 1.4164 11.9133 0.789062 8.5C1.41573 5.08667 4.40706 2.5 8.00173 2.5ZM8.00173 13.1667C9.36138 13.1664 10.6807 12.7045 11.7436 11.8568C12.8066 11.009 13.5503 9.82552 13.8531 8.5C13.5492 7.17554 12.805 5.99334 11.7421 5.14668C10.6793 4.30003 9.3606 3.83902 8.00173 3.83902C6.64286 3.83902 5.32419 4.30003 4.26131 5.14668C3.19844 5.99334 2.45424 7.17554 2.1504 8.5C2.45313 9.82552 3.19685 11.009 4.25983 11.8568C5.32281 12.7045 6.64208 13.1664 8.00173 13.1667ZM8.00173 11.5C7.20608 11.5 6.44302 11.1839 5.88041 10.6213C5.3178 10.0587 5.00173 9.29565 5.00173 8.5C5.00173 7.70435 5.3178 6.94129 5.88041 6.37868C6.44302 5.81607 7.20608 5.5 8.00173 5.5C8.79738 5.5 9.56044 5.81607 10.123 6.37868C10.6857 6.94129 11.0017 7.70435 11.0017 8.5C11.0017 9.29565 10.6857 10.0587 10.123 10.6213C9.56044 11.1839 8.79738 11.5 8.00173 11.5ZM8.00173 10.1667C8.44376 10.1667 8.86768 9.99107 9.18024 9.67851C9.4928 9.36595 9.6684 8.94203 9.6684 8.5C9.6684 8.05797 9.4928 7.63405 9.18024 7.32149C8.86768 7.00893 8.44376 6.83333 8.00173 6.83333C7.5597 6.83333 7.13578 7.00893 6.82322 7.32149C6.51066 7.63405 6.33506 8.05797 6.33506 8.5C6.33506 8.94203 6.51066 9.36595 6.82322 9.67851C7.13578 9.99107 7.5597 10.1667 8.00173 10.1667Z" fill="#D8D8D8"></path>
                </svg>
                <span className="text-gray-600">{card.views} likes</span>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00173 2.5C11.5964 2.5 14.5871 5.08667 15.2144 8.5C14.5877 11.9133 11.5964 14.5 8.00173 14.5C4.40706 14.5 1.4164 11.9133 0.789062 8.5C1.41573 5.08667 4.40706 2.5 8.00173 2.5ZM8.00173 13.1667C9.36138 13.1664 10.6807 12.7045 11.7436 11.8568C12.8066 11.009 13.5503 9.82552 13.8531 8.5C13.5492 7.17554 12.805 5.99334 11.7421 5.14668C10.6793 4.30003 9.3606 3.83902 8.00173 3.83902C6.64286 3.83902 5.32419 4.30003 4.26131 5.14668C3.19844 5.99334 2.45424 7.17554 2.1504 8.5C2.45313 9.82552 3.19685 11.009 4.25983 11.8568C5.32281 12.7045 6.64208 13.1664 8.00173 13.1667ZM8.00173 11.5C7.20608 11.5 6.44302 11.1839 5.88041 10.6213C5.3178 10.0587 5.00173 9.29565 5.00173 8.5C5.00173 7.70435 5.3178 6.94129 5.88041 6.37868C6.44302 5.81607 7.20608 5.5 8.00173 5.5C8.79738 5.5 9.56044 5.81607 10.123 6.37868C10.6857 6.94129 11.0017 7.70435 11.0017 8.5C11.0017 9.29565 10.6857 10.0587 10.123 10.6213C9.56044 11.1839 8.79738 11.5 8.00173 11.5ZM8.00173 10.1667C8.44376 10.1667 8.86768 9.99107 9.18024 9.67851C9.4928 9.36595 9.6684 8.94203 9.6684 8.5C9.6684 8.05797 9.4928 7.63405 9.18024 7.32149C8.86768 7.00893 8.44376 6.83333 8.00173 6.83333C7.5597 6.83333 7.13578 7.00893 6.82322 7.32149C6.51066 7.63405 6.33506 8.05797 6.33506 8.5C6.33506 8.94203 6.51066 9.36595 6.82322 9.67851C7.13578 9.99107 7.5597 10.1667 8.00173 10.1667Z" fill="#D8D8D8"></path>
                </svg>
                <span className="text-gray-600">{card.views} views</span>
              </div>
            </div>
            <h3 className="text-sm md:text-subtitle font-bold leading-4 md:leading-5 flex">
              <a className="line-clamp-2" href="/announcement/view/1880">{card.title}</a>
            </h3>
            <div className="flex items-center justify-between">
              <div className="text-body3 leading-[14.4px] text-gray-600 flex gap-1.5">
                <p className="line-clamp-1">{card.team_name}</p>
                <div className="h-3 w-px bg-gray-200"></div>
                  <span className="">D-166</span>
              </div>
              <div className="flex">
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

function MainPage() {
  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };

  const translateValue = -1224; // X 축 방향으로 -1224px만큼 이동
  const transitionDuration = 0; // 변화를 즉시 적용

  const imgStyle = {
    transform: `translate3d(${translateValue}px, 0, 0)`,
    transitionDuration: `${transitionDuration}ms`,
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };

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
    <main className='h-full' style={{textStyle}}>
      <div className='flex h-full'>
        <div className="w-9/12">
          {/* 배너 이미지 */}
          <div className="max-w-screen-xl mx-auto rounded-lg overflow-hidden relative">
            <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
              <div className="swiper-wrapper" style={{imgStyle}}>
                <div className="swiper-slide swiper-slide-active" style={{ width: '1224px' }}>
                  <div className="relative">
                    <a target="_blank" href="/community/view/3014">
                      <div className="overflow-hidden flex relative w-full">
                        <img
                          src="https://d2ydhf803uk5ck.cloudfront.net/uploads/images/Qr7JGVM8-gmF.jpeg"
                          className="w-inherit"
                          draggable="false"
                          style={{ height: '320px', objectFit: 'cover' }}
                          alt="Image Alt Text"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                {/* 다른 이미지들에 대한 swiper-slide 추가 */}
              </div>
            </div>
            <div className="absolute w-full top-10 z-10 px-24 pointer-events-none">
              <div className="flex max-w-screen-xl mx-auto">
                <div className="ml-auto flex bg-black bg-opacity-30 rounded-full px-2 py-2 items-center text-body2 pointer-events-auto">
                  <div className="flex">
                    <button type="button" className="cursor-pointer flex rounded-full flex justify-center items-center">
                      <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4386 16L21.0386 22.6L19.1533 24.4853L10.668 16L19.1533 7.51465L21.0386 9.39998L14.4386 16Z" fill="white"></path>
                      </svg>
                    </button>
                  </div>
                  <span className="font-bold text-white">1</span>
                  <span className="h-3 w-px bg-gray-200 mx-1.5"></span>
                  <span className="font-bold text-white text-opacity-60">3</span>
                  <div className="flex">
                    <button type="button" className="cursor-pointer flex rounded-full flex justify-center items-center rotate-180">
                      <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4386 16L21.0386 22.6L19.1533 24.4853L10.668 16L19.1533 7.51465L21.0386 9.39998L14.4386 16Z" fill="white"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
