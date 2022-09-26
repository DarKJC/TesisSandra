var miStorage = window.localStorage;

if (miStorage.getItem("aciActU")) {
    document.getElementById("aciActU").innerHTML = miStorage.getItem("aciActU")+"/5"
    document.getElementById("totActU").innerHTML = miStorage.getItem("intActU")
} else {
    document.getElementById("aciActU").innerHTML = "0/5"
    document.getElementById("totActU").innerHTML = "0"
}

if (miStorage.getItem("aciActD")) {
    document.getElementById("aciActD").innerHTML = miStorage.getItem("aciActD")+"/3"
    document.getElementById("totActD").innerHTML = miStorage.getItem("intActD")
} else {
    document.getElementById("aciActD").innerHTML = "0/3"
    document.getElementById("totActD").innerHTML = "0"
}

if (miStorage.getItem("aciActT")) {
    document.getElementById("aciActT").innerHTML = miStorage.getItem("aciActT")+"/8"
    document.getElementById("totActT").innerHTML = miStorage.getItem("intActT")
} else {
    document.getElementById("aciActT").innerHTML = "0/8"
    document.getElementById("totActT").innerHTML = "0"
}

if (miStorage.getItem("aciActC")) {
    document.getElementById("aciActC").innerHTML = miStorage.getItem("aciActC")+"/12"
    document.getElementById("totActC").innerHTML = miStorage.getItem("intActC")
} else {
    document.getElementById("aciActC").innerHTML = "0/12"
    document.getElementById("totActC").innerHTML = "0"
}

if (miStorage.getItem("aciActCi")) {
    document.getElementById("aciActCi").innerHTML = miStorage.getItem("aciActCi")+"/7"
    document.getElementById("totActCi").innerHTML = miStorage.getItem("intActCi")
} else {
    document.getElementById("aciActCi").innerHTML = "0/7"
    document.getElementById("totActCi").innerHTML = "0"
}

if (miStorage.getItem("aciActS")) {
    document.getElementById("aciActS").innerHTML = miStorage.getItem("aciActS")+"/3"
    document.getElementById("totActS").innerHTML = miStorage.getItem("intActS")
} else {
    document.getElementById("aciActS").innerHTML = "0/3"
    document.getElementById("totActS").innerHTML = "0"
}

if (miStorage.getItem("aciActSi")) {
    document.getElementById("aciActSi").innerHTML = miStorage.getItem("aciActSi")+"/7"
    document.getElementById("totActSi").innerHTML = miStorage.getItem("intActSi")
} else {
    document.getElementById("aciActSi").innerHTML = "0/7"
    document.getElementById("totActSi").innerHTML = "0"
}