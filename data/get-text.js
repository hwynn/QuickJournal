var titleArea         = document.getElementById("TitleBox");
var finalButton       = document.getElementById("PostButton");
var contentArea       = document.getElementById("ContentBox");
var ratingsbox        = document.getElementById("MR");
var ratingAll         = document.querySelector("#MR option:nth-child(1)");
var ratingMature      = document.querySelector("#MR option:nth-child(2)");
var ratingAdultNonsex = document.querySelector("#MR option:nth-child(3)");
var ratingAdultSex    = document.querySelector("#MR option:nth-child(4)");

var deviantartUsername    = document.getElementById("deviantartUsername");
var	weasylFriendsOnly     = document.getElementById("weasylFriendsOnly");
var inkbGuestsBlocked     = document.getElementById("inkbGuestsBlocked");
var inkbFriendsOnly       = document.getElementById("inkbFriendsOnly");
var inkbLockComments      = document.getElementById("inkbLockComments");
var sofurryPrivacy        = document.getElementById("sofurryPrivacy");
var furaLockComments      = document.getElementById("furaLockComments");
var roosterteethPrivacy   = document.getElementById("roosterteethPrivacy");
var roosterteethUsername  = document.getElementById("roosterteethUsername");

var tagArea = document.getElementById("TagBox");
//site specific options
function CheckAll()
{
	console.log("all checked");
	
	for (i = 0; i < sitelist.length; i = i+1)
		{
		document.getElementById(sitelist[i]+"check").checked=true;
		document.getElementById(sitelist[i]+"cell").style.backgroundColor = "#00FF00";
		}
};

//make sure these are in the same order as sites in main.js
var sitelist = ["DA", "WS", "IB", "SF", "FA", "TB", "GP", "RT"];
function regular(cat)
{
	console.log("more debugging prompts");
	//uncheck the sites not checked before
	for (i = 0; i < cat.sites.length; i = i+1)
	{
	if (!cat.sites[i])
		{
			console.log("Nope, not " +sitelist[i]);
			document.getElementById(sitelist[i]+"check").checked=false;
			document.getElementById(sitelist[i]+"cell").style.backgroundColor = "#ACA1A1";
		}
	deviantartUsername.value = cat.d_aUN;
	weasylFriendsOnly.checked = cat.w_sFO;
	inkbGuestsBlocked.checked = cat.i_bGB;
	inkbFriendsOnly.checked = cat.i_bFO;
	inkbLockComments.checked = cat.i_bLC;
	sofurryPrivacy.selectedIndex = cat.s_fP;
	furaLockComments.checked = cat.f_aLC;
	roosterteethPrivacy.selectedIndex = cat.r_tP;
	roosterteethUsername.value = cat.r_tUN;
	}
};

//focusses on title box when button is pressed
self.port.on("show", function(cat) {

    titleArea.focus();
	console.log("Did the cat make it?");
	console.log(cat);
    console.log("Step 2: textarea focussed");
    console.log(titleArea.value.replace(/[\n\r]/g, ''));
    console.log(finalButton);
	
	if (Object.keys(cat).length!=0)
	{
	console.log("banger");
	CheckAll();
	regular(cat);
	}
	
});

//this switches the cursor to the content box when the user hits enter in the title box
titleArea.addEventListener('keyup', function onkeyup(event) {
  if (event.keyCode == 13) {
    // Remove the newline.
	contentArea.focus();
    //titleArea.value = '';
  }
}, false);

//this formats user input into tags
var tagCheck = function(x) {
	var taglist = x.split(",");
	for (i = 0; i < taglist.length; i = i+1) 
	{
	taglist[i] = taglist[i].trim();
	//this cuts the spaces off the ends of the tags
	}
	return taglist;
}

//this makes a list of booleans based off the checklist of sites.
var siteCheck = function() {
	var sitestatus = [];
	for (i = 0; i < sitelist.length; i = i+1)
		{
		sitestatus.push(document.getElementById(sitelist[i]+"check").checked);
		}
	return sitestatus;
};

//this defines the cargo on the button press then ships it.
finalButton.addEventListener('click', function() {
	//print everything to the log for debugging
	
    console.log("Step 3: publish button clicked, beginning cargo setup");
/* 	console.log("Title: "    + titleArea.value.replace(/[\n\r]/g, ''));
	console.log("Content: "  + contentArea.value);
	console.log("Tags: "     + tagCheck(tagArea.value));
	console.log("Rating: "   + ratingsbox.selectedIndex);
	console.log("SiteList: " + siteCheck());
	console.log("deviantartUsername: "   + deviantartUsername.value);
	console.log("weasylFriendsOnly: "    + weasylFriendsOnly.checked);
	console.log("inkbGuestsBlocked: "    + inkbGuestsBlocked.checked);
	console.log("inkbFriendsOnly: "      + inkbFriendsOnly.checked);
	console.log("inkbLockComments: "     + inkbLockComments.checked);
	console.log("sofurryPrivacy: "       + sofurryPrivacy.selectedIndex);
	console.log("furaLockComments: "     + furaLockComments.checked);
	console.log("roosterteethPrivacy: "  + roosterteethPrivacy.selectedIndex);
	console.log("roosterteethUsername: " + roosterteethUsername.value); */
    // send cargo
    self.port.emit("cargo-shipping", {
        title: titleArea.value.replace(/[\n\r]/g, ''),
		content: contentArea.value,
		tags: tagCheck(tagArea.value),
		rating: ratingsbox.selectedIndex,
		sites: siteCheck(),
		d_aUN: deviantartUsername.value,
		w_sFO: weasylFriendsOnly.checked,
		i_bGB: inkbGuestsBlocked.checked,
		i_bFO: inkbFriendsOnly.checked,
		i_bLC: inkbLockComments.checked,
		s_fP: sofurryPrivacy.selectedIndex,
		f_aLC: furaLockComments.checked,
		r_tP: roosterteethPrivacy.selectedIndex,
		r_tUN: roosterteethUsername.value
    });
	//maybe add a function to turn checked value of the onlyfriends box into onlyfriends
	
    // reset MOST inputs. Not all. Some should be kept (like usernames)
	console.log("Step 3.5: reset some panel stuff");
	titleArea.value = "";
	contentArea.value = "";
	tagArea.value = "";
	ratingsbox.selectedIndex = 0;

}, false);