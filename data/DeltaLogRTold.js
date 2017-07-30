var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false,
	r_tP: 1
};

//get title area
var RTtitle = document.querySelector("#title");
//get content area
var RTcontent = document.querySelector("div.redactor-box:nth-child(5) > div:nth-child(2)");
var RTcbox = document.getElementById("body");
//get tag area
var RTtags = document.querySelector("#tags");
//get only friends
var RTonlyfriends = document.querySelector("#permission");
//get submit button
var RTsubmit = document.querySelector("#tab-content-activity > div:nth-child(2) > form:nth-child(2) > input:nth-child(12)");

//set title value
RTtitle.value = cargo.title;
//set content value
RTcontent.innerHTML = "<p>"+cargo.content+"<span class='redactor-invisible-space'>​</span></p>";
RTcbox.value = "<p>"+cargo.content+"</p>";
//set tag value
var tagPadding = ['',''];
var Tags="";
for(var i = 0; i < cargo.tags.length; i = i + 1)
{
	Tags = tagPadding[0]+cargo.tags[i]+tagPadding[1];
	RTtags.value = RTtags.value+cargo.tags[i] + ' ';
}

//set onlyFriends
RTonlyfriends.selectedIndex = cargo.r_tP;

//hit submit
RTsubmit.click();

/* console.log("RTtitle.value: "           +RTtitle.value);
console.log("RTtitle.innerHTML: "       +RTtitle.innerHTML);
console.log("RTcontent.value: "         +RTcontent.value);
console.log("RTcontent.innerHTML: "     +RTcontent.innerHTML);
console.log("RTcbox.value: "         +RTcbox.value);
console.log("RTcbox.innerHTML: "     +RTcbox.innerHTML);
console.log("RTtags.value: "            +RTtags.value);
console.log("RTtags.innerHTML: "        +RTtags.innerHTML);
console.log("RTonlyfriends.value: "     +RTonlyfriends.value);
console.log("RTonlyfriends.innerHTML: " +RTonlyfriends.innerHTML); */
/* 
"RTtitle.value: "
"RTtitle.innerHTML: "
"RTcontent.value: undefined"
"RTcontent.innerHTML: <p>​</p>"
"RTtags.value: "
"RTtags.innerHTML: "
"RTonlyfriends.value: 0"
"RTonlyfriends.innerHTML: <option value="0" selected="selected">Public</option><option value="1">Sponsors only</option><option value="2">Friends only</option><option value="3">Private</option>" */