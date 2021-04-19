const socket = io(); // Initializes the socket connection to the server for the chatting app


let myUserID; // User data

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
    socket.emit('sendMessage', messageArg);
}