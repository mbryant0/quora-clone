import React from 'react';
import './Popup.css';

const Popup = ({ children, togglePopup }) => {
  return (
    <div onClick={togglePopup} className='popup'>
      <div className='inner-popup'>{children}</div>
    </div>
  );
};

export default Popup;
