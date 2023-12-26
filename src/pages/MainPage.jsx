import React from "react";

import BookBanner from "../components/MainPage/BookBanner";
import RecentRecruitCardList from "../components/MainPage/RecentRecruitCardList";
import RecentPostList from "../components/MainPage/RecentPostList";
import HotPostList from "./../components/MainPage/HotPostList";


function MainPage() {
  console.log(import.meta.env.BASE_URL);
  const textStyle = {
    fontFamily: "Spoqa Han Sans Neo, sans-serif",
  };

  return (
    <main className="h-full" style={textStyle}>
      <div className="flex h-full justify-center">
        <div className="w-8/12">
          {/* 배너 이미지 */}
          <div className="w-full max-w-screen mx-auto rounded-lg overflow-hidden relative">
            <h2 className="font-bold text-black px-4 mt-2 mb-0 flex items-center md:px-0 md:mb-0 w-full">
              {/*타이틀*/}
              <div className="flex w-full">
                <span className="font-bold w-32">신간 도서</span>
              </div>
            </h2>
            <BookBanner />
          </div>
          <div className="flex-row max-w-screen-xl min-w-0">
            <hr className="my-4 border-b-2 border-b-[#f5f5f5] border-t-0"></hr>
            {/* 최신 모집글 */}
            <div className="flex w-full relative">
              {/* 최신 모집글 라벨 */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 my-0.5"
              >
                <circle cx="10" cy="10" r="10" fill="black"></circle>
                <path
                  d="M7 6V8H13V6H14.0035C14.2775 6 14.5 6.2225 14.5 6.4965V14.5035C14.4999 14.6351 14.4475 14.7613 14.3544 14.8544C14.2613 14.9475 14.1351 14.9999 14.0035 15H5.9965C5.86486 14.9999 5.73865 14.9475 5.64557 14.8544C5.55248 14.7613 5.50013 14.6351 5.5 14.5035V6.4965C5.5 6.2225 5.7225 6 5.9965 6H7ZM8 5H12V7H8V5Z"
                  fill="white"
                ></path>
              </svg>
              <h2 className="font-bold text-black px-4 mb-3 flex items-center md:px-0 md:mb-4 w-full">
                <span className="font-bold">최신 모집글</span>
                <a
                  className="text-gray-600 text-body1 md:text-subtitle font-medium ml-auto flex items-center"
                  href="/recruits/"
                >
                  <span>더보기</span>
                </a>
              </h2>
              {/* 최신 모집글 리스트 */}
            </div>
            <RecentRecruitCardList className="mb-10"></RecentRecruitCardList>
          </div>
        </div>
        {/* 화제의 게시글 */}
        <div className="w-3/12">
          <HotPostList></HotPostList>
        </div>
      </div>
      {/* 카테고리 별 게시판 */}
      <div>
        <hr className="my-8 border-b-2 border-b-[#f5f5f5] border-t-0"></hr>
        <div className="grid grid-cols-3 gap-16 pt-6 px-8">
          <RecentPostList category="질문" endPoint="/posts/?category=qna" />
          <RecentPostList category="자유" endPoint="/posts/?category=comm" />
          <RecentPostList
            category="창작"
            endPoint="/posts/?category=creation"
          />
        </div>
        <hr className="my-4 border-b-2 border-b-[#f5f5f5] border-t-0"></hr>
      </div>
    </main>
  );
}

export default MainPage;
