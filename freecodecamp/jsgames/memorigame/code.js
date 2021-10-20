document.addEventListener('DOMContentLoaded', () => {
    //cardOptions
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
        },
        {
            name: 'blank',
            img: 'images/blank.png'
        },
        {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'images/milkshake.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        },
    ]

    const grid = document.querySelector('.grid');

    //create the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i);
            //card.addEventListener('click', flipcard);  TO DO
            grid.appendChild(card);
            console.log('Hola mundo')
        }
    }

    //check for matches

    //flip your card
    function flipCard() {
        
    }

    createBoard();


})