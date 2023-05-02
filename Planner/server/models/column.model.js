import mongoose from 'mongoose';
import Task from './task.model.js';

const ColumnSchema = mongoose.Schema({
    Group_ID: Number,
    title: String,
    tasks: [String],
});

const Column = mongoose.model('Column', ColumnSchema);

export default Column;