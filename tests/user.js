import mongoose from 'mongoose';
import user from '../models/User.js';

// create mongodb connection
await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/gitahelp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

user.insertMany({
  username: 'test',
  points: 5
});
