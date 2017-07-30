console.log("play.js is running");                                                                                            
console.log(self.options.a.urls[1]);
window.addEventListener('click', function(event) {
console.log("Goodbye!");
self.port.emit("myMessage");
}, false);