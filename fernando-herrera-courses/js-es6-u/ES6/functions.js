/*
// En este archivo estaremos estudiando el comportamiento de las
// funciones en ES6

//PARAMETROS POR DEFECTO
console.warn('PARAMETROS POR DEFECTO');

//EJEMPLO FUNCION NORMAL CON PARAMETROS
function saludo( mensaje = "Hola mundo", tiempo = 1500) {
    
    //Esto se hacia en ES5
    //mensaje = mensaje || "Hola mundo";
    //Otra forma de hacer la validacion de parametros de ES5
    //mensaje = (typeof mensaje !== 'undefined')? mensaje: "Hola mundo";

    //En ES6 se incorporo de los poara metros opcionales que 
    // basicamente es que se hace la igualacion justo en la declaracion
    // de parametros de la funcion de arriba 
    // ejemplo function nombre_funcion (parametro = valor_par_opt) sino
    // se envia nada entonces Js toma el valor de la igualacion

    
    setTimeout (function () {
        console.log(mensaje);
    }, tiempo);
}

//EJEMPLO DE FUNCION QUE RECIBE A OTRA FUNCION
// Este es un caso extremo donde basicamente hacemos la funcion dentro de
// los parametros de la funcion pero es posible
//function saludar ( fn = function() {console.log('Hola mundo');} ) {
//Esto seria lo normal hacer la igualacion de parametro pacional a una funcion
//declarada en alguna otra parte recuerda no poner los () porque eso la ejecuta
function saludar ( fn = fnTemporal, persona = { nombre: 'Fernando'} ) {

    console.log( fn );

    //Al igual que podemos agregar funciones podemos agregar personas
    // como parametros
    console.log( persona )

    if (typeof fn === 'undefined') {
        console.log('fn no es una funcion');
        return;
    }

    fn();

}

function fnTemporal () {
    console.log("Hola soy la funcion fn")
}

var persona = {
    nombre: 'Jose Fernando'
}

saludar();
saludar(fnTemporal, persona);
// Me queda la duda de porque no puedo hacer esto
//saludar (persona)

//COMO AFECTAN LOS VALORES POR DEFECTO AL OBJETO "arguments"
console.warn('COMO AFECTAN LOS VALORES POR DEFECTO AL OBJETO "arguments"');

function sumar (a ,b) {
    console.log(arguments);
}

sumar(1, 2, fnTemporal, persona);
sumar()

//Parametros REST - Parametros sin nombre
// console.warn('Parametros REST - Pärametros sin nombres')

// El parametro 'rest' es indicado por tres puntos (...) seguido del 
// nombre que le asignemos a dicho parametro.

// Ese parametro se convierte en un arreglo que contiene el 'resto' de los
// parametros pasados en la funcion

// De ahi se origina el nombre 'REST'

// Situacion en ES5
// supon que quiere agregar x cantidad de alumnos
function agregar_alumnos ( ) {
    console.log(arguments)

    for (var i = 1; i<arguments.length; i++) {
        arguments[0].push(arguments[i]);        
    }

    return arguments[0];
}

//var alumnos_arr = ["Fernando"];

//var alumnos_arr_2 = agregar_alumnos( alumnos_arr, "Maria", "Jose", "Lupita")

//console.log(alumnos_arr_2);

//Situacion en ES6
//Supongamos que quermos agregar una cantidad x de alumnnos a un arreglo
function agregar_alumnos ( arr_alumnos, ...alumnos ) {
    console.log(arguments)

    for (let i = 0; i<alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);        
    }

    return arr_alumnos;
}

let alumnos_arr = ["Fernando"];

let alumnos_arr_2 = agregar_alumnos( alumnos_arr, "Maria", "Jose", "Lupita")
console.log(alumnos_arr_2)

//NO ME QUEDO CLARO COMO FUNCIONAN EXACTAMENTE LOS PARAMETROS REST

//Restrcciones de los parametros REST
console.warn('Restricciones de los parametros REST');
//1-Solo puede existir un parametro REST en la funcion.
//2-El parametro REST debe de ir siempre como ultimo0 parametro

//Estos arroja un error indicando que el parametro REST debe de ir al final
/*function juntar_nombres (...nombres, apellidos) {
    //cualquier cosa
}
//De igual manera indica un error ya que no hay manera de saber donde inicia
//El primer parametro rest o el segundo
function juntar_nombres (...nombres, ...apellidos) {
 //Something
}

// El operador "Spread"
console.warn('El operador "Spread"')

//El operador "Spread"
// Muy cercano al REST, se encuantra el operador "SPRED".
// Mientras que el parametro "REST" permite especificar
// argumentos independientes que seran combinados en un arreglo, el operador "SPREAD"
// permite especificar un arreglo que sera separado y cada item enviado sera un aargumento
// independiente a la fucion.

//Situacion ES5
var num1 = 10,
    num2 = 30;

var max = Math.max(num1, num2);
console.log(max);

//Otra situacion supongamos que queremos sacar el mayor de un
// Areglo de numeros
var nums = [1, 25, 5, 456];
// si intentamos normal Js no entendiaria como hcaerlo
var max_nums = Math.max(nums);
console.log(max_nums);
// Entonces la manera de hacerlo en ES5 es
// Incluso es complicado de entender el funcionamiento para programdores de Js experimentados
var max_nums_es5 = Math.max.apply(Math, nums);
console.log(max_nums_es5);

//Situacion con Spred en ES6
var max_nums_es6 = Math.max(...nums);
console.log(max_nums_es6)

//PROFUNCIAR EN SPRED PORQUE AHORITA SOLO SE QUE FUNCIONA PERO NO COMO

//ROMPER LA RELACION DE LOS OBJETOS DE REFERENCIA
console.warn("ROMPER LA RELACION DE LOS OBJETOS DE REFERENCIA");

// En este punto se supone ya se deberia de saber que todos los objetos en
// Java Script son pasados por referencia
let persona1 = {
    nombre: "Jose Fernando",
    edad: 22
}

let persona2 = persona1;

console.log(persona1);
console.log(persona2);

persona2.nombre = 'Lupita';
// Se esperaria que solo persona 2 tenga asignado el nombre Lupita
console.log(persona1);
console.log(persona2);
// pero sorpresa ambos tienen lupita esto es porque todos los objetos 
// eb Js son pasados por referencia

//Esisten librerias para romper esta relacion, pero, una de las formas
// para hacerlo es aprovechandonos del operador spred y hacer la siguiente
// igualacion

let persona3 = {...persona1}
persona3.nombre = "Fernando";

console.log(persona1);
console.log(persona3);
//Ahora si vemos dos objetos igualados, esto es porque spred solo copio 
//los valores del objeto persona 1 y no la referencia. de este modo se rompe
// esa referencia y ya se podria decir que ambos objetos son independientes


// Añadir propiedades a objetos a partir de otros objetos
console.warn('Añadir propiedades a objetos a partir de otros objetos');
let persona1 = {
    nombre: 'Lupita',
    edad: 20
};

let persona2 = {
    nombre: 'Jose Fernando',
    edad: 22,
    direccion: "Sonora",
    conduce: true,
    vehiculo: true,
    vegetariano: false,
    casado: true
};

// Se podrian agregar valor por valor sin problemas
persona1.direccion = persona2.direccion;

console.log(persona1);
console.log(persona2);

persona2.direccion = 'Mexico'
console.log(persona1);
console.log(persona2);
// Se hace el cambio correctamente porque estamos pasando por valor
// seria tedioso añadir todos los valores uno por uno para igualarlos
// a los que tiene persona dos que los contenga persona 1 de igual manera
// podemos hacernos provecho del operador spred nuvamente

// persona1 = {
//     ...persona2
// }
// console.log(persona1);
// console.log(persona2);

// pero se copiaron exactamente igual, la manera de solicionarlo es 
// colocando el spred de la persona 1 al final
persona1 = {
    ...persona2,
    ...persona1
}
console.log(persona1);
console.log(persona2);

//DIFERENCIAS ENTRE SPRED y REST
console.warn('DIFERENCIAS ENTRE SPRED y REST');
// REST: Junta los elementos en un arreglo
// SPRED: Esparce los elementos como si fueran enviados de forma separada.

function saludarRest (saludo, ...nombres) {
    for (i in nombres) {
        console.log(`${saludo} ${nombres[i]}`)
    }
}

function saludarSpread (saludo, ...nombres) {
    console.log(`${saludo} ${nombres}.`)
}
saludarRest("Hola", "Fernando", "Lupita", "Maria");

let personas = ["melissa", "Fernanda"]
saludarSpread("Que tal!", personas);

let partes = ["brazos", "piernas"];
let cuerpo = ["cabeza", "cuello", ...partes, "pies"];

console.log(cuerpo);
//Indagar mas sobre SPRED Y REST prams
*/

//Aclarando el doble comportamiento de las funciones
console.warn('Aclarando el doble comportamiento de las funciones')

// ECMAScript 5
// Y versines anteriores, las funciones sirven con
// un doble proposito de ser llamadas con o son la 
// palabra reservada new

// CON "NEW"
// El valor de "This" dentro de la funcion es un nuevo 
// objeto y ese nuevo objeto es retornado.

// SIN "NEW"
// Simplemente hacemos el llamado de la funcion y
// eperamos el retorno de algun valor procesado que
// puede ser un objeto, undefined o null

function Persona (nombre) {
    this.nombre = nombre;
}

var persona = new Persona("Fernando");

var noEsPersona = Persona("Fernando");

console.log(persona);
console.log(noEsPersona);
