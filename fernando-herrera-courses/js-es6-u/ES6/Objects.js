//EXTENCIONES DE LOS OBJETOS LITERALES
//Los Objetos en ES6
//Ha recibido muchas mejoras, ya que casi cualquier cosa en JavaScript
//es algun tipo de objeto.

//Objetos literales en ES6
//Este tipo de estructura es el patron mas utilizado en JavaScript, 
//(JSON se construyo de esta sintaxis)

//Dichos objetos se encuentran en casi cualquier script en el
//internet, casi el 99% de los programas los utilizan en algun
//punto.

//ES5
var objeto = {
    nombre: 'Fernanda'
}

//ES6
function crearPersona (nombre, apellido, edad){
    // return {
    //     nombre: nombre,
    //     apellido: apellido,
    //     edad: edad
    // }
    // Los valores del objeto retornado arriba se pueden obviar
    // siempre y cuando tengan el mismo nombre tanto en el argumento recibido
    // como en el nombre de la propiedad del objeto literal de java script
    return {
        nombre,
        apellido,
        edad
    }
}

var fernanda = crearPersona('Fernanda', 'Nose', 15);
console.log(fernanda);

//METODOS CONCISOS
var persona = {
    nombre: 'Fernando',
    // getNombre: function(){
    //     console.log(this.nombre);
    // }
    //Se refiere a que toda la escritura de function () en los metodos
    // es redundante unicamente se ociupa poner como abajo y Js con ES6
    // ya entiende que es una funcion del objeto.
    getNombre() {
        console.log(this.nombre);
    }
}

persona.getNombre();

//NOMBRE DE PROPIEDADES COMPUTADAS

var persona2 = {};

var apellido = 'apellido';

//No se explico bien el instructor hay que investigar de que va







