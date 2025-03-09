let questionCount = 1

fetch("./pdf.json")
    .then(response => response.json())
    .then(questions => {

        // Randomizing The Order Of Questions
        // for (let i = 0; i < questions.length - 1; i++) {
        //     let j = Math.round(Math.random() * (i + 1));
        //     [questions[i], questions[j]] = [questions[j], questions[i]]
        // }

        let container = document.querySelector('.container')
        let qIndex = 1
        let marks = 2
        let totalQuestionsCount = questions.length
        let totalMarksContainer = document.querySelector('.totalMarks span')
        let maxMarks = marks * totalQuestionsCount
        // totalMarksContainer.innerHTML = maxMarks
        totalMarksContainer.innerHTML = 20

        for (let data of questions) {

            if (questionCount > 10) {
                return
            }

            let question = data.question
            let options = data.options

            let questionHTML = `<h2><span></span>2</h2>`
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
            questionCount++
        }

        // let submitButton = document.querySelector('.submitButton')
        let submitButton = document.querySelector('.anotherButton')
        submitButton.addEventListener('click', function () {
            console.log('Clicked')

            let qIndex = 1
            let totalMarks = 0
            questions.forEach((data) => {
                let selectedInput = document.querySelector(`input[name="answer_${qIndex}"]:checked`)
                let questionDivH1 = document.querySelector(`#questionDiv${qIndex} h1`)
                let questionDivH1Span = document.querySelector(`#questionDiv${qIndex} h1 span`)

                let answer = data.answer
                let labels = document.querySelectorAll(`#questionDiv${qIndex} label`)
                let rightLabel = labels[answer - 1]

                // If User Didn't Give The Answer
                if (!selectedInput) {
                    // Show Unsolved Question 
                    questionDivH1.style.color = "yellow"
                    questionDivH1Span.innerHTML = `<img src="./dash.svg">`

                    // Show Right Option
                    rightLabel.style.backgroundColor = "#E6F4EA"

                    qIndex++
                    return
                }

                let selectedInputIndex = Number(selectedInput.value)
                let wrongLabel = labels[selectedInputIndex - 1]

                let marks = document.querySelector(`#questionDiv${qIndex} h2`)

                if (selectedInputIndex == answer) {
                    // Show Right Question 
                    questionDivH1.style.color = "green"
                    questionDivH1Span.innerHTML = `<img src="./tick.svg">`

                    // Show Right Option
                    rightLabel.style.backgroundColor = "#E6F4EA"

                    // Show Marks
                    marks.innerHTML = "2/2"
                    totalMarks += 2
                } else {
                    // Show Wrong Question 
                    questionDivH1.style.color = "red"
                    questionDivH1Span.innerHTML = `<img src="./cross.svg">`

                    // Show Right Option
                    rightLabel.style.backgroundColor = "#E6F4EA"
                    // Show Wrong Option
                    wrongLabel.style.backgroundColor = "#FCE8E6"

                    // Show Marks
                    marks.innerHTML = "0/2"
                }
                qIndex++
            })

            let inputs = document.querySelectorAll('input[type="radio"]')
            for (let input of inputs) {
                input.disabled = true
            }

            // document.querySelector('.totalMarks').innerHTML = `${totalMarks}/${maxMarks}`
            document.querySelector('.totalMarks').innerHTML = `${totalMarks}/20`
            document.querySelector('.totalMarks').style.fontSize = "2rem"

            let white = document.querySelector('.white')
            white.style.display = "flex"
            setTimeout(() => {
                white.style.opacity = "1"
                let body = document.querySelector('body')
                body.style.overflowY = "hidden"
            }, 1);

            let white2 = document.querySelector('.white h2 span')
            // white2.innerHTML = `${totalMarks}/${maxMarks}`
            white2.innerHTML = `${totalMarks}/20`

        })
    })

let white = document.querySelector('.white')
let whiteButton = document.querySelector('.white button')
whiteButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    white.style.display = "none"
    white.style.opacity = "0"
    let body = document.querySelector('body')
    body.style.overflowY = "visible"
}

