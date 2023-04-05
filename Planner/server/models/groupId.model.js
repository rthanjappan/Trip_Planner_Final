import mongoose from 'mongoose';

const groupMetaDataSchema = mongoose.Schema({
    current_group_id: { type: String, required: true },
});

export default mongoose.model('GroupMetaData', groupMetaDataSchema);