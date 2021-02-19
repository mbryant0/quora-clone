import React from 'react';
import './NavigationBar.css';
import { auth } from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';

const NavigationBar = ({ togglePopup }) => {
  return (
    <div className='nav-bar'>
      <p className='logo logo-header'>Querria</p>
      <div className='search'>
        <img src='https://www.freepngimg.com/download/world_wide_web/62434-engine-web-search-wordpress.com-icons-wallpaper-desktop.png' />
        <input type='text' placeholder='Search Querria' />
      </div>
      <Link
        to='/'
        className='sign-out'
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </Link>
      <div className='click' onClick={togglePopup}>
        Add Question
      </div>
    </div>
  );
};
export default NavigationBar;
