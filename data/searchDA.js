document.addEventListener("submit", function(event) {
console.log("Unloading now");
self.port.emit("myMessage");
}, false);
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
ShipIt();
};
Finalize();