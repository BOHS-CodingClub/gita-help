const socket = io(); // Initializes the socket connection to the server for the chatting app
class Message { // This is an object for the message
    constructor(message, sentBy, timeSent) {
        this.message = message;
        this.sentBy = sentBy;
        this.timeSent = timeSent;
    }
}

let myUserID; // User data
//let messages; // messages

socket.on('userInfo', function (data) { // Recieves user info sent by server 
    myUserID = data;
}); 
socket.on('updateMessage', function (msgs) {
    let messages = "";
    msgs.forEach(element => {
        let abbrTime = element.timeSent.toString();
        messages += element.sentBy + ": " + element.message + " (" + abbrTime + ")\n";
    });
    document.messageArea.messageOutput.value = messages;
});
function sendMessageFromInput() {
    let theMessageToSend = document.messageArea.messageInput.value.toString();
    sendMessage(theMessageToSend);
    document.messageArea.messageInput.value = "";
}
function sendMessage(messageArg) { // Sends message to server with the string messageArg
    socket.emit('sendMessage', new Message(messageArg, myUserID, Date()));
}