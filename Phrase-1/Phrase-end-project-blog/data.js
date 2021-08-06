
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
	// This gets values from the input form
	var title = document.getElementById("tit").value;
	var article = document.getElementById("art").value;
	var image = document.getElementById("img").value;

	var map1 = JSON.parse(localStorage.getItem("data")) || {};

	map1[getNewKey()] = {"title": title, "article": article, "image": image}
	localStorage.setItem("data", JSON.stringify(map1))
}


function displayT(){
	let getObj = localStorage.getItem("data");
	let getJson = JSON.parse(getObj);
    var count = 0
    var temp_col = "";
    var total_rows = "";

	for (const [key, value] of Object.entries(getJson)){
        var card = "<div class='card' style='width:250px'><div class='card-body'> <h4 class='card-title'>"+value['title']+"</h4>"
        var pTage = "<p class='card-text'>"+value["article"]+"</p>"
        var img1 = "<img class='card-img-bottom' src="+value["image"]+" alt='Card image' style='width:100%'>"
        var data_card = "<div class='col-4'>"+card+pTage+img1+"</div></div> </div>"
        count+= 1;

        if (count == 1){
            temp_col += data_card

        }
        else if(count == 2){
            temp_col += data_card
        }
        else if(count == 3){
            temp_col += data_card
            count = 0 
            total_rows += "<div class='row'>"+temp_col+"</div>"
            temp_col = ""

        }
	}
    document.getElementById("main").innerHTML=total_rows;
}