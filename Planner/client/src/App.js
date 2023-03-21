import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/nav/navbar.component.js";
import Landing from './components/landing/landing.component.js';
import Login from './components/login/login.component.js';
import Home from './components/home/home.component.js';
import Board from './components/board/board.component.js';
import Task from './components/task/task.component.js';
import Page from './components/page/page.js';



function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
          <Navbar />
          <Routes>
              <Route path="/" element= {<Landing />} />
              <Route path="/login" element= {<Login />} />
              <Route path="/home" element= {<Home />} />
              <Route path="/board" element= {<Board />} />
              <Route path="/task" element= {<Task />} />
              <Route path="/page" element= {<Page />} />
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
