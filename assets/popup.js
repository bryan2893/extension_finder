document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('button').addEventListener('click',onCLick,false);
    function onCLick(){
        chrome.tabs.query({currentWindow:true,active:true}, function(tabs){
            fetch("https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers") // Call the fetch function passing the url of the API as a parameter
            .then((result) => result.text()).then(function(text){
                chrome.tabs.sendMessage(tabs[0].id,text)
            })
            .catch(function() {
                // This is where you run code if the server returns any errors
            });
        });
    }
},false);