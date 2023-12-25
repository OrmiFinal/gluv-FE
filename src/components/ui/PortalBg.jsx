import React,{useContext} from 'react'
import { OpenModalContext } from '../../context/OpenModalProvider';


function PortalBg({  children }) {
  const { closeForm } = useContext(OpenModalContext);

  const onClose = () => {
    closeForm(); // Replace "loginForm" with the desired form category
  };

  return (
    <div>

      <section
        className='fixed  top-0 left-0 flex flex-col justify-center items-center w-full h-full  bg-neutral-900/70'
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
 
        <div className='bg-white z-50 flex  '>{children}</div>
      </section>


    </div>
  )
}

export default PortalBg