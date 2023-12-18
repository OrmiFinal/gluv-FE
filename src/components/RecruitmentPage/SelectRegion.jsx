import React, { useState } from 'react';


const SelectRegion = () => {
  const [showRegions, setShowRegions] = useState(false);
  const regions = [   '서울',
  '경기',
  '강원',
  '충청북도',
  '충청남도',
  '전라북도',
  '전라남도',
  '경상북도',
  '경상남도',
  '제주특별자치도'];

  return (
    <div className="container mx-auto mt-8">
      <div className="button-container mb-4">
      


      </div>
      {showRegions && (
        <div className="region-list border border-gray-300 p-4">
          <ul>
            {regions.map((region, index) => (
              <li key={index} className="mb-2">{region}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectRegion;
