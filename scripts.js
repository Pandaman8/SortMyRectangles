var divs = ["#rec0", "#rec1", "#rec2", "#rec3", "#rec4", "#rec5", "#rec6", "#rec7", "#rec8", "#rec9"];

function moveRec(pos, recNum) {
    var rec = document.getElementById("#rec" + recNum.toString());
    var button = document.getElementById("#butt");
    var left = parseInt(rec.style.left);
    //button.innerHTML = rec.style.left;`
    //rec.innerHTML = left;
    rec.style.left = pos.toString() + "px";
}

function getHeight(rec){
    //rec.innerHTML = rec.style.height;
    return parseInt(document.getElementById(rec).style.height);
}

function moveRecL() {
    var rec = document.getElementById("#rec");
    var button = document.getElementById("#butt")
    var left = parseInt(rec.style.left);
    button.innerHTML = rec.style.left;
    left = left - 100;
    rec.innerHTML = left;
    rec.style.left = left.toString() + "px";
}

function setRec(pos, rec, length) {
    var rec = document.getElementById(rec);
    var button = document.getElementById("#butt");
   
    rec.style.top = (400 - length).toString() + "px";
    rec.style.height = length.toString() + "px";
    rec.style.left = pos.toString() + "px";
}

function setPos(pos, rec){
    var rec = document.getElementById(rec);
    var button = document.getElementById("#butt");
   
    rec.style.left = pos.toString() + "px";
}
function initialize(){
    var box = document.getElementById(divs[0]);
    for (var i = 0; i < 10; i++){
        box = document.getElementById(divs[i]);
        setRec(i * 100, divs[i], Math.floor(Math.random() * 290) + 10) ;
    }
}


function sort(rec1, rec2, count){
    console.log("wowowow" + count.toString());
    var swapped = false;
    var recc = rec1;
    var recv = rec2;
    var counts = count;
    if(getHeight(divs[rec1]) > getHeight(divs[rec2])){
        move(rec1, rec2);
        update();
        swapped = true;
    }

    if ( swapped == true){
        counts = 0;
    }
    if(swapped == false){
        counts = counts + 1;
    }
    if(swapped == true || counts < 8){
        recc = rec1 + 1;
        recv = rec2 + 1;
        if (rec1 == 8){
            recc = 0;
            recv = 1;
        }
        setTimeout(function(){sort(recc, recv, counts); }, 500);
    }
}


function move(rec1, rec2){
    var holder = divs[rec1];
    divs[rec1] = divs[rec2];
    divs[rec2] = holder;
}

function update() {
    for(var i = 0; i < 10; i++){
        setPos(i*100, divs[i]);
    }
}