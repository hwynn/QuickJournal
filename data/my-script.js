console.log("my-script.js is running");                                                                                            
console.log(self.options.a.urls[1]);
window.addEventListener('click', function(event) {
console.log("Hey, you clicked me!");
self.port.emit("myMessage");
}, false);