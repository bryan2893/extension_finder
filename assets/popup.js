document.addEventListener('DOMContentLoaded', function(){
    let urlToWellKnownPortsPage = "http://www.omnisecu.com/tcpip/tcp-port-numbers.php";
    let pTagError = document.querySelector('p');
    let textArea = document.getElementById("displayer");

    function fillTextArea(content){
        textArea.value = content;
    }

    function showError(errorMessage){
        pTagError.textContent = errorMessage;
    }

    function cleanErrorMessage(){
        pTagError.textContent = "";
    }

    function onCLick(){
        let numberInput = document.querySelector('input');
        if (numberInput.value === ""){
            //mostrar mensaje de error.
            showError("¡ERROR: Ingrese número de puerto!");
        }else{
            let portNumber = numberInput.value;
            fetch(urlToWellKnownPortsPage)
                .then((result) => result.text()).then(function(text){
                    //transform text to DOMnodes...
                    //let tree = new document.createRange().createContextualFragment(String(text));

                    //let tables = tree.getElementsByTagName("table");

                    let parser = new DOMParser();
                    let doc = parser.parseFromString(text, "text/html");

                    let tabla = doc.getElementsByClassName("omni-default-table")[0];

                    let founded = null;
                    let cellNodes = tabla.getElementsByTagName("td");
                    for (let i = 0; i<cellNodes.length;i++){
                        let currentValue = cellNodes[i].firstChild.textContent.toString();

                        if (portNumber == currentValue) {
                            founded = cellNodes[i+1].firstChild.textContent;
                            break;
                        }
                    }

                    if(founded){
                        fillTextArea(founded);
                    }else{
                        fillTextArea("No encontrado");
                    }

                    /*
                    chrome.tabs.query({currentWindow:true,active:true}, function(tabs){
                        chrome.tabs.sendMessage(tabs[0].id,{type:"imprimir",payload:founded});
                    });
                    */

                })
                .catch(function() {
                    // This is where you run code if the server returns any errors
                });
        }
    }

    document.querySelector('button').addEventListener('click',onCLick,false);

    function whenInputisFocused(){
        cleanErrorMessage();
    }

    document.querySelector('input').addEventListener('focus',whenInputisFocused,false)


},false);