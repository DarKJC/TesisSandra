var resU = false
var resD = false
var resT = false


var miStorage = window.localStorage;

if (miStorage.getItem("aciActD")) {
    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActD")+"/3"
    document.getElementById("total").innerHTML = miStorage.getItem("intActD")
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
    
    if (document.getElementById("resU").value == "Illegal mining") {
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
    if (document.getElementById("resT").value == "Deforestation") {
        cont++
        document.getElementById("divT").style.outline = "5px solid green"
    } else {
        document.getElementById("divT").style.outline = "5px solid red"
    }
  
   
    if (miStorage.getItem("aciActD")) {
        if (Number(miStorage.getItem("aciActD")) < 3) {
            if(Number(cont>miStorage.getItem("aciActD"))){
                miStorage.setItem("aciActD",cont)
            }
            intentos = Number(miStorage.getItem("intActD")) + 1
            miStorage.setItem("intActD", intentos)
        }
    } else {
        intentos = 1
        miStorage.setItem("intActD", intentos)
        miStorage.setItem("aciActD", cont)
    }

    document.getElementById("aciertos").innerHTML = miStorage.getItem("aciActD")+"/3"
    document.getElementById("total").innerHTML = miStorage.getItem("intActD")

    if (cont == 3) {
        alert("CONGRATULATIONS, YOU DID WELL")
    } else {
        alert("CORRECT THE RED ONES")
    }

}

