// Variables
let arrayFraseFormada = [];

// Selectors
let inpTxt = document.querySelector("#inpTxt");
let button = document.querySelector("#encriptBtn");
let textUl = document.querySelector("#textUl");

// Functions

//Clear Text Input
document.addEventListener("load", clearIntTxt())
function clearIntTxt(){
    inpTxt.value = "";
}

// Detected pressed key, convert and send it to array
document.addEventListener('keydown', keyPressed);
function keyPressed(e){
    let eeP = e.code;    

    switch(eeP){
        case "KeyA": arrayFraseFormada.push("d"); 
        break;
        case "KeyB": arrayFraseFormada.push("e");
        break;
        case "KeyC": arrayFraseFormada.push("f");
        break;
        case "KeyD": arrayFraseFormada.push("g");
        break;
        case "KeyE": arrayFraseFormada.push("h");
        break;
        case "KeyF": arrayFraseFormada.push("i");
        break;
        case "KeyG": arrayFraseFormada.push("j");
        break;
        case "KeyH": arrayFraseFormada.push("k");
        break;
        case "KeyI": arrayFraseFormada.push("l");
        break;
        case "KeyJ": arrayFraseFormada.push("m");
        break;
        case "KeyK": arrayFraseFormada.push("n");
        break;
        case "KeyL": arrayFraseFormada.push("o");
        break;
        case "KeyM": arrayFraseFormada.push("p");
        break;
        case "KeyN": arrayFraseFormada.push("q");
        break;
        case "KeyO": arrayFraseFormada.push("r");
        break;
        case "KeyP": arrayFraseFormada.push("s");
        break;
        case "KeyQ": arrayFraseFormada.push("t");
        break;
        case "KeyR": arrayFraseFormada.push("u");
        break;
        case "KeyS": arrayFraseFormada.push("v");
        break;
        case "KeyT": arrayFraseFormada.push("w");
        break;
        case "KeyU": arrayFraseFormada.push("x");
        break;
        case "KeyV": arrayFraseFormada.push("y");
        break;
        case "KeyW": arrayFraseFormada.push("z");
        break;
        case "KeyX": arrayFraseFormada.push("a");
        break;
        case "KeyY": arrayFraseFormada.push("b");
        break;
        case "KeyZ": arrayFraseFormada.push("c");
        break;
        case "Space": arrayFraseFormada.push("-");
        break;
        case "Comma": arrayFraseFormada.push(",");
        break;
        case "Backspace": arrayFraseFormada.pop();
        break;
        case "Enter": 
            mostrarfrase(); 
            clearIntTxt();
        break;
    }
}
// Form Phrase
button.addEventListener("click", mostrarfrase);
function mostrarfrase(){
    console.log(arrayFraseFormada.join(""));
    let newLi = document.createElement("li");
    newLi.innerText = arrayFraseFormada.join("");
    textUl.append(newLi);
    arrayFraseFormada = [];
}

// printing keys
document.addEventListener('keydown', keyPressedNow);
function keyPressedNow(e){
    console.log(e.code)
}

// Fazer o desencriptador, percorrendo string da frase formada e fazendo voltar ao normal