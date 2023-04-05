import mongoose from 'mongoose';

const tripDetailsSchema = mongoose.Schema({
    Group_ID:{ type: String, required: true },
    GroupName: { type: String, required: true },
    TripDate: { type: String  },
    CurrencyType: { type: String },
    Amt: { type:String },
    YourEmail: { type: String },
    InvitationMessage: { type: String },
});

export default mongoose.model('TripDetails', tripDetailsSchema);