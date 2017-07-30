/* console.log("main is running"); */
var data = require("sdk/self").data;
// into it.
var journal_entry = require("sdk/panel").Panel({
  contentURL: data.url("DeltaLogPanel.html"),
  contentScriptFile: data.url("get-text.js")
});
console.log("Step 1: addon started");

// Create a button
require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});
// Show the panel when the user clicks the button.
function handleClick(state) {
  journal_entry.show();
  console.log("Step 2: action button pressed");
}

journal_entry.once("show", function() {
  journal_entry.port.emit("show");
  console.log("Step 3: show event triggered");
});

var Cargo = {
	Title: "",
	Content: "",
	Tags: [],
	Rating: 0,
	OnlyFriends: false,
	Sites: []
};

//this runs after the cargo is loaded from the panel 
function emptyfunction() 
{
	console.log("Step 9: emptyfunction started");
	Doit(4);
}


journal_entry.port.once("cargo-shipping", function (cargo) {
	//this loads the title but trims off the return are the end
	console.log("Step 7: cargo-shipping event triggered. Cargo shipping to main");
	Cargo.Title = cargo.title;
	Cargo.Content = cargo.content;
	Cargo.Tags = cargo.tags;
	Cargo.Rating = cargo.rating;
	Cargo.OnlyFriends = cargo.onlyFriends;
	Cargo.Sites = cargo.sites;
	
	console.log("title: " + Cargo.Title);
	console.log("Content: " + Cargo.Content);
	console.log("Tags: " + Cargo.Tags);
	console.log("Rating: " + Cargo.Rating);
	console.log("Limited to Friends: " + Cargo.OnlyFriends);
	console.log("Sites: " + Cargo.Sites);
	console.log("You did it!");
	
	journal_entry.hide();
	console.log("Step 8: Cargo loaded in main and panel hidden");
	emptyfunction();

});