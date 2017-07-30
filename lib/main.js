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
});

var sites = {
checked: [false,true,false,false,false],
urls: ["http://www.furaffinity.net/search/", "https://inkbunny.net/search.php", "https://www.weasyl.com/search", "https://www.sofurry.com/", "http://www.deviantart.com/"],
scripts: ["searchFA.js", "searchIB.js", "searchWS.js", "searchSF.js", "searchDA.js"]
};

thingy = "hello";
console.log("main is running");
function handleClick(state) {
// Doit(4);
/* for (i = 0; i < sites.urls.length; i = i+1) 
{
Doit(i);
} */
}


//This opens the tabs and starts the function that runs their scripts
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











