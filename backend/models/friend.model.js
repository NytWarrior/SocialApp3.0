import mongoose from 'mongoose';

const friendSchema = new mongoose.Schema({
    //the user who sent this request
    from_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //the user who accepted the request
    to_user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['pending', 'accepted'],
        default: 'pending'
    }
}, {
    timestamps: true
});

const Friend = mongoose.model('Friend', friendSchema);
export default Friend;