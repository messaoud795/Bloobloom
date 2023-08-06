import React from 'react';
import './Header.css';
import Menu from '../menu/Menu';
import bloobloom from '../../icons/bloobloom-icon.png';

const Header = () => {
  return (
    <div className='header'>
      <Menu />
      <img src={bloobloom} alt='bloobloom-icon' />
    </div>
  );
};

export default Header;
