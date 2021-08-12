
function saveData(title: string, amount: number): void {
    var map1 = JSON.parse(localStorage.getItem("data")) || {"count": 0, "totalAmount": 0};

    if (title in map1){
        map1[title] += amount
    }
    else{
        map1[title] = amount
    }
    // Adding to the count
    map1["count"] += 1
    map1["totalAmount"] += amount

    localStorage.setItem("data", JSON.stringify(map1))

    let getObj = localStorage.getItem("data");
	let getJson = JSON.parse(getObj);
    
    var map1 = JSON.parse(localStorage.getItem("data"))
    document.getElementById("cartInfo").innerHTML= "Cart Size: "+map1["count"]+"";
}

function dCatSize(): void{
    var map1 = JSON.parse(localStorage.getItem("data"))
    document.getElementById("cartInfo").innerHTML= "Cart Size: "+map1["count"]+"";
}

function dTable(): void{
    var map1 = JSON.parse(localStorage.getItem("data"))
    document.getElementById("totalPriceInfo").innerHTML= "Total Price: $ "+map1["totalAmount"]+"";

    var map1 = JSON.parse(localStorage.getItem("data"))
    var tableContent: string = ""

    var startTable = "<table border=1 class='table'><tr><th>Item Name</th><th>Price</th></tr>"
    for (let key in map1){
        if (key !== "count" && key !== "totalAmount"){
            tableContent +="<tr><td>"+key+"</td><td>"+map1[key]+"</td></tr>"
        }
	}
    var endTable="</table>"

    tableContent = startTable+tableContent+endTable
    document.getElementById("main").innerHTML=tableContent;
}