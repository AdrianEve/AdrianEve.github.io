function validar(form){

    //validar nombre
    
    let nombre = form.nombre.value.trim()

    if(nombre==""){
        alert("Por favor, Ingrese su nombre");
        return false;
    }

    let edad=form.edad.value.trim()

    if(edad==="" || isNaN(edad) || edad<0){
        alert("Por favor, ingrese una edad valida");
        return false;
    }

    let sexo=form.sexo.value
    if(sexo==""){
        alert("Por favor seleccione un sexo");
        return false;
    }
    
    let deporte = form.Deporte.value
    if(deporte==="Ninguno"){
        alert("Por favor seleccion un Deporte");
        return false;
    }

    //si todo es valido

    return true;

}