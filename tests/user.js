import mongoose from 'mongoose';
import User from '../models/User.js';

// create mongodb connection
await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/gitahelp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

await User.insertMany({
    username: 'test',
    points: 5
});

mongoose.connection.close();
