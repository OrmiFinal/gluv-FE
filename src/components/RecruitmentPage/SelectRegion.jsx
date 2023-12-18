import React, { useState } from 'react';


const SelectRegion = () => {
  const [showRegions, setShowRegions] = useState(false);
  const regions = ["경남", "서울", "경북", "인천", "대구", "광주", "대전", "울산"];

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
