var resU = false
var resD = false
var resT = false
var resC = false
var resCi = false
var resS = false
var resSi = false

var miStorage = window.localStorage;

if (miStorage.getItem("aciActSi")) {
    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActSi")+"/7"
    document.getElementById("total").innerHTML = miStorage.getItem("intActSi")
} else {
    document.getElementById("aciertos").innerHTML = "0/7"
    document.getElementById("total").innerHTML = "0"
}

function validar() {
    if (resU == true && resD == true && resT == true && resC == true && resCi == true && resS== true && resSi == true) {
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

    if (document.getElementById("act-a").value == "Habitat") {
        cont++
        document.getElementById("act-a").style.outline = "5px solid green"
    } else {
        document.getElementById("act-a").style.outline = "5px solid red"
    }
    if (document.getElementById("act-b").value == "Symbiotic") {
        cont++
        document.getElementById("act-b").style.outline = "5px solid green"
    }
    else {
        document.getElementById("act-b").style.outline = "5px solid red"
    }
    if (document.getElementById("act-c").value == "Deforestation") {
        cont++
        document.getElementById("act-c").style.outline = "5px solid green"
    } else {
        document.getElementById("act-c").style.outline = "5px solid red"
    }
    if (document.getElementById("act-d").value == "Ecosystem") {
        cont++
        document.getElementById("act-d").style.outline = "5px solid green"
    } else {
        document.getElementById("act-d").style.outline = "5px solid red"
    }
    if (document.getElementById("act-e").value == "Sustainable") {
        cont++
        document.getElementById("act-e").style.outline = "5px solid green"
    } else {
        document.getElementById("act-e").style.outline = "5px solid red"
    }
    if (document.getElementById("act-f").value == "Biodiversity") {
        cont++
        document.getElementById("act-f").style.outline = "5px solid green"
    } else {
        document.getElementById("act-f").style.outline = "5px solid red"
    }
    if (document.getElementById("act-g").value == "CO2") {
        cont++
        document.getElementById("act-g").style.outline = "5px solid green"
    } else {
        document.getElementById("act-g").style.outline = "5px solid red"
    }
    
    if (miStorage.getItem("aciActSi")) {
        if (Number(miStorage.getItem("aciActSi")) < 7) {
            if(cont>Number(miStorage.getItem("aciActSi"))){
                miStorage.setItem("aciActSi",cont)
            }  
            intentos = Number(miStorage.getItem("intActSi")) + 1
            miStorage.setItem("intActSi", intentos)
        }
    } else {
        intentos = 1
        miStorage.setItem("intActSi", intentos)
        miStorage.setItem("aciActSi", cont)
    }

    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActSi")+"/7"
    document.getElementById("total").innerHTML = miStorage.getItem("intActSi")

    if (cont == 7) {
        alert("CONGRATULATIONS, YOU DID WELL")
    } else {
        alert("CORRECT THE RED ONES")
    }

}