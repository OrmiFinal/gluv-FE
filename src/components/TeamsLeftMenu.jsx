import React from 'react';
import DynamicColorButton from './DynamicColorButton';
import Margin from './Margin';
import Contour from './ui/Contour';
import { Link } from 'react-router-dom';

function TeamsLeftMenu() {
  return (
    <div>
     <div className='w-72 h-full flex  ml-8 mt-20 my-4'>
      <div className='  w-52 h-[230px] border-[1px] rounded-md bg-gray-100 flex flex-col p-4'>
        <div className='menu-item  cursor-pointer'>
          메뉴
         
        </div>
        <Contour />
        <Link to="/users/profile/edit">
        <div className='menu-item cursor-pointer'>
          기본 설정
         
        </div>
        </Link>
        
        <Contour />
        <Link to="/users/myteams/">
        <div className='menu-item cursor-pointer'>
          활동중인모임
  
        </div>
        <Contour />
        </Link>
        <Link to="/users/myappliedteams/">
        <div className='menu-item  cursor-pointer'>
          신청중인모임 
         
        </div>
        </Link>
        <Contour />
        <Link to="/users/myposts/">
        <div className='menu-item  cursor-pointer'>
          내가적은 게시물
    
        </div>
        </Link>
        <Contour />
      </div>
    </div>
    
     </div>
    
  );
}

export default TeamsLeftMenu;
