var resU = false
var resD = false
var resT = false
var resC = false
var resCi = false
var resS = false
var resSi = false
var resO = false

var miStorage = window.localStorage;

if (miStorage.getItem("aciActT")) {
    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActT")+"/8"
    document.getElementById("total").innerHTML = miStorage.getItem("intActT")
} else {
    document.getElementById("aciertos").innerHTML = "0/8"
    document.getElementById("total").innerHTML = "0"
}

function validar() {
    if (resU == true && resD == true && resT == true && resC == true && resCi == true && resS== true && resSi == true && resO == true) {
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

function revisarRespuesta() {
    let cont = 0
    let intentos = 0

    if (document.getElementById("resU").value == "go on a demonstration") {
        cont++
        document.getElementById("act-a").style.outline = "5px solid green"
    } else {
        document.getElementById("act-a").style.outline = "5px solid red"
    }
    if (document.getElementById("resD").value == "volunteer to plant trees") {
        cont++
        document.getElementById("act-b").style.outline = "5px solid green"
    }
    else {
        document.getElementById("act-b").style.outline = "5px solid red"
    }
    if (document.getElementById("resT").value == "organize and sign a petition") {
        cont++
        document.getElementById("act-c").style.outline = "5px solid green"
    } else {
        document.getElementById("act-c").style.outline = "5px solid red"
    }
    if (document.getElementById("resC").value == "create an environmental newsletter") {
        cont++
        document.getElementById("act-d").style.outline = "5px solid green"
    } else {
        document.getElementById("act-d").style.outline = "5px solid red"
    }
    if (document.getElementById("resCi").value == "organize and sign a petition") {
        cont++
        document.getElementById("act-e").style.outline = "5px solid green"
    } else {
        document.getElementById("act-e").style.outline = "5px solid red"
    }
    if (document.getElementById("resS").value == "volunteer to plant trees") {
        cont++
        document.getElementById("act-f").style.outline = "5px solid green"
    } else {
        document.getElementById("act-f").style.outline = "5px solid red"
    }
    if (document.getElementById("resSi").value == "create an environmental newsletter") {
        cont++
        document.getElementById("act-g").style.outline = "5px solid green"
    } else {
        document.getElementById("act-g").style.outline = "5px solid red"
    }
    if (document.getElementById("resO").value == "go on a demonstration") {
        cont++
        document.getElementById("act-h").style.outline = "5px solid green"
    } else {
        document.getElementById("act-h").style.outline = "5px solid red"
    }
    
    if (miStorage.getItem("aciActT")) {
        if (Number(miStorage.getItem("aciActT")) < 8) {
            if(cont>Number(miStorage.getItem("aciActT"))){
                miStorage.setItem("aciActT",cont)
            }
            intentos = Number(miStorage.getItem("intActT")) + 1
            miStorage.setItem("intActT", intentos)
        }
    } else {
        intentos = 1
        miStorage.setItem("intActT", intentos)
        miStorage.setItem("aciActT", cont)
    }

    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActT")+"/8"
    document.getElementById("total").innerHTML = miStorage.getItem("intActT")


    if (cont == 8) {
        alert("CONGRATULATIONS, YOU DID WELL")
    } else {
        alert("CORRECT THE RED ONES")
    }

}

