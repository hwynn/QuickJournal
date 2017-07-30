console.log("pet.js is running");                                                                                            
console.log(self.options.a.urls[1]);
window.addEventListener('click', function(event) {
console.log("You clicked the pet script");
self.port.emit("myMessage");
}, false);