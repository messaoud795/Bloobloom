import React, { useEffect, useState } from 'react';
import './Menu.css';
import RightArrowIcon from '../../icons/RightArrowIcon';
import { useNavigate } from 'react-router-dom';
import { getScreenWidth } from '../../utils/utils';
import CloseIcon from '../../icons/CloseIcon';
import {
  menuItems,
  menuSubItems,
  mobileScreenWidth,
  menuItemsWithSubItemsNumber,
} from './MenuConstants';

const Menu = () => {
  const navigate = useNavigate();

  const [isScreenSmall, setIsScreenSmall] = useState(
    getScreenWidth() < mobileScreenWidth
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //get screen width to change some css propreties using js
  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsScreenSmall(getScreenWidth() < mobileScreenWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  //we need to add event listener because we want to hide the menu content
  //when user slects an items and show it again afterwards when user hover over
  //the menu title
  const menuOpenHandler = (close = false) => {
    const menuNode = document.querySelector('.menu');
    const menuContentNode = document.querySelector('.menu-items');

    menuNode.addEventListener('mouseover', () => {
      menuContentNode.style.display = 'block';
      setIsMenuOpen(true);
    });
    menuNode.addEventListener('mouseout', () => {
      menuContentNode.style.display = 'none';
      setIsMenuOpen(false);
    });
    if (close) {
      menuContentNode.style.display = 'none';
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const menuNode = document.querySelector('.menu');
    menuOpenHandler();
    //remove events listeners after component will unmount
    return () => {
      menuNode.removeEventListener('mouseover', () => {});
      menuNode.removeEventListener('mouseout', () => {});
    };
  }, []);

  const collectionSelectionHandler = (item, subItem) => {
    //reinitialize menu items display proprety after disabling in mobile view
    //after user clicks on it
    const menuItemNodes = document.getElementsByClassName('menu-item');
    Array.from(menuItemNodes).forEach(item => {
      item.style.display = 'flex';
    });
    //hide menu content after item selection
    const menuContentNode = document.querySelector('.menu-items');
    menuContentNode.style.display = 'none';
    setIsMenuOpen(false);
    navigate(`/collections/${item}-${subItem}`);
  };

  //for small screens under 500px hide menu items after clicked
  const menuItemClickHandler = index => {
    if (isScreenSmall && index < menuItemsWithSubItemsNumber) {
      const menuItemNodes = document.getElementsByClassName('menu-item');
      Array.from(menuItemNodes).forEach(item => {
        item.style.display = 'none';
      });
    }
  };

  return (
    <div className='menu'>
      {(!isScreenSmall || (isScreenSmall && !isMenuOpen)) && (
        <span className='menu-title'>menu</span>
      )}
      {isScreenSmall && isMenuOpen && (
        <span onClick={() => menuOpenHandler(true)} className='menu-close'>
          <CloseIcon />
        </span>
      )}
      <div className='menu-items'>
        <div className='menu-items-content'>
          {menuItems.map((item, index) => (
            <div key={index} className='menu-row'>
              <div
                className='menu-item'
                onClick={() => {
                  menuItemClickHandler(index);
                }}
              >
                <span>{item}</span>
                {index < menuItemsWithSubItemsNumber && (
                  <span className='right-arrow-icon'>
                    <RightArrowIcon />
                  </span>
                )}
              </div>
              <>
                {index < menuItemsWithSubItemsNumber && (
                  <div className='menu-subitems'>
                    {menuSubItems.map(subItem => (
                      <span
                        className='menu-subitem'
                        key={subItem}
                        onClick={() => {
                          collectionSelectionHandler(item, subItem);
                        }}
                      >
                        {subItem}
                      </span>
                    ))}
                  </div>
                )}
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
