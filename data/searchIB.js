console.log('searchIB, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

// get title
var IBtitle = document.querySelector("#text");
// get submit button
var IBsubmit = document.querySelector("body > form:nth-child(12)");
if(IBsubmit === null) {
    IBsubmit = document.querySelector("body > form:nth-child(9)");
}

// set title value
IBtitle.value = self.options.Cargo.Title;

// submit search
IBsubmit.submit();

console.log("searchIB, end");