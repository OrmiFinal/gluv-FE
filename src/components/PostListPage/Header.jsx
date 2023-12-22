import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Contour from '../ui/Contour';


function Header({Category}) {
    const location = useLocation();
    const endPoint = location.pathname;

    const [searchParams, setSearchParams]=useSearchParams();
    const [categoryLable, setCategoryLabel] = useState('');

    useEffect(() => {
        const parseCategory = async () => {
            if(endPoint==="/posts/notices/"){
                setCategoryLabel('공지사항')
            }

            const category = searchParams.get('category')
            if(category==='comm'){
                setCategoryLabel('자유게시판')
            }else if(category==='qna'){
                setCategoryLabel('질문 게시판')
            }else if(category==='creation'){
                setCategoryLabel('창작 게시판')
            }
        };
        parseCategory();
    }, [location]);

    return(
        <div className='m-3'>
            <div className='text-2xl font-bold mb-4 '>{categoryLable}</div>
            <Contour></Contour>
        </div>
    );
}

export default Header;
