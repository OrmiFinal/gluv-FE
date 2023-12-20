import React, { useState,useContext } from 'react';
import { ModelContext } from '../../context/ModelContextProvider';
import Contour from '../ui/Contour';
import { FetchAllContext } from '../../api/post';

function BottomMenu() {

  const [expandedSubcategories, setExpandedSubcategories] = useState({});

  const { selectedCategory,ToggleMiniChatModel,setContent } = useContext(ModelContext);

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

  const fetchData = async (categoryIndex, subcategory) => {
    try {
      // Fetch post data
      console.log("fetchDatasubcategory")
      console.log("fetchDatasubcategory")
      console.log("fetchDatasubcategory")

      console.log(subcategory)
      console.log("fetchDatasubcategory")
      console.log("fetchDatasubcategory")
      console.log("fetchDatasubcategory")
      
      const postResponse = await FetchAllContext({
        search: '',
        category: selectedCategory.category,
        subcategory: subcategory,
        order: 'desc',
        page: 1,
        author: '',
      });

      setContent(postResponse)
      if (postResponse) {
        // Handle the fetched data as needed
        console.log("postResponse", postResponse);
      }
    } catch (error) {
      console.error('Error fetching FetchAllContextdata:', error.message);
    }
  };

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
    fetchData({});

    fetchData(categoryIndex, subcategory);
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



// import React, { useState, useContext } from 'react';
// import { ModelContext } from '../../context/ModelContextProvider';
// import Contour from '../ui/Contour';
// import { FetchAllContext } from '../../api/post';

// function BottomMenu() {
//   const { selectedCategory,ToggleMiniChatModel,setContent } = useContext(ModelContext);

//   const [expandedSubcategories, setExpandedSubcategories] = useState({});

//   const categories = [
//     { name: '공지사항', subcategories: [] },
//     { name: '질문게시판', subcategories: [] },
//     {
//       name: '자유게시판',
//       subcategories: ['전체', '잡담', '소설', '수필', '시'],
//     },
//     {
//       name: '창작게시판',
//       subcategories: ['전체', '소설', '수필', '시'],
//     },
//   ];

//   const fetchData = async (categoryIndex, subcategory) => {
//     try {
//       // Fetch post data
//       const postResponse = await FetchAllContext({
//         search: '',
//         category: selectedCategory.category,
//         subcategory: selectedCategory.subcategory,
//         order: 'desc',
//         page: 1,
//         author: '',
//       });

//       setContent(postResponse)
//       if (postResponse) {
//         // Handle the fetched data as needed
//         console.log("postResponse", postResponse);
//       }
//     } catch (error) {
//       console.error('Error fetching FetchAllContextdata:', error.message);
//     }
//   };

//   const handleCategoryClick = (index) => {
//     setExpandedSubcategories((prev) => ({
//       ...prev,
//       [index]: true,
//     }));

//     ToggleMiniChatModel({
//       content: {
//         category: categories[index].name,
//         subcategory: '',
//       },
//     });
//   };

//   const handleSubcategoryClick = (categoryIndex, subcategory, event) => {
//     ToggleMiniChatModel({
//       content: {
//         category: categories[categoryIndex].name,
//         subcategory: subcategory,
//       },
//     });

//     setExpandedSubcategories((prev) => ({
//       ...prev,
//       [categoryIndex]: true,
//     }));

//     // Additional actions for subcategory click can be added here
//     console.log(
//       `Clicked on category: ${categories[categoryIndex].name} - Subcategory: ${subcategory}`
//     );

//     fetchData(categoryIndex, subcategory);

//     event.stopPropagation();
//   };

//   return (
//     <div className='w-72 h-full flex justify-center items-center'>
//       <div className='mt-12 w-[25vw] mx-4 border-[1px] rounded-lg border-black flex flex-col text-center'>
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className={`p-2 cursor-pointer ${
//               expandedSubcategories[index] ? 'bg-zinc-200' : ''
//             }`}
//             onClick={() => handleCategoryClick(index)}
//           >
//             {category.name}
//             {expandedSubcategories[index] &&
//               category.subcategories.length > 0 && (
//                 <div className='flex flex-col justify-center items-center'>
//                   {category.subcategories.map((subcategory, subIndex) => (
//                     <div className='w-full' key={subIndex}>
//                       <div className='text-xl border-t my-1 border-gray-300 w-[180px]' />

//                       <div
//                         className='cursor-pointer hover:bg-zinc-100 w-full px-8'
//                         onClick={(event) =>
//                           handleSubcategoryClick(index, subcategory, event)
//                         }
//                       >
//                         {subcategory}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BottomMenu;

