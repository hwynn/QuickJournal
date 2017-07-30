var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};
document.getElementById("postFormatButtons").style.display="block";
document.querySelector("#composerDiv table tbody tr td form#post table tbody tr td div#textareaContain textarea#body").className = document.querySelector("div#textareaContain textarea#body").className + " textareaOpen";
document.querySelector("#composerDiv table tbody tr td form#post table tbody tr td div#textareaContain div#textCopy").setAttribute('style', 'min-height: 64px');
document.querySelector("#composerDiv table tbody tr td form#post table tbody tr td div#postButtons").style.display="block";

var titlePort = function(x){
	var z = document.getElementById("postTitle");
	z.value = x;
};
var contentPort = function(x){
	var z = document.querySelector("textarea#body");
	z.value = x;
};
var onlyFriendsPort = function(x) {
	document.getElementById("socialfriendsOnly").checked = x;
};

titlePort(cargo.title);
contentPort(cargo.content);
onlyFriendsPort(cargo.onlyFriends);

document.querySelector("form#post").submit();





var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};

//get title area
var EXXtitle = document.getElementById("postTitle");
//get content area
var EXXcontent = document.querySelector("textarea#body");
//get tag area
var EXXtags = document.querySelector("");
//get ratings area
var EXXratings = document.querySelector("");
//get only friends
var EXXonlyfriends = document.querySelector("");
//get submit button
var EXXtags = document.querySelector("");

//Null Check
/* if(EXXtitle === null) {
    console.log("this is null");
}
else
{
console.log("This is fine");
} */

//set title value

//set content value

//set tag value

//set ratings value

//set onlyFriends


//hit submit