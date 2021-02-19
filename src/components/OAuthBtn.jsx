import React from 'react';
import './OAuthBtn.css';

const OAuthBtn = ({ children, ...props }) => {
  return (
    <div className='oauth' onClick={props.auth}>
      <div
        style={{ background: `url(${props.source}`, backgroundSize: 'cover' }}
        className='img-container'
      />
      <p>{children}</p>
    </div>
  );
};

export default OAuthBtn;
