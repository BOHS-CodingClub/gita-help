const socket = io(); // Initializes the socket connection to the server for the chatting app
class Message { // This is an object for the message
    constructor(message, sentBy, timeSent) {
        this.message = message;
        this.sentBy = sentBy;
        this.timeSent = timeSent;
    }
}

let userID; // User data
let messages; // messages

socket.on('userInfo', function (data) { // Recieves user info sent by server 
    userID = data;
}); 
socket.on('updateMessage', function (msgs) {
    messages = msgs;
});
function sendMessage(messageArg) { // Sends message to server with the string messageArg
    socket.emit('sendMessage', new Message(messageArg, userID, Date()));
}