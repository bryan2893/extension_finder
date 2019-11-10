//File with js code for execution in current page.
console.log("Content.js is loaded!");

chrome.runtime.onMessage.addListener(messageReceiver);

function messageReceiver(request){
    switch(request.type){
        case "error":
            console.log(request.payload);
            break;
        case "algo":
            break;
        case "imprimir":
            console.log("contenido: "+ request.payload);
            break;
    }
}