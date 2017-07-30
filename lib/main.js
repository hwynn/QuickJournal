//credit to contact@spenibus.net for fixing, cleaning, and optimizing this

var data = require("sdk/self").data;
var tabs = require("sdk/tabs");


console.log("addon started");


//******************************************* item: [0] = url, [1] = script file, [2] = site chosen
var sites = [
    ["http://www.furaffinity.net/search/" ,"searchFA.js", false],
    ["https://www.sofurry.com/"           ,"searchSF.js", false],
    ["https://inkbunny.net/search.php"    ,"searchIB.js", false],
    ["https://www.weasyl.com/search"      ,"searchWS.js", false],
    ["http://www.deviantart.com/"         ,"searchDA.js", false],
];




//****************************************************** user prompt: definition
var journal_entry = require("sdk/panel").Panel({
    contentURL        : data.url("DeltaLogPanel.html"),
    contentScriptFile : data.url("get-text.js")
});




//***************************************************** user prompt: signal show
journal_entry.once("show", function() {
    journal_entry.port.emit("show");
});




//*************************************************************** toolbar button
require("sdk/ui/button/action").ActionButton({
    id    : "make-post",
    label : "Make post",
    icon  : {
        "16" : "./icon-16.png",
        "32" : "./icon-32.png",
        "64" : "./icon-64.png",
    },
    onClick: function(state) {
        journal_entry.show();
    }
});




//********************************************** cargo received from user prompt
journal_entry.port.on("cargo-shipping", function(Cargo) {

    console.log("title: " + Cargo.Title);

    // hide user prompt
    journal_entry.hide();
	console.log(sites.length);
	//adds site choices from user
	for (i = 0; i < sites.length; i=i+1)
	{
		sites[i][2] = Cargo.sites[i];
	}
	
    console.log("Step 8: Cargo loaded in main and panel hidden");
	console.log("There are our sites: "+sites);
    // this starts the tab opening process
    TabIt(Cargo);
});




//************************************************************ open all the tabs
function TabIt(Cargo) {

    console.log("loop start");

    // loop through sites
    for(var site of sites) 
	//checks if site chosen by user
	{ if (site[2])
		{	
			console.log('opening tab with url: '+site[0]);

			tabs.open({
				url    : site[0],
				onOpen : function(tab) {
					// make a call to a predefined function to bind the values
					tabReady(tab, site, Cargo);
				},
			});
		}
    }

    console.log("loop end");
}




//************************************************************ tab open callback
function tabReady(tab, site, Cargo) {

    // attach to tab on ready event once
    tab.once('ready', function(tab) {

        console.log('tab ready, url: '+site[0])

        // attach script to tab, get worker
        var worker = tab.attach({
            contentScriptFile    : data.url(site[1]),
            contentScriptOptions : {Cargo},
        });

        // worker waits for kill signal
        worker.port.once("workerKill", function() {
            console.log("worker received kill signal, destroy, url: "+site[0]);
            worker.destroy();
        });
    });
}