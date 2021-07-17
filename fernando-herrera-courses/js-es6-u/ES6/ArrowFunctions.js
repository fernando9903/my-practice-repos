/**/
//Arrow Functions - Funciones de Flecha
//Este tipo de funciones tienen una sintaxis variada
//que depende de lo que se quiera realizar

//Pero normlamente tienen la misma estructura

//1. Funcion con argumentos
//2. Seguido de una flecha gorda =>
//3. Seguido por el cuerpo de la funcion

//Para que sirven ?
//1. Menos codigo que es mas simple de interpretar
//2. No hay un nuevo "this" dentro de las funciones
//3. No hay constructores, no tiene new.
//4. No puedes cambiar el valor del "this" aunque uses call(),
//apply() o bind().
//5. No hay objeto "arguments"
//6. Entre otras cosas

//Ejemplos

//Nota, var es por ES5 pero deberia de utilizarse let para
//declarar variables tal como lo dicta ES6

//Ejemplo 1
//ES5
var myFunction2 = function(valor) {
    return valor;
}

//ES6
let myFunction1 = valor => valor;

console.log(myFunction1(2));
console.log(myFunction2(2));

//ES5
var sum2 = function (val1, val2) {
    return val1 + val2;
}

//ES6
let sum1 = (val1, val2) => val1 + val2;

console.log(sum1(1, 2));
console.log(sum2(1, 2));

//ES5
var sayHelloWorld1 = function () {
    return 'Hello world';
}

//ES6
let sayHelloWorld2 = () => 'Hello world';

console.log(sayHelloWorld1());
console.log(sayHelloWorld2());



//ES5
var saludarPersona = function(nombre) {
    var salida = "Hola, " + nombre;
    return salida;
} 

//ES6
let saludarPersona2 = nombre => {
    let salida = `Hola, ${nombre}`;
    return salida;
}

console.log(saludarPersona('Fernando'));
console.log(saludarPersona2('Fernanda'));



//ES5
var obtenerLibro = function(id) {
    return {
        id: id,
        nombre: 'Harry Potter'
    }
}

//ES6
let obtenerLibro2 = id => (
    {
        id:id,
        nombre: 'Harry Potter'
    }
)
let obtenerLibro3 = id => {
    return ({
        id:id,
        nombre: 'Harry Potter'
    })
}

console.log(obtenerLibro(1));
console.log(obtenerLibro(2));
console.log(obtenerLibro(3));


//CREANDO FUNCIONES ANONIMAS
// Son ejecutadas inmediatamente en el momento que son creadas
// No tienen un nombre

//ES5
var saludo1 = function (nombre) {
    console.log('Se ejecuto la funcion anonima saludo1');
    return 'Hola, ' + nombre
}('Fernando');


//ES6
let saludo2 = ( nombre => `Hola, ${nombre}`)('Fernanda')

let saludo3 = ( nombre => {
    console.log('Se ejecuto la funcion anonima saludo2')
    return `Hola, ${nombre}`;
})('Fernanda')

console.log(saludo1);
console.log(saludo2);
console.log(saludo3);

// NO HAY CAMBIOS CON EL OBJETO "THIS"

//ES5
var manejador = {
    id: '123',

    init: function(){
        document.addEventListener('click', function(event) {
            //Aqui apunta al objeto global por eso manda error
            //si ejecutamos la linea 141
            console.log(this);
            //this.clickEnPagina( event );
        }, false );
    }, // fin del init
    clickEnPagina: function (type) {
        console.log('Manejando ' + type + ' para el id: ' + this.id);
    }

};

//Para apuntar al objeto se tendria que hacer lo siguiente
var manejador2 = {
    id: '123',

    init: function(){
        document.addEventListener('click', (function(event) {
            //Aqui apunta al objeto global por eso manda error
            //si ejecutamos la linea 141
            console.log(this);
            this.clickEnPagina( event );
        }).bind(this), false );
    }, // fin del init
    clickEnPagina: function (type) {
        console.log('Manejando ' + type + ' para el id: ' + this.id);
    }

};

manejador.init();
manejador2.init();


//ES6
//El mismo funcionamiento del manjador 2
var manejador3 = {
    id: '123',

    init: function(){
        document.addEventListener('click',
        event => this.clickEnPagina(event.type));
    }, // fin del init
    clickEnPagina: function (type) {
        console.log('Manejando ' + type + ' para el id: ' + this.id);
    }

};

//NECECITO ESTUDIAR MAS SOBRE EL THIS CON LAS ARROW FUNCIOTNS

//FUNCIONES DE FLECHA Y ARREGLOS
var arreglo = [2, 34, 5, 23, 56];

var ordenado = arreglo.sort(function(a,b){
    return a-b;
});

console.log(ordenado);

//ES6
let ordenadoES6 = arreglo.sort( (a,b) => a-b);
console.log(ordenadoES6);

//IDENTIFICANDO FUNCIONES DE FLECHA Y OTROS EJEMPLOS
var restar = (a, b) => a -b;
console.log( typeof restar );
console.log( restar instanceof Function );


// ESTO DA ERROR var restar2 = new restar(1,2);
let restar2 = restar(1,2);
console.log(restar2);

//Esto da error porque arguments no esta definido en las 
// arrow funcitons
// ( (a,b) => {
//     console.log( arguments[0] )
// })();

//En este caso arguments busca los argumentos del objeto padre mas 
// cercano
function ejemplo(x,y){
    ( (a,b) => {
        console.log( arguments[0] )
    })();    
}
ejemplo(5,3);








