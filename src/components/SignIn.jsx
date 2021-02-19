import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import OAuthBtn from './OAuthBtn';
import { SignInWithGoogle } from '../firebase/firebase.utils';
import { SignInWithGitHub } from '../firebase/firebase.utils';

const SignIn = () => {
  return (
    <div className='background-container'>
      <div className='sign-in-container'>
        <h1 className='logo logo-sign-in'>Querria</h1>
        <p className='headline'>
          A place to share embarassing stories and have an existential crisis
        </p>
        <div className='sign-in-content'>
          <div className='sign-up'>
            <OAuthBtn
              auth={SignInWithGoogle}
              source='https://developers.google.com/identity/images/g-logo.png'
            >
              Continue with Google
            </OAuthBtn>
            <OAuthBtn
              auth={SignInWithGitHub}
              source='https://image.flaticon.com/icons/png/512/25/25231.png'
            >
              Continue with GitHub
            </OAuthBtn>
            <div className='general-text'>
              <a>Sign Up With Email.</a> By continuing you indicate that you
              have read and agree to Querria's <a>Terms of Service</a> and
              <a> Privacy Policy</a>.
            </div>
          </div>
          <div className='sign-in'>
            <p className='login-title'>Login</p>
            <input placeholder='Email' className='login-input email' />
            <input placeholder='Password' className='login-input' />
            <div className='login'>
              <p className='forgot-pwd general-text'>Forgot Password?</p>
              <Link to='/home' className='login-btn'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
