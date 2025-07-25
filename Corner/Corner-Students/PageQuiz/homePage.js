const objectOfSubjects = {
    "8th": [
        { "Science": 19 },
        { "History": 14 },
        { "Civics": 6 },
        { "Geography": 12 },
    ],
    "9th": [
        { "Science": 18 },
        { "History": 10 },
        { "Political Science": 6 },
        { "Geography ": 12 },
    ],
    "10th": [
        { "Science 1": 10 },
        { "Science 2": 10 },
        { "History": 9 },
        { "Political Science": 5 },
        { "Geography ": 9 },
    ],
}

let std = "8th"
let standardText = document.querySelector('.standardDiv h2')
let standardInput = document.querySelector('#standardInput')

standardInput.addEventListener("mouseup", Standard)
standardInput.addEventListener("touchend", Standard)

function Standard() {
    stdVal = standardInput.value
    if (stdVal < 35) {
        standardInput.value = 0
        std = "8th"
    } else if (stdVal > 65) {
        standardInput.value = 100
        std = "10th"
    } else {
        standardInput.value = 50
        std = "9th"
    }
    standardText.innerHTML = std
    ChangeSubjectDropdown()

    let lessonDiv = document.querySelector('.lessonDiv')

    lessonDiv.innerHTML = ""
}

//
let med = "English Medium"
// let mediumText = document.querySelector('.mediumDiv h2')
// let mediumInput = document.querySelector('#mediumInput')

// mediumInput.addEventListener("mouseup", Medium);
// mediumInput.addEventListener("touchend", Medium);
// function Medium() {
//     if (mediumInput.value <= 50) {
//         mediumInput.value = 0
//         med = "English Medium"
//     } else {
//         mediumInput.value = 100
//         med = "Marathi Medium"
//     }
//     mediumText.innerHTML = med
// }

let sub
function ChangeSubjectDropdown() {
    let subjectDiv = document.querySelector('.subjectDiv')

    // <select>
    let html = `<select class="subjectDropdown"> <option value="default" selected disabled>Subject</option>`

    // here we got objects of subjects and lessons
    let subjectsAndLessons = objectOfSubjects[std]
    // e.g 
    // [
    //     { "Science": 2 },
    //     { "History": 4 },
    //     { "Civics": 8 },
    //     { "Geography": 8 },
    // ]

    for (let object of subjectsAndLessons) {
        // e.g 
        // { "Science": 2 },
        let sub = Object.keys(object)
        let subject = sub[0]
        html += `<option value="${subject}">${subject}</option>`
    }

    // </select>
    html += `</select>`
    subjectDiv.innerHTML = html

    let subjectDropdown = document.querySelector('.subjectDropdown')

    subjectDropdown.addEventListener('change', function () {
        sub = subjectDropdown.value
        ShowLessons()
    })

}

ChangeSubjectDropdown()

let lessonArr = []


let button = document.querySelector('button')
button.addEventListener('click', function () {

    let checkboxes = document.querySelectorAll('input[type="checkbox"]')

    if (!sub) {
        alert("Please Choose A Subject")
        return
    }
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            lessonArr.push(checkbox.value)
        }
    }

    let encodedLessonArr = encodeURIComponent(JSON.stringify(lessonArr));

    window.location.href = `quiz.html?std=${encodeURIComponent(std)}&med=${encodeURIComponent(med)}&sub=${encodeURIComponent(sub)}&lessonArr=${encodeURIComponent(encodedLessonArr)}`;
})

function ShowLessons() {

    console.log('Calling show lessons')

    let numberOfLessons
    let subjectsAndLessons = objectOfSubjects[std]
    for (let object of subjectsAndLessons) {
        let subb = Object.keys(object)
        let subject = subb[0]

        if (sub == subject) {
            numberOfLessons = object[subject]
        }
    }
    // 

    let lessonDiv = document.querySelector('.lessonDiv')
    let html = ""
    for (let i = 1; i <= numberOfLessons; i++) {
        html +=
            `<div class="div"> <h1>L${i}</h1> <input type="checkbox" value="Lesson ${i}"> </div>`
    }
    lessonDiv.innerHTML = html
}