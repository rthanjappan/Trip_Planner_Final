//import useStyles from './styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';


// import Navbar from "../nav/navbar.component";
import Input from '../login/input.component.js';


import { AUTH } from '../../constants/actionTypes.constants';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api/index.api';

import useStyles from '../login/styles.js';



const Groups = () => {
    const classes = useStyles();
    const options = [
        { label: 'US$', value: 'US$' },
        { label: 'EU', value: 'EU' },
        // { label: 'Meat', value: 'meat' },
      ];

      const budgetOptions = [
        { label: '5000.00', value: '5000.00' },
        { label: '6000.00', value: '6000.00' },
        { label: '7000.00', value: '7000.00' },
        { label: '8000.00', value: '8000.00' },
        { label: '9000.00', value: '9000.00' },
        { label: '10000.00', value: '10000.00' },
      ];

    const initialInvitationMessage='We are going to draw names! Make a wish'+
     'list and draw a name so that everyone has time to buy a gift';


    const [input, setInput] = useState("Your Name");
    const [ formData, setFormData ] = useState('');
    const [tripDate,setTripDate] = useState(new Date());
    const [checked,setChecked] = useState(false);
    const [value, setValue] = useState('US$');
    const [budgetValue,setBudgetValue]=useState('5000.00');
    const [invitationMessage,setInvitationMessage]=
            useState(initialInvitationMessage);
    const navigate = useNavigate();
    
    
  //   const dataTosave={
  //     Group_ID:2,
  //     GroupName:"Europe Trip",
  //     TripDate: "4/1/2023",
  //     MailAddress: "123 oak rd , GA, 30067",
  //     CurrencyType: "EU",
  //     Amt:"7000.00",
  //     YourEmail: "rt@ggc.edu",
  //     InvitationMessage: "We are going to draw names!",
  // };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const displayNames = (e) => {
       console.log(formData);
       
    };
    

    const handleTripDateChange=(e)=>{
        setTripDate(e.target.value);
    }
    const handleCheckboxChange=(e)=>{
        setChecked(!checked);
    }

    const handleComboboxChange = (event) => {
        setValue(event.target.value);
      };

    const handleBudgetValueChange = (event) => {
        setBudgetValue(event.target.value);
    }; 

    
    const handleInvitationMessageChange = (event) => {
        setInvitationMessage(event.target.value);
    }; 
    
    const save_trip_details = ()=>{
        console.log("groups.component.js saving trip details to the server");
        const dataTosave={
          Group_ID:"xxxxx",
          GroupName:formData.GroupName,
          TripDate:tripDate,
          MailAddress: checked,
          CurrencyType: value,
          Amt:budgetValue,
          YourEmail: formData.email,
          InvitationMessage: invitationMessage,
      };

        api.saveTripDetails(dataTosave);
    }
    return (

        <div>
            <h3>Set up the Trip details</h3>
            <p><b>Group name</b></p>
        <Input name="GroupName" label="Enter a title for the Trip"   
        handleChange={handleChange} required autoFocus half/>

        <p><b>Date of the Trip-optional</b></p>
        {/* <Input name="YourName2" label="Your Name2" id="input_your_name2" /> */}
        {/* <Input name="gift_exchange_date" label="Select date" half/> <br></br> */}
        <input 
        type="date"
        onChange={handleTripDateChange}
       />
        
        {/* <p><b>Mailing address- optional</b></p> */}
        {/* <Input name="member2" label="Enter member 2" handleChange={handleChange} half /><br></br> */}
       {/* <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        Send each other gifts by mail
      </label> */}

        <p><b>Budget-optional</b></p>
        {/* <Input name="member3" label="Enter member 3" handleChange={handleChange} half /><br></br> */}
        <>
        <label half='true' >
        
        <select value={value} onChange={handleComboboxChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <label half='true'>
        
        <select value={budgetValue} onChange={handleBudgetValueChange}>
          {budgetOptions.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      </>

        
        <p><b>Your email </b></p>
        <Input name="email" label="rosemol@gmail.com" handleChange={handleChange} half/><br></br>

        <p><b>Invitation message </b></p>
        {/* <Input name="member5" label="Enter member 5" handleChange={handleChange} half/><br></br> */}
        {/* <label>Enter value : </label> */}
        <textarea
          value={invitationMessage}
          onChange={handleInvitationMessageChange}
        />
        
        <p><b>Draw names </b></p>
        <p>Confirm the group and choose how to send the invitations.</p>

        {/* <Button type="submit" color="primary" onClick={displayNames}>
                           Next step                   </Button> */}

        {/* <Button type="submit" color="primary" onClick={roseAccessing } className={classes.submit}>
        Confirm</Button> */}
        <Button type="submit" color="primary" 
        onClick={save_trip_details } className={classes.submit} component={Link} to="/invitations">
        Confirm</Button>
        </div>
    );
    }
    export default Groups;

