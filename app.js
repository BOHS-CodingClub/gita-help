// Server code
import express from 'express';
import routes from './routes/index.js';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';

const __dirname = path.resolve(path.dirname(''));

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

const server = app.listen(process.env.PORT || port, () => {
    console.log(`App listening at https://localhost:${server.address().port}`);
});

// Chat stuff VVV
const io = new Server(server);
let users = {}; // << List of all active users
let messages = [];
setInterval(() => {
    io.emit('updateMessage' , messages);
}, 100);
io.on('connection', function (socket) { // When a user connects VVV
    socket.name = "User" + socket.id; // Assigns the user an ID based on the order they joined
    users[socket.id] = { // Pushes info to the array of active users
        name: socket.name
    }; 
    io.emit('userInfo', // sends the username to the client
        { 'name': socket.name }
    ); 
    socket.on('sendMessage', function (arg) { // recieves sent messages from client
        messages.push(arg.message);
        console.log(arg);
    }); 
    socket.on('disconnect', function () { // removes disconnected users from the list
        users[socket.id] = {}; 
    }); 
});