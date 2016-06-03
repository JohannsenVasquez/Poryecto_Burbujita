 function desplegar(_valor){
    document.getElementById("bgventana").style.visibility= _valor;
    }

function enviar(){
    var nombre =document.getElementById("nombre").value;
    var apellidos =document.getElementById("apellidos").value;
    var direccion =document.getElementById("direccion").value;
    var telefono =document.getElementById("telefono").value;
    var dni =document.getElementById("dni").value;

    if(nombre == ""){
        alert("Por fabor ingrese su nombre");
        return;
    }
    if(apellidos == ""){
        alert("Por fabor ingrese sus apellidos");
        return;
    }
    if(direccion == ""){
        alert("Por fabor ingrese su direccion");
        return;
    }

    if(telefono == ""){
        alert("Por fabor ingrese su telefono");
        return;
    }


   if(telefono != parseInt(telefono)){
        alert("Por fabor ingrese numero para su Telefono");
        return;
    }

    if(dni == ""){
        alert("Por fabor ingrese su dni");
        return;
    }

    if(dni != parseInt(dni)){
        alert("Por fabor ingrese numero para su DNI");
        return;
    }
    document.getElementById("miform").submit();

}
