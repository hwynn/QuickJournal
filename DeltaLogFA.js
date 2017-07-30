var cargo = {
	title: "Automatic journal posts with javascript",
	content: "I've been working on javascript programming. This journal wasn't manually typed on the website by me. It was put in using my latest program.",
	tags: ["These","tags","were","added","with","javascript"],
	ratings: ["all", "13+", "18+ nonsexual", "18+ sexual"],
	rating: 1,
	onlyFriends: false
};

//get title area
var FAtitle = document.querySelector(".textbox");
//get content area
var FAcontent = document.querySelector("#JSMessage");
//get submit button
var FAbutton = document.querySelector("form#MsgForm table tbody tr:nth-of-type(2) td input.button");
var FAsubmit = document.querySelector("form#MsgForm");

//set title value
FAtitle.value = cargo.title;
//set content value
FAcontent.innerHTML = cargo.content;

//hit submit
FAbutton.name = "finish";
FAsubmit.submit();

/* if(FAtitle === null) {
    console.log("title: "+"this is null");
}
else
{
console.log("This is fine");
} */