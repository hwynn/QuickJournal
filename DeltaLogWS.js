var cargo = {
	title: "I can post journals now",
	content: "Oh my gosh you guys, I made the hypest program ever. I'm gonna post pictures of my food and my cat and stuff. I hope you love it.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};

//get title area
var WStitle = document.querySelector("input#journaltitle");
//get content area
var WScontent = document.querySelector("#submit-journal-content #submit-form .description #journaldesc");
//get tag area
var WStagBox = document.querySelector("#submit-journal-content #submit-form .tagging .listbuilder");
var WStags = document.querySelector("#tags-textarea");
//get ratings area
var WSratings = document.querySelector("#submit-journal-content #submit-form .info #journalrating");
//get only friends
var WSonlyfriends = document.querySelector("submit-friends");
//get submit button
var WSsubmit = document.getElementById("submit-form");

//set title value
WStitle.value = cargo.title;
//set content value
WScontent.innerHTML = cargo.content;
//set tag value
var tagPadding = ['<li class="listbuilder-entry" unselectable="on"><span class="listbuilder-entry-text">','</span><a class="listbuilder-entry-remove" href="#" role="button" title="Remove sampletag from the list."></a>'];
var Tags="";
for(var i = 0; i < cargo.tags.length; i = i + 1)
{
	Tags = tagPadding[0]+cargo.tags[i]+tagPadding[1];
	WStags.value = WStags.value+cargo.tags[i] + ' ';
	WStagBox.innerHTML = WStagBox.innerHTML + Tags;
}
WStags.value.substring(0, WStags.value.length - 1);
//set ratings value
	switch (cargo.rating) {
		case 1:
			//"13+" will be selected
			WSratings.value = 20;
			break;
		case 2:
			//"18+ nonsexual" will be selected
			WSratings.value = 30;
			break;
		case 3:
			//"18+ sexual" will be selected
			WSratings.value = 40;
			break;
		default:
			//"all" will be selected
			WSratings.value = 10;
	}
//set onlyFriends
if(cargo.onlyFriends) 
{
	WSonlyfriends.checked=true;
}

//hit submit
WSsubmit.submit();


//Null Check
/* var WSsubmit = document.getElementById("submit-form");
if(WSsubmit === null) {
    console.log("this is null");
}
else
{
console.log("This is fine");
} */



/* var cargo = {
	tags: ["These","tags","were","added","with","javascript"],
};

var z = document.querySelector("#submit-journal-content #submit-form .tagging .listbuilder");
var tagPadding = ['<li class="listbuilder-entry" unselectable="on"><span class="listbuilder-entry-text">','</span><a class="listbuilder-entry-remove" href="#" role="button" title="Remove sampletag from the list."></a>'];
var package = "";
for(var i = 0; i < cargo.tags.length; i = i + 1)
{
package = tagPadding[0]+cargo.tags[i]+tagPadding[1];
console.log(package);
z.innerHTML = z.innerHTML + package;
} */

/* var cargo = {
	title: "I can post journals now",
	content: "Oh my gosh you guys, I made the hypest program ever. I'm gonna post pictures of my food and my cat and stuff. I hope you love it.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};
var titlePort = function(x){
	console.log("title: " + x);
	var z = document.querySelector("input#journaltitle");
	z.value = x;
};

var contentPort = function(x){
	var z = document.querySelector("#submit-journal-content #submit-form .description #journaldesc");
	z.innerHTML = x;
};

var tagPort = function(x){
//loop to pass through every tag
	var z = document.querySelector("#submit-journal-content #submit-form .tagging .listbuilder");
	var tagPadding = ['<li class="listbuilder-entry" unselectable="on"><span class="listbuilder-entry-text">','</span><a class="listbuilder-entry-remove" href="#" role="button" title="Remove sampletag from the list."></a>'];
	var package = "";
	for(var i = 0; i < x.length; i = i + 1)
	{
	package = tagPadding[0]+x[i]+tagPadding[1];
	console.log(package);
	z.innerHTML = z.innerHTML + package;
	}
};

var ratingsPort = function(x){
//ratings function
	var z = document.querySelector("#submit-journal-content #submit-form .info #journalrating");
	switch (x) {
		case 1:
			//"13+" will be selected
			z.value = 20;
			break;
		case 2:
			//"18+ nonsexual" will be selected
			z.value = 30;
			break;
		case 3:
			//"18+ sexual" will be selected
			z.value = 40;
			break;
		default:
			//"all" will be selected
			z.value = 10;
	}
};

var onlyFriendsPort = function(x) {
	document.getElementById("submit-friends").checked = x;
};

titlePort(cargo.title);
contentPort(cargo.content);
tagPort(cargo.tags);
//call ratings function
ratingsPort(cargo.rating);
onlyFriendsPort(cargo.onlyFriends);

document.getElementById("submit-form").submit();

 */