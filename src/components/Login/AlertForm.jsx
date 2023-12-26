import React, { useContext, useState, useEffect } from 'react';

import { NotificationAPI } from '../../api/notification';

import { OpenModalContext } from '../../context/OpenModalProvider';
import ModalPortal from '../ui/ModalPortal';
import PortalBgRight from '../ui/PortalBgRight';

function AlertForm() {
  const { closeForm ,openForm} = useContext(OpenModalContext);
  const notificationAPI = new NotificationAPI()

  const gotoAlertFormMain = () => {
    openForm('alertFormMain');
  };

  const readNotification = (notification) => {
    notificationAPI.Read(notification)
    
    if(notification.url){
      window.location.href = notification.url
    }
  }
  const [notiData, setNotiData] = useState([]);
  useEffect(() => {
      const fetchNotiData = async () => {
          try {
            const response = await notificationAPI.Fetch()
            if (!response) {
                throw new Error('Failed to fetch data');
            }
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
          <div className='bg-white p-6 rounded-md w-72 z-50 max-h-96 overflow-y-auto'>
          <h1 className='font-bold mb-4'>새 알림</h1>

            {notiData.map((item, index) => (
              <div key={index} 
                className='border p-2 m-2 relative bg-white rounded-md mt-2'
                onClick={()=> readNotification(item)}>
                <h2 className='font-bold h-6 overflow-hidden '>{item.message}</h2>
              </div>
            ))}
          <div
            role='button'
            tabIndex={0}
            className='text-black pt-2 flex self-end rounded-md transition duration-300 text-sm justify-end'>   
            <div className='border p-2 rounded-sm mt-4' onClick={gotoAlertFormMain}>
              전체 알림
            </div>
          </div>
          </div>
          
        </div>
      </PortalBgRight>
    </ModalPortal>
  );
}

export default AlertForm;
