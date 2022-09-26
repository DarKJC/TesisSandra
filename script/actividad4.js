var resU = false
var resD = false
var resT = false
var resC = false
var resCi = false
var resS = false
var resSi = false
var resO = false
var resN = false
var resDi = false
var resOn = false
var resDo= false

var miStorage = window.localStorage;

if (miStorage.getItem("aciActC")) {
    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActC")+"/12"
    document.getElementById("total").innerHTML = miStorage.getItem("intActC")
} else {
    document.getElementById("aciertos").innerHTML = "0/12"
    document.getElementById("total").innerHTML = "0"
}

function validar() {
    if (resU == true && resD == true && resT == true && resC == true && resCi == true && resS== true && resSi == true && resO == true && resN == true && resDi == true && resOn == true && resDo == true) {
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

function selO() {
    resO = true
    validar()
}

function selN() {
    resN= true
    validar()
}

function selDi() {
    resDi = true
    validar()
}

function selOn() {
    resOn = true
    validar()
}

function selDo() {
    resDo = true
    validar()
}

function revisarRespuesta() {
    let cont = 0
    let intentos = 0

    if (document.getElementById("act-a").value == "decided") {
        cont++
        document.getElementById("act-a").style.outline = "5px solid green"
    } else {
        document.getElementById("act-a").style.outline = "5px solid red"
    }
    if (document.getElementById("act-b").value == "were") {
        cont++
        document.getElementById("act-b").style.outline = "5px solid green"
    }
    else {
        document.getElementById("act-b").style.outline = "5px solid red"
    }
    if (document.getElementById("act-c").value == "created") {
        cont++
        document.getElementById("act-c").style.outline = "5px solid green"
    } else {
        document.getElementById("act-c").style.outline = "5px solid red"
    }
    if (document.getElementById("act-d").value == "researched") {
        cont++
        document.getElementById("act-d").style.outline = "5px solid green"
    } else {
        document.getElementById("act-d").style.outline = "5px solid red"
    }
    if (document.getElementById("act-e").value == "organized") {
        cont++
        document.getElementById("act-e").style.outline = "5px solid green"
    } else {
        document.getElementById("act-e").style.outline = "5px solid red"
    }
    if (document.getElementById("act-f").value == "talked") {
        cont++
        document.getElementById("act-f").style.outline = "5px solid green"
    } else {
        document.getElementById("act-f").style.outline = "5px solid red"
    }
    if (document.getElementById("act-g").value == "started") {
        cont++
        document.getElementById("act-g").style.outline = "5px solid green"
    } else {
        document.getElementById("act-g").style.outline = "5px solid red"
    }
    if (document.getElementById("act-h").value == "signed") {
        cont++
        document.getElementById("act-h").style.outline = "5px solid green"
    } else {
        document.getElementById("act-h").style.outline = "5px solid red"
    }
    if (document.getElementById("act-i").value == "planted") {
        cont++
        document.getElementById("act-i").style.outline = "5px solid green"
    } else {
        document.getElementById("act-i").style.outline = "5px solid red"
    }
    if (document.getElementById("act-j").value == "are") {
        cont++
        document.getElementById("act-j").style.outline = "5px solid green"
    } else {
        document.getElementById("act-j").style.outline = "5px solid red"
    }
    if (document.getElementById("act-k").value == "have") {
        cont++
        document.getElementById("act-k").style.outline = "5px solid green"
    } else {
        document.getElementById("act-k").style.outline = "5px solid red"
    }
    if (document.getElementById("act-l").value == "does") {
        cont++
        document.getElementById("act-l").style.outline = "5px solid green"
    } else {
        document.getElementById("act-l").style.outline = "5px solid red"
    }
    
    if (miStorage.getItem("aciActC")) {
        if (Number(miStorage.getItem("aciActC")) < 12) {
            if(cont>Number(miStorage.getItem("aciActC"))){
                miStorage.setItem("aciActC",cont)
            }
            intentos = Number(miStorage.getItem("intActC")) + 1
            miStorage.setItem("intActC", intentos)
        }
    } else {
        intentos = 1
        miStorage.setItem("intActC", intentos)
        miStorage.setItem("aciActC", cont)
    }

    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActC")+"/12"
    document.getElementById("total").innerHTML = miStorage.getItem("intActC")

    if (cont == 12) {
        alert("CONGRATULATIONS, YOU DID WELL")
    } else {
        alert("CORRECT THE RED ONES")
    }

}
