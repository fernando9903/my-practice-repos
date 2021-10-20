document.addEventListener('DOMContentLoaded', () => {
    //cardOptions
    const cardArray = [
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
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
          name: 'hotdog',
          img: 'images/hotdog.png'
        },
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
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
          name: 'hotdog',
          img: 'images/hotdog.png'
        }
      ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardsChoseen = [];
    let cardsChoseenId = [];
    let cardsWon = [];

    //create the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
            console.log('Hola mundo')
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChoseenId[0];
        const optionTwoId = cardsChoseenId[1];
        if (optionOneId == optionTwoId) {
            alert('You have clicked the same image!');
            cards[optionOneId].setAttribute('src', './images/white.png');
            cards[optionTwoId].setAttribute('src', './images/white.png');
        } else if (cardsChoseen[0] === cardsChoseen [1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', './images/white.png');
            cards[optionTwoId].setAttribute('src', './images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionOneId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChoseen);
        } else {
            cards[optionOneId].setAttribute('src', './images/blank.png');
            cards[optionTwoId].setAttribute('src', './images/blank.png');
            alert('Sorry, try again');
        }
        cardsChoseen = [];
        cardsChoseenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChoseen.push(cardArray[cardId].name);
        cardsChoseenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChoseen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();


})