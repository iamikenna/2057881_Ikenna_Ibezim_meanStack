
function getD(){
    var clientN = document.getElementById("cn").value;
    console.log(clientN)

    var myPTag = document.createElement("p");

    var myPTagContent = document.createTextNode(clientN);

    myPTag.appendChild(myPTagContent);

    document.getElementById("info").appendChild(myPTag);
}

function setD(){
    const map1 = {};
    var clientN = document.getElementById("cn").value;
    var projectN = document.getElementById("pn").value;
    var bgtN = document.getElementById("bgt").value;

    map1[1] = clientN;
    map1[2] = projectN;
    map1[3] = bgtN;

    localStorage.setItem("data", JSON.stringify(map1));
    console.log("Data has been stored in the local storage")
    

    
}