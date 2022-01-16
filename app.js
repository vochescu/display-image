var es =  EventSource("http://localhost:8080");
es.onmessage  =function(event){
    console.log(event.data);
    document.getElementById("content").innerHTML += event.data + "<br>";
}