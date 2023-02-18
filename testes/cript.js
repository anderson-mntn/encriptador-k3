// Variables
let arrayFraseFormada = [];

// Selectors
let inpTxt = document.querySelector("#inpTxt");
let button = document.querySelector("#encriptBtn");
let textUl = document.querySelector("#textUl");
let btnDescrypt = document.querySelector("#descryptBtn").addEventListener("click", descrypt);


// Functions

//Clear Text Input
inpTxt.value = "";

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
    clearIntTxt();
}

// printing keys
document.addEventListener('keydown', keyPressedNow);
function keyPressedNow(e){
    console.log(e.code);
}

// TODO: Fazer o desencriptador, percorrendo string da frase formada e fazendo voltar ao normal

// ----- Descriptor -----


function descrypt(){
    let inputTxtDescrypt = document.querySelector("#inputTxtDescrypt").value;
    let k = inputTxtDescrypt;
    
    let fraseFinal = k.split(" ");
    fraseFinal.pop(1);

    for(i = 0; i < k.length; i++){
        switch(k[i]){
            case "d": fraseFinal.push("a");
            break;
            case "e": fraseFinal.push("b");
            break;
            case "f": fraseFinal.push("c");
            break;
            case "g": fraseFinal.push("d");
            break;
            case "h": fraseFinal.push("e");
            break;
            case "i": fraseFinal.push("f");
            break;
            case "j": fraseFinal.push("g");
            break;
            case "k": fraseFinal.push("h");
            break;
            case "l": fraseFinal.push("i");
            break;
            case "m": fraseFinal.push("j");
            break;
            case "n": fraseFinal.push("k");
            break;
            case "o": fraseFinal.push("l");
            break;
            case "p": fraseFinal.push("m");
            break;
            case "q": fraseFinal.push("n");
            break;
            case "r": fraseFinal.push("o");
            break;
            case "s": fraseFinal.push("p");
            break;
            case "t": fraseFinal.push("q");
            break;
            case "u": fraseFinal.push("r");
            break;
            case "v": fraseFinal.push("s");
            break;
            case "w": fraseFinal.push("t");
            break;
            case "x": fraseFinal.push("u");
            break;
            case "y": fraseFinal.push("v");
            break;
            case "z": fraseFinal.push("w");
            break;
            case "a": fraseFinal.push("x");
            break;
            case "b": fraseFinal.push("y");
            break;
            case "c": fraseFinal.push("z");
            break;
            case "-": fraseFinal.push(" ");
            break;
            case ",": fraseFinal.push(",");
            break;
        }
    }
    
    console.log(fraseFinal.join(""));
}

// console.log("Frase Descriptada: " + fraseFinal.slice(fraseFinal.length / 2));


