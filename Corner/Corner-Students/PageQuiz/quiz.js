let params = new URLSearchParams(window.location.search);
let std = params.get("std");
let med = params.get("med");
let sub = params.get("sub");
// let lessonArr = params.get("lessonArr");
let lessonArr = JSON.parse(decodeURIComponent(params.get("lessonArr")));

console.log('std', std)
console.log('med', med)
console.log('sub', sub)
console.log('lessonArr', lessonArr)

let missedCount = 0
let incorrectCount = 0

let allQuestionsArray2 = []
let questionLimit = 10
let marks = 1
let maxMarks = questionLimit * marks

let totalMarksContainer = document.querySelector('.totalMarks')

let promiseArr = [];

for (let lesson of lessonArr) {
    let address = `Quizes/${std}/${med}/${sub}/${lesson}.json`
    console.log('address', address)
    let promise1 = fetch(address)
        .then(response => response.json())
        .then(allQuestionsArray => {
            allQuestionsArray2.push(...allQuestionsArray)
        })
        .catch(error => console.log('error', error))
    promiseArr.push(promise1)
}

Promise.all(promiseArr).then(() => {
    console.log('All fetches completed');
    CreateQuestions();
});

let container = document.querySelector('.container')

function CreateQuestions() {
    if (allQuestionsArray2.length == 0) {
        alert("The Quiz For this lesson is not available ")
        window.location.href = "./homePage.html";
        return
    }

    function RandomizeTheQuestions() {
        for (let i = allQuestionsArray2.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [allQuestionsArray2[i], allQuestionsArray2[j]] = [allQuestionsArray2[j], allQuestionsArray2[i]];
        }
    }

    RandomizeTheQuestions()

    let qIndex = 1

    totalMarksContainer.innerHTML = maxMarks + " Marks"

    for (let dataOfEachQuestion of allQuestionsArray2) {

        if (qIndex > questionLimit) {
            break
        }

        let question = dataOfEachQuestion.question
        let options = dataOfEachQuestion.options

        let questionHTML = `<h2>${marks}</h2>`
        questionHTML += `<h1><span></span>${question}</h1>`

        options.forEach((option, index) => {
            questionHTML +=
                `<label>
                            <input type="radio" name="answer_${qIndex}" value="${index + 1}">
                            ${option}
                        </label>
                        <br>`
        })
        container.innerHTML += `<div class="questionDiv" id="questionDiv${qIndex}">${questionHTML}</div>`;
        qIndex++
    }
}

let submitButton = document.querySelector('.submitButton')
let restartButton = document.querySelector('.restartButton')
submitButton.onclick = function () {
    CheckAnswers()
}

let totalMarks = 0
function CheckAnswers() {

    let qIndex = 1
    for (let dataOfEachQuestion of allQuestionsArray2) {

        if (qIndex > questionLimit) {
            break
        }

        let selectedInputOfUser = document.querySelector(`input[name="answer_${qIndex}"]:checked`)
        let questionText = document.querySelector(`#questionDiv${qIndex} h1`)
        let questionIcon = document.querySelector(`#questionDiv${qIndex} h1 span`)

        let answerIndex = dataOfEachQuestion.answer
        let options = document.querySelectorAll(`#questionDiv${qIndex} label`)
        let rightOptionDiv = options[answerIndex - 1]

        let marksContainer = document.querySelector(`#questionDiv${qIndex} h2`)

        // If User Didn't Select Any Option
        if (!selectedInputOfUser) {

            missedCount++
            // Show Unsolved Question 
            questionText.style.color = "#9199a6"
            questionIcon.innerHTML = `<img src="./Icons/dash.svg">`

            // Show Right Option
            rightOptionDiv.style.backgroundColor = "#E6F4EA"

            // Show Marks
            marksContainer.innerHTML = `0/${marks}`

            qIndex++
            continue
        }

        let selectedInputOfUserIndex = Number(selectedInputOfUser.value)
        let userOptionDiv = options[selectedInputOfUserIndex - 1]

        if (selectedInputOfUserIndex == answerIndex) {
            // Show Right Question 
            questionText.style.color = "#6b9443"
            questionIcon.innerHTML = `<img src="./Icons/tick.svg">`

            // Show Right Option
            rightOptionDiv.style.backgroundColor = "#E6F4EA"

            // Show Marks
            marksContainer.innerHTML = `${marks}/${marks}`
            totalMarks += marks
        } else {

            incorrectCount++
            // Show Wrong Question 
            questionText.style.color = "#d04e4e"
            questionIcon.innerHTML = `<img src="./Icons/cross.svg">`

            // Show Right Option
            rightOptionDiv.style.backgroundColor = "#E6F4EA"
            // Show Wrong Option
            userOptionDiv.style.backgroundColor = "#FCE8E6"

            // Show Marks
            marksContainer.innerHTML = `0/${marks}`
        }
        qIndex++
    }

    let inputs = document.querySelectorAll('input[type="radio"]')
    for (let input of inputs) {
        input.disabled = true
    }

    totalMarksContainer.innerHTML = `${totalMarks}/${maxMarks}`
    document.querySelector('.totalMarks').style.fontSize = "2rem"

    document.querySelector('.incorrect span').innerHTML = incorrectCount
    document.querySelector('.missed span').innerHTML = missedCount



    WhiteEffect()
}

let whiteEffect = document.querySelector('.whiteEffect')
let body = document.querySelector('body')
function WhiteEffect() {
    whiteEffect.style.display = "flex"
    setTimeout(() => {
        whiteEffect.style.opacity = "1"
        body.style.overflowY = "hidden"
    }, 1);

    let whiteEffectMarks = document.querySelector('.whiteEffect h2 span')
    whiteEffectMarks.innerHTML = totalMarks


}

let whiteEffectButton = document.querySelector('.whiteEffect button')
whiteEffectButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    whiteEffect.style.display = "none"
    whiteEffect.style.opacity = "0"
    body.style.overflowY = "visible"

    restartButton.style.display = "block"
    submitButton.style.display = "none"
}

restartButton.addEventListener('click', function () {
    // delete previous questions from container 
    container.innerHTML = ""

    // create new questions 
    CreateQuestions()

    // toggle buttons
    restartButton.style.display = "none"
    submitButton.style.display = "block"

    // make score => 0 
    totalMarks = 0
    missedCount = 0
    incorrectCount = 0

    // go up
    window.scrollTo({ top: 0, behavior: 'smooth' });
})