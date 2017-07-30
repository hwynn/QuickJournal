var term = "modular";
//puts words in the input box
var titlePort = function(x){
	var zA = document.querySelector("form#search-backup-search input");
	zA.value = x;
};
//hits the submit button
var ShipIt = function(){
document.querySelector("form#search-backup-search").submit();
};
var Finalize = function(){
titlePort(term);
ShipIt();
};
Finalize();