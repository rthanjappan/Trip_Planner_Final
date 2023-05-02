import mongoose from 'mongoose';

const ColumnSchema = mongoose.Schema({
    Group_ID: Number,
    title: String,
    tasks: [String],
});

const Column = mongoose.model('Column', ColumnSchema);

export default Column;