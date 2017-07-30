var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};

//get title area

//add class "has-text" to this after you've added text
var EXXtitle = document.querySelector(".title-field div:nth-child(1) div:nth-child(1) div:nth-child(1)");
//var EXXtitle = document.querySelector(".has-text span:nth-child(1)");
//get content area
.editor-richtext
var EXXcontent = document.querySelector("");
//get tag area
var EXXtags = document.querySelector("");
//get ratings area
var EXXratings = document.querySelector("");
//get only friends
var EXXonlyfriends = document.querySelector("");
//get submit button
var EXXsubmit = document.querySelector("");

//Null Check
/* if(EXXtitle === null) {
    console.log("this is null");
}
else
{
console.log("This is fine");
} */

//set title value
EXXtitle.value = cargo.title;
//set content value
EXXcontent.value = cargo.content
//set tag value
var tagPadding = ['',''];
var Tags="";
for(var i = 0; i < cargo.tags.length; i = i + 1)
{
	Tags = tagPadding[0]+cargo.tags[i]+tagPadding[1];
	EXXtags.value = EXXtags.value + Tags;
}

//hit submit
EXXsubmit.submit();


var EXXtitle = document.querySelector(".title-field > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)");
var EXXcontent = document.querySelector(".editor-richtext > p:nth-child(1)");
var EXXtags = document.querySelector(".post-form--tag-editor");


console.log("EXXtitle.value: "           +EXXtitle.value);
console.log("EXXtitle.innerHTML: "       +EXXtitle.innerHTML);
console.log("EXXcontent.value: "         +EXXcontent.value);
console.log("EXXcontent.innerHTML: "     +EXXcontent.innerHTML);
console.log("EXXtags.value: "            +EXXtags.value);
console.log("EXXtags.innerHTML: "        +EXXtags.innerHTML);

