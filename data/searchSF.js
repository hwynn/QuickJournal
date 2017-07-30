var term = "modular";
//puts words in the input box
var titlePort = function(x){
	var zA = document.querySelector("#headersearch");
	zA.value = x;
};
//hits the submit button
var ShipIt = function(){
document.querySelector(".topbar-nav > form:nth-child(3)").submit();
};
var Finalize = function(){
titlePort(term);
ShipIt();
};
Finalize();