import { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/nav/navbar.component";
import Landing from './components/landing/landing.component.js';

//functions
import { getTest } from "./functions/test";

function App() {

  return (
    <Router>
      <Navbar />
      <Route path = "/" exact component = {<Landing />} />
    </Router>
  );
}

export default App;
