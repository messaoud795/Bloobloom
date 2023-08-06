import React from 'react';
import { arePropsEqual } from '../../utils/utils';
import './Glass.css';

const Glass = ({ glass }) => {
  return (
    <div className='glass'>
      <span className='glass-title'>{glass.name}</span>
      <img
        className='glass-img'
        src={glass.glass_variants[0].media[0].url}
        alt='glass pic'
      />
    </div>
  );
};

export default React.memo(Glass, arePropsEqual);
