import { useState, useEffect } from 'react';

/**
 * 윈도우 너비에 기반하여 현재 화면 크기를 결정하는 훅입니다.
 *
 * @property {Object} 현재 화면 크기를 담고 있는 객체입니다.
 * @returns {string} screenSize - 현재 화면 크기 에따라서 ('sm', 'md', 'lg', 'xl','xxl')값이 나옵니다.
 */
const useWindowSize = () => {

  


  /**
   * 윈도우 너비를 기반으로 화면 크기를 계산하는 함수입니다.
   *
   * @param {number} width - 윈도우 너비입니다.
   * @returns {string} 계산된 화면 크기입니다.
   */
  const getScreenSize = (width) => {


    // 각 화면 크기에 대한 최대 너비를 정의하는 배열입니다.
   
    const breakpoints = [640, 768, 1024, 1280];
    let size = "none"
    switch (true) {
      case width <= breakpoints[0]:
        size = 'sm';
        break;
      case width <= breakpoints[1]:
        size = 'md';
        break;
      case width <= breakpoints[2]:
        size = 'lg';
        break;
      case width <= breakpoints[3]:
        size = 'xl';
        break;
      default:
        break;
    }

    return size;
  };

  const [screenSize, setScreenSize] = useState(getScreenSize(window.innerWidth));

  useEffect(() => {
    /**
     * 윈도우 리사이즈 이벤트를 처리하는 핸들러입니다.
     */
    const handleResize = () => {
      setScreenSize(getScreenSize(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 최초 마운트 시에만 실행되는 효과

  return { screenSize };
};


export default useWindowSize;
