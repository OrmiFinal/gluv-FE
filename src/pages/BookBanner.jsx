// BookBanner.js
import React from 'react';
// import './BookBanner.css'; // 스타일 파일을 불러옴

const BookBanner = () => {
    const bookData = [{
        title: '마흔에 읽는 쇼펜하우어',
        author: '강용수',
        description: "2023년 8월 유노북스에서 펴낸 《마흔에 읽는 쇼펜하우어》가 전 서점 종합 베스트셀러 1위에 올랐다. 철학 교양서로는 최초라는 점에서 기념비적이다.",
        imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791192300818.jpg',
    },{
        title: '내가 한 말을 내가 오해하지 않기로 함',
        author: '문상훈',
        description: "133만 명의 구독자를 보유한 유튜브 채널 〈빠더너스〉의 크리에이터 문상훈이 첫 산문집을 출간했다. 문쌤, 문이병, 문상 등 다양한 부캐로 그를 기억하는 사람들에게는 이 소식이 새삼스러울지도 모른다. 하지만 그의 오랜 팬이라면, 혹은 매체를 통해 그의 편지글 한 문장이라도 본 사람이라면 누구보다 기다려왔을 소식임이 분명하다.",
        imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791189352745.jpg',
    },{
        title: '마흔에 읽는 쇼펜하우어',
        author: '강용수',
        description: "2023년 8월 유노북스에서 펴낸 《마흔에 읽는 쇼펜하우어》가 전 서점 종합 베스트셀러 1위에 올랐다. 철학 교양서로는 최초라는 점에서 기념비적이다.",
        imageUrl: 'https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791192300818.jpg',
    }];

    return (
        <div className="grid grid-cols-3 gap-14 pt-6 items-center justify-center">
            {bookData.map((book, index) => (
                <div className="flex-col relative justify-center items-center">
                    <img className="" 
                        src={book.imageUrl} 
                        alt={book.title}
                        style={{ height: '240px', objectFit: 'cover' }}/>
                    <div className="p-6 text-center">
                        <h2 className="text-xl font-bold">{book.title}</h2>
                        <p className="text-sm">{book.author}</p>
                        <p className="text-sm overflow-hidden max-h-24">{book.description}</p>
                    </div>
                </div>
            ))}
        </div>
        
    );
};

export default BookBanner;