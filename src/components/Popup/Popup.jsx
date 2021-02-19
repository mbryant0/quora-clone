import React from 'react';
import './Popup.css';

const Popup = ({ children }) => {
  return (
    <div className='popup'>
      <div className='inner-popup'>{children}</div>
    </div>
  );
};

export default Popup;
