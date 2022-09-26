var resU = false
var resD = false
var resT = false
var resC = false
var resCi = false

var miStorage = window.localStorage;

if (miStorage.getItem("aciActU")) {
    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActU")+"/5"
    document.getElementById("total").innerHTML = miStorage.getItem("intActU")
} else {
    document.getElementById("aciertos").innerHTML = "0/5"
    document.getElementById("total").innerHTML = "0"
}

function validar() {
    if (resU == true && resD == true && resT == true && resC == true && resCi == true) {
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

function revisarRespuesta() {
    let cont = 0
    let intentos = 0

    if (document.getElementById("resU").value == "Air pollution") {
        cont++
        document.getElementById("divU").style.outline = "5px solid green"
    } else {
        document.getElementById("divU").style.outline = "5px solid red"
    }
    if (document.getElementById("resD").value == "Water pollution") {
        cont++
        document.getElementById("divD").style.outline = "5px solid green"
    }
    else {
        document.getElementById("divD").style.outline = "5px solid red"
    }
    if (document.getElementById("resT").value == "Soil pollution") {
        cont++
        document.getElementById("divT").style.outline = "5px solid green"
    } else {
        document.getElementById("divT").style.outline = "5px solid red"
    }
    if (document.getElementById("resC").value == "Deforestation") {
        cont++
        document.getElementById("divC").style.outline = "5px solid green"
    } else {
        document.getElementById("divC").style.outline = "5px solid red"
    }
    if (document.getElementById("resCi").value == "Illegal mining") {
        cont++
        document.getElementById("divCi").style.outline = "5px solid green"
    } else {
        document.getElementById("divCi").style.outline = "5px solid red"
    }
    
    if (miStorage.getItem("aciActU")) {
        if (Number(miStorage.getItem("aciActU")) < 5) {
            if(cont>Number(miStorage.getItem("aciActU"))){
                miStorage.setItem("aciActU",cont)
            }
            intentos = Number(miStorage.getItem("intActU")) + 1
            miStorage.setItem("intActU", intentos)
        }
    } else {
        intentos = 1
        miStorage.setItem("intActU", intentos)
        miStorage.setItem("aciActU", cont)
    }

    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActU")+"/5"
    document.getElementById("total").innerHTML = miStorage.getItem("intActU")

    if (cont == 5) {
        alert("CONGRATULATIONS, YOU DID WELL")
    } else {
        alert("CORRECT THE RED ONES")
    }

}

