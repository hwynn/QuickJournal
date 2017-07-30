//var term = "modular";
var term = self.options.Cargo.Title;
//puts words in the input box
var titlePort = function(x){
	// var zA = document.querySelector("form#search-form fieldset input#q");
	var zA = document.querySelector("#JSMessage");
	zA.value = x;
};
//hits the submit button
var ShipIt = function(){
var b = document.querySelector("input.button:nth-child(3)");
b.name = "finish";
//document.querySelector("form#search-form").submit();
document.querySelector("#JSForm").submit();
console.log("Unloading now");
self.port.emit("myMessage");
};
/* var EndIt = function(){
document.addEventListener("submit", function(event) {
console.log("Unloading now");
self.port.emit("myMessage");
}, false);
}; */
var Finalize = function(){
//EndIt();
titlePort(term);
ShipIt();
};
Finalize();