console.log("change.js is running");                                                                                            
console.log(self.options.a.urls[1]);
window.addEventListener('click', function(event) {
console.log("Changes.js");
self.port.emit("myMessage");
}, false);