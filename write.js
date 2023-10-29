"use strict";
const txtEl = document.querySelector(".txt");

// window.document.addEventListener("keypress", function (event) {
//   // txtEl.value += event.key;
//   txtEl.innerHTML += event.key;
// });

const text="i am a developer"
let index=0;
function writeText(){
  txtEl.textContent=text.slice(0,index);
  index++;
}
setInterval(writeText,100)
