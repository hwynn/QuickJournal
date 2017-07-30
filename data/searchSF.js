document.addEventListener("submit", function(event) {
console.log("Unloading now");
self.port.emit("myMessage");
}, false);
document.addEventListener("DOMContentLoaded", Finalize);
//puts words in the input box
var titlePort = function(x){
	var SFzA = document.querySelector("#headersearch");
	SFzA.value = x;
};
//hits the submit button
var ShipIt = function(){
document.querySelector(".topbar-nav > form:nth-child(3)").submit();
};
var Finalize = function(){
titlePort(self.options.Cargo.Title);
console.log("Step 6?");
ShipIt();
};