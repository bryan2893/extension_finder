//File with js code for execution in current page.
console.log("Content.js is loaded!");
chrome.runtime.onMessage.addListener(messageReceiver);

function messageReceiver(request){
    console.log(request);
}