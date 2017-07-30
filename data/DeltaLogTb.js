//*******************************Define content to post
var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"]
};

//*******************************Define selectors

//get title area
var EXXtitle = document.querySelector(".title-field > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)");

//get content area
var EXXcontent = document.querySelector(".editor-richtext > p:nth-child(1)");

//get tag area
var EXXtags = document.querySelector(".post-form--tag-editor");

//get submit button
var EXXsubmit = document.querySelector("button.flat-button:nth-child(2)");

//*******************************Insert content and submit

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
}
EXXtags.innerHTML= Tags+EXXtags.innerHTML;

//hit submit
EXXsubmit.disabled=false;
EXXsubmit.click();