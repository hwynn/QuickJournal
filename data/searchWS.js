console.log('searchWS, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

// get title
var WStitle = document.querySelector("form#search-backup-search input");
// get submit button
var WSsubmit = document.querySelector("form#search-backup-search");


// set title value
WStitle.value = self.options.Cargo.Title;

// submit search
WSsubmit.submit();

console.log("searchWS, end");
