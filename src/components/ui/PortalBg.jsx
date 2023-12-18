import React from 'react'


function PortalBg({ onClose, children }) {
  return (
    <div>

      <section
        className='fixed  top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-neutral-900/70'
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
 
        <div className='bg-white '>{children}</div>
      </section>


    </div>
  )
}

export default PortalBg