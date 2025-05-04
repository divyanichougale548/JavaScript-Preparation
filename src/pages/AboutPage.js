import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blitz from 'blitzllama-js';

const AboutPage = () => {
  useEffect(() => {
    // Trigger the survey on about page visit
     blitz.init("key_BYSK04g7ZRcmF2Q");
     blitz.triggerEvent('Portfolio', { event_key: 'about_click' });
    // console.log('Survey triggered on AboutPage');
  }, []);
  

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default AboutPage;
