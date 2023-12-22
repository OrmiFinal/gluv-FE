import React, { useEffect } from 'react';
import {  userAPI } from '../api/exnew/all';

const Asd = () => {
  useEffect(() => {
    // 예시: 유저 정보 받아오기
    userAPI.getProfile('1')
      .then(response => {
        console.log('유저 정보:', response.data);
      })
      .catch(error => {
        console.error('에러:', error);
      });

 

    // ... 다른 API 함수들도 유사하게 사용 가능

  }, []); // 컴포넌트가 처음 마운트될 때만 실행되도록 useEffect에 빈 배열을 전달

  return (
    <div>
      {/* 컴포넌트 렌더링 */}
    </div>
  );
};

export default Asd;
