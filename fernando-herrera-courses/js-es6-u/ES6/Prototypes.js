//Prototipos 
/*
La POO (Programacion Orientada a Objetos) de JavaScript se encontraba
basada en prototipos y no en clases. (ES6 introduce clases)

Los prototipos son un conjunto de normas para integrar Programcion
Orientada a Objetos en JavaScript, Pero con los prototipos, nosotros
somos capaces de realizar tareas como:
- Herencia
- Encapsulamiento
- Abstraccion
- Polimorfismo
*/

let gato = {
    sonido(){
        console.log('Miau');
    },
    chillido(){
        console.log('MIAU!!!')
    }
}

let perro = {
    sonido() {
        console.log("Guau!!!");
    }
}

let angora = Object.create (gato);
console.log( Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido();


Object.setPrototypeOf( angora, perro );
console.log( Object.getPrototypeOf(angora) === gato);

angora.sonido();
//angora.chillido(); Lla no es parte del gato porque el perro no lo tiene

//35. Acceso al prototipe con la referencia "SUPER"
let persona = {
    saludar(){
        return 'Hola';
    }
}

let amigo = {
    saludar(){
        // /*ES5*/ return Object.getPrototypeOf(this).saludar.call(this) + ', saludar';
        return super.saludar() + ', saludos';
    }
}

Object.setPrototypeOf(amigo, persona);
console.log(amigo.saludar());

//36. Destructuracion de objetos
let ajustes = {
    nombre: 'Fernando',
    email: 'fernando@gmail.com',
    facebook: 'Fernando9903',
    google: 'Fernando123',
    premium: true
};

let {nombre, email:correo, facebook, google, premium, twitter = 'jeje funciona', twitter:cuentaT = 'SIGUE!!!'} = ajustes;

console.log(nombre, correo, twitter, cuentaT);


//37. Destructuracion de objetos anidados.

let autoGuardado = {
    archivo: 'app.js',
    cursor: {
        linea: 7,
        columna: 8
    },
    ultimoArchivo: {
        archivo: 'index.html',
        cursor: {
            linea: 30,
            columna: 455
        }
    },
    otroNodo: {
        subnodo: {
            cursorMaster: {
                linea: 11,
                columna: 11
            }
        }
    }
}

let { cursor } = autoGuardado;
console.log(cursor);
let { cursor:cursosConOtroNombre } = autoGuardado;
console.log(cursosConOtroNombre);

let { ultimoArchivo:{cursor:ultimo} } = autoGuardado;
console.log(ultimo); //tuve que ponerle el alias de ultimo porque ya habia utilizado el alias cursor arriba y con let me impide redeclarar variables

//Se puede llegar hasta este destructuring con N anidados solo que
//es bastante enrredoso de escribir solo hay que tener cuidado
let { otroNodo:{subnodo:{cursorMaster}} } = autoGuardado;
console.log(cursorMaster);

//Tambien se puede llegar al destrucuring de la siguiente manera
let superNodo2 = autoGuardado.otroNodo.subnodo.cursorMaster;
console.log(superNodo2);


// 38. Destructuracion de arreglos
// La destructuracion de arreglos es secuencial
let frutas = ['Banano', 'Pera', 'Uva'];
let [fruta1, fruta2] = frutas;
console.log(fruta2);

//Cada coma cuanta como una posicion si se analiza tiene sentido xD
let [,,fruta3] = frutas;
console.log(fruta3);

let otraFruta = 'manzana';

//se remplaza el valor con el primer valor del arreglo frutas
[otraFruta] = frutas;
console.log(otraFruta);

//switch de valores ayudandonos con la destructuracion de arreglos
let a = 1;
let b = 2;
let temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

[a, b] = [b, a];

console.log(a);
console.log(b);

//39. Destructuración de arreglos anidados.

let colores1 = ['rojo', ['verde', 'amarillo','vileta','magenta']];

let [color1, [,color2, ...restoColores]] = colores1;
console.log(color1);
console.log(color2);
console.log(restoColores);

//40. Valores por defecto en la destructuración
let arbolesFrutales = ['banano'];
//let arbolesFrutales = ['banano','peras'];
let [arbol1, arbol2 = 'manzana'] = arbolesFrutales;

console.log(arbol1);
console.log(arbol2);

let opciones_40_1 = {
    nombre40: 'Fernando',
}

let opciones_40_2 = {
    nombre40: 'Fernando',
    apellido40: 'Rodriguez'
}

let {nombre40, apellido40 = "Parra"} = opciones_40_2;
console.log(nombre40, apellido40);

//41. Destructuración de parámetros

function crearJugadorSinDestructuring(nickname, opciones){
    opciones = opciones || {};
    let hp = opciones.hp;
        sp = opciones.sp;
        clase = opciones.clase;

    console.log(nickname, hp, sp, clase);
}

crearJugadorSinDestructuring('fergame99', {
    hp: 100,
    sp: 50,
    clase: 'mago',
})

function crearJugadorConDestructuring(nickname, opciones){
    opciones = opciones || {};
    let hp = opciones.hp;
        sp = opciones.sp;
        clase = opciones.clase;

    console.log(nickname, hp, sp, clase);
}

crearJugadorSinDestructuring('fergame99', {
    hp: 100,
    sp: 50,
    clase: 'mago',
})
