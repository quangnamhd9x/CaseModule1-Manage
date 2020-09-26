function idol(id, name, birthday, gender, action) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.gender = gender;
    this.action = action;
}

document.getElementById("formEdit").style.display = "none";
let arr = Array();
let i = 0;
let dem = 0;
var idchange;

function addGT() {
    let id = arr.length + 1;
    let newName = document.getElementById('addName').value;
    let newBirthday = document.getElementById('addYear').value;
    let newGender = document.getElementById('addGender').value;
    let newAction = "";
    let newidol = new idol(id, newName, newBirthday, newGender, newAction);
    arr.push(newidol);
    document.getElementById('addName').value = "";
    document.getElementById('addYear').value = "";
    document.getElementById('addGender').value = "";
    var node = document.createElement("tr");
    node.setAttribute("id", "Mang_" + arr[i].id)
    var btn1 = document.createElement('button');
    var btn2 = document.createElement('button');
    btn1.innerHTML = "Edit";
    btn2.innerHTML = "Delete";
    btn1.addEventListener("click", editRow);
    btn2.addEventListener("click", deleteRow);
    var nodeTd = "";
    for (let ele in arr[i]) {
        nodeTd = document.createElement("td");
        nodeTd.setAttribute("ID", "theTD_" + dem);
        var textnode = document.createTextNode(arr[i][ele]);
        nodeTd.appendChild(textnode);
        nodeTd.appendChild(btn1);
        nodeTd.appendChild(btn2);
        node.appendChild(nodeTd);
        dem++;
    }
    i++;
    document.getElementById("tbody1").appendChild(node);
}

function deleteRow(evt) {
    var id = evt.path[2].id;
    id = id.split("_")
    let num = id[1];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].id == num) {
            arr.splice(j, 1);
            document.getElementById("Mang_" + num).remove();
        }
    }
}

function editRow(evt) {
    document.getElementById("formAdd").style.display = "none";
    document.getElementById("sreachO").style.display = "none";
    document.getElementById("formEdit").style.display = "block";
    var id = evt.path[2].id;
    id = id.split("_");
    let num = id[1];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j].id == num) {
            idchange = arr[j].id;
            editSaveGT();
        }
    }
}

function editSaveGT() {
    let editName = document.getElementById("editName").value;
    let editBirthday = document.getElementById("editYear").value;
    let editGender = document.getElementById("editGender").value;
    let soTT = (idchange - 1) * 5;
    let soTD = soTT;
    if (editName != "") {
        document.getElementById("theTD_" + (1 + soTD)).innerHTML = editName;
    }
    if (editBirthday != "") {
        document.getElementById("theTD_" + (2 + soTD)).innerHTML = editBirthday;
    }
    if (editGender != "") {
        document.getElementById("theTD_" + (3 + soTD)).innerHTML = editGender;
    }
    document.getElementById("editName").value = "";
    document.getElementById("editYear").value = "";
    document.getElementById("editGender").value = "";

}

function exitGT() {
    document.getElementById("formAdd").style.display = "block";
    document.getElementById("sreachO").style.display = "block";
    document.getElementById("formEdit").style.display = "none";
}


function searchObject() {
    let sobject = prompt("bạn care ai?");
    for (let j = 0; j < arr.length; j++) {
        for (let ele in arr[j]) {
            if (sobject == arr[j][ele]) {
                alert(arr[j].id + " :là STT của idol");
                return;
            }
        }
    }
    alert("ko tìm thấy");
}