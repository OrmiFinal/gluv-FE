import React, { useState, useEffect } from 'react';

function HotPostList ({ category }){
    const [postData, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/posts/hot/');
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
        <div className='bg-gray-100 rounded-lg p-6 ml-10'>
            <div className="flex items-center mb-3">
                <h3 className="text-gray-900 text-subtitle font-bold">화제의 게시물</h3>
                <a className="ml-auto text-gray-600 font-medium text-body1" href="/posts/?order_by=views">더보기</a>
            </div>
            <div className="flex gap-2 whitespace-nowrap flex-wrap flex-row">
                <button type="button" className="flex gap-2 items-center px-[10px] h-[30px] rounded-full text-[13px] font-medium cursor-pointer select-none" style={{ backgroundColor: 'rgb(51, 51, 51)', color: 'white', border: '1px solid black' }}>실시간</button>
                <button type="button" className="flex gap-2 items-center px-[10px] h-[30px] rounded-full text-[13px] font-medium cursor-pointer select-none" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(102, 102, 102)', border: '1px solid rgb(230, 230, 230)' }}>주간</button>
            <button type="button" className="flex gap-2 items-center px-[10px] h-[30px] rounded-full text-[13px] font-medium cursor-pointer select-none" style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(102, 102, 102)', border: '1px solid rgb(230, 230, 230)' }}>월간</button>
            </div>
            <div className="rounded-md px-4 md:px-0 md:mt-2">
                <ul className="divide-y divide-gray-200">
                {Array.isArray(postData) &&
                    postData.map((post, index) => (
                        <li key={index}>
                        <a className="text-body1 whitespace-nowrap flex py-2" href={`/posts/${post.id}`}>
                        <span className="font-bold text-gray-900 mr-3">1</span>
                        <span className="text-black mr-1.5 break-all font-medium min-w-0 overflow-hidden overflow-ellipsis">{post.title}</span>
                        <span className="text-key font-medium">{post.view_count} views</span>
                        </a>
                        </li>
                ))}
                </ul>
            </div>  
        </div>
    )
}

export default HotPostList