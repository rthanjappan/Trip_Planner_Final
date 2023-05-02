import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/nav/navbar.component.js";
import Landing from './components/landing/landing.component.js';
import Login from './components/login/login.component.js';
import Page from './components/page/page.js';
import Vote from './components/vote/vote.component.js';
import Names from './components/names/names.component.js';
import Groups from './components/groups/groups.component.js';
import Invitations from './components/invitations/invitations.components.js';
import Plans from './components/plans/plans.component.js';
import Board from './components/board/board.components.js';
import Emails from './components/emails/emails.component.js'
//import Plans from './components/plans/plans.component.js'
import TextMessages from './components/text_messages/text_messages.component.js';
import Messenger from './components/messenger/messenger.component.js';
import WhatsApp from './components/whatsapp/whatsapp.component.js';


function App() {

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
          <Navbar />
          <Routes>
              <Route path="/" element= {<Landing />} />
              <Route path="/login" element= {<Login />} />
              <Route path="/page" element= {<Page />} />
              <Route path="/vote" element= {<Vote />} />
              <Route path="/names" element= {<Names />} />
              <Route path="/groups" element= {<Groups />} />
              <Route path="/invitations" element= {<Invitations />} />
              <Route path="emails" element={<Emails/>} />
              <Route path = "/plans" element = {<Plans />} />
              <Route path = "/textMessages" element = {<TextMessages />} />
              <Route path = "/messenger" element = {<Messenger />} />
              <Route path="/whatsapp" element={<WhatsApp/>} />

              <Route path = "/board" element = {<Board/>} />
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
