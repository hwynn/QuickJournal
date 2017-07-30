console.log('DeltaLogDA, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

//get title area
var SFtitle = document.querySelector("input#UploadForm_P_title");
//get content area
var SFcontent = document.querySelector(".redactor-editor");
var SFdisplay = document.getElementById("UploadForm_textcontent");
//get tag area
var SFtags = document.querySelector("input#sf-upload-tags");
//get ratings area
//NA
//get only friends
//var SFonlyfriends = document.querySelector("#sf-upload tbody tr:nth-of-type(6) td:nth-of-type(2) .sf-upload-2-contentlevels span:nth-of-type(3) label.label_radio input#UploadForm_P_hidePublic_2");
//if (SFonlyfriends === null) {console.log("friends is gone!");}
//get submit button
var SFsubmit = document.getElementById("sf_uploadform");


//set title value
SFtitle.value = self.options.Cargo.title;
//set content value
SFcontent.innerHTML = '<p>' + self.options.Cargo.content + '</p>';
SFdisplay.value = '<p>' + self.options.Cargo.content + '</p>';
//set tag value
var tagPadding = [' ',','];
var package = "";
for(var i = 0; i < self.options.Cargo.tags.length; i = i + 1)
{
package = ' '+self.options.Cargo.tags[i]+',';
console.log(package);
SFtags.value = SFtags.value + package;
}
//set ratings value
var all = document.querySelector("#sf-upload-2-level .sf-upload-2-contentlevels span:nth-of-type(1) label.label_radio input#UploadForm_contentLevel_0");
if (all === null) {console.log("All is gone!");}
var adult = document.querySelector("#sf-upload-2-level .sf-upload-2-contentlevels span:nth-of-type(2) label.label_radio input#UploadForm_contentLevel_1");
if (adult === null) {console.log("Adult is gone!");}
var extreme = document.querySelector("#sf-upload-2-level .sf-upload-2-contentlevels span:nth-of-type(3) label.label_radio input#UploadForm_contentLevel_2");
if (extreme === null) {console.log("Extreme is gone!");}
switch (self.options.Cargo.rating) {
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
//SFonlyfriends.checked=self.options.Cargo.onlyFriends;

//hit submit
SFsubmit.submit();