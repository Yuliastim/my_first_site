var myImage = document.querySelector("img");
myImage.onclick = function() {
    var mySrc = myImage.getAttribute("src");
    if(mySrc === "images/zemlya.jpg") {
        myImage.setAttribute("src","images/planeta.jpg");
    } else {
        myImage.setAttribute("src","images/zemlya.jpg");
    }
}
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName(){
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "My world, " + myName;
}
if(!localStorage.getItem("name")){
    setUserName();
} else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "My world, " + storedName;
}
myButton.onclick = function(){
setUserName();
}