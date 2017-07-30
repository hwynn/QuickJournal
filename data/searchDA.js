var term = "modular";
//puts words in the input box
var titlePort = function(x){
	var zA = document.querySelector("input.gmbutton2");
	zA.value = x;
};
//hits the submit button
var ShipIt = function(){
document.querySelector("#search7").submit();
};
var Finalize = function(){
titlePort(term);
ShipIt();
};
Finalize();