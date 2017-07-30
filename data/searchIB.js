var term = "sample";

//get search area
var IBsearch = document.querySelector("#text");
//get submit button
var IBsubmit  = document.querySelector("body > form:nth-child(12)");

//insert search term
IBsearch.value = term;
//hits the submit button
IBsubmit.submit();