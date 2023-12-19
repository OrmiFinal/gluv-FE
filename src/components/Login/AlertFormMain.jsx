import React, { useContext } from 'react';
import ModalPortal from '../ui/ModalPortal';
import PortalBg from '../ui/PortalBg';
import { OpenModalContext } from '../../context/OpenModalProvider';

function AlertFormMain() {
  const { closeForm } = useContext(OpenModalContext);
  const jsonData = [
    { title: 'Item 1', description: 'Description for Item 1qweqweqwe' },
    { title: 'Item 2', description: 'Description for Item 2' },
    { title: 'Item 1', description: 'Description for Item 1qweqweqwe' },
    { title: 'Item 2', description: 'Description for Item 2' },
    { title: 'Item 1', description: 'Description for Item 1qweqweqwe' },
    { title: 'Item 2', description: 'Description for Item 2' },
    { title: 'Item 1', description: 'Description for Item 1qweqweqwe' },
    { title: 'Item 2', description: 'Description for Item 2' },
    // Add more items as needed
  ];
  return (
    <ModalPortal>
      <PortalBg>
        <div className='flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md w-[70vw] h-[60vw] z-50   overflow-scroll'>
            <div className='relative bg-white p-8 rounded-md'>
              <h2 className='text-2xl font-bold mb-4'>Alert</h2>
              {jsonData.map((item, index) => (
                <div key={index} className='mb-4'>
                  <h3 className='text-xl font-bold'>{item.title}</h3>
                  <p className='font-mono  overflow-hidden'>{item.description}</p>
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
