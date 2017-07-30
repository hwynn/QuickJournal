var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
//maybe we can load tabs later?
var journal_entry = require("sdk/panel").Panel({
  contentURL: data.url("DeltaLogPanel.html"),
  contentScriptFile: data.url("get-text.js")
});
console.log("Step 1: addon started");
// Creates the button
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
//this will send a message to get-text to tell it to start
journal_entry.once("show", function() {
  journal_entry.port.emit("show");
  console.log("Step 3: show event triggered");
});
//this is our cargo. All the info we need from the panel will be stored in here.
var Cargo = {
	Title: "",
	Content: "",
	Tags: [],
	Rating: 0,
	OnlyFriends: false,
	Sites: []
	//which websites will this function run? Sites knows
};

var sites = {
urls: ["https://www.furaffinity.net/search/", "https://inkbunny.net/search.php", "https://www.weasyl.com/search", "https://www.sofurry.com/", "http://www.deviantart.com/"],
scripts: ["searchFA.js", "searchIB.js", "searchWS.js", "searchSF.js", "searchDA.js"]
};

//this runs after the cargo is loaded from the panel
function emptyfunction() 
{
	console.log("Step 9: emptyfunction started");
	Doit(0);
}

//This opens the tabs and starts the function that runs their scripts
function Doit(x) {
	tabs.open(sites.urls[x]);
	handleTab(x);
}

function handleTab(X) {
tabs.on('ready', function GoGoGo(tab) {
console.log("The tab is ready");
worker = tab.attach({
      contentScriptFile: sites.scripts[X],
	  contentScriptOptions: {
        sites,
		Cargo
      }
  });
  worker.port.once("myMessage", function handleMyMessage() {
  console.log("no message, sorry");
  tab.close();
  worker.destroy();
  });
  tabs.removeListener("ready", GoGoGo);
});
}


//this is the big function imports info from the panel into cargo
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