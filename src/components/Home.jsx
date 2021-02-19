import React from 'react';
import NavigationBar from './NavigationBar';
import './Home.css';

const Home = (props) => {
  return (
    <div div className='home'>
      <NavigationBar currentUser={props.currentUser} />
      <p>Hi</p>
    </div>
  );
};

export default Home;
