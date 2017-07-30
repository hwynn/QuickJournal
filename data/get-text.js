// When the user hits return, send the "text-entered"
// message to main.js.
// The message payload is the contents of the edit box.
console.log("get-text is now running");
//this isn't printing for some reason
var titleArea = document.getElementById("titleBox");
var contentArea = document.getElementById("contentBox");
var ratingsbox = {
	all: document.querySelector("#ratings #all"),
	mature: document.querySelector("#ratings #mature"),
	adultnonsexual: document.querySelector("#ratings #adultnonsexual"),
	adultsexual: document.querySelector("#ratings #adultsexual")
};
//this converts the checked box into the rating number
var ratingsCheck = function(x) {
	var R = 1;
	if(x.all.checked)
	{R=1;}
	if(x.mature.checked)
	{R=2;}
	if(x.adultnonsexual.checked)
	{R=3;}
	if(x.adultsexual.checked)
	{R=4;}
	return R;
}
var tagArea = document.getElementById("tagBox");
var tagCheck = function(x) {
	var taglist = x.split(",");
	for (i = 0; i < taglist.length; i = i+1) 
	{
	taglist[i] = taglist[i].trim();
	//this cuts the spaces off the ends of the tags
	}
	return taglist;
}
var finalButton = document.getElementById("publishButton");

//list of ids of the site checkboxes from the panel
var sitelist = ["FAcheck", "IBcheck", "WScheck", "SFcheck", "DAcheck"];
//this makes a list of booleans based off the checklist of sites.
var siteCheck = function() {
	var sitestatus = [];
	for (i = 0; i < sitelist.length; i = i+1)
		{
		sitestatus.push(document.getElementById(sitelist[i]).checked);
		}
	return sitestatus;
};

//this switches the cursor to the content box when the user hits enter in the title box
titleArea.addEventListener('keyup', function onkeyup(event) {
  if (event.keyCode == 13) {
    // Remove the newline.
	contentArea.focus();
    //titleArea.value = '';
  }
}, false);

//this defines the cargo on the button press then ships it.
finalButton.addEventListener('click', function() {
    // Remove the newline.
	console.log("Step 5: publish button clicked, beginning cargo setup");
	var cargo = {
		title: "",
		content: "",
		tags: [],
		rating: 0,
		onlyFriends: false,
		sites: []
	};
    cargo.content = contentArea.value;
	/* cargo.title = titleArea.value.substring(0, titleArea.value.length -1); */
	cargo.title = titleArea.value.replace(/[\n\r]/g, '');
	cargo.tags = tagCheck(tagArea.value);
	cargo.rating = ratingsCheck(ratingsbox);
	cargo.sites = siteCheck();
	console.log("Step 6: cargo loaded from panel");
	//function to turn checked value of the onlyfriends box into onlyfriends
	
    //self.port.emit("content-entered", content);
    //self.port.emit("title-entered", title); this is the old emit function used
	//hopefully you can just use one big self.port.emit function to send the whole cargo object
	self.port.emit("cargo-shipping", cargo);
	//next we reset everything Note, this doesn't erase local cargo.
	titleArea.value = "";
	contentArea.value = "";
	document.getElementById("tagBox").value = "";
	document.querySelector("#ratings #mature").checked = false;
	document.querySelector("#ratings #adultnonsexual").checked = false;
	document.querySelector("#ratings #adultsexual").checked = false;
	document.querySelector("#ratings #all").checked = true;
}, false);

// Listen for the "show" event being sent from the
// main add-on code. It means that the panel's about
// to be shown.
//
// Set the focus to the title area so the user can
// just start typing.
self.port.on("show", function onShow() {
  titleArea.focus();
  console.log("Step 4: textarea focussed");
});

