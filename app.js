// Server code
import express from 'express';
import routes from './routes/index.js';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import Message from './models/Message.js';

const __dirname = path.resolve(path.dirname(''));

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const server = app.listen(process.env.PORT || port, () => {
    console.log(`App listening at https://localhost:${server.address().port}`);
});

// create mongodb connection
await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/gitahelp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Chat stuff VVV
const io = new Server(server);
let users = {}; // << List of all active users
let messages = []; // << List of all messages
setInterval(() => {
    io.emit('updateMessage' , messages); // Updates messages to each client
}, 100);
io.on('connection', function (socket) { // When a client connects VVV
    socket.name = "User" + socket.id; // Assigns the client an ID
    users[socket.id] = { // Pushes client's info to the array of active users
        name: socket.name
    }; 
    io.emit('userInfo', // sends the username to the client
        { 'name': socket.name }
    ); 
    socket.on('sendMessage', function (arg) { // recieves sent messages from client
        let theMessage = new Message(arg, socket.name, new Date());
        messages.push(theMessage);
    }); 
    socket.on('disconnect', function () { // removes disconnected users from the list
        users[socket.id] = {}; 
    }); 
});