var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};

//get title area
var EXXtitle = document.querySelector("input#UploadForm_P_title");
//get content area
var EXXcontent = document.querySelector(".redactor-editor");
var EXXdisplay = document.getElementById("UploadForm_textcontent");
//get tag area
var EXXtags = document.querySelector("input#sf-upload-tags");
//get ratings area
//NA
//get only friends
var EXXonlyfriends = document.querySelector("#sf-upload tbody tr:nth-of-type(6) td:nth-of-type(2) .sf-upload-2-contentlevels span:nth-of-type(3) label.label_radio input#UploadForm_P_hidePublic_2");
if (EXXonlyfriends === null) {console.log("friends is gone!");}
//get submit button
var EXXsubmit = document.getElementById("sf_uploadform");


//set title value
EXXtitle.value = cargo.title;
//set content value
EXXcontent.innerHTML = '<p>' + cargo.content + '</p>';
EXXdisplay.value = '<p>' + cargo.content + '</p>';
//set tag value
var tagPadding = [' ',','];
var package = "";
for(var i = 0; i < cargo.tags.length; i = i + 1)
{
package = ' '+cargo.tags[i]+',';
console.log(package);
EXXtags.value = EXXtags.value + package;
}
//set ratings value
var all = document.querySelector("#sf-upload-2-level .sf-upload-2-contentlevels span:nth-of-type(1) label.label_radio input#UploadForm_contentLevel_0");
if (all === null) {console.log("All is gone!");}
var adult = document.querySelector("#sf-upload-2-level .sf-upload-2-contentlevels span:nth-of-type(2) label.label_radio input#UploadForm_contentLevel_1");
if (adult === null) {console.log("Adult is gone!");}
var extreme = document.querySelector("#sf-upload-2-level .sf-upload-2-contentlevels span:nth-of-type(3) label.label_radio input#UploadForm_contentLevel_2");
if (extreme === null) {console.log("Extreme is gone!");}
switch (cargo.rating) {
	case 2:
		//"13+" will be selected
		adult.checked=true;
		break;
	case 3:
		//"18+ nonsexual" will be selected
		extreme.checked=true;
		break;
	default:
		//"all" will be selected
		all.checked=true;
}
//set onlyFriends
EXXonlyfriends.checked=cargo.onlyFriends;

//hit submit
EXXsubmit.submit();



/* var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 0,
	onlyFriends: false,
	description: "Oh hey.. this is a journal posted with DeltaLog",
	secrecy: 0
};

var descriptionPort = function(x){
	var z = document.querySelector("#UploadForm_description");
	z.value = x;
};

var secrecyPort = function(x){
//ratings function
	var public = document.querySelector("#sf-upload tbody tr:nth-of-type(6) td:nth-of-type(2) .sf-upload-2-contentlevels span:nth-of-type(1) label.label_radio input#UploadForm_P_hidePublic_0");
	if (public === null) {console.log("public is gone!");}
	var groups = document.querySelector("#sf-upload tbody tr:nth-of-type(6) td:nth-of-type(2) .sf-upload-2-contentlevels span:nth-of-type(2) label.label_radio input#UploadForm_P_hidePublic_1");
	if (groups === null) {console.log("group is gone!");}
	var friends = document.querySelector("#sf-upload tbody tr:nth-of-type(6) td:nth-of-type(2) .sf-upload-2-contentlevels span:nth-of-type(3) label.label_radio input#UploadForm_P_hidePublic_2");
	if (friends === null) {console.log("friends is gone!");}
	var hidden = document.querySelector("#sf-upload tbody tr:nth-of-type(6) td:nth-of-type(2) .sf-upload-2-contentlevels span:nth-of-type(4) label.label_radio input#UploadForm_P_hidePublic_3");
	if (hidden === null) {console.log("hidden is gone!");}
	switch (x) {
		case 1:
			//"group-only" will be selected
			groups.checked=true;
			break;
		case 2:
			//"friends-only" will be selected
			friends.checked=true;
			break;
		case 3:
			//"hidden" will be selected
			hidden.checked=true;
			break;
		default:
			//"public" will be selected
			public.checked=true;
	}
};
 */