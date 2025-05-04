// import logo from './logo.svg';
// import './App.css';
// import blitz from 'blitzllama-js';

// //initialize blitzllama SDK. Place this as higher in your app as possible
// blitz.init("key_BYSK04g7ZRcmF2Q");
// blitz.triggerEvent('userLoggedIn');
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// Filename - App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Test from './pages/Test';
import HigherOrder from './pages/HigherOrder';
import CallApplyBind from './pages/CallApplyBind';
import Polyfills from './pages/Polyfills';
import ApplyPolyfil from './pages/ApplyPolyfil';
import Promises from './pages/Promises';
import AsyncAwait from './pages/AsyncAwait';
import PromiseChanining from './pages/PromiseChanining';
import TypeConvrsion from './pages/TypeConvrsion';
import Debouncing from './pages/Debouncing';
import Throttling from './pages/Throttling';
import CbVCbR from './pages/CbVCbR';
import Hoisting from './pages/Hoisting';
import Clousures from './pages/Closures';
import Curring from './pages/Curring';


const App = () => {
  return (
    <Router>
      <div>
        <h1>
          Namaste Javascript
        </h1>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about"  element={<AboutPage />} />
        </Routes> */}
        {/* <Test/>
        <HigherOrder/>
        <CallApplyBind/> */}
        {/* <Polyfills/> */}
        {/* <ApplyPolyfil/> */}
        {/* <Promises /> */}
        {/* <AsyncAwait/> */}
        {/* <PromiseChanining/> */}
        {/* <TypeConvrsion /> */}
        {/* <Debouncing/> */}
        {/* <Throttling /> */}
        {/* <CbVCbR /> */}
        {/* <Hoisting /> */}
        {/* <Clousures /> */}
        <Curring />
      </div>
    </Router>
  );
};

export default App;

