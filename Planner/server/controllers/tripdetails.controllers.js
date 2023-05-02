import mongoose from 'mongoose';
import TripDetails from '../models/tripDetails.model.js';

export const getDetails = async (req, res) => {

    try {
        const postDetails = await TripDetails.find().sort({_id: 1});
        res.status(200).json(postDetails);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}
