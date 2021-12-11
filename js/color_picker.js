
const sectorsContainer = document.getElementById("sectorsContainer");

let currentSector = 0;
let currentColor = 0;

function addColor (id, colorId, color = "#000000") {

    let div = document.createElement("div");
    div.className = "color_picker";

    let colorPicker = document.createElement("input");
    colorPicker.setAttribute("type", "color");
    colorPicker.setAttribute("id", "color" + colorId);
    colorPicker.setAttribute("value", color);

    let label = document.createElement("label");

    label.setAttribute("for", "color" + colorId);
    label.innerText = "Цвет " + colorId;

    div.appendChild(colorPicker);
    div.appendChild(label);


    document.getElementById(id).appendChild(div);
}

function addSector (length = 0, tex = 0, hood1 = 0, hood2 = 0, hood3 = 0, colors = []) {
    let colorId = 0, currSecLoc = currentSector;
    let div = document.createElement("div");
    div.className = "sector";
    div.setAttribute("id", "sector" + currentSector);

    let inputLength = document.createElement("input");
    inputLength.setAttribute("placeholder", "Длина шага");
    inputLength.setAttribute("id", "inputLength" + currentSector);
    inputLength.setAttribute("value", "" + length);

    let inputTex = document.createElement("input");
    inputTex.setAttribute("placeholder", "Линейная плотность ровницы");
    inputTex.setAttribute("id", "inputTex" + currentSector);
    inputTex.setAttribute("value", "" + tex);

    let inputHood1 = document.createElement("input");
    inputHood1.setAttribute("placeholder", "Вытяжка 1");
    inputHood1.setAttribute("id", "inputHood" + currentSector + "_1");
    inputHood1.setAttribute("value", "" + hood1);

    let inputHood2 = document.createElement("input");
    inputHood2.setAttribute("placeholder", "Вытяжка 2");
    inputHood2.setAttribute("id", "inputHood" + currentSector + "_2");
    inputHood2.setAttribute("value", "" + hood2);


    let inputHood3 = document.createElement("input");
    inputHood3.setAttribute("placeholder", "Вытяжка 3");
    inputHood3.setAttribute("id", "inputHood" + currentSector + "_3");
    inputHood3.setAttribute("value", "" + hood3);
    //
    //
    // let addColorBtn = document.createElement("button");
    // addColorBtn.setAttribute("value", "Add color");
    // addColorBtn.innerText = "Add color";
    // addColorBtn.onclick = function () {
    //
    //
    //     addColorBtn.setAttribute("disabled", "true");
    // };

    div.appendChild(inputLength);
    // div.appendChild(inputTex);
    div.appendChild(inputHood1);
    div.appendChild(inputHood2);
    div.appendChild(inputHood3);
    // div.appendChild(addColorBtn);

    sectorsContainer.appendChild(div);

    // let tempI = 0;
    //
    // if (hood1 !== 0) {
    //     addColor("sector" + currSecLoc, colorId, colors[tempI]);
    //     tempI++;
    // } else
    //     addColor("sector" + currSecLoc, colorId);
    //
    // colorId++;
    // if (hood2 !== 0) {
    //     addColor("sector" + currSecLoc, colorId, colors[tempI]);
    //     tempI++;
    // } else
    //     addColor("sector" + currSecLoc, colorId);
    // colorId++;
    // if (hood3 !== 0) {
    //     addColor("sector" + currSecLoc, colorId, colors[tempI]);
    // } else
    //     addColor("sector" + currSecLoc, colorId);

    currentSector++;
}

function tryMixColors () {
    sectors = computeColorsBetween(sectors);
}

function save2local() {
    localStorage.setItem("roving1", document.getElementById("roving1").value);
    localStorage.setItem("roving2", document.getElementById("roving2").value);
    localStorage.setItem("roving3", document.getElementById("roving3").value);
    localStorage.setItem("roving3Color", document.getElementById("roving3Color").value);
    localStorage.setItem("roving2Color", document.getElementById("roving2Color").value);
    localStorage.setItem("roving1Color", document.getElementById("roving1Color").value);
    localStorage.setItem("stepH", document.getElementById("stepH").value);
    localStorage.setItem("stepW", document.getElementById("stepW").value);
    localStorage.setItem("lengthP", document.getElementById("lengthP").value);
    localStorage.setItem("lengthV", document.getElementById("lengthV").value);
    localStorage.setItem("showSectors", document.getElementById("showSectors").checked);

    localStorage.setItem("saved", true);


    if(localStorage.getItem("showSectors") === "true") {
        document.getElementById("showSectors").checked = true;
        document.getElementById("sectorsContainer").style.display = "grid";
    } else
        document.getElementById("sectorsContainer").style.display = "none";
}

function load() {
    if(localStorage.getItem("saved")) {
        if(localStorage.getItem("showSectors") === "true") {
            document.getElementById("showSectors").checked = true;
            document.getElementById("sectorsContainer").style.display = "grid";
        } else
            document.getElementById("sectorsContainer").style.display = "none";
        document.getElementById("roving1").value = localStorage.getItem("roving1");
        document.getElementById("roving2").value = localStorage.getItem("roving2");
        document.getElementById("roving3").value = localStorage.getItem("roving3");
        document.getElementById("roving3Color").value = localStorage.getItem("roving3Color");
        document.getElementById("roving2Color").value = localStorage.getItem("roving2Color");
        document.getElementById("roving1Color").value = localStorage.getItem("roving1Color");
        document.getElementById("stepH").value = localStorage.getItem("stepH");
        document.getElementById("stepW").value = localStorage.getItem("stepW");
        document.getElementById("lengthP").value = localStorage.getItem("lengthP");
        document.getElementById("lengthV").value = localStorage.getItem("lengthV");

    }
}

load();