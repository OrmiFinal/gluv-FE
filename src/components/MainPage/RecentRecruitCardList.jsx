import React, { useState, useEffect } from 'react';

function RecentRecruitCardList()  {
  const [recruitData, setRecruitData] = useState([]);
  const baseURL = import.meta.env.VITE_APP_API_KEY;

  useEffect(() => {
    const fetchRecruitData = async () => {
        try {
            const response = await fetch(`${baseURL}/recruits/hot/`);
            if (!response.ok) {
                throw new Error('Failed to fetch book data');
            }

            const data = await response.json();
            setRecruitData(data);
        } catch (error) {
            console.error('Error fetching book data:', error.message);
        }
    };

    fetchRecruitData();
  }, []);

    const imgStyle = {
      fontFamily: 'Spoqa Han Sans Neo, sans-serif',
      position: 'absolute',
      zIndx:'0',
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
    
    return (
      <div className="flex max-w-screen-xl min-w-0 ">
        <div className="flex w-full relative items-center flex-wrap gap-0 justify-between">
        {Array.isArray(recruitData) &&  
          recruitData.map((card) => (
            <div key={card.id} className="w-1/4 max-w-sm overflow-hidden flex-shrink-0 px-4">
              <a className="bg-gray-200 mb-2 rounded-lg md:rounded-lg overflow-hidden flex items-center justify-center cursor-pointer relative md:mb-3" href={`/recruits/${card.id}/`}><span>
                {/* 이미지 URL 추가 필요 */}
                <img draggable="false" sizes="100vw"  src={`${baseURL}/${card.imageUrl}`} decoding="async" data-nimg="fill" style={{ height: '200px', objectFit: 'cover' }}/>
                </span>
              </a>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="-mt-1">
                    <div className="flex gap-y-1.5 gap-x-2 py-1 whitespace-nowrap flex-wrap items-center">
                      <span className="text-caption inline-block  md:text-body1 bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 md:!text-body3">{card.category}</span>
                    </div>
                  </div>
                  <div className="text-body2 leading-[14.4px] flex items-center gap-1">
                    {/* 추천수 이미지 */}
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9987 2C13.024 2 14.6654 3.66667 14.6654 6C14.6654 10.6667 9.66537 13.3333 7.9987 14.3333C6.33203 13.3333 1.33203 10.6667 1.33203 6C1.33203 3.66667 2.9987 2 4.9987 2C6.2387 2 7.33203 2.66667 7.9987 3.33333C8.66536 2.66667 9.7587 2 10.9987 2ZM8.62136 12.4027C9.17949 12.0545 9.71808 11.6759 10.2347 11.2687C12.222 9.68867 13.332 7.962 13.332 6C13.332 4.42667 12.3074 3.33333 10.9987 3.33333C10.2814 3.33333 9.50536 3.71333 8.94136 4.276L7.9987 5.21867L7.05603 4.276C6.49203 3.71333 5.71603 3.33333 4.9987 3.33333C3.70536 3.33333 2.66536 4.43733 2.66536 6C2.66536 7.96267 3.77603 9.68867 5.76203 11.2687C6.2587 11.6633 6.7887 12.032 7.37603 12.402C7.57536 12.528 7.7727 12.6487 7.9987 12.7833C8.2247 12.6487 8.42203 12.528 8.62136 12.4027Z" fill="#D8D8D8"></path>
                    </svg>
                    {/* 추천수 */}
                    <span className="text-gray-600">{card.view_count}</span>
                    {/* 조회수 이미지 */}
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00173 2.5C11.5964 2.5 14.5871 5.08667 15.2144 8.5C14.5877 11.9133 11.5964 14.5 8.00173 14.5C4.40706 14.5 1.4164 11.9133 0.789062 8.5C1.41573 5.08667 4.40706 2.5 8.00173 2.5ZM8.00173 13.1667C9.36138 13.1664 10.6807 12.7045 11.7436 11.8568C12.8066 11.009 13.5503 9.82552 13.8531 8.5C13.5492 7.17554 12.805 5.99334 11.7421 5.14668C10.6793 4.30003 9.3606 3.83902 8.00173 3.83902C6.64286 3.83902 5.32419 4.30003 4.26131 5.14668C3.19844 5.99334 2.45424 7.17554 2.1504 8.5C2.45313 9.82552 3.19685 11.009 4.25983 11.8568C5.32281 12.7045 6.64208 13.1664 8.00173 13.1667ZM8.00173 11.5C7.20608 11.5 6.44302 11.1839 5.88041 10.6213C5.3178 10.0587 5.00173 9.29565 5.00173 8.5C5.00173 7.70435 5.3178 6.94129 5.88041 6.37868C6.44302 5.81607 7.20608 5.5 8.00173 5.5C8.79738 5.5 9.56044 5.81607 10.123 6.37868C10.6857 6.94129 11.0017 7.70435 11.0017 8.5C11.0017 9.29565 10.6857 10.0587 10.123 10.6213C9.56044 11.1839 8.79738 11.5 8.00173 11.5ZM8.00173 10.1667C8.44376 10.1667 8.86768 9.99107 9.18024 9.67851C9.4928 9.36595 9.6684 8.94203 9.6684 8.5C9.6684 8.05797 9.4928 7.63405 9.18024 7.32149C8.86768 7.00893 8.44376 6.83333 8.00173 6.83333C7.5597 6.83333 7.13578 7.00893 6.82322 7.32149C6.51066 7.63405 6.33506 8.05797 6.33506 8.5C6.33506 8.94203 6.51066 9.36595 6.82322 9.67851C7.13578 9.99107 7.5597 10.1667 8.00173 10.1667Z" fill="#D8D8D8"></path>
                    </svg>
                    {/* 조회수 */}
                    <span className="text-gray-600">{card.view_count}</span>
                  </div>
                </div>
                <h3 className="text-sm md:text-subtitle font-bold leading-4 md:leading-5 flex">
                  <a className="line-clamp-2" href={`/recruits/${card.id}/`}>{card.title}</a>
                </h3>
                <div className="flex items-center justify-between">
                  <div className="text-body3 leading-[14.4px] text-gray-600 flex gap-1.5">
                    <p className="line-clamp-1">{card.name}</p>
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

export default RecentRecruitCardList