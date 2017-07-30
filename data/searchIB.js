document.addEventListener("submit", function(event) {
console.log("Unloading now");
self.port.emit("myMessage");
}, false);
document.addEventListener("DOMContentLoaded", Finalize);
//puts words in the input box
var titlePort = function(x){
	var IBzA = document.querySelector("#text");
	IBzA.value = x;
};
//hits the submit button
var ShipIt = function(){
	var x = document.querySelector("body > form:nth-child(12)");
	var y =document.querySelector("body > form:nth-child(9)");
	if (x !==null || y !==null)
	{
		if (x !== null) 
		{
			x.submit();
		}
		else 
		{
			y.submit();
		}
	}
};
var Finalize = function(){
titlePort(self.options.Cargo.Title);
console.log("Step 6?");
ShipIt();
};
