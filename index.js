//credit to contact@spenibus.net for fixing, cleaning, and optimizing this
var data = require("sdk/self").data;
var tabs = require("sdk/tabs");


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




//****************************************************** user prompt: definition
var journal_entry = require("sdk/panel").Panel({
    contentURL        : data.url("UIskeleton.html"),
    contentScriptFile : data.url("get-text.js"),
	height: 520
});




//***************************************************** user prompt: signal show
journal_entry.on("show", function() {
    console.log("journal showing");
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
	
    console.log("title: " + Cargo.title);
	console.log("deviantartUsername: "   + Cargo.d_aUN);
	console.log("weasylFriendsOnly: "    + Cargo.w_sFO);
	console.log("inkbGuestsBlocked: "    + Cargo.i_bGB);
	console.log("inkbFriendsOnly: "      + Cargo.i_bFO);
	console.log("inkbLockComments: "     + Cargo.i_bLC);
	console.log("sofurryPrivacy: "       + Cargo.s_fP);
	console.log("furaLockComments: "     + Cargo.f_aLC);
	console.log("roosterteethPrivacy: "  + Cargo.r_tP);
	console.log("roosterteethUsername: " + Cargo.r_tUN);
	
	
    // hide user prompt
    journal_entry.hide();
	console.log("Site list length: " + sites.length);
	//adds site choices from user
	for (i = 0; i < sites.length; i=i+1)
	{
		sites[i][2] = Cargo.sites[i];
	}
	
	//add deviant art url
	sites[0][0] = "http://" + Cargo.d_aUN +".deviantart.com/journal/?edit";
    //add roosterteeth url
	sites[7][0] = "https://roosterteeth.com/user/"+Cargo.r_tUN;
	console.log("Step 8: Cargo loaded in main and panel hidden");
	console.log("There are our sites: "+sites);
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