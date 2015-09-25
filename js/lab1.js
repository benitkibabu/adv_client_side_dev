var name = prompt("Please enter your name");
var age = prompt("Please enter your age");
var studentNo = prompt("Please enter your student number");

var nametag = document.getElementById("name");
var agetag = document.getElementById("age");
var studenttag = document.getElementById("studentno");

nametag.innerHTML = "<strong>" + name + "</strong>";
agetag.innerHTML = "<strong>" + age + "</strong>";
studenttag.innerHTML = "<strong>" + studentNo + "</strong>";