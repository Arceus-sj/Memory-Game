// going to learn about -->
// .querySelector()
// .Math.random()
// .length
// .createElement()
// .setAttribte()
// .append()
// .getAttribte()
// alert()
// .push()
// setTimeout()
// .querySelectorAll()
// .removeEventListener()
// .textContent


const cardArray = new Array(
    {
        name: 'hokage',
        img: 'Images/hokage.jpg'
    },
    {
        name: 'pain',
        img: 'Images/pain.jpg'
    },
    {
        name: 'jiraiya',
        img: 'Images/jiraiya.jpg'
    },
    {
        name: 'itachi',
        img: 'Images/itachi.png'
    },
    {
        name: 'naruto',
        img: 'Images/naruto.jpg'
    },
    {
        name: 'sasuke',
        img: 'Images/sasuke.jpg'
    },
    {
        name: 'madara',
        img: 'Images/madara.jpg'
    },
    {
        name: 'kakashi',
        img: 'Images/kakashi.jpg'
    },
    {
        name: 'hokage',
        img: 'Images/hokage.jpg'
    },
    {
        name: 'pain',
        img: 'Images/pain.jpg'
    },
    {
        name: 'jiraiya',
        img: 'Images/jiraiya.jpg'
    },
    {
        name: 'itachi',
        img: 'Images/itachi.png'
    },
    {
        name: 'naruto',
        img: 'Images/naruto.jpg'
    },
    {
        name: 'sasuke',
        img: 'Images/sasuke.jpg'
    },
    {
        name: 'madara',
        img: 'Images/madara.jpg'
    },
    {
        name: 'kakashi',
        img: 'Images/kakashi.jpg'
    }
);


// now we have to suffel array randomly:
cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);


const gameDisplay = document.querySelector('.main-container');
// console.log(gameDisplay);

let cardChosen = [];
let cardChosenID = [];
let cardsWon = [];
let displayScores = document.querySelector('#result');

function createCards () {
    for(let i = 0; i < cardArray.length; i++) {

        // created an image element: 
        const cardElements = document.createElement('img');
        // set attributes to an image:
        cardElements.setAttribute('src', 'Images/blank.jpg');
        cardElements.setAttribute('id', i);

        gameDisplay.appendChild(cardElements);

        cardElements.addEventListener('click', flipCard);
        
    }
}

createCards();




function checkForMatch() {
    const cards = document.querySelectorAll('img');
    const firstOprtionID = cardChosenID[0];
    const secondOptionID = cardChosenID[1];

    // if user clicked the same card-->
    if(firstOprtionID === secondOptionID) {
        alert('You have clicked same card ...');
    }


    // if user found the matching cards-->
    if (cardChosen[0] === cardChosen[1] && firstOprtionID !== secondOptionID) {
        // alert('You found a match ...');
        cards[firstOprtionID].setAttribute('src', 'Images/done.jpeg');
        cards[secondOptionID].setAttribute('src', 'Images/done.jpeg');

        // after finding the matched card we need to remove the click event- 
        // listener from those cards--> 
        cards[firstOprtionID].removeEventListener('click', flipCard);
        cards[secondOptionID].removeEventListener('click', flipCard);
        cardsWon.push(cardChosen);
    }
    // if the chosen cards are not match then set attribute to blank.jpg
    else {
        cards[firstOprtionID].setAttribute('src', 'Images/blank.jpg');
        cards[secondOptionID].setAttribute('src', 'Images/blank.jpg');
    }

    // displaying scores-->
    displayScores.textContent = cardsWon.length;


    // for the new attempt we have empty the card chosen and its ids--> 
    cardChosen = [];
    cardChosenID = [];
    

    // if user found all the cards-->
    if (cardsWon.length === cardArray.length/2) {
        displayScores.innerHTML = '🎉 You found all the cards ... 🥳🥳🥳';
    }

}


function flipCard () {
    const cardID = this.getAttribute('id');
   
    console.log(cardID);
    cardChosen.push(cardArray[cardID].name);
    cardChosenID.push(cardID);
    console.log(cardChosenID);

    this.setAttribute('src', cardArray[cardID].img);

    if (cardChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
    
}

