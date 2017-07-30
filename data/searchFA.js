document.addEventListener("submit", function(event) {
console.log("Unloading now");
self.port.emit("myMessage");
}, false);
//puts words in the input box
var titlePort = function(x){
	var FAzA = document.querySelector("form#search-form fieldset input#q");
	FAzA.value = x;
};
//hits the submit button
var ShipIt = function(){
document.querySelector("form#search-form").submit();
};
var Finalize = function(){
titlePort(self.options.Cargo.Title);
ShipIt();
};
Finalize();