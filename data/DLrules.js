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
	document.getElementById("WSdo").style.display = "none";
	document.getElementById("WSdrop").style.borderBottomColor = "#000000";
	document.getElementById("IBdo").style.display = "none";
	document.getElementById("IBdrop").style.borderBottomColor = "#000000";
	document.getElementById("SFdo").style.display = "none";
	document.getElementById("SFdrop").style.borderBottomColor = "#000000";
	document.getElementById("FAdo").style.display = "none";
	document.getElementById("FAdrop").style.borderBottomColor = "#000000";
	document.getElementById("TBdo").style.display = "none";
	document.getElementById("TBdrop").style.borderBottomColor = "#000000";
	document.getElementById("GPdo").style.display = "none";
	document.getElementById("GPdrop").style.borderBottomColor = "#000000";
	document.getElementById("RTdo").style.display = "none";
	document.getElementById("RTdrop").style.borderBottomColor = "#000000";
	document.getElementById("EXX09do").style.display = "none";
	document.getElementById("EXX09drop").style.borderBottomColor = "#000000";
	document.getElementById("EXX10do").style.display = "none";
	document.getElementById("EXX10drop").style.borderBottomColor = "#000000";
	document.getElementById("EXX11do").style.display = "none";
	document.getElementById("EXX11drop").style.borderBottomColor = "#000000";
	document.getElementById("EXX12do").style.display = "none";
	document.getElementById("EXX12drop").style.borderBottomColor = "#000000";
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
	document.getElementById("WScheck").checked=true;
	document.getElementById("IBcheck").checked=true;
	document.getElementById("SFcheck").checked=true;
	document.getElementById("FAcheck").checked=true;
	document.getElementById("TBcheck").checked=true;
	document.getElementById("GPcheck").checked=true;
	document.getElementById("RTcheck").checked=true;
	//document.getElementById("EXX09check").checked=true;
	//document.getElementById("EXX10check").checked=true;
	//document.getElementById("EXX11check").checked=true;
	//document.getElementById("EXX12check").checked=true;
	};