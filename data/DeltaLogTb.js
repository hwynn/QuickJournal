//Bug alert: this script will be unable to complete the post process
//the current work around is to select another option in the
//post drop down and then switch back to post and then click it.
console.log('DeltaLogIB, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

//*******************************Define selectors

//get title area
var TBtitle = document.querySelector(".title-field > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)");

//get content area
var TBcontent = document.querySelector(".editor-richtext > p:nth-child(1)");

//get tag area
var TBtags = document.querySelector(".post-form--tag-editor");

//get submit button
var TBsubmit = document.querySelector("button.flat-button:nth-child(2)");

//*******************************Insert content and submit

//set title value
TBtitle.innerHTML = (self.options.Cargo.title);

//set content value
TBcontent.innerHTML = (self.options.Cargo.content);

//set tag value
var tagPadding = ['<span draggable="true" class="tag-label">','</span>'];
var Tags="";
for(var i = 0; i < self.options.Cargo.tags.length; i = i + 1)
{
	Tags = tagPadding[0]+self.options.Cargo.tags[i]+tagPadding[1];
}
TBtags.innerHTML= Tags+TBtags.innerHTML;

//hit submit
//TBsubmit.disabled=false;
//TBsubmit.click();
//these are disabled because they will trigger tumblr security