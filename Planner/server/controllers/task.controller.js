import mongoose from 'mongoose';
import Task from '../models/task.model.js';

export const getTask = async (req, res) => {
    try {
        const postTask = await Task.find().sort({ _id: -1 });
        res.status(200).json(postTask);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createTask = async (req, res) => {
    const task = req.body;

    const newTask = new Task(task);

    try {
        await newTask.save();

        res.status(201).json(newTask);
    } catch (err) {
        res.status(409).json({ message: err.message});
    }
}

export const updateTask = async (req, res) => {
    const { id: _id } = req.params;
    const task = req.body;


    const updatedTask = await task.findByIdAndUpdate(_id, { ...task, _id }, { new: true });
   
    res.json(updatedTask);
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;

    await Task.findByIdAndRemove(id);
   
    res.json({ message: 'Task deleted successfully' });
}