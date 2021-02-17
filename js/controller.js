
/* Controller ***
    Ablaufsteuerung 
    Business-Logic (Alter --> Getränk) :: check! 
*/

//Modul: Ablaufsteuerung (control) --> Test:
//control();
function control() {
    // actions:
    let ageNum = getInput();
    let bevObj = checkAge(ageNum);
    let isImgLoaded = updateImg(bevObj.bevArr);
    let isTxtupdated = updateTxt(bevObj.bevArr);

    // monitoring
    ausgabe("Getränke: " + bevObj.bevArr); // Alters-Check
    ausgabe(isImgLoaded); // Img
    ausgabe(isTxtupdated);
}

//Funktionalität: Business-Logic --> Test:
//ausgabe(checkAge(32));
function checkAge(age) {
    switch (true) {
        case age >= data.milk.lower && age <= data.milk.upper:
            return { bevStr: data.milk.bev, bevArr: data.milk.arr };
            break;
        case age >= data.juice.lower && age <= data.juice.upper:
            return { bevStr: data.juice.bev, bevArr: data.juice.arr };
            break;
        case age >= data.cola.lower && age <= data.cola.upper:
            return { bevStr: data.cola.bev, bevArr: data.cola.arr };
            break;
        case age >= data.wine.lower && age <= data.wine.upper:
            return { bevStr: data.wine.bev, bevArr: data.wine.arr };
            break;
        default:
            return { bevStr: data.tea.bev, bevArr: data.tea.arr };
    }
}

