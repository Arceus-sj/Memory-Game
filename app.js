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



function createCards () {
    for(let i = 0; i < cardArray.length; i++) {

        // created an image element: 
        const card = document.createElement('img');
        // set attributes to an image:
        card.setAttribute('src', 'Images/blank.jpg');
        card.setAttribute('id', i);

        gameDisplay.appendChild(card);

        card.addEventListener('click', flipCard);
        
    }
}

createCards();


function checkForMatch() {
    if (cardChosen[0] === cardChosen[1]) {
        alert('You found a match ...');
    }
    else {
        alert('Not matched ...');
    }

}


function flipCard () {
    const cardID = this.getAttribute('id');
    // console.log('card id', cardID);
    // console.log(cardArray[cardID].name);
    cardChosen.push(cardArray[cardID].name);

    // console.log(cardChosen);

    this.setAttribute('src', cardArray[cardID].img);

    if (cardChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
    
}