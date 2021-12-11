let dotArray = [];
let footer = [];
let footers = [];
let middle = [];
let middle2 = [];
let head = [];

function setup() {
    w = 1920*3;
    h = 1080*3;
    let sx = w;
    let sy = h+30;
    let lastSx = sx;
    let fx = 0;
    let fy = 40;
    createCanvas(w, h);
    let tempBool = false;


    console.log("-------------------------------------------")
    console.log("setup()")
    console.log("Width: " + w);
    console.log("Height: " + h);
    partsCount();


    // console.log("Height: " + h);

    // addHead(100, 170, 0);
    for (let y = 0; y < 90; y++) {
        for (let i = 0; i < 40; i++) {
            addMiddle(sx, sy, 0, true, middle);
            // if(tempBool)
            sx -= 90;
        }
        lastSx = sx;
        // sx = w-65;
        // for (let i = 0; i < 20; i++) {
        //     addMiddle(sx, sy, 0, true, middle2);
        //     sx -= 120;
        //     // tempBool = !tempBool;
        // }
        sy -= 40;
        sx = w;
    }
    console.log("Last sx: " + lastSx)
    console.log("Real last sx pos: " + (w - lastSx))
    console.log("Computed last sx pos: " + (90*40))

    console.log("-------------------------------------------")

    // for (let i = 0; i < 90; i++) {
    //     for (let y = 0; y < 50; y++) {
    //         // addFooter(fx, fy, 0);
    //         fx += 240;
    //     }
    //
    //     switch (tempBool) {
    //         case 0:
    //             fx = -0;
    //             break;
    //         case 1:
    //             fx = -60;
    //             break;
    //         case 2:
    //             fx = -120;
    //             break;
    //         case 3:
    //             fx = -180;
    //             break;
    //
    //         default:
    //             fx = -240;
    //             tempBool = 0;
    //             break;
    //     }
    //
    //     fy += 50;
    //
    //     tempBool++;
    //
    // }

    // addFooter(0, 190, 0);
    // addFooter(240, 190, 0);

}

function partsCount() {

    addHead(0, 0, 0);
    addMiddle(0, 0, 0);
    addFooter(0, 0, 0);
    addFooter2(0, 0, 0);


    console.log("Points count(starts count): ")
    console.log("\t- head: " + head.length + "(" + 1 + ")");
    console.log("\t- middle: " + middle.length + "(" + 2 + ")");
    console.log("\t- footer: " + footer.length);
    console.log("\t- footer2: " + footers.length);

    head = [];
    middle = [];
    middle2 = [];
    footer = [];
    footers = [];

}

function draw() {
    background(200);
    noFill();
    // drawGrid(15, 90, 0.5);

    // drawGrid(30, "#ff0000", 0.2);

    // drawGrid(60, "#0000ff", 0.3);
    let m = 1278; // 4
    let m2 = (m * 2) + (m/2)

    let h = 99;

    let colors = [
        {
            defaultColor: "#00192c",
            lightenColor: "#ffffff",
            darkerColor: "#ffffff",
            scale: 1.4,
            max: m/4
        },
        {
            defaultColor: "#ffffff",
            lightenColor: "#262626",
            darkerColor: "#262626",
            scale: 1.2,
            max: m * 4 - (m/4)
        },
        {
            defaultColor: "#00192c",
            lightenColor: "#ffffff",
            darkerColor: "#ffffff",
            scale: 1.4,
            max: m * 7 + (m/4)
        },
        {
            defaultColor: "#ffffff",
            lightenColor: "#ffffff",
            darkerColor: "#ffffff",
            scale: 1.2,
            max: m*5 + m/2+5
        },
        {
            defaultColor: "#ffffff",
            lightenColor: "#262626",
            darkerColor: "#262626",
            scale: 1.1,
            max: (m*11) - m/4+20
        },
        {
            defaultColor: "#ffffff",
            lightenColor: "#ffffff",
            darkerColor: "#ffffff",
            scale: 1.1,
            max: m*12 - m/2+20
        },
        {
            defaultColor: "#882b2b",
            lightenColor: "#ffffff",
            darkerColor: "#ffffff",
            scale: 1.1,
            max:  m*14+30
        },
        {
            defaultColor: "#ffffff",
            lightenColor: "#262626",
            darkerColor: "#262626",
            scale: 1.1,
            max: m*28
        },
        {
            defaultColor: "#ffffff",
            lightenColor: "#ffffff",
            darkerColor: "#ffffff",
            scale: 1.1,
            max: m*29
        },
        {
            defaultColor: "#361f1f",
            lightenColor: "#ffffff",
            darkerColor: "#ffffff",
            scale: 1.1,
            max: m*30
        },
        {
            defaultColor: "#850000",
            lightenColor: "#262626",
            darkerColor: "#262626",
            scale: 1.1,
            max: m*31
        },
        {
            defaultColor: "#ffffff",
            lightenColor: "#ffffff",
            darkerColor: "#ffffff",
            scale: 1.1,
            max: m*32
        }
    ]


    // 10 к
    // 3 б
    // 21 с
    // 9 б
    // 3 с
    // 8 б

    drawArray(middle, 0, true, colors);
    // drawArray(footers, 1, [500, 590, 990, 1390, 40000], true, colors);
    // drawArray(head, 0, [h*20, h*40, h*56.5, h*100, h*120, h*124, h*218], true, colors);
    // drawArray(middle2, 0, [m, m*2, m*3, m*4, m*5, m*6, m*7, m*8], true, colors);



    // for(let i = 0; i < footer.length; i++) {
    //     if(footer[i].start) {
    //         beginShape();
    //         if(footer[i].opacity === 0)
    //             stroke(0);
    //         else
    //             stroke("#ff0000");
    //
    //     }
    //     strokeWeight(5);
    //     // point(footer[i].xPos, footer[i].yPos);
    //
    //     strokeWeight(13);
    //
    //     // if(!dotArray[i].start && !dotArray[i].end) {
    //     //     currLen += Math.sqrt((Math.pow(dotArray[i-1].xPos - dotArray[i].xPos, 2)) + Math.pow(dotArray[i-1].yPos - dotArray[i].yPos, 2));
    //     // }
    //
    //     //strokeWeight(0.2 * sectors[currSector].tex*currentScale);
    //     curveVertex(footer[i].xPos, footer[i].yPos, footer[i].zPos);
    //
    //     if(footer[i].end) {
    //         endShape();
    //
    //
    //     }
    //
    // }

    noLoop();
}

function drawArray(array= [], mode = 0, outline = false, colors = [{defaultColor: "#ffffff", lightenColor: "", darkerColor: ""}]) {
    let c = 0, n = 0, color = "#000000";
    let tex = 20;
    // if(outline){
    //     for(let i = 0; i < array.length; i++) {
    //         if(array[i].start) {
    //             beginShape();
    //             stroke(0);
    //         }
    //         strokeWeight(tex + 3);
    //         curveVertex(array[i].xPos + 2, array[i].yPos+5, array[i].zPos);
    //         if(array[i].end) {
    //             endShape();
    //         }
    //
    //     }
    // }

    for(let i = 0; i < array.length; i++) {

        if(array[i].start) {
            let tempI = i;

            if(outline) {
                while (tempI < array.length) {
                    if(array[tempI].start){
                        beginShape();
                        if(colors[c].defaultColor !== "#00192c")
                            stroke("#000");
                        else
                            stroke("#fff");

                    }
                    strokeWeight(tex * colors[c].scale + 4);
                    curveVertex(array[tempI].xPos, array[tempI].yPos, array[tempI].zPos);
                    if(array[tempI].end) {
                        // console.log("End" + tempI)
                        endShape();

                        break;
                    }
                    tempI++;
                }

            }


            beginShape();
            strokeWeight(tex * colors[c].scale);

            if(i < colors[c].max) {
                color = colors[c].defaultColor;
                if(mode === 1)
                    color = getAverageColor2(color, colors[c].lightenColor);
                else if(mode === 2)
                    color = getAverageColor2(color, colors[c].darkerColor);
            } if(i > colors[colors.length-1]) {
                c = 0;
            } if(i > colors[c].max && c < colors.length-1)
                c++;

            // let color;




            stroke(color);


        }

        // strokeWeight(tex);
        curveVertex(array[i].xPos, array[i].yPos, array[i].zPos);

        if(array[i].end) {
            endShape();
        }

    }
}

function add(x0, y0, z, l = false, array = middle2) {
    addMiddle(x0, y0, z, l, array);
    addHead(x0, y0-5, z);
    addFooter2(x0, y0-100, z);
}

function addMiddle(x0, y0, z, l = false, middleArr = middle) {
    middleArr.push({
        xPos: l ? 5 + x0 : 10 + x0,
        yPos: 0 + y0,
        zPos: z - 40,
        start: true
    });

    middleArr.push({
        xPos: l ? 10 + x0 : 20 + x0,
        yPos: -30 + y0,
        zPos: z - 40
    });

    middleArr.push({
        xPos: l ? 35 + x0 : 23 + x0,
        yPos: -65 + y0,
        zPos: z + 7
    });

    middleArr.push({
        xPos: l ? 30 + x0 : 25 + x0,
        yPos: -65 + y0,
        zPos: z + 7,
        end: true
    });

    middleArr.push({
        xPos: l ? -30 + x0 : -25 + x0,
        yPos: -55 + y0,
        zPos: z + 7,
        start: true
    }); // 5

    middleArr.push({
        xPos: l ? -35 + x0 : -23 + x0,
        yPos: -65 + y0,
        zPos: z + 7
    }); // 4.5

    middleArr.push({
        xPos: l ? -10 + x0 : -20 + x0,
        yPos: -30 + y0,
        zPos: z - 40
    }); // 4 point

    middleArr.push({
        xPos: l ? -10 + x0 : -10 + x0,
        yPos: 0 + y0,
        zPos: z - 40,
        end: true
    }); // 4 point
}

function addHead (x0, y0, z) {
    head.push({
        xPos: 40 + x0,
        yPos: -45 + y0,
        zPos: z + 7,
        opacity: 0,
        start: true
    }); // 10

    head.push({
        xPos: 25 + x0,
        yPos: -80 + y0,
        zPos: z + 7,
        opacity: 0
    }); //9

    head.push({
        xPos: 0 + x0,
        yPos: -90 + y0,
        zPos: z + 1,
        opacity: 0
    }); // center

    head.push({
        xPos: -25 + x0,
        yPos: -80 + y0,
        zPos: z + 7,
        opacity: 0
    }); // 7

    head.push({
        xPos: -40 + x0,
        yPos: -50 + y0,
        zPos: z + 7,
        opacity: 0,
        end: true
    }); // 6
}

function addFooter2(x0, y0, z) {
    footers.push({
        xPos: 60 + x0,
        yPos: 20 + y0,
        zPos: z + 20,
        start: true
    });

    footers.push({
        xPos: 73 + x0,
        yPos: 15 + y0,
        zPos: z + 20
    });

    footers.push({
        xPos: 15 + x0,
        yPos: 20 + y0,
        zPos: z - 40
    });

    footers.push({
        xPos: 15 + x0,
        yPos: 9 + y0,
        zPos: z - 40
    });

    footers.push({
        xPos: 5 + x0,
        yPos: 4 + y0,
        zPos: z - 40,
        end: true
    });

    footers.push({
        xPos: -30 + x0,
        yPos: -24 + y0,
        zPos: z - 40,
        start: true
    }); // 3 point

    footers.push({
        xPos: -15 + x0,
        yPos: 10 + y0,
        zPos: z - 40
    }); // 4 point

    footers.push({
        xPos: -15 + x0,
        yPos: 20 + y0,
        zPos: z - 40
    }); // 4 point

    footers.push({
        xPos: -73 + x0,
        yPos: 15 + y0,
        zPos: z + 20,
    }); // 2 point

    footers.push({
        xPos: -100 + x0,
        yPos: 20 + y0,
        zPos: z + 20,
        end: true
    }); // 1 point - not visible
}

function addFooter(x0, y0, z) {
    footer.push({
        xPos: 11+x0,
        yPos: 14+y0,
        zPos: z,
        start: true
    });
    footer.push({
        xPos: 40+x0,
        yPos: 14+y0,
        zPos: z,
    });
    footer.push({
        xPos: 90+x0,
        yPos: 3+y0,
        zPos: z,
    });
    footer.push({
        xPos: 85+x0,
        yPos: 14+y0,
        zPos: z,
    });
    footer.push({
        xPos: 85+x0,
        yPos: 15+y0,
        zPos: z,
    });

    footer.push({
        xPos: 85+x0,
        yPos: 15+y0,
        zPos: z,
    });
    footer.push({
        xPos: 85+x0,
        yPos: 15+y0,
        zPos: z,
        end:true
    });

    footer.push({
        xPos: 110+x0,
        yPos: 15+y0,
        zPos: z,
        start:true
    });

    footer.push({
        xPos: 118+x0,
        yPos: 15+y0,
        zPos: z,
    });

    footer.push({
        xPos: 118+x0,
        yPos: 15+y0,
        zPos: z,
    });
    footer.push({
        xPos: 180+x0,
        yPos: 30+y0,
        zPos: z,
    });
    footer.push({
        xPos: 226+x0,
        yPos: 16+y0,
        zPos: z,
    });
    footer.push({
        xPos: 226+x0,
        yPos: 16+y0,
        zPos: z,
        end:true
    });


    // footer.push({
    //     xPos: -50 + x0,
    //     yPos: 20 + y0,
    //     zPos: z + 20,
    //
    // });
    // footer.push({
    //     xPos: -50 + x0,
    //     yPos: 20 + y0,
    //     zPos: z + 20,
    //
    // });
}
function addPlush (x0, y0, z) {
    y0 += 8;
    dotArray.push({
        xPos: 60 + x0,
        yPos: 20 + y0,
        zPos: z + 20,
        start: true
    });

    dotArray.push({
        xPos: 30 + x0,
        yPos: 20 + y0,
        zPos: z + 20
    });

    dotArray.push({
        xPos: 10 + x0,
        yPos: 20 + y0,
        zPos: z - 40
    });

    dotArray.push({
        xPos: 9 + x0,
        yPos: 9 + y0,
        zPos: z - 40
    });

    dotArray.push({
        xPos: 10 + x0,
        yPos: 0 + y0,
        zPos: z - 40,
        end: true
    });

    dotArray.push({
        xPos: 10 + x0,
        yPos: 0 + y0,
        zPos: z - 40,
        start: true
    });

    dotArray.push({
        xPos: 10 + x0,
        yPos: 0 + y0,
        zPos: z - 40
    });

    dotArray.push({
        xPos: 25 + x0,
        yPos: -67 + y0+ 40,
        zPos: z + 7
    });

    dotArray.push({
        xPos: 25 + x0,
        yPos: -65 + y0+ 40,
        zPos: z + 7,
        end: true
    });

    dotArray.push({
        xPos: 40 + x0,
        yPos: -45 + y0 + 40,
        zPos: z + 7,
        opacity: 1,
        start: true
    }); // 10

    dotArray.push({
        xPos: 25 + x0,
        yPos: -73 + y0+ 40,
        zPos: z + 7,
        opacity: 1
    }); //9

    dotArray.push({
        xPos: 0 + x0,
        yPos: -89 + y0+ 40,
        zPos: z + 1,
        opacity: 1
    }); // center

    dotArray.push({
        xPos: -25 + x0,
        yPos: -73 + y0+ 40,
        zPos: z + 7,
        opacity: 1
    }); // 7

    dotArray.push({
        xPos: -40 + x0,
        yPos: -45 + y0+ 40,
        zPos: z + 7,
        opacity: 1,
        end: true
    }); // 6

    dotArray.push({
        xPos: -25 + x0,
        yPos: -65 + y0 + 40,
        zPos: z + 7,
        start: true
    }); // 5

    dotArray.push({
        xPos: -28 + x0,
        yPos: -67 + y0 + 40,
        zPos: z + 7
    }); // 4.5

    dotArray.push({
        xPos: -10 + x0,
        yPos: 0 + y0,
        zPos: z - 40
    }); // 4 point

    dotArray.push({
        xPos: -10 + x0,
        yPos: 0 + y0,
        zPos: z - 40,
        end: true
    }); // 4 point

    dotArray.push({
        xPos: -10 + x0,
        yPos: 20 + y0,
        zPos: z - 40,
        start: true
    }); // 3 point

    dotArray.push({
        xPos: -9 + x0,
        yPos: 9 + y0,
        zPos: z - 40
    }); // 4 point

    dotArray.push({
        xPos: -10 + x0,
        yPos: 20 + y0,
        zPos: z - 40
    }); // 4 point

    dotArray.push({
        xPos: -30 + x0,
        yPos: 20 + y0,
        zPos: z + 20,
    }); // 2 point

    dotArray.push({
        xPos: -50 + x0,
        yPos: 20 + y0,
        zPos: z + 20,
        end: true
    }); // 1 point - not visible

}

function drawGrid(step, color = 10, w = 0.5) {
    beginShape();
    stroke(color);
    strokeWeight(w)
    for (let i = 0; i < (height*2)/step; i++) {
        let y = i * step;
        line(0, y, width, y);
    }

    for (let i = 0; i < (width*2)/step; i++) {
        let x = i * step;
        line(x, 0, x, height);
    }

    endShape();
}

let start = true;
let end = false;

function mouseClicked() {
    //
    // console.log(mouseButton)
    //
    //
    //
    // if(start) {
    //     dotArray.push({
    //         xPos: mouseX,
    //         yPos: mouseY,
    //         start: true
    //     });
    // } else if(end){
    //     dotArray.push({
    //         xPos: mouseX,
    //         yPos: mouseY,
    //         end: true
    //     });
    // } else
    //     dotArray.push({
    //         xPos: mouseX,
    //         yPos: mouseY
    //     });
    // if(start || end) {
    //     start = false
    //     end = false
    // }
    //
    // console.log("---------------------------------------------------------------")
    //     console.log({
    //         xPos: mouseX,
    //         yPos: mouseY
    //     })
    //
    // // for(let t of dotArray)
    // //     console.log(t);
}

function keyPressed() {
    console.log(keyCode)
    switch (keyCode) {
        case 13:
            start = true;
            break;
        case 16:
            end = true;
            break;
    }
    return true;
}