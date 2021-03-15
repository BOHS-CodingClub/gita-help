import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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


const User = mongoose.model('User', userSchema);
User.ensureIndexes();

export default User;