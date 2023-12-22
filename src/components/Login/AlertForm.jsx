import React, { useContext, useState, useEffect } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBgRight from '../ui/PortalBgRight';
import { OpenModalContext } from '../../context/OpenModalProvider';
import { Request } from '../../api/api';

function AlertForm() {
  const { closeForm ,openForm} = useContext(OpenModalContext);
  const gotoAlertFormMain = () => {
    openForm('alertFormMain');
  };

  const [notiData, setNotiData] = useState([]);
  useEffect(() => {
      const fetchNotiData = async () => {
          try {
            const response = await Request('get', 'notifications/unread/', {}, {}, {})
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
      <PortalBgRight>
        <div className='relative '>
          <div className='bg-white p-6 rounded-md w-64 z-50'>
            {notiData.map((item, index) => (
              <div key={index} className='relative bg-white rounded-md mt-2'>
                <h2 className='font-bold'>{item.message}</h2>
                <p className=' text-sm overflow-hidden whitespace-nowrap overflow-ellipsis'>
                  {item.message}
                </p>
              </div>
            ))}
          <div
  role='button'
  tabIndex={0}
  className='text-black pt-2 flex self-end rounded-md transition duration-300 text-sm justify-end'
>
  <div className='border p-2 rounded-sm mt-4' onClick={gotoAlertFormMain}>전체로이동</div>
</div>
          </div>
          
        </div>
      </PortalBgRight>
    </ModalPortal>
  );
}

export default AlertForm;
