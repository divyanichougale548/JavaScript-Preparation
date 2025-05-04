import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import blitz from 'blitzllama-js';

const HomePage = () => {
  useEffect(() => {
    // Trigger the survey on home page visit
    blitz.init("key_BYSK04g7ZRcmF2Q");
     blitz.triggerEvent('homepage' ,{ event_key: 'initial_visit' });
    // console.log('Survey triggered on HomePage');
  }, []);
function x(){
  var a =7;
  function y(){
    console.log(a);
  }
  return y;
}
var z=x();
console.log(z);
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <Link to="/about" >Go to About Page</Link>
    </div>
  );
};

export default HomePage;
