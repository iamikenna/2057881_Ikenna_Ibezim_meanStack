function saveData(title, amount) {
    var map1 = JSON.parse(localStorage.getItem("data")) || { "count": 0, "totalAmount": 0 };
    if (title in map1) {
        map1[title] += amount;
    }
    else {
        map1[title] = amount;
    }
    // Adding to the count
    map1["count"] += 1;
    map1["totalAmount"] += amount;
    localStorage.setItem("data", JSON.stringify(map1));
    var getObj = localStorage.getItem("data");
    var getJson = JSON.parse(getObj);
    var map1 = JSON.parse(localStorage.getItem("data"));
    document.getElementById("cartInfo").innerHTML = "Cart Size: " + map1["count"] + "";
}
function dCatSize() {
    var map1 = JSON.parse(localStorage.getItem("data"));
    document.getElementById("cartInfo").innerHTML = "Cart Size: " + map1["count"] + "";
}
function dTable() {
    var map1 = JSON.parse(localStorage.getItem("data"));
    document.getElementById("totalPriceInfo").innerHTML = "Total Price: $ " + map1["totalAmount"] + "";
    var map1 = JSON.parse(localStorage.getItem("data"));
    var tableContent = "";
    var startTable = "<table border=1 class='table'><tr><th>Item Name</th><th>Price</th></tr>";
    for (var key in map1) {
        if (key !== "count" && key !== "totalAmount") {
            tableContent += "<tr><td>" + key + "</td><td>" + map1[key] + "</td></tr>";
        }
    }
    var endTable = "</table>";
    tableContent = startTable + tableContent + endTable;
    document.getElementById("main").innerHTML = tableContent;
}
//Function used to clear the local session
function clearSession() {
    localStorage.clear();
}
