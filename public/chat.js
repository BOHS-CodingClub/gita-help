const socket = io(); // Initializes the socket connection to the server for the chatting app

let userID; // User data
socket.on('userInfo', function (data) {
    userID = data;
}); // Recieves data sent by server 