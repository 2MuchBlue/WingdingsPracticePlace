// ===== Canvas Constants =====
const sentanceCanvasElement = document.getElementById('sentanceCanvas');
const sencCtx = sentanceCanvasElement.getContext('2d');

const charCanvasElement = document.getElementById('charCanvas');
const charCtx = charCanvasElement.getContext('2d');

const charInElement = document.getElementById("charIn");
const charScoreElement = document.getElementById("charScore"); let charScore = 0;

const transInElement = document.getElementById("transIn");
const transScoreElement = document.getElementById("transScore"); let transScore = 0;

const deg2rad = Math.PI / 180;
const rad2deg = 180 / Math.PI;

const sentanceLength = 16;

charInElement.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        submitChar();
    }
});

transInElement.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        submitSentance();
    }
});

function drawImg( region, x, y, w = -1, h = -1, context = charCtx ){
    if(w = -1) {
        w = region.w;
    }

    if(h = -1) {
        h = region.h;
    }

    context.drawImage(Sheet, region.x, region.y, region.w, region.h, x + region.offsetX, y + region.offsetY, w, h);
}

let currentChar = "J";
let currentSentance = "DARKER YET DARKER"
function rollCharacter(){
    let charIndex = Math.floor(Math.random() * 25.0);
    currentChar = NumToLetter[charIndex];
    drawImg(WingdingChars[NumToLetter[charIndex]], 0, 0, 16, 16, charCtx);
}

function rollSentance(){
    sencCtx.clearRect(0, 0, 256, 64);
    currentSentance = Sentances[Math.floor(Math.random() * Sentances.length)].toUpperCase();
    drawSentance(currentSentance);
}

function submitChar(){
    if ((charInElement.value.trim()).toUpperCase() === currentChar) {
        console.log("wahoo! You got it!");
        charScore += 1;
        rollCharacter();
    }else{
        console.log("Sorry, Incorect");
        charScore -= 1;
    }
    charInElement.value = "";
    charScoreElement.innerHTML = `score: ${charScore}`;
}

function submitSentance(){
    let inputSentance = transInElement.value.toUpperCase();
    let didError = false;
    for(let i = 0; i < inputSentance.length; i++ ){
        let xIndex = i % sentanceLength;
        let yIndex = Math.floor(i / sentanceLength);
        if(inputSentance[i] === currentSentance[i]){
            sencCtx.fillStyle = "#11ff3355";
        }else{
            sencCtx.fillStyle = "#ff351154";
            didError = true;
        }
        sencCtx.fillRect(xIndex * 16, yIndex * 16, 16, 16);
    }
    
    if(didError){
        transScore -= 1;
    }else{
        transScore += 1;
        rollSentance();
        transInElement.value = "";
        sentanceCanvasElement.offsetHeight; // re calcs all css on this element
    }

    transScoreElement.innerHTML = `score: ${transScore}`;
}

function drawTextChar(character, textIndex = 0, context = charCtx){
    let xIndex = textIndex % sentanceLength;
    let yIndex = Math.floor(textIndex / sentanceLength);
    drawImg(WingdingChars[character], xIndex * 16, yIndex * 16, 16, 16, context);
}

function drawSentance(sentance){
    let localSence = sentance.toUpperCase();
    for(let i = 0; i < sentance.length; i++ ){
        drawTextChar(localSence[i], i, sencCtx);
    }
}

Sheet.addEventListener("load", () => {
    rollCharacter();
    rollSentance();
})