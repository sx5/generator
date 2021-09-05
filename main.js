(function(){
    var oldLog = console.log;
    console.log = function (message) {
        document.getElementById('a').value += message
        oldLog.apply(arguments);
    };
})(); //1000

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
function generate() {
var triesPerSecond = document.getElementById('speed').value
getGiftCode = function () {
    let code = ''; // oxe
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 59; i++){
        code = code + dict.charAt(Math.floor(Math.random() * dict.length));
    }
    console.log('N' + code + "\n");
    code += '\n'
    document.getElementById('b').value += code;

}


getGiftCode();
document.getElementById('stop').addEventListener("click", stop);
function stop() {
  clearInterval(gInterval);
  clearInterval(interval)
}
var gInterval = setInterval(() => {getGiftCode();}, (500/triesPerSecond) * 1);


function scroll() {
  document.getElementById("a").scrollTop = document.getElementById("a").scrollHeight
};
var interval = setInterval(scroll, 100)
document.getElementById('clear').addEventListener("click", stop);
}

document.getElementById('generate').addEventListener("click", generate);
