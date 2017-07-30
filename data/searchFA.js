
var term = "modular";
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