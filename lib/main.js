var data = require("sdk/self").data;
var tabs = require("sdk/tabs");

//************************************
var journal_entry = require("sdk/panel").Panel({
  contentURL: data.url("DeltaLogPanel.html"),
  contentScriptFile: data.url("get-text.js")
});
console.log("Step 1: addon started");
// Creates the button


//************************************
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

//************************************
function handleClick(state) {
	//optimize: just move this to onclick and delete handleclick
  journal_entry.show();
}
journal_entry.once("show", function() {
  journal_entry.port.emit("show");
});

//******************************************* crude loop
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


//*******************************************
function TabIt(x) {
	console.log("Step 2, tab "+ x +" is opening!");
   tabs.open({
		console.log("Step 3, tab  "+ x +" is processing!");
		url:sites.urls[x],
		onOpen: function(x, tab) {
			tabs.on('ready', function RunPostScript(tab) 
			{
				console.log("The tab is ready");
				worker = tab.attach(
				{
					  contentScriptFile: sites.scripts[x],
					  contentScriptOptions:{Cargo}
				});
			});
		}
   });
   count=count+1;
	doit();
}


handleTab(count);


}



//this is our cargo. There's normally more stuff in it
var Cargo = {
	Title: ""
};


//*******************************************
var sites = {
	//optimize: make this a list of lists rather than 2 lists
urls: ["https://www.sofurry.com/", "https://inkbunny.net/search.php", "http://www.furaffinity.net/search/", "https://www.weasyl.com/search", "http://www.deviantart.com/"],
scripts: ["searchSF.js", "searchIB.js", "searchFA.js", "searchWS.js", "searchDA.js"]
};


//*******************************************
function handleTab(X) 



//*******************************************
journal_entry.port.once("cargo-shipping", function (cargo) {
	//optimize: this can go
	Cargo.Title = cargo.title;
	
	console.log("title: " + Cargo.Title);
	
	//All data from panel should be imported. So panel is now hidden
	journal_entry.hide();
	console.log("Step 8: Cargo loaded in main and panel hidden");
	//this starts the tab opening process
	//optimize: this can be TabIt(Cargo) instead
	TabIt(count);
});