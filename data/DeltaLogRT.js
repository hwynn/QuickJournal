console.log('DeltaLogIB, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

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
RTtitle.value = self.options.Cargo.title;
//set content value
RTcontent.innerHTML = "<p>"+self.options.Cargo.content+"<span class='redactor-invisible-space'>​</span></p>";
RTcbox.value = "<p>"+self.options.Cargo.content+"</p>";
//set tag value
var tagPadding = ['',''];
var Tags="";
for(var i = 0; i < self.options.Cargo.tags.length; i = i + 1)
{
	Tags = tagPadding[0]+self.options.Cargo.tags[i]+tagPadding[1];
	RTtags.value = RTtags.value+self.options.Cargo.tags[i] + ' ';
}

//set onlyFriends
RTonlyfriends.selectedIndex = self.options.Cargo.r_tP;

//hit submit
RTsubmit.click();