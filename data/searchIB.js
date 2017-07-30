var term = "modular";
//puts words in the input box
var titlePort = function(x){
	var zA = document.querySelector("#text");
	zA.value = x;
};
//hits the submit button
var ShipIt = function(){
	// document.querySelector("body > form:nth-child(12)").submit();
	// document.querySelector("body > form:nth-child(9)").submit();
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
titlePort(term);
ShipIt();
};
Finalize();