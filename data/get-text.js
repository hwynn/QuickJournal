var titleArea   = document.getElementById("TitleBox");
var finalButton = document.getElementById("PostButton");
var contentArea = document.getElementById("ContentBox");
var ratingsbox = document.getElementById("MR");
var ratingAll = document.querySelector("#MR option:nth-child(1)");
var ratingMature = document.querySelector("#MR option:nth-child(2)");
var ratingAdultNonsex = document.querySelector("#MR option:nth-child(3)");
var ratingAdultSex = document.querySelector("#MR option:nth-child(4)");

var tagArea = document.getElementById("TagBox");
//make sure these are in the same order as sites in main.js
var sitelist = ["FAcheck", "SFcheck", "IBcheck", "WScheck", "DAcheck"];

//focusses on title box when button is pressed
self.port.on("show", function() {

    titleArea.focus();

    console.log("Step: textarea focussed");
    console.log(titleArea.value.replace(/[\n\r]/g, ''));
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
	if(ratingAll.selected)
	{R=1;}
	if(ratingMature.selected)
	{R=2;}
	if(ratingAdultNonsex.selected)
	{R=3;}
	if(ratingAdultSex.selected)
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
	console.log(titleArea.value.replace(/[\n\r]/g, ''));
	console.log(contentArea.value);
	console.log(tagCheck(tagArea.value));
	console.log(ratingsCheck(ratingsbox));
	console.log(siteCheck());
    // send cargo
    self.port.emit("cargo-shipping", {
        title: titleArea.value.replace(/[\n\r]/g, ''),
		content: contentArea.value,
		tags: tagCheck(tagArea.value),
		rating: ratingsCheck(ratingsbox),
		sites: siteCheck()
    });

	//maybe add a function to turn checked value of the onlyfriends box into onlyfriends
	
    // reset input
    titleArea.value = "";
	contentArea.value = "";
	tagArea.value = "";
	ratingAll.selected = true;

}, false);