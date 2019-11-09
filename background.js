//Code for background functionality, like chrome events.


//Se indica al background que escuche los siguientes eventos...
chrome.runtime.onMessage.addListener(function(message, callback) {

    if (message.data == "setAlarm") {
      chrome.alarms.create({delayInMinutes: 5})
    } else if (message.data == "runLogic") {
      chrome.tabs.executeScript({file: 'logic.js'});
    } else if (message.data == "changeColor") {
      chrome.tabs.executeScript({code: 'document.body.style.backgroundColor="orange"'});
    } else if (message.data == "getAppName"){
        port = message.port;
        fetch('http://www.example.com?par=0').then(r => r.text()).then(result => {
            // Result now contains the response text, do what you want...
            
        })
    };

});