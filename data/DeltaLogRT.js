var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};

//get title area
var RTtitle = document.querySelector("#title");
//get content area
var RTcontent = document.querySelector("div.redactor-box:nth-child(5) > div:nth-child(2)");
//get tag area
var RTtags = document.querySelector("#tags");
//get only friends
var RTonlyfriends = document.querySelector("#permission");
//get submit button
var RTsubmit = document.getElementById("#tab-content-activity > div:nth-child(2) > form:nth-child(2) > input:nth-child(12)");

//set title value
RTtitle.value = cargo.title;
//set content value
RTcontent.value = cargo.content;
//set tag value
var tagPadding = ['',''];
var Tags="";
for(var i = 0; i < cargo.tags.length; i = i + 1)
{
	Tags = tagPadding[0]+cargo.tags[i]+tagPadding[1];
	RTtags.value = RTtags.value+cargo.tags[i] + ' ';
	//RTtagBox.innerHTML = RTtagBox.innerHTML + Tags;
}
//RTtags.value.substring(0, RTtags.value.length - 1);
//set onlyFriends
if(cargo.onlyFriends) 
{
	RTonlyfriends.checked=true;
}

//hit submit
RTsubmit.submit();


//get title area
var RTtitle = document.querySelector("#title");
//get content area
var RTcontent = document.querySelector("div.redactor-box:nth-child(5) > div:nth-child(2)");
//get tag area
var RTtags = document.querySelector("#tags");
//get only friends
var RTonlyfriends = document.querySelector("#permission");
//get submit button
var RTsubmit = document.getElementById("#tab-content-activity > div:nth-child(2) > form:nth-child(2) > input:nth-child(12)");

console.log("RTtitle.value: "           +RTtitle.value);
console.log("RTtitle.innerHTML: "       +RTtitle.innerHTML);
console.log("RTcontent.value: "         +RTcontent.value);
console.log("RTcontent.innerHTML: "     +RTcontent.innerHTML);
console.log("RTtags.value: "            +RTtags.value);
console.log("RTtags.innerHTML: "        +RTtags.innerHTML);
console.log("RTonlyfriends.value: "     +RTonlyfriends.value);
console.log("RTonlyfriends.innerHTML: " +RTonlyfriends.innerHTML);

var RTtags = document.querySelector("#tags");




"RTtitle.value: "
"RTtitle.innerHTML: "
"RTcontent.value: undefined"
"RTcontent.innerHTML: <p>​</p>"
"RTtags.value: "
"RTtags.innerHTML: "
"RTonlyfriends.value: 0"
"RTonlyfriends.innerHTML: <option value="0" selected="selected">Public</option><option value="1">Sponsors only</option><option value="2">Friends only</option><option value="3">Private</option>"