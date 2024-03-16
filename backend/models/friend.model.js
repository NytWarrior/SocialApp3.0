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
    }
}, {
    timestamps: true
});

const Friend = mongoose.model('Friend', friendSchema);
module.exports = Friend;