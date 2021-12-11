let lastSectors = [];

let addHTMLLines = true;

function LightenDarkenColor(col, amt) {
    let num = parseInt(col, 16);
    let r = (num >> 16) + amt;
    let b = ((num >> 8) & 0x00FF) + amt;
    let g = (num & 0x0000FF) + amt;
    let newColor = g | (b << 8) | (r << 16);
    return newColor.toString(16);
}

function darker10(colorStr) {
    return LightenDarkenColor(colorStr.substr(1), -10);
}

function lighten10(colorStr) {
    return LightenDarkenColor(colorStr.substr(1), 10);
}

function getAverageColor2(color1, color2) {
    let out = "#";

    for(let i = 0; i < 3; i++) {

        let h1 = color1.substring(i*2+1, 3+(i*2));
        let h2 = color2.substring(i*2+1, 3+(i*2));

        let l1 = parseInt(h1, 16);
        let l2 = parseInt(h2, 16);

        let mid = parseInt(((l1 + l2) / 2));

        let midStr = mid.toString(16);

        if(midStr.length === 1) {
            out += "0";
        }

        out += midStr;

    }

    return out;
}

function getAverageColor3(color1, color2, color3) {
    let out = "#";

    for(let i = 0; i < 3; i++) {

        let h1 = color1.substring(i*2+1, 3+(i*2));
        let h2 = color2.substring(i*2+1, 3+(i*2));
        let h3 = color3.substring(i*2+1, 3+(i*2));

        let l1 = parseInt(h1, 16);
        let l2 = parseInt(h2, 16);
        let l3 = parseInt(h3, 16);

        let mid = parseInt(((l1 + l2 + l3) / 3));

        let midStr = mid.toString(16);

        if(midStr.length === 1) {
            out += "0";
        }

        out += midStr;

    }

    return out;
}

function getUrlParams () {
    let paramsMap = new Map();
    let location = window.location.href;

    if(!location.includes("?") || !location.includes("="))
        return new Map();

    location = location.split("?")[1];

    if(location.includes("&"))
        for (let item of location.split("&"))
            paramsMap.set(item.split("=")[0], item.split("=")[1]);

    paramsMap.set(location.split("=")[0], location.split("=")[1]);

    return paramsMap;
}

function try2getTex(inputTex, hood1 = 50, hood2 = 0, hood3 = 0) {
    let outTex = 0;

    if(hood1 !== 0) {
        outTex += inputTex/hood1;
    }

    if(hood2 !== 0) {
        outTex += inputTex/hood2;
    }

    if(hood3 !== 0) {
        outTex += inputTex/hood3;
    }

    return outTex;
}

function try2getTexFromArray(inputTex = [], hoods = []) {
    let outTex = 0;

    if(hoods[0] !== 0) {
        outTex += inputTex[0]/hoods[0];
    }

    if(hoods[1] !== 0) {
        outTex += inputTex[1]/hoods[1];
    }

    if(hoods[2] !== 0) {
        outTex += inputTex[2]/hoods[2];
    }

    return outTex;
}

function convertSectors2CSV (){
    sectors = [];
    parseForm2Sectors();
    let sectorsArray = sectors;
    let lines = [];
    lines.push("Length;Hood1;Hood2;Hood3")
    // console.log(sectorsArray)
    for(let sector of sectorsArray) {
        lines.push(sector.length + ";" + sector.hood1 + ";" + sector.hood2 + ";" + sector.hood3);
    }

    let outStr = "";

    for(let line of lines)
        outStr += line + "\n";

    console.log(outStr);
}


function loadSectorsFromCSV(lines) {
    let sectors = [];
    let roving1 = parseInt(document.getElementById("roving1").value);
    let roving2 = parseInt(document.getElementById("roving2").value);
    let roving3 = parseInt(document.getElementById("roving3").value);

    let texIn = [roving1, roving2, roving3];
    for(let line of lines) {
        if(!line.startsWith("Length")) {
            let arr = line.split(";");

            let colors = [];

            let length = parseInt(arr[0]);
            let hood1 = parseInt(arr[1]);
            let hood2 = parseInt(arr[2]);
            let hood3 = parseInt(arr[3]);

            if(hood1 > 0)
                colors.push(document.getElementById("roving1Color").value);
            if(hood2 > 0)
                colors.push(document.getElementById("roving2Color").value);
            if(hood3 > 0)
                colors.push(document.getElementById("roving3Color").value);

            let sector = new Sector(texIn, try2getTexFromArray(texIn, [hood1, hood2, hood3]), length, hood1, hood2, hood3, colors);
            sectors.push(sector);
            if(addHTMLLines)
                addSector(length, 0, hood1, hood2, hood3, colors);
        }
    }

    return sectors;
}

function handleFileSelect(evt) {

    let files = evt.target.files; // FileList object
    let f = files[0];
    let out = "";

    let reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            out += e.target.result;
        };
    })(f);

    reader.onloadend = function () {
        let temp = out.split("\n");
        if(temp.length < 400)
            lastSectors = loadSectorsFromCSV(temp);
        else
            openWarnDialog("В файле более 400 строк. Возможно падение производительности! <br> Хотите отображать все сектора?")
                .then((v) => {
                    addHTMLLines = true;
                    lastSectors = loadSectorsFromCSV(temp)
                })
                .catch(v =>{
                    addHTMLLines = false;
                    lastSectors = loadSectorsFromCSV(temp);
                });
        console.log(lastSectors);
    };

    // Read in the image file as a data URL.
    reader.readAsText(f);

}

function computeColorsBetween(sectors, currC = 0, ignoreWarn = false) {

    let nSectors = [];
    let mixC = parseFloat(document.getElementById("mixCount").value);
    let mixLengthP = parseFloat(document.getElementById("mixLength").value);


    // if(!ignoreWarn && mixC * sectors.length > sectors.length * 2) {
    //     //openWarnColorsDialog("Выбранный шаг градации цветов может привести к падению производительности. <br> Вы можете продолжить или отменить операцию.", sectors, currC);
    //     return;
    // }

    for (let i = 1; i < sectors.length; i++) {

        let prevSector = sectors[i-1];
        let currSector = sectors[i];

        let newSectorLength = mixLengthP / mixC;

        if(currC === 0) {
            prevSector.length = prevSector.length - mixLengthP;
            currSector.length = currSector.length - mixLengthP;
        }

        let newSectorColors = [];

        for (let c = 0; c < Math.min(prevSector.colors.length, currSector.colors.length); c++) {
            newSectorColors.push(getAverageColor2(prevSector.colors[c], currSector.colors[c]))
        }

        let newSector = new Sector(prevSector.texIn, prevSector.tex, newSectorLength, prevSector.hood1, prevSector.hood2, prevSector.hood3, newSectorColors);
        nSectors.push(prevSector);
        nSectors.push(newSector);

    }

    nSectors.push(sectors[sectors.length-1]);
    console.log("CurrC: " + currC);
    console.log("MixC: " + mixC);
    return currC >= mixC ? nSectors : computeColorsBetween(nSectors, currC + 1, ignoreWarn);
}