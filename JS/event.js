const button1 = document.querySelector(".button1");
button1.onclick = function() {
    const section = document.querySelector(".section");
    section.style.backgroundColor = "red";
}
const button2 = document.querySelector(".button2");
button2.onclick = function() {
    const section = document.querySelector(".section");
    section.style.backgroundColor = "blue";
}
const button3 = document.querySelector(".button3");
button3.onclick = function() {
    const section = document.querySelector(".section");
    section.style.backgroundColor = "green";
}
const button4 = document.querySelector(".button4");
button4.onclick = function() {
    const section = document.querySelector(".section");
    section.style.backgroundColor = "purple";
}
const button5 = document.querySelector(".button5");
button5.onclick = function() {
    const section = document.querySelector(".section");
    section.style.backgroundColor = "yellow";
}
var coverbutton1 = document.querySelector("#cover1");
coverbutton1.onmouseover = function(){
  coverbutton1.style.border="5px black solid";
};
coverbutton1.onmouseout=function(){
  coverbutton1.style.border="";
};
var coverbutton2 = document.querySelector("#cover2");
coverbutton2.onmouseover = function(){
  coverbutton2.style.border="5px black solid";
};
coverbutton2.onmouseout=function(){
  coverbutton2.style.border="";
};
var coverbutton3 = document.querySelector("#cover3");
coverbutton3.onmouseover = function(){
  coverbutton3.style.border="5px black solid";
};
coverbutton3.onmouseout=function(){
  coverbutton3.style.border="";
};
var coverbutton4 = document.querySelector("#cover4");
coverbutton4.onmouseover = function(){
  coverbutton4.style.border="5px black solid";
};
coverbutton4.onmouseout=function(){
  coverbutton4.style.border="";
};
var coverbutton5 = document.querySelector("#cover5");
coverbutton5.onmouseover = function(){
  coverbutton5.style.border="5px black solid";
};
coverbutton5.onmouseout=function(){
  coverbutton5.style.border="";
};
coverbutton1.onclick = function showDetail() {
  document.querySelector('#desc').style.display = "block";
  alert('클릭했습니다');
  document.querySelector('#h4').innerHTML='C';
};
function hideDetail() {
  document.querySelector('#desc').style.display = "none";
}
