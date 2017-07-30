console.log('searchFA, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

// get title
var FAtitle = document.querySelector("form#search-form fieldset input#q");
// get submit button
var FAsubmit = document.querySelector("form#search-form");


// set title value
FAtitle.value = self.options.Cargo.Title;

// submit search
FAsubmit.submit();

console.log("searchFA, end");