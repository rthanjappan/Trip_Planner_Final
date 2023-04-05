import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.model.js';
import Member from '../models/member.model.js'
import GroupMetaData from '../models/groupId.model.js';
import TripDetails from '../models/tripDetails.model.js';

export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "Account does not exist" });

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Password is incorrect" });

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });
    } catch (err) {
        res.status(500).json({ message: 'Error' });
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        
        if(existingUser) return res.status(400).json({ message: "User already exist." });

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match." });

        const hashedPassword = await bcrypt.hash(password, 12);
    
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });
        
        res.status(200).json({ result, token });
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}
export const saveMembers = async (req, res) => {
    const { YourName,member2,member3,member4,member5 } = req.body;
    const requestData=req.body;
    console.log("users.controllers.js Request Data : " + JSON.stringify(requestData));
    
    console.log("users.controllers.js roseaccessing HERE");
    try{
               
       try{
        const last_member= await Member.find({}).sort({_id:-1}).limit(1);//.select('Group_ID');
        console.log("last_member : "+JSON.stringify(last_member));
        
        console.log("last_member.Group_ID  : "+last_member[0].Group_ID);
        const new_group_ID=Number(last_member[0].Group_ID)+1;

       const result = await Member.create({Group_ID:new_group_ID,
        YourName,member2,member3,member4,member5 });

        
       }catch(e){

        res.status(500).json({ message: 'Group id is not an integer.' });
       }
    
   
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}
export const saveTripDetails = async (req, res) => {
    const { Group_ID, GroupName,TripDate,
    MailAddress, CurrencyType,    Amt,
    YourEmail, InvitationMessage } = req.body;
    const requestData=req.body;
    console.log("users.controllers.js Request Data : " + JSON.stringify(requestData));
    
    console.log("users.controllers.js roseaccessing HERE");
    // const testValue={
    //     Group_ID:1,
    //     GroupName:"London Trip",
    //     TripDate: "4/1/2023",
    //     MailAddress: "123 oak rd , GA, 30067",
    //     CurrencyType: "US$",
    //     Amt:"10000.00",
    //     YourEmail: "r@ggc.edu",
    //     InvitationMessage: "We are going to draw names! Make a wishlist " +
    //     "and draw a name so that everyone has time to buy a gift",
    // };

    try{
               
        const current_member= await Member.find({}).sort({_id:-1}).limit(1);//.select('Group_ID');
        console.log("Current_member : "+JSON.stringify(current_member));
        
        // console.log("Current_member.Group_ID  : "+current_member[0].Group_ID);
        
        const current_group_ID=current_member[0].Group_ID;

    //    const result = await TripDetails.create({Group_ID,GroupName,TripDate,
    //     MailAddress, CurrencyType,    Amt,
    //     YourEmail, InvitationMessage
    //      });

    requestData.Group_ID=current_group_ID;
    const result = await TripDetails.create(requestData);
       
        
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}
//********************************************* */
// export const roseaccessing = async (req, res) => {
//     const { Group_ID, GroupName,TripDate,
//     MailAddress, CurrencyType,    Amt,
//     YourEmail, InvitationMessage } = req.body;
//     const requestData=req.body;
//     console.log("users.controllers.js Request Data : " + JSON.stringify(requestData));
    
//     console.log("users.controllers.js roseaccessing HERE");
//     try{
               
//         const current_member= await Member.find({}).sort({_id:-1}).limit(1);//.select('Group_ID');
//         console.log("Current_member : "+JSON.stringify(current_member));
        
//         console.log("Current_member.Group_ID  : "+current_member[0].Group_ID);
//         //const new_group_ID=Number(current_member[0].Group_ID)+1;

//        const result = await TripDetails.create({Group_ID,GroupName,TripDate,
//         MailAddress, CurrencyType,    Amt,
//         YourEmail, InvitationMessage
//          });
       
        
//     } catch (err) {
//         res.status(500).json({ message: 'Something went wrong.' });
//     }
// }


//*********************************************** */
// export const roseaccessing = async (req, res) => {
//     const { email, password, name } = req.body;
//     const result=req.body;
//     try{
//         const existingUser = await User.findOne({ email });
        
//         if(existingUser){
//             console.log("User "+ email +" exists");
//             return res.status(400).json({ message: "User already exist." });
//         }
//         const hashedPassword = await bcrypt.hash(password, 12);
    
//         const result = await User.create({ email, password:hashedPassword, name});

//     console.log("YYYYYYYYYYYYYY users.controllers.js" + JSON.stringify(result));
//     console.log("YYYYYYYYYYYYYY users.controllers.js" + JSON.stringify(existingUser));
//     } catch (err) {
//         res.status(500).json({ message: 'Something went wrong.' });
//     }
// }