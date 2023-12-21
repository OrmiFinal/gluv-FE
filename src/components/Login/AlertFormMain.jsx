import React, { useContext, useState, useEffect } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import { OpenModalContext } from '../../context/OpenModalProvider';
import { Request } from '../../api/api';

function AlertFormMain() {
  const { closeForm } = useContext(OpenModalContext);
  const [notiData, setNotiData] = useState([]);
  useEffect(() => {
      const fetchNotiData = async () => {
          try {
            const response = await Request('get', 'notifications/', {}, {}, {})
            if (!response) {
                throw new Error('Failed to fetch data');
            }
            console.log(response.data)
            setNotiData(response.data);
          } catch (error) {
              console.error('fetch data error :', error.message);
          }
      };
  
      fetchNotiData();
  }, []);


  return (
    <ModalPortal>
      <PortalBg>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-[70vw] h-[60vw] z-50   overflow-scroll'>
            <div className='relative bg-white p-8 rounded-md'>
              <h2 className='text-2xl font-bold mb-4'>전체 알림</h2>
              {notiData.map((item, index) => (
                <div key={index} className='mb-4'>
                  <h3 className='text-xl font-bold'>{item.message}</h3>
                  <p className='overflow-hidden'>{item.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PortalBg>
    </ModalPortal>
  );
}

export default AlertFormMain;
