import React, { useContext, useState, useEffect } from 'react';

import { OpenModalContext } from '../../context/OpenModalProvider';
import { Request } from '../../api/api';

import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import Contour from '../ui/Contour'
import Pagination from './Pagination';

function AlertFormMain() {
  const { closeForm } = useContext(OpenModalContext);
  const [notiData, setNotiData] = useState([]);

  // 페이지네이션 관련
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10; // 페이지당 아이템 수

  const handlePageChange = (newPage) => {
    console.log(newPage)
    setCurrentPage(newPage);
  };

  useEffect(() => {
      const fetchNotiData = async () => {
          try {
            const response = await Request('get', '/notifications/', {}, {
              page : currentPage,
            }, {})
            if (!response) {
                throw new Error('Failed to fetch data');
            }
            console.log(response)
            setNotiData(response.results);
            setTotalPages(Math.ceil(response.count / itemsPerPage));

            setPagenationInfo({
              next : response.next,
              prev : response.prev,
              count : response.count,
            })
          } catch (error) {
              console.error('fetch data error :', error.message);
          }
      };
  
      fetchNotiData();
  }, [currentPage]);


  return (
    <ModalPortal>
      <PortalBg>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-[70vw] h-[60vw] z-50 overflow-scroll border'>
            <div className='relative bg-white p-8 rounded-md'>
              <h2 className='text-2xl font-bold mb-4'>전체 알림</h2>
              <Contour />
              {notiData.map((item, index) => (
                <div
                  key={index}
                  className={'border rounded-md p-2 m-2 flex'}
                >
                  {
                    !item.is_read ? (
                    <p className='text-xl font-bold text-black p-2'>
                      {item.message}
                    </p>):(
                    <p className='text-xl text-gray-400 p-2'>
                      {item.message}
                    </p>)}
                </div>
              ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}></Pagination>

          </div>
        </div>
      </PortalBg>
    </ModalPortal>
  );
}

export default AlertFormMain;
