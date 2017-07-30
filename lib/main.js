var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
//maybe we can load this later?
require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
/*   onClick: TryFA("http://www.furaffinity.net/search/","DeltaLogFA.js") */
});

var sites = {
checked: [false,true,false,false],
urls: ["http://www.example.com","http://www.bbc.com/news/","http://minecraft.gamepedia.com/Enchanting","http://www.furaffinity.net/search/"],
scripts: ["my-script.js","pet.js","change.js","play.js"]
};

thingy = "hello";
console.log("main is running");
function handleClick(state) {
Doit(3);
}
function Doit(x) {
	tabs.open(sites.urls[x]);
	console.log(thingy);
	handleTab(x);
}
function handleTab(X) {
tabs.on('ready', function GoGoGo(tab) {
console.log("The tab is ready");
worker = tab.attach({
      contentScriptFile: sites.scripts[X],
	  contentScriptOptions: {
        a: sites
      }
  });
  worker.port.once("myMessage", function handleMyMessage() {
  console.log("no message, sorry");
  tab.close();
  worker.destroy();
  });
  tabs.removeListener("ready", GoGoGo);
});
}