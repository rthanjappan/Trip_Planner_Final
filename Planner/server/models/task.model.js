import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    title: String,
    description: String,
    index: Number,
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;