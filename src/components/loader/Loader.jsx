import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className='glasses-loader'>
      <div className='frames'>
        <svg
          id='frames'
          data-name='frames'
          width='125px'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 125 45.01'
          className='glass-svg'
        >
          <defs></defs>
          <path
            className='cls-1'
            d='M382.33,224.14a8,8,0,0,0-3.5-4.71c-2.4-1.38-22.38-1.73-22.58-1.73s-0.15,0-.25,0c-0.55,0-1.05-.12-1.63-0.15-1.05,0-2.28-.1-3.65-0.1-4.58,0-12.6.47-18.85,3.25l-7,1.08a40,40,0,0,1-9.7,0l-7-1.08c-6.25-2.81-14.28-3.25-18.85-3.25-1.38,0-2.63,0-3.65.1-0.58,0-1.13.1-1.68,0.15l-0.17,0c-0.2,0-20.15.34-22.58,1.72a8.12,8.12,0,0,0-3.5,4.7,5.17,5.17,0,0,0,.67,4.21c0.92,1.43,4.37,8.67,6.35,12.88,0,0.07.1,0.12,0.13,0.2a65.14,65.14,0,0,0,2.37,9.85c2.3,7.22,10.9,11.21,24.18,11.21a67,67,0,0,0,7-.37,18.11,18.11,0,0,0,12.25-6c4.13-4.51,6.4-11.92,6.43-20.61l1.63-1.11a2.81,2.81,0,0,1,2.65,0l1.63,1.11c0,8.69,2.3,16.11,6.42,20.62a18,18,0,0,0,12.25,6,67.39,67.39,0,0,0,7,.37c13.28,0,21.88-4,24.18-11.2a65.84,65.84,0,0,0,2.38-9.85,0.86,0.86,0,0,0,.13-0.2c2-4.21,5.43-11.45,6.35-12.88A5.33,5.33,0,0,0,382.33,224.14Zm-75.47,28.64a13.06,13.06,0,0,1-9,4.37,64,64,0,0,1-6.51.35c-5.09,0-17.16-.75-19.36-7.64a61.69,61.69,0,0,1-3-17,7.22,7.22,0,0,1,2.74-5.69c2.89-2.6,7.75-4.17,14.09-4.54,1,0,2.1-.1,3.37-0.1,3.29,0,11.28.3,16.85,2.8,0,0,0,0,.05,0,3.19,1.45,5.6,3.65,5.8,7C312.46,241.2,310.61,248.66,306.85,252.78Zm64.08-19.95a60.52,60.52,0,0,1-2.94,17c-2.21,6.89-14.27,7.64-19.37,7.64a64.54,64.54,0,0,1-6.54-.35,13.12,13.12,0,0,1-9-4.37c-3.75-4.12-5.6-11.58-5-20.5,0.2-3.32,2.59-5.49,5.81-7,0,0,0,0,.05,0,5.58-2.52,13.56-2.79,16.86-2.79,1.27,0,2.41,0,3.37.1,8.8,0.53,12.93,3.15,14.83,5.29A6.84,6.84,0,0,1,370.94,232.83Z'
            transform='translate(-257.5 -217.5)'
          />
        </svg>
      </div>
      <div className='lens'>
        <div className='reflect'></div>
      </div>
      <div className='lens'>
        <div className='reflect'></div>
      </div>
    </div>
  );
};

export default Loader;
