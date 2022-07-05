var x=document.querySelector("#btn-translate"); //variable for buttn
var y=document.querySelector("#txt-input")      //variable for input
var z=document.querySelector("#output")         //variable to cntrol output

//mserver url
var url="https://api.funtranslations.com/translate/minion.json"

function translationURL(text)
{
    return url + "?" +"text=" + text;  // making url and giving it text acc to us
}


function errorHandler(error){
    console.log("error occured", error)
    alert("server is down")
}


function clickHandler() // what will happen afte click

{
    var inputtext=y.value; // taking input

//calling server for processing
  fetch(translationURL(inputtext))
  .then(response => response.json())
  .then(json => {
    var translatedTEXT = json.contents.translated;
    z.innerText = translatedTEXT;
   })
  
  
    .catch(errorHandler)
}
x.addEventListener("click", clickHandler)