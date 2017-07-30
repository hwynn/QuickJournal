console.log('DeltaLogDA, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

//get title area
var IBtitle = document.querySelector("#title");
//get content area
var IBcontent = document.querySelector("#content");
//get only friends
//var IBonlyfriends = document.getElementById("friends_only");
//get submit button
var IBsubmit = document.querySelector("form[action='newjournal_process.php']");
var key = document.querySelector("body form input").value;
console.log(key);

//set title value
IBtitle.value = self.options.Cargo.title;
//set content value
IBcontent.innerHTML = self.options.Cargo.content;
//set onlyFriends
//IBonlyfriends.checked = self.options.Cargo.onlyFriends;
//hit submit
IBsubmit.submit();

/* var onlyFriendsPort = function(x) {
	document.getElementById("guest_block").checked = x;
	document.getElementById("comment_lock").checked = x;
};
blockGuestsPort(self.options.Cargo.blockGuests);
lockCommentsPort(self.options.Cargo.lockComments); */