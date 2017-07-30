//credit to contact@spenibus.net for fixing, cleaning, and optimizing this
var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
var ss = require("sdk/simple-storage");

console.log("addon started");


//******************************************* item: [0] = url, [1] = script file
var sites = [
[""                                                     ,"DeltaLogDA.js", false],
["https://www.weasyl.com/submit/journal"                ,"DeltaLogWS.js", false],
["https://inkbunny.net/newjournal.php"                  ,"DeltaLogIB.js", false],
["https://www.sofurry.com/upload/details?contentType=3" ,"DeltaLogSF.js", false],
["http://www.furaffinity.net/controls/journal/"         ,"DeltaLogFA.js", false],
["https://www.tumblr.com/new/text"                      ,"DeltaLogTB.js", false],
["https://plus.google.com/"                             ,"DeltaLogGP.js", false],
[""                                                     ,"DeltaLogRT.js", false]
];
if (!ss.storage.r)
{
	console.log("new storage R made");
	ss.storage.r = {};
}
var cat = ss.storage.r;
//****************************************************** user prompt: definition
var journal_entry = require("sdk/panel").Panel({
    contentURL        : data.url("UIskeleton.html"),
    contentScriptFile : data.url("get-text.js"),
	height: 520
});

//***************************************************** user prompt: signal show
journal_entry.on("show", function() {
    console.log("journal showing");
	journal_entry.port.emit("show", cat);
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

function loadPreferences(Cargo) //store new preferences from cargo
{
	//*******debugging username storage; pre storage check
	if (Object.keys(ss.storage.r).length==0) //if storage has never been ran before. we define all the objects it needs.
	{
		console.log("We always like new customers");
		ss.storage.r.d_aUN = "";
		ss.storage.r.r_tUN = "";
		ss.storage.r.sites = [];
		ss.storage.r.w_sFO = false;
		ss.storage.r.i_bGB = false;
		ss.storage.r.i_bFO = false;
		ss.storage.r.i_bLC = false;
		ss.storage.r.s_fP = 0;
		ss.storage.r.f_aLC = false;
		ss.storage.r.r_tP = 0;
	}
	else
	{
	console.log("Want the regular shipment?");
	console.log("old r deviantartUsername: "   + ss.storage.r.d_aUN);
	console.log("old r weasylFriendsOnly: "    + ss.storage.r.w_sFO);
	console.log("old r inkbGuestsBlocked: "    + ss.storage.r.i_bGB);
	console.log("old r inkbFriendsOnly: "      + ss.storage.r.i_bFO);
	console.log("old r inkbLockComments: "     + ss.storage.r.i_bLC);
	console.log("old r sofurryPrivacy: "       + ss.storage.r.s_fP);
	console.log("old r furaLockComments: "     + ss.storage.r.f_aLC);
	console.log("old r roosterteethPrivacy: "  + ss.storage.r.r_tP);
	console.log("old r roosterteethUsername: " + ss.storage.r.r_tUN);
	}
	
	//*******running username storage
	if (ss.storage.r.d_aUN.length==0)
	{
		console.log("no DAusername found. Storing new one");
		console.log("r has : " + ss.storage.r.d_aUN);
		console.log("Cargo has : " + Cargo.d_aUN);
		ss.storage.r.d_aUN= Cargo.d_aUN;
		console.log("r now has : " + ss.storage.r.d_aUN);
	}
	console.log("checking RT meters: ");
	console.log("checking RT meters: " + ss.storage.r.r_tUN.length);
	if (ss.storage.r.r_tUN.length==0)
	{
		console.log("no RTusername found. Storing new one");
		console.log("r has : " + ss.storage.r.r_tUN);
		console.log("Cargo has : " + Cargo.r_tUN);
		ss.storage.r.r_tUN= Cargo.r_tUN;
		console.log("r now has : " + ss.storage.r.r_tUN);
	}
	//*******running site selection storage
	if (ss.storage.r.sites.length ==0)
	{
		console.log("no sites found in storage. filling it up");
	//fill it up
		for (i = 0; i < Cargo.sites.length; i=i+1)
		{
			console.log("Cargo has : " + Cargo.sites[i]);
			ss.storage.r.sites.push(Cargo.sites[i]);
			console.log("r now has : " + ss.storage.r.sites[i]);
		} 
	}
	else
	{
	//replace entires
		console.log("old sites found in storage. we're replacing them");
		for (i = 0; i < ss.storage.r.sites.length; i=i+1)
		{
			console.log("r has : " + ss.storage.r.sites[i]);
			console.log("Cargo has : " + Cargo.sites[i]);
			ss.storage.r.sites[i] = Cargo.sites[i];
			console.log("r now has : " + ss.storage.r.sites[i]);
		}
	}
	
	//*******debugging username storage; post storage check
	console.log("New DA username: " + ss.storage.r.d_aUN) //prints newly stored username
	console.log("New RT username: " + ss.storage.r.r_tUN) //prints newly stored username
	//*******set privacy stuff. 
	ss.storage.r.w_sFO = Cargo.w_sFO;
	ss.storage.r.i_bGB = Cargo.i_bGB;
	ss.storage.r.i_bFO = Cargo.i_bFO;
	ss.storage.r.i_bLC = Cargo.i_bLC;
	ss.storage.r.s_fP = Cargo.s_fP;
	ss.storage.r.f_aLC = Cargo.f_aLC;
	ss.storage.r.r_tP = Cargo.r_tP;
	
	// put all this storage into s again
	cat = ss.storage.r;
}

//********************************************** cargo received from user prompt
journal_entry.port.on("cargo-shipping", function(Cargo) {
	
    // hide user prompt
    journal_entry.hide();
	console.log("Site list length: " + sites.length);
	//adds site choices from user
	for (i = 0; i < sites.length; i=i+1)
	{
		sites[i][2] = Cargo.sites[i];
	}
	
	loadPreferences(Cargo);
		
	//add deviant art url
	sites[0][0] = "http://" + ss.storage.d_aUN +".deviantart.com/journal/?edit";
    //add roosterteeth url
	sites[7][0] = "https://roosterteeth.com/user/"+ss.storage.r_tUN;
	console.log("Step 8: Cargo loaded in main and panel hidden");
	//console.log("There are our sites: "+sites);
    // this starts the tab opening process
	//add roosterteeth url
    TabIt(Cargo);
});
	
	
	
	
//************************************************************ open all the tabs
function TabIt(Cargo) {
	
    console.log("loop start");
	
    // loop through sites
    for(var site of sites) 
	{ 
	if (site[2])
			{
				console.log('opening tab with url: '+site[0]);
	
				// open tab
				tabOpen(site, Cargo);
			}
    }

    console.log("loop end");
}	
	
	
	
	
//********************************************************************* open tab
function tabOpen(site, Cargo) {
	console.log("tab running");
    // callback for tab ready event
    var tabReady = function(tab) {
	
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
    }
	
	
    // open tab
    tabs.open({
        url    : site[0],
        onOpen : function(tab) {

            // attach to tab on ready event once
            tab.once('ready', tabReady);
        },
    });
}	