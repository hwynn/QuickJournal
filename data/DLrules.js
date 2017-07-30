	function hideExtra() {
	document.getElementById("showButton").style.display = "block";
	document.getElementById("hideButton").style.display = "none";
	document.getElementById("AdvancedOptions").style.display = "none";
	document.getElementById("OptionBox").style.height = "18px";
	};
	function showExtra() {
	document.getElementById("showButton").style.display = "none";
	document.getElementById("hideButton").style.display = "block";
	document.getElementById("AdvancedOptions").style.display = "block";
	document.getElementById("OptionBox").style.height = "304px";
	};
	function SetDestination(x) {
		var Checkybox = document.getElementById(x+"check");
		if(Checkybox.checked)
		{
		Checkybox.checked = false;
		document.getElementById(x+"cell").style.backgroundColor = "#ACA1A1";
		}
		else
		{
		Checkybox.checked = true;
		document.getElementById(x+"cell").style.backgroundColor = "#00FF00";
		}
	};
	
	function Fog()
	{
	document.getElementById("DAdo").style.display = "none";
	document.getElementById("DAdrop").style.borderBottomColor = "#000000";
	document.getElementById("FAdo").style.display = "none";
	document.getElementById("FAdrop").style.borderBottomColor = "#000000";
	document.getElementById("IBdo").style.display = "none";
	document.getElementById("IBdrop").style.borderBottomColor = "#000000";
	document.getElementById("WSdo").style.display = "none";
	document.getElementById("WSdrop").style.borderBottomColor = "#000000";
	document.getElementById("SFdo").style.display = "none";
	document.getElementById("SFdrop").style.borderBottomColor = "#000000";
	document.getElementById("Steamdo").style.display = "none";
	document.getElementById("Steamdrop").style.borderBottomColor = "#000000";
	document.getElementById("EXX1do").style.display = "none";
	document.getElementById("EXX1drop").style.borderBottomColor = "#000000";
	document.getElementById("EXX2do").style.display = "none";
	document.getElementById("EXX2drop").style.borderBottomColor = "#000000";
	document.getElementById("EXX3do").style.display = "none";
	document.getElementById("EXX3drop").style.borderBottomColor = "#000000";
	document.getElementById("EXX4do").style.display = "none";
	document.getElementById("EXX4drop").style.borderBottomColor = "#000000";
	document.getElementById("EXX5do").style.display = "none";
	document.getElementById("EXX5drop").style.borderBottomColor = "#000000";
	document.getElementById("EXX6do").style.display = "none";
	document.getElementById("EXX6drop").style.borderBottomColor = "#000000";
	};
	
	function LightHouse(x)
	{
		console.log("this works at least");
		if (document.getElementById(x+"do").style.display == "inline-block")
		{
			console.log("The options were hidden by the fog again");
			Fog();
		}
		else
		{
		console.log("The LightHouse reveals new options in the fog");
		Fog();
		document.getElementById(x+"do").style.display = "inline-block";
		document.getElementById(x+"drop").style.borderBottomColor = "#F2F2F2";
		}
	};
	
	function CheckAll()
	{
	console.log("all checked");
	document.getElementById("DAcheck").checked=true;
	document.getElementById("FAcheck").checked=true;
	document.getElementById("IBcheck").checked=true;
	document.getElementById("WScheck").checked=true;
	document.getElementById("SFcheck").checked=true;
	document.getElementById("Steamcheck").checked=true;
	document.getElementById("EXX1check").checked=true;
	document.getElementById("EXX2check").checked=true;
	document.getElementById("EXX3check").checked=true;
	document.getElementById("EXX4check").checked=true;
	document.getElementById("EXX5check").checked=true;
	document.getElementById("EXX6check").checked=true;
	};