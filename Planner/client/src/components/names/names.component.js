//import useStyles from './styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';
// import Navbar from "../nav/navbar.component";
import Input from '../login/input.component.js';

//import { AUTH } from '../constants/actionTypes.constants';
import { AUTH } from '../../constants/actionTypes.constants';
import { useNavigate } from 'react-router-dom';
import * as api from '../../api/index.api';

import useStyles from '../login/styles.js';

const initialState = { firstName: 'Christine', lastName: 'Cherry', 
email:'chris@ggc.edu',password:'123',confirmPassword: '123'};

// const dataTosave={name:'Christine',email: 'chris@ggc.edu',
//  password: '123', id:"999" };
const dataTosave="Christine";
const Names = () => {
    const classes = useStyles();
    //const [input, setInput] = useState(Math.random().toString());
    
    //rosesaving(formData,navigate);
    const [input, setInput] = useState("Your Name");
    const [ formData, setFormData ] = useState('');
    const navigate = useNavigate();
    
    
    const dataTosave={name:'Christine',email: 'chris@ggc.edu',
      password: '123'};
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if(e.target.name=="YourName"){
         setInput(e.target.value); 
        }
    };
    const displayNames = (e) => {
       console.log(formData);
       
    };
    // const roseAccessing = ()=>{
    //     console.log("names.component.js rose accessing the server");
    //     api.roseaccessing(dataTosave);
    // }

    // const roseAccessing = ()=>{
    //     console.log("names.component.js rose accessing the server");
    //     api.roseaccessing(formData);
    // }
    const savemembers = ()=>{
        console.log("names.component.js saving members to the server");
        api.saveMembers(formData);
        navigate('/groups');
    }
    
    return (

        <div>
            <h3>Enter names</h3>
            <p><b>Your name</b></p>
        <Input name="YourName" label="Your Name"   
        handleChange={handleChange} required autoFocus half/>

        <p><b>Go on a trip with</b></p>
        {/* <Input name="YourName2" label="Your Name2" id="input_your_name2" /> */}
        <Input name="YourName2" label={input} disabled half/> <br></br>
        <Input name="member2" label="Enter member 2" handleChange={handleChange} half /><br></br>
        <Input name="member3" label="Enter member 3" handleChange={handleChange} half /><br></br>
        <Input name="member4" label="Enter member 4" handleChange={handleChange} half/><br></br>
        <Input name="member5" label="Enter member 5" handleChange={handleChange} half/><br></br>
        
        <h3>Add more names</h3>
        <p>Later you can :</p>
        <ul>
            <li>Invite more people to join</li>
            <li>Remove someone who isn't taking part in the trip</li>
        </ul>
        {/* <Button type="submit" color="primary" onClick={displayNames}>
                           Next step                   </Button> */}

        <Button type="submit" variant="contained" color="primary" onClick={savemembers } className={classes.submit}>
        Next Step</Button>
        </div>
    );
    }
    export default Names;

