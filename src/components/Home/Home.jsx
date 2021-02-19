import React, { useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Popup from '../Popup/Popup';
import './Home.css';

const Home = (props) => {
  const [popupState, setPopupState] = useState(false);

  const togglePopup = () => {
    setPopupState(!popupState);
  };
  return (
    <div div className='home'>
      <NavigationBar
        togglePopup={togglePopup}
        currentUser={props.currentUser}
      />
      {popupState ? (
        <Popup>
          <p>Add Question</p>
          <div>
            <p>Tips for getting good answers quickly</p>
            <ul>
              <li>Make sure your question has not been asked already</li>
              <li>Keep your question short and to the point</li>
              <li>Double-check grammar and spelling</li>
            </ul>
          </div>
          <div>
            <textarea placeholder='Start your question with "What", "How", "Why", etc.' />
          </div>
          <button onClick={togglePopup}>Cancel</button>
          <button>Add Question</button>
        </Popup>
      ) : null}
      <p>Hi</p>
    </div>
  );
};

export default Home;
