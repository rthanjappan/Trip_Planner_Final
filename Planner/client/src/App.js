import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Navbar from "./components/nav/navbar.component.js";
import Landing from './components/landing/landing.component.js';
import Login from './components/login/login.component.js';



function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
          {/* <Navbar /> */}
          <Routes>
              <Route path="/" element= {<Landing />} />
              <Route path="/login" element= {<Login />} />
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
