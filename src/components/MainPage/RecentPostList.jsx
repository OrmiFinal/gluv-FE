import React, { useState, useEffect } from 'react';

function RecentPostList ({ category, endPoint }){
  const [postData, setPost] = useState([]);
  const baseURL = import.meta.env.VITE_APP_API_KEY;

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`${baseURL}${endPoint}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch book data');
                }

                const data = await response.json();
                setPost(data.results);
            } catch (error) {
                console.error('Error fetching book data:', error.message);
            }
        };
    
        fetchPost();
    }, []);

    return (
      <div>
        <div className="flex items-start h-10 ">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 my-0.5">
            <circle cx="10" cy="10" r="10" fill="black"></circle>
            <path d="M7 6V8H13V6H14.0035C14.2775 6 14.5 6.2225 14.5 6.4965V14.5035C14.4999 14.6351 14.4475 14.7613 14.3544 14.8544C14.2613 14.9475 14.1351 14.9999 14.0035 15H5.9965C5.86486 14.9999 5.73865 14.9475 5.64557 14.8544C5.55248 14.7613 5.50013 14.6351 5.5 14.5035V6.4965C5.5 6.2225 5.7225 6 5.9965 6H7ZM8 5H12V7H8V5Z" fill="white"></path>
          </svg>
          <h4 className="text-black font-bold text-title">{category} 게시판</h4>
          <a className="text-body1 text-gray-600 font-medium ml-auto" href={`${endPoint}`}> 더보기</a>
        </div><hr className="border-t-gray-200 border-t-2 mb-5"/>
        <ul className="flex flex-col gap-4">
        {postData.map((card,index) => (
          <li key={index}>
          <a className="flex leading-5" href={`/posts/${card.id}`}>
            <div className="flex mr-2 min-w-0">
              <div className="font-medium whitespace-nowrap overflow-hidden mr-2 text-subtitle overflow-ellipsis">{card.title}</div>
            </div>
            <div className="flex items-center gap-0.5 ml-auto">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00173 2.5C11.5964 2.5 14.5871 5.08667 15.2144 8.5C14.5877 11.9133 11.5964 14.5 8.00173 14.5C4.40706 14.5 1.4164 11.9133 0.789062 8.5C1.41573 5.08667 4.40706 2.5 8.00173 2.5ZM8.00173 13.1667C9.36138 13.1664 10.6807 12.7045 11.7436 11.8568C12.8066 11.009 13.5503 9.82552 13.8531 8.5C13.5492 7.17554 12.805 5.99334 11.7421 5.14668C10.6793 4.30003 9.3606 3.83902 8.00173 3.83902C6.64286 3.83902 5.32419 4.30003 4.26131 5.14668C3.19844 5.99334 2.45424 7.17554 2.1504 8.5C2.45313 9.82552 3.19685 11.009 4.25983 11.8568C5.32281 12.7045 6.64208 13.1664 8.00173 13.1667ZM8.00173 11.5C7.20608 11.5 6.44302 11.1839 5.88041 10.6213C5.3178 10.0587 5.00173 9.29565 5.00173 8.5C5.00173 7.70435 5.3178 6.94129 5.88041 6.37868C6.44302 5.81607 7.20608 5.5 8.00173 5.5C8.79738 5.5 9.56044 5.81607 10.123 6.37868C10.6857 6.94129 11.0017 7.70435 11.0017 8.5C11.0017 9.29565 10.6857 10.0587 10.123 10.6213C9.56044 11.1839 8.79738 11.5 8.00173 11.5ZM8.00173 10.1667C8.44376 10.1667 8.86768 9.99107 9.18024 9.67851C9.4928 9.36595 9.6684 8.94203 9.6684 8.5C9.6684 8.05797 9.4928 7.63405 9.18024 7.32149C8.86768 7.00893 8.44376 6.83333 8.00173 6.83333C7.5597 6.83333 7.13578 7.00893 6.82322 7.32149C6.51066 7.63405 6.33506 8.05797 6.33506 8.5C6.33506 8.94203 6.51066 9.36595 6.82322 9.67851C7.13578 9.99107 7.5597 10.1667 8.00173 10.1667Z" fill="#D8D8D8"></path>
              </svg>
              <span className="text-gray-600 text-body1">{card.view_count}</span>
            </div>
          </a>
        </li>
        ))}
        </ul>
      </div>  
    )
  }

export default RecentPostList