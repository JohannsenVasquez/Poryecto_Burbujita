function Persona(){
    this.nombre="";
    this.apellidos="";
    this.direccion="";
    this.telefono="";
    this.dni="";

    this.setNombre = function(nombre){
        this.nombre = nombre;
    }
    this.getNombres = function(){
        return this.nombre;
    }

    this.setApellidos = function(apellidos){
        this.apellidos = apellidos;
    }
    this.getApellidos = function(){
        return this.apellidos;
    }

    this.setDireccion = function(direccion){
        this.direccion = direccion;
    }
    this.getDireccion = function(){
        return this.direccion;
    }

    this.setTelefono = function(telefono){
        this.nombre = telefono;
    }
    this.getTelefono = function(){
        return this.telefono;
    }

    this.setDni = function(dni){
        this.dni = dni;
    }
    this.getDni = function(){
        return this.dni;
    }

}
