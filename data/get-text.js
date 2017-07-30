var titleArea = document.getElementById("titleBox");
var finalButton = document.getElementById("publishButton");

//this defines the cargo on the button press then ships it.
finalButton.addEventListener('click', function() {
    // Remove the newline.
	console.log("Step 5: publish button clicked, beginning cargo setup");
	var cargo = {
		title: ""
	};
	cargo.title = titleArea.value;
	self.port.emit("cargo-shipping", cargo);
	titleArea.value = "";
}, false);

//focusses on title box when button is pressed
self.port.on("show", function onShow() {
  titleArea.focus();
  console.log("Step 4: textarea focussed");
});