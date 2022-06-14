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

const cardChosen = [];
const cardChosenID = [];


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


    if (cardChosen[0] === cardChosen[1]) {
        alert('You found a match ...');
        cards[cardChosenID[0]].setAttribute('src', 'Images/done.png');
        cards[cardChosenID[1]].setAttribute('src', 'Images/done.png');
        cards[cardChosenID[0]].removeEventListener('click', flipCard);
        cards[cardChosenID[1]].removeEventListener('click', flipCard);
        cardChosen.pop();
        cardChosen.pop();
    }
    else if(cardChosen[0] !== cardChosen[1]) {
        cards[cardChosenID[0]].setAttribute('src', 'Images/blank.jpg');
        cards[cardChosenID[1]].setAttribute('src', 'Images/blank.jpg');
        cardChosen.pop();
        cardChosen.pop();
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