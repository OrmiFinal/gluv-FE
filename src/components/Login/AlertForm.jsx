import React, { useContext } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBgRight from '../ui/PortalBgRight';
import { OpenModalContext } from '../../context/OpenModalProvider';

function AlertForm() {
  const { closeForm ,openForm} = useContext(OpenModalContext);
  const gotoAlertFormMain = () => {
    openForm('alertFormMain');
  };

  const jsonData = [
    { title: 'Item 1', description: 'Description for Item 1qweqweqwe' },
    { title: 'Item 2', description: 'Description for Item 2' },
    // Add more items as needed
  ];

  return (
    <ModalPortal>
      <PortalBgRight>
        <div className='relative '>
          <div className='bg-white p-6 rounded-md w-64 z-50'>
            {jsonData.map((item, index) => (
              <div key={index} className='relative bg-white rounded-md mt-2'>
                <h2 className='font-bold'>{item.title}</h2>
                <p className=' text-sm overflow-hidden whitespace-nowrap overflow-ellipsis'>
                  {item.description}
                </p>
              </div>
            ))}
           <div
  role='button'
  tabIndex={0}
  className='text-sky-300 pt-2 flex self-end rounded-md transition duration-300 text-sm justify-end'
  onClick={gotoAlertFormMain}
>
  전체로이동
</div>
          </div>
          
        </div>
      </PortalBgRight>
    </ModalPortal>
  );
}

export default AlertForm;
