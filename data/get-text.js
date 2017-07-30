var titleArea   = document.getElementById("titleBox");
var finalButton = document.getElementById("publishButton");
var contentArea = document.getElementById("contentBox");
var ratingsbox = {
	all: document.querySelector("#ratings #all"),
	mature: document.querySelector("#ratings #mature"),
	adultnonsexual: document.querySelector("#ratings #adultnonsexual"),
	adultsexual: document.querySelector("#ratings #adultsexual")
};
var tagArea = document.getElementById("tagBox");
//make sure these are in the same order as sites in main.js
var sitelist = ["FAcheck", "SFcheck", "IBcheck", "WScheck", "DAcheck"];

//focusses on title box when button is pressed
self.port.on("show", function() {

    titleArea.focus();

    console.log("Step: textarea focussed");
    console.log(titleArea);
    console.log(finalButton);
});

//this switches the cursor to the content box when the user hits enter in the title box
titleArea.addEventListener('keyup', function onkeyup(event) {
  if (event.keyCode == 13) {
    // Remove the newline.
	contentArea.focus();
    //titleArea.value = '';
  }
}, false);

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
		sitestatus.push(document.getElementById(sitelist[i]).checked);
		}
	return sitestatus;
};

//this defines the cargo on the button press then ships it.
finalButton.addEventListener('click', function() {

    console.log("Step: publish button clicked, beginning cargo setup");

    // send cargo
    self.port.emit("cargo-shipping", {
        Title: titleArea.value.replace(/[\n\r]/g, ''),
		Content: contentArea.value,
		tags: tagCheck(tagArea.value),
		rating: ratingsCheck(ratingsbox),
		sites: siteCheck()
    });

	//maybe add a function to turn checked value of the onlyfriends box into onlyfriends
	
    // reset input
    titleArea.value = "";
	contentArea.value = "";
	document.getElementById("tagBox").value = "";
	document.querySelector("#ratings #mature").checked = false;
	document.querySelector("#ratings #adultnonsexual").checked = false;
	document.querySelector("#ratings #adultsexual").checked = false;
	document.querySelector("#ratings #all").checked = true;

}, false);