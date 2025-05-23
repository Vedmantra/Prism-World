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

function ChangeSubjectDropdown() {
    let subjectDropdown1 = document.querySelector('.subjectDropdown1')
    let subjectDropdown2 = document.querySelector('.subjectDropdown2')
    if (std == "8th") {
        subjectDropdown2.style.display = "none"
        subjectDropdown1.style.display = "block"
    } else {
        subjectDropdown1.style.display = "none"
        subjectDropdown2.style.display = "block"
    }
}
ChangeSubjectDropdown()

let sub
subjectDropdown1 = document.querySelector('.subjectDropdown1')
subjectDropdown2 = document.querySelector('.subjectDropdown2')

subjectDropdown1.addEventListener('change', function () {
    sub = subjectDropdown1.value
})
subjectDropdown2.addEventListener('change', function () {
    sub = subjectDropdown2.value
})

let lessonArr = []
let checkboxes = document.querySelectorAll('input[type="checkbox"]')

let button = document.querySelector('button')
button.addEventListener('click', function () {

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