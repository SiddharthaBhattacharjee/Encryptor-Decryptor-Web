let msg = document.getElementById('msg');
let key = document.getElementById('key');
let display = document.getElementById('display');

let msg2 = document.getElementById('msg2');
let key2 = document.getElementById('key2');
let display2 = document.getElementById('display2');

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      document.getElementById("snackbar").className = "show";
      setTimeout(function(){ document.getElementById("snackbar").className = document.getElementById("snackbar").className.replace("show", ""); }, 1000);
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
      window.alert("Error : Could not copy password to clipboard!");
    });
}

function encrypt(){
    s = msg.value;
    console.log("s:"+s);
    k = key.value;
    console.log("k:"+k);
    var x = CryptoJS.AES.encrypt(s, k);
    console.log("x:"+x);
    display.value = x;
    copyTextToClipboard(x);
}

function decrypt(){
    s = msg2.value;
    console.log("s:"+s);
    k = key2.value;
    console.log("k:"+k);
    var b = CryptoJS.AES.decrypt(s, k);
    var y = b.toString(CryptoJS.enc.Utf8);
    console.log("y:"+y);
    display2.value = y;
    copyTextToClipboard(y);
}