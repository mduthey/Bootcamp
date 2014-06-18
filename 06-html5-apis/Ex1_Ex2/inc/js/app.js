var htmlApis = {};
htmlApis.db = null;
htmlApis.initDb = function(){
  var requestOpen = indexedDB.open("htmlapis");
  requestOpen.onupgradeneeded = function(e){
    htmlApis.db = e.target.result;
    if(!htmlApis.db.objectStoreNames.contains("ex1")){
      console.log('Make db');
      var store = htmlApis.db.createObjectStore("ex1", {keyPath: "timestamp"});
    }
  }
  requestOpen.onsuccess = function(e){
    htmlApis.db = e.target.result;
    console.log('Open ok!');
  }
};
htmlApis.storeDB = function($text){
  var inputValue = $text.val();
  var transaction = htmlApis.db.transaction(["ex1"],"readwrite");
  var store = transaction.objectStore("ex1");
  var request = store.add({"timestamp": (new Date()).getTime(), "val": inputValue});
  request.onerror = function(e) {
    console.log('Fail to save');
  }
   
  request.onsuccess = function(e) {
    console.log('info save');
  }
}
htmlApis.clearDB = function(){
  var transaction = htmlApis.db.transaction(["ex1"],"readwrite");
  var store = transaction.objectStore("ex1");
  if(store){
    var clearReq = store.clear();
    clearReq.onsuccess = function (e){
      console.log('Clear DB Complete')
    }
  }
}

function storeLocal($text, timestamp){
  var value = $text.val();
  if(value.length <= 0){
    inputError($text);
    return;
  }
  localStorage["inputData_"+timestamp] = value;
}

function inputError($input){
  $input
    .animate({
      "margin-left": "5px"
    }, 50)
    .animate({
      "margin-left": "-5px"
    }, 50)
    .animate({
      "margin-left": "5px"
    }, 50)
    .animate({
      "margin-left": "-5px"
    }, 50)
    .animate({
      "margin-left": "0"
    }, 50);
}

$(document).ready(function(){
  var $dataText = $('#dataText'),
      $btnSave = $('#btnSave'),
      $btnClear = $('#btnClear');

  htmlApis.initDb();
  $btnSave.click(function(){
    var timeStamp = (new Date).getTime();
    htmlApis.storeDB($dataText, timeStamp);
    storeLocal($dataText, timeStamp);
    $dataText.val('');
  });

  $btnClear.click(function(){
    localStorage.clear();
    htmlApis.clearDB();
    $dataText.val('');
  });
});
