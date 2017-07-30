var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};

//get title area
var DAtitle = document.querySelector("journal-subject");
//get content area
var DAdisplay = document.querySelector("#devskin0 .negate-box-margin .gr-box .gr-body .gr .grf-indent .text .ccwriter-shadow .ccwriter-wrapper .ccwriter-content .writer");
var DAcontent = document.querySelector("#devskin0 .negate-box-margin .gr-box .gr-body .gr .grf-indent .text .ccwriter-shadow .ccwriter-wrapper .ccwriter-content #journal_body");

//get submit button
var DAsubmit = document.querySelector("#journal_main #gmi-GZone #gmi-GMFrame_Gruser .journal-editor .journal-editor-main #journal-edit-container form");

//set title value
DAtitle.value = cargo.title;
//set content value
DAcontent.value = cargo.content;
DAdisplay.innerHTML = cargo.content;

//hit submit
DAsubmit.submit();