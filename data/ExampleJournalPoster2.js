var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};

//get title area
var EXXtitle = document.querySelector(".title-field > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)");
//get content area
var EXXcontent = document.querySelector(".editor-richtext > p:nth-child(1)");


//get tag area
var EXXtags = document.querySelector(".post-form--tag-editor");

//get ratings area
//var EXXratings = document.querySelector("");
//get only friends
//var EXXonlyfriends = document.querySelector("");
//get submit button
var EXXsubmit = document.querySelector("button.flat-button:nth-child(2)");

//Null Check
/* if(EXXtitle === null) {
    console.log("this is null");
}
else
{
console.log("This is fine");
} */

//set title value
EXXtitle.innerHTML = (cargo.title);
//set content value
EXXcontent.innerHTML = (cargo.content);
//set tag value

var tagPadding = ['<span draggable="true" class="tag-label">','</span>'];
var Tags="";
for(var i = 0; i < cargo.tags.length; i = i + 1)
{
	Tags = tagPadding[0]+cargo.tags[i]+tagPadding[1];
	//EXXtags.value = EXXtags.value + Tags;
}
EXXtags.innerHTML= Tags+EXXtags.innerHTML;
//set ratings value

//set onlyFriends

//hit submit
EXXsubmit.disabled=false;

//EXXsubmit.click();
//EXXcontent.click();
EXXsubmit.submit();
//document.querySelector("").submit;
//document.querySelector(".post-forms-glass").submit;
//document.querySelector(".post-container").submit;