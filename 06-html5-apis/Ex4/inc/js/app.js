var $sendData = $('.sendData'),
    $btnSend = $('.btnSend'),
    $status = $('.status'),
    $btnConnect = $('.btnConnect'),
    $btnDisconnect = $('.btnDisconnect');

var url = 'ws://echo.websocket.org';
var webSocket = null;

$btnConnect.click(function(){
  if(webSocket == null){
    openWebSocket();
  }
});

$btnDisconnect.click(function(){
  if(webSocket != null){
    webSocket.close();
  }
});

$btnSend.click(function(){
  if(webSocket != null){
    webSocket.send($sendData.val());
    $sendData.val('');
  }
})

function openWebSocket(){
  webSocket = new WebSocket(url);

  webSocket.onopen = function(e){
    $btnConnect.css({"display": "none"});
    $btnDisconnect.css({"display": "block"});
    $sendData.prop("disabled", false);
    $btnSend.prop("disabled", false);
    writeStatus('Connected')
  }

  webSocket.onclose = function(e){
    $btnDisconnect.css({"display": "none"});
    $btnConnect.css({"display": "block"});
    $sendData.prop("disabled", true);
    $btnSend.prop("disabled", true);
    webSocket = null;
    writeStatus('Disconnected');
  }

  webSocket.onmessage = function(e){
    writeStatus("Message: "+e.data);
  }

  webSocket.onerror = function(e){
    writeStatus("ERROR: "+e.data);
  }
}
function writeStatus(msg){
  $status.append(msg+'\r\n');
}