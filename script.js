let defaultArr = ['Rock', 'Scissors', 'Paper']
let userArr = ['Rock', 'Paper', 'Scissors']


let rndNumDefault = Math.floor(Math.random() * 3);
let rndNumUser;

const start = document.querySelector('.btn1')
const fillDefault = document.querySelector('.fill-default')
const fillUser = document.querySelector('.fill-user')

fillDefault.textContent = defaultArr[rndNumDefault]

let number_user = 0;
let counterVar_user = 20;
start.addEventListener('click', () => {
    function update(timestamp) {
        if (counterVar_user === 0) {
            checkWinner(rndNumUser)
            return
        }
        if ((timestamp - number_user) > 90) {
            rndNumUser = Math.floor(Math.random() * 3)
            fillUser.textContent = userArr[rndNumUser];
            console.log(userArr[rndNumUser]);
            number_user = timestamp
            counterVar_user--
        }
        requestAnimationFrame(update)
    }
    requestAnimationFrame(update);
});


function checkWinner(rndNumUser) {
    const crr = document.querySelector('.fill-default')
    // logic for user winning
    if (crr.innerText == 'Rock' && userArr[rndNumUser] == 'Paper') {
        showWinner('You Won !' , 'Com: Rock , User: Paper')
    } else if (crr.textContent == 'Paper' && userArr[rndNumUser] == 'Scissors') {
        showWinner('You Won !' , 'Com: Paper , User: Scissors')
    } else if (crr.textContent == 'Scissors' && userArr[rndNumUser] == 'Rock') {
        showWinner('You Won !' , 'Com: Scissors , User: Rock')
    }

    // logic for Computer winning
    else if (crr.innerText == 'Paper' && userArr[rndNumUser] == 'Rock') {
        showWinner('You loose !' , 'Com: Paper , User: Rock')
    } else if (crr.textContent == 'Scissors' && userArr[rndNumUser] == 'Paper') {
        showWinner('You loose !' , 'Com: Scissors , User: Paper')
    } else if (crr.textContent == 'Rock' && userArr[rndNumUser] == 'Scissors') {
        showWinner('You loose !' , 'Com: Rock , User: Scissors')
    }


    // Logic for match Draw
    else if (crr.textContent == 'Rock' && userArr[rndNumUser] == 'Rock') {
        showWinner('Match Draw !' , 'Com: Rock , User: Rock')
    }
    else if (crr.textContent == 'Scissors' && userArr[rndNumUser] == 'Scissors') {
        showWinner('Match Draw !' , 'Com: Scissors , User: Scissors')
    }
    else if (crr.textContent == 'Paper' && userArr[rndNumUser] == 'Paper') {
        showWinner('Match Draw !' , 'Com: Paper , User: Paper')
    }
}


const infoBox = document.querySelector('.info')
const resultPara = document.querySelector('.result')
const infoMove = document.querySelector('.info-move')
const leftBox = document.querySelector('.left')
const rightBox = document.querySelector('.right')
function showWinner(msg , move) {
    leftBox.style.opacity = 0
    rightBox.style.opacity = 0
    start.setAttribute('disabled','')
    infoBox.style.display = 'flex'
    resultPara.textContent = msg
    infoMove.textContent = move
}

function startNewGame() {
    const Gamebtn = document.querySelector('.start-again')
    Gamebtn.addEventListener('click', () => {
        rndNumDefault = Math.floor(Math.random() * 3);
        rndNumUser = Math.floor(Math.random() * 3)
        infoBox.style.display = 'none'
        leftBox.style.opacity = 1
        rightBox.style.opacity = 1
        fillDefault.textContent = defaultArr[rndNumDefault]
        fillUser.textContent = ''
        number_user = 0
        counterVar_user = 20
        start.removeAttribute('disabled')
    })
}

startNewGame()