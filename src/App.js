import React from 'react';
import Home from './components/Home'
import { FaBars,FaClosedCaptioning } from 'react-icons/fa'
import './App.css';

function App() {

  return (
    <div className="iframe App">
    <div class="masthead">
<div className="ellipse2"> <FaBars/></div>
<div className="unlearnkidcontent">Unlearn kid | Content Authorization Tool</div>
<div className="container frame">
<div className="nav-item home active">Home</div>
<div className="nav-item contents">Contents</div>
<div className="nav-item assets">Assets</div>
<div className="nav-item frameworks">Frameworks</div>
<div className="nav-item users">Users</div>
<div className="nav-item profilepictures">
<div className="nav-item"></div>
</div>
</div> 
</div>
    <Home></Home>
    
    </div>
  );
}

export default App;
