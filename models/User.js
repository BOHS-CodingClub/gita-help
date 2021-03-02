import mongoose from 'mongoose';

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: { type: String, required: true, },
    points: {
        type: Number,
        required: true,
        default: 0,
    },
});


const user = mongoose.model('User', User);
user.ensureIndexes();

export default user;