var ws = new WebSocket('ws://localhost:3000');

ws.addEventListener('open', function(evt){
  console.log("connected to server")
});


button.addEventListener('click', function(){
  var object = {
    name : name,
    text : YourInputBox.value,
  }
  var userMessage = JSON.stringify(object);
  ws.send(userMessage);
});

ws.addEventListener('message', function(x){
  var parsed = JSON.parse(x.data);
  var paragraph = document.createElement('span');
  var userbubble = document.createElement('div');
  var lineBreak = document.createElement('br');
  paragraph.innerText = parsed.name + ": " + parsed.text;
  paragraph.appendChild(lineBreak);
  userbubble.appendChild(paragraph);
  ChatBoxDiv.appendChild(bubble);
});
