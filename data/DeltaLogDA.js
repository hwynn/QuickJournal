

setTimeout(function()
{ 
console.log('DeltaLogDA, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

//get title area
var DAtitle = document.getElementById("journal-subject");
//get content area
var DAdisplay = document.querySelector("#devskin0 .negate-box-margin .gr-box .gr-body .gr .grf-indent .text .ccwriter-shadow .ccwriter-wrapper .ccwriter-content .writer");
var DAcontent = document.querySelector("#devskin0 .negate-box-margin .gr-box .gr-body .gr .grf-indent .text .ccwriter-shadow .ccwriter-wrapper .ccwriter-content #journal_body");







//get submit button
var DAsubmit = document.querySelector("#journal_main #gmi-GZone #gmi-GMFrame_Gruser .journal-editor .journal-editor-main #journal-edit-container form");

console.log("DA Title: "+self.options.Cargo.title);
console.log("DA Content: "+self.options.Cargo.content);


if (DAdisplay === null) {console.log("display is gone!");}
if (DAcontent === null) {console.log("content is gone!");}
if (DAsubmit === null) {console.log("submit is gone!");}
if (DAdisplay !== null) {console.log("display is just fine");}
if (DAcontent !== null) {console.log("content is just fine");}
if (DAsubmit !== null) {console.log("submit is just fine");}

//set title value
DAtitle.value = self.options.Cargo.title;
//set content value
DAcontent.value = self.options.Cargo.content;
DAdisplay.innerHTML = self.options.Cargo.content;

//hit submit
DAsubmit.submit();
}, 5000);