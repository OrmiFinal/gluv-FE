// BookBanner.js
import React, { useState, useEffect } from 'react';
// import './BookBanner.css'; // 스타일 파일을 불러옴

const BookBanner = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/books/recent/');
                if (!response.ok) {
                    throw new Error('Failed to fetch book data');
                }

                const data = await response.json();
                setBookData(data.data);
            } catch (error) {
                console.error('Error fetching book data:', error.message);
            }
        };
    
        fetchBookData();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-14 pt-6 items-center justify-center">
            {Array.isArray(bookData) && 
                bookData.map((book, index) => {
                    return(
                        <a href={book.detail_url}>
                            <div key={index} 
                            className="flex flex-col items-center justify-center">
                            <img
                                className="text-center self-center mb-2 md:mb-3"
                                src={book.book_image}
                                alt={book.title}
                                style={{ height: '240px', objectFit: 'cover' }}
                            />
                            <div className="text-center">
                                <h2 className="text-sm font-bold">
                                    {book.title}
                                </h2>
                                <p className="text-sm">{book.author}</p>
                                <p className="text-sm overflow-hidden max-h-24">{book.description}</p>
                            </div>
                        </div>
                        </a>

                    )
                })}
        </div>
        
    );
};

export default BookBanner;