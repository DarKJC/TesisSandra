var resU = false
var resD = false
var resT = false
var resC = false
var resCi = false
var resS = false
var resSi = false
var respU = ""

var miStorage = window.localStorage;

if (miStorage.getItem("aciActCi")) {
    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActCi")+"/7"
    document.getElementById("total").innerHTML = miStorage.getItem("intActCi")
} else {
    document.getElementById("aciertos").innerHTML = "0/7"
    document.getElementById("total").innerHTML = "0"
}

function validar() {
    if (resU == true && resD == true && resT == true && resC == true && resCi == true && resS == true && resSi == true) {
        document.getElementById("respuesta").disabled = false
    }
}

function selU() {
    resU = true
    validar()
}

function selD() {
    resD = true
    validar()
}

function selT() {
    resT = true
    validar()
}

function selC() {
    resC = true
    validar()
}

function selCi() {
    resCi = true
    validar()
}

function selS() {
    resS = true
    validar()
}

function selSi() {
    resSi = true
    validar()
}


function revisarRespuesta() {
    let cont = 0
    let intentos = 0

    if (respU == "b") {
        cont++
        document.getElementById("divU").style.outline = "5px solid green"
    } else {
        document.getElementById("divU").style.outline = "5px solid red"
    }
    if (document.getElementById("resD").value == "Third") {
        cont++
        document.getElementById("resD").style.outline = "5px solid green"
    }
    else {
        document.getElementById("resD").style.outline = "5px solid red"
    }
    if (document.getElementById("resT").value == "First") {
        cont++
        document.getElementById("resT").style.outline = "5px solid green"
    } else {
        document.getElementById("resT").style.outline = "5px solid red"
    }
    if (document.getElementById("resC").value == "Second") {
        cont++
        document.getElementById("resC").style.outline = "5px solid green"
    } else {
        document.getElementById("resC").style.outline = "5px solid red"
    }
    if (document.getElementById("resCi").value == "took photos and some videos") {
        cont++
        document.getElementById("resCi").style.outline = "5px solid green"
    } else {
        document.getElementById("resCi").style.outline = "5px solid red"
    }
    if (document.getElementById("resS").value == "used social media to inform the comunity") {
        cont++
        document.getElementById("resS").style.outline = "5px solid green"
    } else {
        document.getElementById("resS").style.outline = "5px solid red"
    }
    if (document.getElementById("resSi").value == "made a demonstration in the city hall") {
        cont++
        document.getElementById("resSi").style.outline = "5px solid green"
    } else {
        document.getElementById("resSi").style.outline = "5px solid red"
    }
    
    if (miStorage.getItem("aciActCi")) {
        if (Number(miStorage.getItem("aciActCi")) < 7) {
            if(cont>Number(miStorage.getItem("aciActCi"))){
                miStorage.setItem("aciActCi",cont)
            }
            intentos = Number(miStorage.getItem("intActCi")) + 1
            miStorage.setItem("intActCi", intentos)
        }
    } else {
        intentos = 1
        miStorage.setItem("intActCi", intentos)
        miStorage.setItem("aciActCi", cont)
    }

    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActCi")+"/7"
    document.getElementById("total").innerHTML = miStorage.getItem("intActCi")


    if (cont == 7) {
        alert("CONGRATULATIONS, YOU DID WELL")
    } else {
        alert("CORRECT THE RED ONES")
    }

}

function selecciona(){
    respU="a"
    document.getElementById("act-a").style.outline="3px solid yellow"
    document.getElementById("act-b").style.outline=""
    document.getElementById("act-c").style.outline=""
    selU()
}

function seleccionb(){
    respU="b"
    document.getElementById("act-a").style.outline=""
    document.getElementById("act-b").style.outline="3px solid yellow"
    document.getElementById("act-c").style.outline=""
    selU()
}

function seleccionc(){
    respU="c"
    document.getElementById("act-a").style.outline=""
    document.getElementById("act-b").style.outline=""
    document.getElementById("act-c").style.outline="3px solid yellow"
    selU()
}