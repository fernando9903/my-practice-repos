const saluda = (firstName) => {
    console.log(`Hola ${firstName} este es tu primer modulo`)
}

const PI = 3.1416;

class someClass {
    constructor () {
        console.log('Esta clase apenas fue creada!')
    }
}

module.exports = {saluda: saluda, PI: PI, someClass: someClass};