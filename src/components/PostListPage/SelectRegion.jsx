import React,{ useState } from "react";

const SelectRegion = ({ onRegionSelect ,plustailwind}) => {
  const [showRegions, setShowRegions] = useState(false);
  const regions = [
    '서울', '경기', '충남', '충북' ,'강원' ,'경남', '경북', '제주', '전남' ,'전북'
  ];

  const handleRegionClick = (selectedRegion) => {
    onRegionSelect(selectedRegion);
    setShowRegions(false);
  };
  

  return (
    <div className="container mx-auto mt-8  w-48 ">
      <div className="button-container mb-4"></div>
      {showRegions && (
        <div className="region-list border border-gray-300 p-4">
          <ul>
            {regions.map((region, index) => (
              <li
                key={index}
                className="mb-2"
                onClick={() => handleRegionClick(region)}
              >
                {region}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectRegion;