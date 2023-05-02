import mongoose from 'mongoose';
import Column from '../models/column.model.js';

export const getColumn = async (req, res) => {
    try {
        const postColumn = await Column.find().sort({ _id: -1 });
        res.status(200).json(postColumn);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createColumn = async (req, res) => {
    const column = req.body;

    const newColumn = new Column(column);

    try {
        await newColumn.save();

        res.status(201).json(newColumn);
    } catch (err) {
        res.status(409).json({ message: err.message});
    }
}

export const updateColumn = async (req, res) => {
    const { id: _id } = req.params;
    const column = req.body;


    const updatedColumn = await column.findByIdAndUpdate(_id, { ...column, _id }, { new: true });
   
    res.json(updatedColumn);
}

export const deleteColumn = async (req, res) => {
    const { id } = req.params;

    await Column.findByIdAndRemove(id);
   
    res.json({ message: 'Column deleted successfully' });
}