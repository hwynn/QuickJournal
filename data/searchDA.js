console.log('searchDA, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

// get title
var DAtitle = document.querySelector("input.gmbutton2");
// get submit button
var DAsubmit = document.querySelector("#search7");


// set title value
DAtitle.value = self.options.Cargo.Title;

// submit search
DAsubmit.submit();

console.log("searchDA, end");




/**
document.addEventListener("submit", function(event) {
console.log("Unloading now");
self.port.emit("myMessage");
}, false);
document.addEventListener("DOMContentLoaded", Finalize);
//puts words in the input box
var titlePort = function(x){
	var DAzA = document.querySelector("input.gmbutton2");
	DAzA.value = x;
};
//hits the submit button
var ShipIt = function(){
document.querySelector("#search7").submit();
};
var Finalize = function(){
titlePort(self.options.Cargo.Title);
console.log("Step 6?");
ShipIt();
};
/**/