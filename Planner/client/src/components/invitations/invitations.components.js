//import useStyles from './styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';


// import Navbar from "../nav/navbar.component";
import Input from '../login/input.component.js';


//import { AUTH } from '../../constants/actionTypes.constants';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api/index.api';

import useStyles from '../login/styles.js';

//import your ICON component 
//import * as Icons from "./Icon";

import copy_link from './Icon/copy_link.png';
import email_icon from './Icon/email_icon.png';
import messenger_icon from './Icon/messenger_icon.png';
import text_message_icon from './Icon/text_message_icon.png';
import whatsapp_icon from './Icon/whatsapp_icon.png';

const Invitations = () => {
    const classes = useStyles();
    // const options = [
    //     { label: 'US$', value: 'US$' },
    //     { label: 'EU', value: 'EU' },
    //     // { label: 'Meat', value: 'meat' },
    //   ];

    //   const budgetOptions = [
    //     { label: '5000.00', value: '5000.00' },
    //     { label: '6000.00', value: '6000.00' },
    //     { label: '7000.00', value: '7000.00' },
    //     { label: '8000.00', value: '8000.00' },
    //     { label: '9000.00', value: '9000.00' },
    //     { label: '10000.00', value: '10000.00' },
    //   ];

    const initialInvitationMessage='The celebrations has been confirmed.'+
    " Send the invitations now. Then everyone can draw a name and make a wish list.";


    //const [input, setInput] = useState("Your Name");
    const [ formData, setFormData ] = useState('');
    //const [tripDate,setTripDate] = useState(new Date());
    //const [checked,setChecked] = useState(false);
    //const [value, setValue] = useState('US$');
    //const [budgetValue,setBudgetValue]=useState('5000.00');
    const [invitationMessage,setInvitationMessage]=
            useState(initialInvitationMessage);
    const navigate = useNavigate();
    
    let copy_link_txt = "Copy link";
    copy_link_txt=copy_link_txt+"                    ";
    copy_link_txt=copy_link_txt.substring(0,20)+">";

    let email_txt = "Email";
    copy_link_txt=copy_link_txt+"                    ";
    copy_link_txt=copy_link_txt.substring(0,20)+">";

    

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
    // const displayNames = (e) => {
    //    console.log(formData);
       
    // };
    

    // const handleTripDateChange=(e)=>{
    //     setTripDate(e.target.value);
    // }
    // const handleCheckboxChange=(e)=>{
    //     setChecked(!checked);
    // }

    // const handleComboboxChange = (event) => {
    //     setValue(event.target.value);
    //   };

    // const handleBudgetValueChange = (event) => {
    //     setBudgetValue(event.target.value);
    // }; 

    
    // const handleInvitationMessageChange = (event) => {
    //     setInvitationMessage(event.target.value);
    // }; 
    
    const send_invitations = ()=>{
        console.log("groups.component.js sending invitations to group details.");
    //     const dataTosave={
    //       Group_ID:"xxxxx",
    //       GroupName:formData.GroupName,
    //       TripDate:tripDate,
    //       MailAddress: checked,
    //       CurrencyType: value,
    //       Amt:budgetValue,
    //       YourEmail: formData.email,
    //       InvitationMessage: invitationMessage,
    //   };

        //api.saveTripDetails(dataTosave);
    }
    return (

        <div>
            <h3>The invitations have not yet been sent</h3>
            <p>{initialInvitationMessage}</p>
             

            {/* <span><img src={copy_link}/> */}
            {/* <Button>    <a   
            
            style={{ marginLeft: '5px'}} 
           href="mailto:rthanjappan@gmail.com"><img src={copy_link} 
       alt="copy_link_img" width="50px" height="50px"
        onClick={send_invitations}/>Copy link {"    >"}</a>
           </Button>
<br></br> */}
            <Link to="/names">
                <Button>
                    <img style={{paddingRight: '30px'}} 
                    alt="copy_link_img" width="50px" height="50px"
                    src={copy_link}/>Copy link
                <span style={{paddingLeft: '132px'}}>{">"}</span>
                
                </Button>
            </Link>
                
            <br></br>
            <Link to="/emails">
                <Button><img style={{paddingRight: '30px'}}
                 src={email_icon}
                 alt="copy_link_img" width="50px" height="50px"/>  
                Email
                <span style={{paddingLeft: '173px'}}>{">"} </span>
                </Button>
            </Link>
                
            <br></br>
            <Link to="/names">
                <Button><img style={{paddingRight: '30px'}} 
                alt="copy_link_img" width="50px" height="50px"
                src={text_message_icon}/> Text Message
                <span style={{paddingLeft: '100px'}}>{">"}</span></Button>
            </Link>
                
            <br></br>
            <Link to="/names">
                <Button><img style={{paddingRight: '30px'}} 
                alt="copy_link_img" width="50px" height="50px"
                src={whatsapp_icon}/> Whatsapp 
                <span style={{paddingLeft: '141px'}}>{">"}</span></Button>
            </Link>
                
            <br></br>
            <Link to="/names">
                <Button><img style={{paddingRight: '30px'}} 
                alt="copy_link_img" width="50px" height="50px"
                src={messenger_icon}/> Messenger
                <span style={{paddingLeft: '125px'}}>{">"}</span></Button>
            </Link>
                
            <br></br>

            
            
        
            <Button type="submit" color="primary" 
                onClick={send_invitations } className={classes.submit} component={Link} to="/board">
                Visit the group page</Button><br></br>
        </div>
    );
    }
    export default Invitations;

