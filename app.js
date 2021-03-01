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
io.on('connection', function (socket) { // When a user connects
    socket.name = "User" + socket.id; // Assigns the user an ID based on the order they joined
    users[socket.id] = {
        name: socket.name
    }; // Pushes info to the list of active users
    io.emit('userInfo',
        { 'name': socket.name }
    ); // sends the username to the client

    socket.on('disconnect', function () {
        users[socket.id] = {}; 
    }); // removes disconnected users from the list
});