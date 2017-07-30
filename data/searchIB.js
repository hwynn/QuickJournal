var term = self.options.Cargo.Title;
console.log(self.options.sites.urls[1]);

//puts words in the input box
var titlePort = function(x){
	var zA = document.querySelector("#text");
	zA.value = x;
};
//hits the submit button
var ShipIt = function(){
	var x = document.querySelector("body > form:nth-child(12)");
	var y =document.querySelector("body > form:nth-child(9)");
	if (x !==null || y !==null)
	{
		if (x !== null) 
		{
		console.log("It's x");
		}
		else 
		{
		console.log("It's y");
			x = y;
		}
	}
	x.submit();
	console.log("Unloading now");
	//self.port.emit("myMessage");
};
var Finalize = function(){
titlePort(term);
ShipIt();
console.log("That's all, folks");
};
Finalize();