var miStorage = window.localStorage;

cargarNombre()

function cargarNombre(){
    if (miStorage.getItem("nombre")) {
        document.getElementById("loguin").className = "hidden"
        document.getElementById("nombre").className = ""
        document.getElementById("nombre").innerHTML = miStorage.getItem("nombre")
    }
}

function guardar() {
    if(document.getElementById("name").value){
        miStorage.setItem('nombre',document.getElementById("name").value)
        cargarNombre()
    }
}

function activar() {
    if(document.getElementById("name").value!=""){
        document.getElementById("guardar").disabled=false
    }
}