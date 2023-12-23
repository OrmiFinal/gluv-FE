import React, { useState, useContext, useEffect } from 'react';

import Contour from '../ui/Contour';
import Margin from '../Margin';
import { ModelContext } from '../../context/ModelContextProvider';

function SubCategoryPage({Category}) {
    
    const categories = [
        { name: '공지사항', subcategories: [] },
        { name: '질문게시판', subcategories: [] },
        {
            name: '자유게시판',
            subcategories: ['전체', '잡담', '소설', '수필', '시'],
        },
        {
            name: '창작게시판',
            subcategories: ['전체', '소설', '수필', '시'],
        },
    ];
    const { selectedCategory, content, ToggleMiniChatModel } = useContext(ModelContext);

        
    return(
        <div>
            <div className='border p-2 flex rounded-md'>
            {categories.map((category, index) => (
                selectedCategory.category === category.name && 
                category.subcategories.map((subcategory, subIndex) => (
                    <React.Fragment key={subIndex}>
                    {subIndex > 0 && <Margin left="3" />}
                    <TitleComponent
                        title={subcategory}
                        isFontBold={"fontBold"}
                        plustailwind="text-lg font-roboto"
                        onClick={() => SubCategory(subcategory)}
                    />
                                <Margin left="2" />
                    </React.Fragment>
                ))
                ))}
                <div style={{ visibility: 'hidden' }}>서브메뉴</div>
            </div>
            <Margin top="2" plustailwind="h-4" />
            <Contour></Contour>
        </div>
        
    );
}

export default SubCategoryPage;
