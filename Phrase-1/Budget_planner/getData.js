
function getNewKey(){
	let getObj = localStorage.getItem("data");
	let getJson = JSON.parse(getObj);
	let large = 1

	if (getJson !== undefined || getJson !== null){
		try{
			for (const [key, value] of Object.entries(getJson)){
				if (key > large){
					large = key
				}
			}
			return large + 1
		}
		catch(err){
			console.log(err)
		}
	}
	return 1
}

function setD(){
	// Empty Object
	

	// This gets values from the input form
	var clientN = document.getElementById("cn").value;
	var projectN = document.getElementById("pn").value;
	var bgtN = document.getElementById("bgt").value;

	var map1 = JSON.parse(localStorage.getItem("data")) || {};

	map1[getNewKey()] = {"clientN": clientN, "projectN": projectN, "bgtN": bgtN}
	localStorage.setItem("data", JSON.stringify(map1))
}


function displayT(){
	let getObj = localStorage.getItem("data");
	let getJson = JSON.parse(getObj);
	var tableContent = "";

	
	var startTable = "<table border=1 class='table'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"
	for (const [key, value] of Object.entries(getJson)){
		tableContent +="<tr><td>"+value['clientN']+"</td><td>"+value["projectN"]+"</td><td>"+value["bgtN"]+"</td></tr>"
	}
	

    
    var endTable="</table>"

    tableContent = startTable+tableContent+endTable

    document.getElementById("main").innerHTML=tableContent;
}