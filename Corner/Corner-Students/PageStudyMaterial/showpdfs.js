// todo  ------------------ STANDARD ------------------ 

let standardInput = document.querySelector('#standardInput')
let stdText = document.querySelector(".standardDiv h2")
let std

standardInput.addEventListener('mouseup', Standard)
standardInput.addEventListener("touchend", Standard)
function Standard() {
    let standardValue = standardInput.value
    if (standardValue <= 35) {
        standardInput.value = 0
        std = "8th"
    } else if (standardValue >= 65) {
        standardInput.value = 100
        std = "10th"
    } else {
        standardInput.value = 50
        std = "9th"
    }
    stdText.innerHTML = std
    ChangeSubjectsDropdown()
    ShowPdfs()
}

// todo  ------------------ MEDIUM ------------------ 

let mediumInput = document.querySelector('#mediumInput')
let medText = document.querySelector(".mediumDiv h2")
let med

mediumInput.addEventListener('mouseup', Medium)
mediumInput.addEventListener("touchend", Medium)
function Medium() {
    let mediumValue = mediumInput.value
    if (mediumValue <= 50) {
        mediumInput.value = 0
        med = "English Medium"
    } else {
        mediumInput.value = 100
        med = "Marathi Medium"
    }
    medText.innerHTML = med
    ShowPdfs()
}

// todo  ------------------ PAPER TYPE ------------------ 

let abras = document.querySelectorAll('.abra')

let paperTypeDropdown = document.querySelector('.paperTypeDropdown')
let paperType
paperTypeDropdown.addEventListener('change', function () {
    paperType = paperTypeDropdown.value
    ShowPdfs()

    if (paperType == "Class Test" || paperType == "Solution") {
        for (let abra of abras) {
            abra.style.display = "none"
        }
    } else {
        for (let abra of abras) {
            abra.style.display = "block"
        }
    }
})

// todo  ------------------ SUBJECT ------------------ 

let subjectDropdown1 = document.querySelector('.subjectDropdown1')
let subjectDropdown2 = document.querySelector('.subjectDropdown2')
let sub
function ChangeSubjectsDropdown() {
    if (std == "8th") {
        subjectDropdown2.style.display = "none"
        subjectDropdown1.style.display = "block"
    } else {
        subjectDropdown1.style.display = "none"
        subjectDropdown2.style.display = "block"
    }
}

ChangeSubjectsDropdown()

subjectDropdown1.addEventListener('change', function () {
    sub = subjectDropdown1.value
    ShowPdfs()
})
subjectDropdown2.addEventListener('change', function () {
    sub = subjectDropdown2.value
    ShowPdfs()
})



// todo  ------------------ SEARCH ------------------ 

let search = document.querySelector('input[type="search"]')
let searchVal

search.addEventListener('input', function () {
    searchVal = search.value
    ShowPdfs()
})

// todo  ------------------ SHOW PDF ------------------ 

function ShowPdfs() {

    let html = ``

    // console.log('std', std)
    // console.log('med', med)
    // console.log('sub', sub)
    // console.log('paperType', paperType)

    for (let pdf of allPdfsNamesArray) {

        let pdfName = pdf.split("/").pop()
        pdfName = pdfName.replace(".pdf", "")
        let pdfNameLowerCased = pdfName.toLowerCase()

        // ?  ------------------ FILTER ------------------ 
        if (std) {
            // let stdNumber = std.replace("th", "")
            // if (!pdfName.includes(stdNumber)) {
            if (!pdfName.includes(std)) {
                continue
            }
        }

        if (med) {
            if (med == "English Medium") {
                if (!pdfNameLowerCased.includes("eng med")) {
                    continue
                }
            } else if (med == "Marathi Medium") {
                if (!pdfNameLowerCased.includes("mar med")) {
                    continue
                }
            }
        }

        if (sub) {
            if (!pdfName.includes(sub)) {
                continue
            }
        }

        if (paperType) {
            if (!pdfName.includes(paperType)) {
                continue
            }
        }

        if (searchVal) {
            searchVal = searchVal.toLowerCase()
            let pdfLowercased = pdfName.toLowerCase()
            let skip = false

            let splittedArr = searchVal.split(" ")
            // console.log('splittedArr', splittedArr)

            for (let element of splittedArr) {

                if (!pdfLowercased.includes(element)) {
                    skip = true
                    break
                }
            }

            if (skip) {
                continue;
            }
        }

        html += `<div class="box">
                        <img src="./pdf.png">
                        <h2>${pdfName}</h2>
                        <button class="button" onclick="RedirectToPdfpreviewPage('${pdf}');">View</button>
                    </div>`
    }

    let pdfSection = document.querySelector('.pdfSection')
    pdfSection.innerHTML = html
}

ShowPdfs()

function RedirectToPdfpreviewPage(pdfUrl) {
    const url = `pdfPreview.php?pdfUrl=${encodeURIComponent(pdfUrl)}`;
    window.location.href = url;
}