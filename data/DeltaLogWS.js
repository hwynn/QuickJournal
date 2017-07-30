console.log('DeltaLogDA, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

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
//var WSonlyfriends = document.querySelector("submit-friends");
//get submit button
var WSsubmit = document.getElementById("submit-form");

//set title value
WStitle.value = self.options.Cargo.title;
//set content value
WScontent.innerHTML = self.options.Cargo.content;
//set tag value
var tagPadding = ['<li class="listbuilder-entry" unselectable="on"><span class="listbuilder-entry-text">','</span><a class="listbuilder-entry-remove" href="#" role="button" title="Remove sampletag from the list."></a>'];
var Tags="";
for(var i = 0; i < self.options.Cargo.tags.length; i = i + 1)
{
	Tags = tagPadding[0]+self.options.Cargo.tags[i]+tagPadding[1];
	WStags.value = WStags.value+self.options.Cargo.tags[i] + ' ';
	WStagBox.innerHTML = WStagBox.innerHTML + Tags;
}
WStags.value.substring(0, WStags.value.length - 1);
//set ratings value
	switch (self.options.Cargo.rating) {
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
/* if(self.options.Cargo.onlyFriends) 
{
	WSonlyfriends.checked=true;
} */

//hit submit
WSsubmit.submit();