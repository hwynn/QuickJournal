console.log('searchSF, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

// get title
var SFtitle = document.querySelector("#headersearch");
// get submit button
var SFsubmit = document.querySelector(".topbar-nav > form:nth-child(3)");


// set title value
SFtitle.value = self.options.Cargo.Title;

// submit search
SFsubmit.submit();

console.log("searchSF, end");