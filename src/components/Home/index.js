import React from 'react';
import landing from '../../images/landing.png'
 
const Home = () => (
  <div>
    <div className="container landing-container">
      <h1 className="page-title landing-title">Your Authentication works </h1>
      <p>Thanks to this <a href="https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial" class="book-link">dude</a></p>
      <img src={landing} alt="react-firebase" width="800px"/>
    </div>
  </div>
);
 
export default Home;