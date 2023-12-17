import React, { useState } from 'react';

function BottomMenu() {
  const [selectedCategory, setSelectedCategory] = useState({
    category: '',
    subcategory: '',
  });
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
    setExpandedSubcategories((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSubcategoryClick = (event, categoryIndex, subcategory) => {
    // 클릭한 하위 카테고리에 대한 동작을 추가할 수 있습니다.
    console.log(
      `Clicked on category: ${categories[categoryIndex].name} - Subcategory: ${subcategory}`
    );

    // 이벤트 전파를 막습니다.
    event.stopPropagation();
  };

  return (
    <div className='w-72 h-full flex justify-center items-center'>
      <div className='mt-12 w-[25vw] mx-4 border-[1px] rounded-lg border-black flex flex-col text-center'>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${
              expandedSubcategories[index] ? 'bg-gray-200' : ''
            }`}
            onClick={() => handleCategoryClick(index)}
          >
            {category.name}
            {expandedSubcategories[index] &&
              category.subcategories.length > 0 && (
                <div className='flex flex-col justify-center items-center'>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div
                      key={subIndex}
                      className='cursor-pointer w-full h-full'
                      onClick={(event) =>
                        handleSubcategoryClick(event, index, subcategory)
                      }
                    >
                      {subcategory}
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
