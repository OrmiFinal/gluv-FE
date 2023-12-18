import React, { useState,useContext } from 'react';
import { ModelContext } from '../../context/ModelContextProvider';
import Contour from '../ui/Contour';

function BottomMenu() {
  const { selectedCategory, ToggleMiniChatModel } = useContext(ModelContext);
  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };

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

  const handleSubCategoryClick = (categoryIndex, subcategory) => {
    ToggleMiniChatModel({content:{   category: categories[categoryIndex].name,
        subcategory: subcategory}
    })
    

    setExpandedSubcategories(({
        [categoryIndex]: "true",
      }));
  
    // 클릭한 하위 카테고리에 대한 동작을 추가할 수 있습니다.
    console.log(
      `Clicked on category: ${categories[categoryIndex].name} - Subcategory: ${subcategory}`
    );
    event.stopPropagation();
  };
  return (
    <div className='border rounded-xl border-gray-200 flex flex-col gap-5 justify-center p-6 mb-4'>
      <ul className='text-gray-900 w-full'>
      {categories.map((category, index) => (
        <li key={index} className='hover:bg-gray-100 rounded-xl'>
          <div 
            className='font-bold p-4 leading-6 flex items-center'
            onClick={() => handleCategoryClick(index)}>
            {category.name}
          </div>
        </li>
      ))}
      </ul>
    </div>
  );

  return (
    <div className='w-72 font-bold p-4 leading-6 flex items-center ' style={textStyle}>
      <div className='mt-12 w-[25vw] mx-4 border-[1px] rounded-lg border-black flex flex-col text-center'>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer  ${
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
                          handleSubCategoryClick(index, subcategory)
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
