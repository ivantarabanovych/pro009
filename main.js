function printMessage(message) {
    console.log(message);
}

function sendMessage(message, callback){
    callback(message);
}

sendMessage("Hello, world!", printMessage);
sendMessage("See you tommorow!", printMessage);
sendMessage("The recording has been postponed for a week!", printMessage);