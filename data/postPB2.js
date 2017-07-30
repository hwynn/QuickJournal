//the listener that should close the tab after submit
document.addEventListener("submit", function(event) {
console.log("Unloading now");
self.port.emit("myMessage");
}, false);

//this inserts the post title
var titlePort = function(x)
{
	var zA = document.querySelector(".post_input");
	//this sets the paste to expire in 10 minutes
	document.querySelector("div.form_frame:nth-child(2) > div:nth-child(2) > select:nth-child(1) > option:nth-child(1)").value="10M";
	zA.value = x;
	console.log("Title inserted");
};
//this inserts the post content
var contentPort = function(x)
{
	var zA = document.querySelector("#paste_code");
	zA.value = x;
	console.log("Content inserted");
};

//hits the submit button
var ShipIt = function()
{
	document.querySelector("#submit").click()
	//self.port.emit("myMessage");
};

//this excecutes all the functions in a specified sequence
var Finalize = function()
{
	titlePort(self.options.Cargo.Title);
	contentPort("Test: " + self.options.Cargo.Content + "TEST2 SUCCESSFUL");
	ShipIt();
};

Finalize();
