import React from 'react';
import landing from '../../images/landing.png'
 
const Landing = () => (
  <div className="container landing-container">
    <h1 className="page-title landing-title">Authentication with 
    <a href="https://reactjs.org/" class="react"> React </a> 
    and 
    <a href="https://firebase.google.com/" class="firebase"> Firebase </a>
    </h1>
    <p>Inspired by this <a href="https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial" class="book-link">dude</a></p>
    <img src={landing} alt="react-firebase" width="800px"/>
  </div>
);
  
export default Landing;