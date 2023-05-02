import mongoose from 'mongoose';
//import TripDetails from '../models/tripDetails.model.js';
import MemberDetails from '../models/member.model.js';

export const getMemberDetails = async (req, res) => {
    try {
        //const postDetails = await MemberDetails.find().sort({_id: -1});
        //const postDetails= await MemberDetails.find({Group_ID:6}).sort({_id:-1}).limit(1);
        const postDetails= await MemberDetails.find().sort({_id: -1}).limit(1);
        res.status(200).json(postDetails);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}
