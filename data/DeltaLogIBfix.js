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
var IBtitle = document.querySelector("#title");
//get content area
var IBcontent = document.querySelector("#content");
//get only friends
var IBonlyfriends = document.getElementById("friends_only");
//get submit button
var IBsubmit = document.querySelector("form[action='newjournal_process.php']");
var key = document.querySelector("body form input").value;
console.log(key);

if (IBsubmit === null) {console.log("IBsubmit is gone!");}

if (IBsubmit !== null) {console.log("IBsubmit is just fine");}

//set title value
IBtitle.value = cargo.title;
//set content value
IBcontent.innerHTML = cargo.content;
//hit submit
IBsubmit.submit();