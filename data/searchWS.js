document.addEventListener("submit", function(event) {
console.log("Unloading now");
self.port.emit("myMessage");
}, false);
document.addEventListener("DOMContentLoaded", Finalize);
//puts words in the input box
var titlePort = function(x){
	var WSzA = document.querySelector("form#search-backup-search input");
	WSzA.value = x;
};
//hits the submit button
var ShipIt = function(){
document.querySelector("form#search-backup-search").submit();
};
var Finalize = function(){
titlePort(self.options.Cargo.Title);
console.log("Step 6?");
ShipIt();
};