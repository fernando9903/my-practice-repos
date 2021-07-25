//Documentation
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import {getHeroeById} from './bases/08-imp-exp';

const promise = new Promise ((resolve, reject) => {
    setTimeout( () => {
        const heroe = getHeroeById(2);
        resolve(heroe);
    }, 2000);
});

promise.then( (heroe_from_p) => {
    console.log('This is the hero: ', heroe_from_p);
});

const getHeroeByIdAsync = (id) => {

    const promise = new Promise ((resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('The hereo was not find');
            }
        }, 2000);
    });

    return promise;

}

getHeroeByIdAsync(10)
    .then( (heroe_from_p) => {
        console.log(heroe_from_p);
    })
    .catch( err => {
        console.warn(err);
    })