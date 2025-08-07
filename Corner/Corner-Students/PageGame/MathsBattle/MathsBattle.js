let startgame = document.querySelector('.startgame')

startgame.addEventListener('click', function () {
    // startgame.style.display = "none"
    startgame.style.opacity = 0
    startgame.disabled = true
    bg.play()
    Timer()
    EnableButtons()
})

let restartgame = document.querySelector('.restartgame')
let playmoregames = document.querySelector('.playmoregames')

const bg = new Audio("../GameAssets/bg.mp3");
const win = new Audio("../GameAssets/win.mp3");
const lose = new Audio("../GameAssets/lose.mp3");

bg.loop = true;

let answer
let score = 0

let scoreDivSpan = document.querySelector('.scoreDiv span')

// 
function DisableButtons() {
    let buttons = document.querySelectorAll(".optionsDiv button")
    // console.log(buttons)
    buttons.forEach(function (button) {
        button.disabled = true
    })
}
function EnableButtons() {
    let buttons = document.querySelectorAll(".optionsDiv button")
    // console.log(buttons)
    buttons.forEach(function (button) {
        button.disabled = false
    })
}

DisableButtons()

// 

function GenerateQuestionAndAnswer() {

    let randomNumber1 = Math.floor(Math.random() * 99) + 1
    let randomNumber2 = Math.floor(Math.random() * 99) + 1
    let randomSign = Math.floor(Math.random() * 4) + 1

    let questionHTML

    if (randomSign === 1) {
        questionHTML = randomNumber1 + ` + ` + randomNumber2
        answer = randomNumber1 + randomNumber2
    }
    else if (randomSign === 2) {
        questionHTML = randomNumber1 + ` - ` + randomNumber2
        answer = randomNumber1 - randomNumber2
    }
    else if (randomSign === 3) {
        questionHTML = randomNumber1 + ` x ` + randomNumber2
        answer = randomNumber1 * randomNumber2
    }
    else if (randomSign === 4) {
        let num2 = Math.floor(Math.random() * 10) + 1
        let num1 = randomNumber2 * num2
        questionHTML = num1 + ` / ` + num2
        answer = randomNumber2
    }

    // Writing Question in QuestionDiv
    let questionDiv = document.querySelector('.questionDiv')
    questionDiv.innerHTML = questionHTML

    // Writing Options in OptionsDiv
    let arr = [1, 2, 3, 4]
    let randomNum = Math.floor(Math.random() * 4) + 1

    for (let i = 1; i <= 4; i++) {
        let option = document.querySelectorAll('.option')[i - 1]
        if (i == randomNum) {
            // console.log('i', i)
            option.innerHTML = answer
            continue
        }

        let randomNumber = Math.floor(Math.random() * 500) + 1
        option.innerHTML = randomNumber
    }
}

GenerateQuestionAndAnswer()

let options = document.querySelectorAll('.option')
for (let option of options) {
    option.addEventListener('click', function () {
        let userAnswer = option.innerHTML
        if (userAnswer == answer) {
            score++
            scoreDivSpan.innerHTML = score
            // lose.pause()
            win.play()
        } else {
            // win.pause()
            lose.play()
        }

        GenerateQuestionAndAnswer()
    })
}


let timer = 30

function Timer() {
    let timerDivSpan = document.querySelector('.timerDiv span')
    timerDivSpan.innerHTML = timer

    let timerInterval = setInterval(() => {
        timer--
        timerDivSpan.innerHTML = timer
        // console.log('timer',timer)
        if (timer == 0) {
            clearInterval(timerInterval)
            alert("Times Up")
            DisableButtons()
            bg.pause()

            startgame.style.display = "none"
            restartgame.style.display = "block"
            playmoregames.style.display = "block"

            restartgame.disabled = false
            restartgame.style.opacity = 1
            playmoregames.disabled = false
            playmoregames.style.opacity = 1
        }
    }, 1000);


}

restartgame.addEventListener('click', function () {
    // console.log(restartgame)
    timer = 30
    Timer()
    score = 0
    scoreDivSpan.innerHTML = score
    GenerateQuestionAndAnswer()

    EnableButtons()

    bg.play()
    restartgame.disabled = true
    restartgame.style.opacity = 0

    playmoregames.disabled = true
    playmoregames.style.opacity = 0
})