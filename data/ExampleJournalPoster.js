var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};

//get title area
var EXXtitle = document.querySelector("");
//get content area
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

//set ratings value

//set onlyFriends
if(cargo.onlyFriends) 
{
}


//hit submit
EXXsubmit.submit();