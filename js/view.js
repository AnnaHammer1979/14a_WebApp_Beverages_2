
/* View */

/* View ****
Einlesen Daten von Webseite 
Check Input
Btn. Trigger 
update Bilder
update Txt
*/

/* Trigger Btn */
let btn = gui.dom.btn 
btn.addEventListener("click", actOnClick)

/* Trigger Input */
var field = gui.dom.field
field.addEventListener("input", isInputValid)

/* Click (Event) - Dispatcher */
function actOnClick() {
    if (isInputValid()) {
        control(); // nur dann, wenn Input gültig!
    }
    else{
        ausgabe("input nix gut!");
    }
}

//Funktionalität: Check auf Datenkonsistenz  --> Test:
//ausgabe(isInputValid());
function isInputValid() { // Frage: Is input valid?
    let inputStr = gui.dom.field.value; // verweis auf obj
    let patt = /^[0-9]?[0-9]?[0-9]$/g;  //max 3 Ziffern zugelassen
    let cond = patt.test(inputStr);
    if (!cond) {
        gui.dom.field.value = "";
        updateImg(["tee"]);
    } 
    return cond;
}

//Modul: Eingabe aus Formular --> Test:
//getInput();
function getInput() {
    return parseInt(gui.dom.field.value); ;
}

//Modul: Bilder austauschen --> Test:
//ausgabe(updateImg(["milch","saft"]));
function updateImg(imgArr) {

    // Wrapper-DIV
    let imgWrapper = document.getElementById("imgWrapper");

    // 1. ggf. child-Elemente löschen
    while (imgWrapper.children.length > 0) {
        imgWrapper.removeChild(imgWrapper.children[0]);
    }

    // 2. img-Elemente erzeugen & als Child in Wrapper einhängen
    for (var i = 0; i < imgArr.length; i++) {
        let tmpElement = document.createElement("img");
        let tmpAttr = document.createAttribute("src");
        tmpAttr.value = gui.img.path + imgArr[i] + gui.img.ext;
        tmpElement.setAttributeNode(tmpAttr);
        imgWrapper.appendChild(tmpElement);
    }

    return "bilder update OK!"; 
}

//Modul: Txt update --> Test:
//updateTxt(["bier,cola"])
function updateTxt(strArr) {
    let str = "Dein(e) Getränk(e): ";
    for (let i = 0; i < strArr.length; i++) {
        str += strArr[i].toUpperCase();
        if (i<strArr.length - 1){str += ", ";}
    }
    gui.dom.txt.innerText  = str; //--> DOM
    return "txt update OK!";
}


//Modul: Konsolenausgabe --> Test:
//ausgabe("test");
function ausgabe(outputStr) {
    console.log(outputStr);
}