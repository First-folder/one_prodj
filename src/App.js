import React from 'react';

import './App.css';
import Header from "./component/header";
import Navbar from "./component/navbar";
import Profile from "./component/pro";


// import Footer from './footer.js';
// import Tehno from "./tehno";
// import Tehno from './tehno.js';

const App = () => {
  return (
      <div  className="wrapper">
          <Header/>
          <Navbar/>
         <Profile/>



      </div>
  );
}


export default App;
