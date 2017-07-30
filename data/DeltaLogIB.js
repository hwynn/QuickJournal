console.log('DeltaLogIB, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

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


if (document.querySelector("form[action='newjournal_process.php']") === null) {console.log("submit slector is gone!");}
if (document.querySelector("form[action='newjournal_process.php']") !== null) {console.log("submit selector is just fine");}
if (IBsubmit === null) {console.log("IBsubmit is gone!");}
if (IBsubmit !== null) {console.log("IBsubmit is just fine");}

//set title value
IBtitle.value = self.options.Cargo.title;
//set content value
IBcontent.innerHTML = self.options.Cargo.content;
//set onlyFriends
IBonlyfriends.checked = self.options.Cargo.i_bFO;
//set other inkbunny options
document.getElementById("guest_block").checked = self.options.Cargo.i_bGB;
document.getElementById("comment_lock").checked = self.options.Cargo.i_bLC;

//hit submit
IBsubmit.submit();