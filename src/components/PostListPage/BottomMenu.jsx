import React, { useState, useContext } from 'react';
import { ModelContext } from '../../context/ModelContextProvider';
import SelectButton from '../ui/SelectButton';
import { FetchAllContext } from '../../api/post';

function BottomMenu() {
  const [expandedSubcategories, setExpandedSubcategories] = useState({});
  const { ToggleMiniChatModel } = useContext(ModelContext);

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


  const [order_by, setOrderBySelect] = useState(null);
  const [order, setOrderSelect] = useState(null);

  const handleOrderBySelect = (option) => {
    console.log("handleOrderBySelect")
    console.log("handleOrderBySelect")
    console.log("handleOrderBySelect")
    console.log(option)
    ToggleMiniChatModel({
      content: {  order_by: option },
    });
   
  };

  const handleOrderSelect = (option) => {
    console.log("handleOrderSelect")
    console.log("handleOrderBySelect")
    console.log("handleOrderSelect")
    console.log(option)

    ToggleMiniChatModel({
      content: { order: option },
    });
    // You can perform additional actions here if needed
  };


 
  const handleSubcategoryClick = async (event, categoryIndex, subcategory) => {
    event.stopPropagation();
  
    await ToggleMiniChatModel({
      content: {
        category: categories[categoryIndex].name,
        subcategory: subcategory,
      },
    });
  
    setExpandedSubcategories({
      [categoryIndex]: true,
    });
  
    // Wait for ToggleMiniChatModel to finish before calling fetchData
    await new Promise((resolve) => setTimeout(resolve, 0));
  
    // Additional actions for subcategory click
    console.log(
      `Clicked on category: ${categories[categoryIndex].name} - Subcategory: ${subcategory}`
    );
  
    
  };
  

  const handleCategoryClick = async (index) => {
    event.stopPropagation(); 
    setExpandedSubcategories({
      [index]: true,
    });
  
    ToggleMiniChatModel({
      content: { category: categories[index].name, subcategory: '' },
    });
  
    // Wait for ToggleMiniChatModel to finish before calling fetchData
    await new Promise((resolve) => setTimeout(resolve, 0));
  
    
  };
  



  return (
    <div className='w-72 h-full flex justify-center items-center'>
      <div className='mt-12 w-[25vw] mx-4 border-[1px] rounded-lg border-black flex flex-col text-center'>
        
        {categories.map((category, index) => (
          <div
            key={index}
            className={`p-2 cursor-pointer ${
              expandedSubcategories[index] ? 'bg-zinc-200' : ''
            }`}
            onClick={() => handleCategoryClick(index)}
          >
            {category.name}
            {expandedSubcategories[index] &&
              category.subcategories.length > 0 && (
                <div className='flex flex-col justify-center items-center'>
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div className='w-full' key={subIndex}>
                      <div className='text-xl  border-t  my-1 border-gray-300 w-[180px]' />

                      <div
                        className='cursor-pointer hover:bg-zinc-100 w-full px-8'
                        onClick={(event) =>
                          handleSubcategoryClick(event, index, subcategory)
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
        <div>

<div >
            
                </div>
              
        </div>
        <SelectButton
                    className="text-sm text-left"
                    btnTitle="order_by"
                    title="선택 옵션"
                    btnoptions={[
                     
'order_by',
'views',
                    ]}
                    onOptionSelect={handleOrderBySelect}
                    size="w-[10vw]"
                  />
            
                <SelectButton
                  btnTitle={  'order'}
                  btnoptions={["asc", "desc"]}
                  onOptionSelect={handleOrderSelect}
                  title="정렬순서"
                  size="w-[10vw]"
                />
      </div>
    </div>
  );
}

export default BottomMenu;
