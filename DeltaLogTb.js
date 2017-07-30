var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};
var titlePort = function(x){
	var z = document.querySelector("input#post_one");
	z.value = x;
};

var contentPort = function(x){
	var z = document.querySelector("body#tinymce p");
	z.innerHTML = x + "<br data-mce-bogus='1'></br>";
};
titlePort(cargo.title);
contentPort(cargo.content);

document.querySelector("form#MsgForm").submit();

var x = document.querySelector("iframe#post_two_ifr document");
if (x !== null) 
{
console.log("We got it!");
}

console.log(document.querySelector("iframe#post_two_ifr").innerHTML);