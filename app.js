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


// chat stuff
const io = new Server(server);
let users = {};
io.on('connection', function (socket) {
    socket.name = "User" + socket.id;
    users[socket.id] = {
        name:socket.name
    };
    io.emit('userInfo',
        { 'name': socket.name }
    );

    socket.on('disconnect', function () {
        users[socket.id] = {};
    });
})