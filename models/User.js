import mongoose from 'mongoose';

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    points: {
        type: Number,
        required: true,
        default: 0,
    },
    completedVideos: mongoose.Schema.Types.Array,
});


const user = mongoose.model('User', User);
user.ensureIndexes();

export default user;