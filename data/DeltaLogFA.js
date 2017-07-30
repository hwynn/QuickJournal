console.log('DeltaLogDA, start');
console.log(self.options);
//console.log(document);

// send signal to kill worker
self.port.emit("workerKill");

//get title area
var FAtitle = document.querySelector(".textbox");
//get content area
var FAcontent = document.querySelector("#JSMessage");
//get submit button
var FAbutton = document.querySelector("form#MsgForm table tbody tr:nth-of-type(2) td input.button");
var FAsubmit = document.querySelector("form#MsgForm");

//set title value
FAtitle.value = self.options.Cargo.title;
//set content value
FAcontent.innerHTML = self.options.Cargo.content;

//hit submit
FAbutton.name = "finish";
FAsubmit.submit();

/* if(FAtitle === null) {
    console.log("title: "+"this is null");
}
else
{
console.log("This is fine");
} */