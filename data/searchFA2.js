document.addEventListener("submit", function(event) {
console.log("Unloading now");
self.port.emit("myMessage");
}, false);

var term = "headless";
//puts words in the input box
var titlePort = function(x){
	var zA = document.querySelector("form#search-form fieldset input#q");
	zA.value = x;
};
//hits the submit button
var ShipIt = function(){
document.querySelector("form#search-form").submit();
};
var Finalize = function(){
titlePort(term);
ShipIt();
};
Finalize();