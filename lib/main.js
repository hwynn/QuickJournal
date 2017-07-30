var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
var journal_entry = require("sdk/panel").Panel({
  contentURL: data.url("DeltaLogPanel.html"),
  contentScriptFile: data.url("get-text.js")
});
console.log("Step 1: addon started");
// Creates the button
require("sdk/ui/button/action").ActionButton({
  id: "make-post",
  label: "Make post",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});
var count = 0;
function handleClick(state) {
console.log("Step 9: handleClick started");
//TabIt(count);
  journal_entry.show();
  console.log("Step 2: action button pressed");
}
journal_entry.once("show", function() {
  journal_entry.port.emit("show");
  console.log("Step 3: show event triggered");
});


function doit() {
	console.log("Step 1, loop "+ count +" started!");;
	if(count < sites.urls.length)
	{
		TabIt(count);
	}
	else
	{
		console.log("loop ended");
	}
}

function TabIt(x) {
	console.log("Step 2, tab "+ count +" is opening!");
   tabs.open(sites.urls[count]);
	handleTab(count);
}

//this is our cargo.
var Cargo = {
	Title: "",
	Content: "",
	Tags: [],
	Rating: 0,
	OnlyFriends: false,
	Sites: []
};
//this is in an array for a good reason. don't worry about it.
var sites = {
urls: ["https://inkbunny.net/search.php", "http://www.furaffinity.net/search/", "https://www.weasyl.com/search", "https://www.sofurry.com/", "http://www.deviantart.com/"],
scripts: ["searchIB.js", "searchFA.js", "searchWS.js", "searchSF.js", "searchDA.js"]
};
function handleTab(X) 
{
	console.log("Step 3, tab  "+ count +" is processing!");
//I tried tabs.on('load'.. and that didn't fix the problem
	tabs.on('ready', function RunPostScript(tab) 
	{
		console.log("The tab is ready");
		worker = tab.attach(
		{
			  contentScriptFile: sites.scripts[X],
			  contentScriptOptions: 
			  {
				Cargo
			  }
		});
		worker.port.once("myMessage", function handleMyMessage() 
		{
			console.log("Step 4, search "+ count +" is shuttin down!");
			//tab.close();
			worker.destroy();
		});
		tabs.removeListener("ready", RunPostScript);
	console.log("Step 5, search "+ count +" should be finished!");
	count=count+1;
	console.log("Ready to do it again?");
    doit();
	});
	
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
	//All data from panel should be imported. So panel is now hidden
	journal_entry.hide();
	console.log("Step 8: Cargo loaded in main and panel hidden");
	//this starts the tab opening process
	TabIt(count);

});