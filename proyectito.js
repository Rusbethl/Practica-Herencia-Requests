
class Persona{

    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(valor){
        this._nombre = valor;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(valor){
        this._apellido = valor;
    }

    get edad(){
        return this._edad;
    }

    set edad(valor){
        this._edad = valor;
    }
}

class Alumnos extends Persona{

    static matricula = 0; 

    constructor(nombre,apellido,grado,carrera,turno){
        super(nombre,apellido);
        this._matricula = ++Alumnos.matricula;
        this._grado = grado;
        this._carrera = carrera;
        this._turno = turno;
    }

    get matricula(){
        return this._matricula;
    }

    get grado(){
        return this._grado;
    }
        
    set grado(valor){
        this._grado = valor;
    }

    get carrera(){
        return this._carrera;
    }

    set carrera(valor){
        this._carrera = valor;
    }
    get turno(){
        return this._turno;
    }

    set turno(valor){
        this._turno = valor;
    }



}
