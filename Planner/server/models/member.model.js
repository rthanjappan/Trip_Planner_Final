import mongoose from 'mongoose';

const memberSchema = mongoose.Schema({
    Group_ID:{ type: String, required: true },
    YourName: { type: String, required: true },
    member2: { type: String  },
    member3: { type: String  },
    member4: { type: String },
    member5: { type: String },
});

export default mongoose.model('Member', memberSchema);