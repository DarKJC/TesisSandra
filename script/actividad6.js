var resU = false
var resD = false
var resT = false

var miStorage = window.localStorage;

if (miStorage.getItem("aciActS")) {
    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActS")+"/3"
    document.getElementById("total").innerHTML = miStorage.getItem("intActS")
} else {
    document.getElementById("aciertos").innerHTML = "0/3"
    document.getElementById("total").innerHTML = "0"
}

function validar() {
    if (resU == true && resD == true && resT == true) {
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


function revisarRespuesta() {
    let cont = 0
    let intentos = 0

    if (document.getElementById("resU").value == "3") {
        cont++
        document.getElementById("resU").style.outline = "5px solid green"
    } else {
        document.getElementById("resU").style.outline = "5px solid red"
    }
    if (document.getElementById("resD").value == "2") {
        cont++
        document.getElementById("resD").style.outline = "5px solid green"
    }
    else {
        document.getElementById("resD").style.outline = "5px solid red"
    }
    if (document.getElementById("resT").value == "1") {
        cont++
        document.getElementById("resT").style.outline = "5px solid green"
    } else {
        document.getElementById("resT").style.outline = "5px solid red"
    }
    
    
    if (miStorage.getItem("aciActS")) {
        if (Number(miStorage.getItem("aciActS")) < 3) {
            if(cont>Number(miStorage.getItem("aciActS"))){
                miStorage.setItem("aciActS",cont)
            }
            intentos = Number(miStorage.getItem("intActS")) + 1
            miStorage.setItem("intActS", intentos)
        }
    } else {
        intentos = 1
        miStorage.setItem("intActS", intentos)
        miStorage.setItem("aciActS", cont)
    }

    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActS")+"/3"
    document.getElementById("total").innerHTML = miStorage.getItem("intActS")

    if (cont == 3) {
        alert("CONGRATULATIONS, YOU DID WELL")
    } else {
        alert("CORRECT THE RED ONES")
    }

}
