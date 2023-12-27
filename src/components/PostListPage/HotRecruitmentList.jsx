import React, { useState, useEffect } from 'react';

import {  fetchHotRecruits } from '../../api/recruits';

function HotRecruitmentList ({ category }){
    const [postData, setPost] = useState([]);
     
    useEffect(() => {
        const fetchRecruits = async () => {
            try {
                const response = await fetchHotRecruits()
       
                setPost(response);
            } catch (error) {
                console.error('Error fetching book data:', error.message);
            }
        };
    
        fetchRecruits();
    }, []);

    return (
        <div className='bg-gray-100 rounded-lg p-6 w-64 '>
            <div className="flex items-center mb-3">
                <h3 className="text-gray-900 text-subtitle font-bold">화제의 모집글</h3>
               
            </div>
            <div className="rounded-md px-4 md:px-0 md:mt-2">
                <ul className="divide-y divide-gray-200">
                {Array.isArray(postData) &&
                    postData.map((post, index) => (
                        <li key={index}>
                        <a className="text-body1 whitespace-nowrap flex py-2" href={`/recruits/${post.id}`}>
                        <span className="font-bold text-gray-900 mr-3">{index + 1}</span>
                        <span className="text-black mr-1.5 break-all font-medium min-w-0 overflow-hidden overflow-ellipsis">{post.title}</span>
                        {/* <span className="text-key font-medium">{post.category}</span> */}
                        <span className="mt-1 text-key text-[10px]">{post.view_count} views</span>
                        </a>
                        </li>
                ))}
                </ul>
            </div>  
        </div>
    )
}

export default HotRecruitmentList