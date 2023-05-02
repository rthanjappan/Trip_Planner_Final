
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
const TextMessages = () => {
    const classes = useStyles();
    
    const [input, setInput] = useState("Your Name");
    const [ formData, setFormData ] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //call information from store
    const {details, isLoading} = useSelector((state) => state.details);

    //console.log("***********"+details);
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
//get from database
    // useEffect(() => {
    //     dispatch(getDetails());
    // }, [dispatch])

    // const [detailForm, setDetailForm] = useState(initialState);
    // useEffect(() => {
    //       dispatch(get_member_Details());
    //   }, [dispatch])
     // console.log("***********"+JSON.stringify(details));

      // namesDataFromDb=[
      //   {name:details[0]?.member2??""},
      //   {name:details[0]?.member3??""},
      //   {name:details[0]?.member4??""},
      //   {name:details[0]?.member5??""}
    
      // ];

  //  console.log("namesDataFromDb  : "+JSON.stringify(namesDataFromDb));
    
    // let namesDataFromDb1=[];
    //  namesDataFromDb.map(nameRecord => {
    //   if(nameRecord.name!=""){

    //     namesDataFromDb1=[...namesDataFromDb1,nameRecord];
    //   }});

    // console.log("namesDataFromDb1  : "+JSON.stringify(namesDataFromDb1));

      
      const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
     
    };
    const displayNames = (e) => {
       console.log(formData);
       
    };
  

  // let emails=formData;
  // let email1="z@gmail.com";
  // let subject="Invitition for trip";
  // let body = " Come and enjoy";
  // let children="mail me!";

  //    const send_emails = ()=>{
  //       console.log(
  //         "emails.component.js sending invitations to the group members " +
          
  //         JSON.stringify(formData));
  //       const dataTosave={
  //         Group_ID:"xxxxx",
          // GroupName:formData.GroupName,
          // TripDate:tripDate,
          // MailAddress: checked,
          // CurrencyType: value,
          // Amt:budgetValue,
          // YourEmail: formData.email,
          // InvitationMessage: invitationMessage,
      // };
      // let emails=formData;
      // let [key,value] =Object.entries(emails)[0];
      // let emailStr=value;
      // delete emails[0];
      // for (const [key, value] of Object.entries(emails)) {
      //  // console.log(`${key}: ${value}`);

      //   emailStr+=";"+value;
      // }
      

      // let url='mailto:';
      // //url+=email1;
      // url+=emailStr;
      // url+='?subject="Trip invitation"&body="Come and Enjoy..."'
      // //window.open('mailto:?subject="invitation"&body="Enjoy..."',"");
      // window.open(url,"");
        
    //}
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

  
    return (

        <div>
            <h2>There is one thing left to do!</h2>
            <p style={styleObj1}>
              To invite someone using Text Message, open the <br></br>
            group page <b>on your phone</b> via the email and<br></br>
            click on "Send reminder".*</p>

            <h4>Do you use Text Message on your computer?</h4>

            <Button 
            onClick={() => {navigator.clipboard.writeText('http://localhost:3000/')}}>
                    <em><u>Copy the link</u></em></Button>
                 <span style={styleObj1} >so that you can share it.</span>
            <br></br><br></br>
            <Link to="/groups" style={styleObj1}>Visit the group page
            </Link>

            <br></br><br></br>
            <p>*Standard text message charges apply.</p>
                    
       
      </div>
    );
    }
    export default TextMessages;

