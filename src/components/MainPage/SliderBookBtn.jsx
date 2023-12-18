import React from 'react'

function SliderBookBtn() {
  return (

    <div className=" w-full top-10  pointer-events-none">
      <div className=" flex max-w-screen mx-auto">
        <div className="ml-auto flex bg-black bg-opacity-30 rounded-full px-2 py-2 items-center text-body2 pointer-events-auto">
          <div className="flex">
            
            <button type="button" className="cursor-pointer rounded-full flex justify-center items-center">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4386 16L21.0386 22.6L19.1533 24.4853L10.668 16L19.1533 7.51465L21.0386 9.39998L14.4386 16Z" fill="white"></path>
              </svg>
            </button>
          </div>
          <span className="font-bold text-white">1</span>
          <span className="h-3 w-px bg-gray-200 mx-1.5"></span>
          <span className="font-bold text-white text-opacity-60">3</span>
          <div className="flex">
            <button type="button" className="cursor-pointer  rounded-full flex justify-center items-center rotate-180">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4386 16L21.0386 22.6L19.1533 24.4853L10.668 16L19.1533 7.51465L21.0386 9.39998L14.4386 16Z" fill="white"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default SliderBookBtn