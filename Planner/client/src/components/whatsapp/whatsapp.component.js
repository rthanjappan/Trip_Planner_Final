
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';

import Input from '../login/input.component.js';

import { AUTH } from '../../constants/actionTypes.constants.js';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api/index.api.js';

import useStyles from '../login/styles.js';
import { blue } from '@material-ui/core/colors';

import { useDispatch, useSelector } from 'react-redux';
import { get_member_Details } from '../../actions/memberDetails.actions.js'
import { useEffect } from 'react';
//import {Linking} from 'react-native';
const WhatsApp = () => {
    const classes = useStyles();
    
    const [input, setInput] = useState("Your Name");
    const [ formData, setFormData ] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
  const styleObj1 = {
    fontSize: 20,
    backgroundColor:blue
    
  }

  
    return (

        <div>
            <h2>There is one thing left to do!</h2>
            <p style={styleObj1}>
              To invite someone using WhatsApp, open the <br></br>
            group page <b>on your phone</b> via the email and<br></br>
            click on "Send reminder".*</p>

            <h4>Do you use WhatsApp on your computer?</h4>

            <Button 
            onClick={() => {navigator.clipboard.writeText('http://localhost:3000/')}}>
                    <em><u>Copy the link</u></em></Button>
                 <span style={styleObj1} >so that you can share it.</span>
            <br></br><br></br>
            <Link to="/groups" style={styleObj1}>Visit the group page
            </Link>

            <br></br><br></br>
            <p>*Standard WhatsApp message charges apply.</p>
                    
       
      </div>
    );
    }
    export default WhatsApp;

