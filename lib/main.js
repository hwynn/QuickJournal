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
  journal_entry.show();
}
journal_entry.once("show", function() {
  journal_entry.port.emit("show");
});
function doit() {
	console.log("Step 1, loop "+ count +" started!");
	if(count < sites.urls.length)
	{
		console.log("We still have work to do!");
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
//this is our cargo. There's normally more stuff in it
var Cargo = {
	Title: ""
};
var sites = {
urls: ["http://www.furaffinity.net/search/", "https://www.sofurry.com/", "https://inkbunny.net/search.php", "https://www.weasyl.com/search", "http://www.deviantart.com/"],
scripts: ["searchFA.js", "searchSF.js", "searchIB.js", "searchWS.js", "searchDA.js"]
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
			  //the options are what will be passed to the other scripts
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
	Cargo.Title = cargo.title;
	console.log("title: " + Cargo.Title);
	//All data from panel should be imported. So panel is now hidden
	journal_entry.hide();
	console.log("Step 8: Cargo loaded in main and panel hidden");
	//this starts the tab opening process
	TabIt(count);
});