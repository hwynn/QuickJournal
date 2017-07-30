var data = require("sdk/self").data;
var tabs = require("sdk/tabs");

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
TabIt(count);
//tabs.open(sites.urls[0]);
//handleTab(0);
}
function doit() {
	console.log("Started");
	if(count < sites.urls.length)
	{
		TabIt(count)
	}
	else
	{
		console.log("loop ended")
	}
}

function TabIt(x) {
	
   tabs.open(sites.urls[count]);
	handleTab(count);
	
}

//this is our cargo.
var Cargo = {
	Title: "Sample Title!",
	Content: new Date()
};
//this is in an array for a good reason. don't worry about it.
var sites = {
urls: ["http://www.furaffinity.net/search/", "http://www.furaffinity.net/search/"],
scripts: ["searchFA.js","searchFA2.js"]
};

function handleTab(X) 
{
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
			console.log("Shuttin down!");
			//tab.close();
			worker.destroy();
		});
		tabs.removeListener("ready", RunPostScript);
		console.log(count);
	count=count+1;
	console.log(count);
    doit()
	});
	
}