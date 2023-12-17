import React, { useState,useContext } from 'react';
import { ModelContext } from '../../context/ModelContextProvider';
import Contour from '../ui/Contour';

function BottomMenu() {
    const { selectedCategory, ToggleMiniChatModel } = useContext(ModelContext);

  const [expandedSubcategories, setExpandedSubcategories] = useState({});


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

  const handleCategoryClick = (index) => {
    console.log(expandedSubcategories)

    
    setExpandedSubcategories((prev) => ({
   
      [index]: true,
    }));

    ToggleMiniChatModel({content:{   category: categories[index].name,
        subcategory: ''}
     
    })


  };

  const handleSubcategoryClick = (categoryIndex, subcategory) => {
    ToggleMiniChatModel({content:{   category: categories[categoryIndex].name,
        subcategory: subcategory}
     
    })
    

    setExpandedSubcategories(  ({
   
        [categoryIndex]: "true",
      }));
  
    // 클릭한 하위 카테고리에 대한 동작을 추가할 수 있습니다.
    console.log(
      `Clicked on category: ${categories[categoryIndex].name} - Subcategory: ${subcategory}`
    );


    event.stopPropagation();
  };

  return (
    <div className='w-72 h-full flex justify-center items-center'>
      <div className='mt-12 w-[25vw] mx-4 border-[1px] rounded-lg border-black flex flex-col text-center'>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${
              expandedSubcategories[index] ?  '  bg-zinc-200 ' : ''
            }`}
            onClick={() => handleCategoryClick(index)}
          >
            {category.name}
            {expandedSubcategories[index] &&
              category.subcategories.length > 0 && (
                <div className='flex flex-col justify-center items-center'>
                  {category.subcategories.map((subcategory, subIndex) => (
                     <div className='w-full'>
                         <div className='text-xl  border-t  my-1 border-gray-300 w-[180px] '/>

                    <div
                      key={subIndex}
                      className='cursor-pointer hover:bg-zinc-100 w-full px-8'
                      onClick={() =>
                        handleSubcategoryClick(index, subcategory)
                      }
                    >
                      {subcategory}
                      
                    </div>
                   

                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BottomMenu;
