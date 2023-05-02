import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/nav/navbar.component.js";
import Landing from './components/landing/landing.component.js';
import Login from './components/login/login.component.js';
import Home from './components/home/home.component.js';
import Task from './components/task/task.component.js';
import Page from './components/page/page.js';
import Vote from './components/vote/vote.component.js';
import Names from './components/names/names.component.js'
import Groups from './components/groups/groups.component.js'
import Invitations from './components/invitations/invitations.components.js'
<<<<<<< HEAD
import Emails from './components/emails/emails.component.js'
=======
import Plans from './components/plans/plans.component.js'
>>>>>>> 73e743b1af70576f49a226cdc3d754de413fd0b6

function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
          <Navbar />
          <Routes>
              <Route path="/" element= {<Landing />} />
              <Route path="/login" element= {<Login />} />
              <Route path="/home" element= {<Home />} />
              <Route path="/task" element= {<Task />} />
              <Route path="/page" element= {<Page />} />
              <Route path="/vote" element= {<Vote />} />
              <Route path="/names" element= {<Names />} />
              <Route path="/groups" element= {<Groups />} />
              <Route path="/invitations" element= {<Invitations />} />
<<<<<<< HEAD
              <Route path="emails" element={<Emails/>} />
=======
              <Route path = "/plans" element = {<Plans />} />
>>>>>>> 73e743b1af70576f49a226cdc3d754de413fd0b6
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
