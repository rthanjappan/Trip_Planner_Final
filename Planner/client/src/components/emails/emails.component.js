//import useStyles from './styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';


// import Navbar from "../nav/navbar.component";
import Input from '../login/input.component.js';


import { AUTH } from '../../constants/actionTypes.constants.js';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api/index.api.js';

import useStyles from '../login/styles.js';
import { blue } from '@material-ui/core/colors';



const Emails = () => {
    const classes = useStyles();
    
    const [input, setInput] = useState("Your Name");
    const [ formData, setFormData ] = useState('');
    const navigate = useNavigate();
    
    
    let namesDataFromDb=[
  
       {name: "Nimmy"},
       {name: "Jimmy"},
       {name: "Binny"},

  
  ];
  const dataTosave={
    Group_ID:"xxxxx",
    // GroupName:formData.GroupName,
    // TripDate:tripDate,
    // MailAddress: checked,
    // CurrencyType: value,
    // Amt:budgetValue,
    // YourEmail: formData.email,
    // InvitationMessage: invitationMessage,
};

  //let namesDataFromDb1=
  api.getGroupMembers(dataTosave).then((response)=>{
    
    namesDataFromDb=JSON.stringify(response.data);
    console.log(" Working "+namesDataFromDb);
    
  }).catch((err)=>console.log("hoooooooooo..."+
  
  err.response.data.message));

 // namesDataFromDb = JSON.parse(namesDataFromDb.name);



//let namesDataFromDb1= api.getGroupMembers(dataTosave);

//console.log("From Emails : working ...."+namesDataFromDb1.response.data);

// namesDataFromDb1.then((response)=>{
//   console.log(" hooooo... "+response.data);
// }).catch((err)=>console.log("hoooooooooo..."+err.response.data));


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const displayNames = (e) => {
       console.log(formData);
       
    };
    

    
    const save_trip_details = ()=>{
        console.log("groups.component.js saving trip details to the server");
        const dataTosave={
          Group_ID:"xxxxx",
          // GroupName:formData.GroupName,
          // TripDate:tripDate,
          // MailAddress: checked,
          // CurrencyType: value,
          // Amt:budgetValue,
          // YourEmail: formData.email,
          // InvitationMessage: invitationMessage,
      };

        api.saveTripDetails(dataTosave);
    }
    const styleObj = {
      fontSize: 14,
      backgroundColor:blue
      // color: "#4a54f1",
      // textAlign: "center",
      // paddingTop: "100px",
  }
  const styleObj1 = {
    fontSize: 20,
    backgroundColor:blue
    
}
// const styleObj2 = {
//   fontSize: 20,
//   backgroundColor:blue,
  
  
// }
    return (

        <div>
            <h2>There is one thing left to do!</h2>
            <p style={styleObj}>Carefully check the email addresses before <br></br>
            sending the invitations.One email address <br></br>
            can be used for several people.</p>

            {/* <h3><b>Name 1</b></h3>
            <Input name="email1" label="Fill in an email address"   
            handleChange={handleChange}  autoFocus half/>

            <h3><b>Name 2</b></h3>
            <Input name="email2" label="Fill in an email address"   
            handleChange={handleChange}  autoFocus half/> */}

        
        {namesDataFromDb.map(nameRecord => {
          // const { id, name, type, required } = input;
           return (
             <div>
               <h3>{nameRecord.name}</h3> 
               
               <Input  name={"email_"+nameRecord.name} label="Fill in an email address" 
               autoFocus half required /> 
               {/* <span style={{fontWeight:'bold'}}></span> */}
               
             </div>
           )
        })}
        
        {/* <button type="button" onClick={this.handleSubmit}>Submit form</button>
        
        <button type="button" onClick={handleClose}>Remove form</button>
       */}
      


        <Button type="submit" color="primary" 
        onClick={save_trip_details } className={classes.submit} style={styleObj}>
        Send Invitation</Button>

        <br></br>
        <Link to="/invitations" style={styleObj1}>Send Invites
        </Link>

        
        </div>
    );
    }
    export default Emails;

