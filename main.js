let navClicked = false
let navbar = document.querySelector('nav .right')
let img = document.querySelector('nav .toggleDiv img')

function ToggleNavbar() {

    if (navClicked == false) {
        // show navbar 
        gsap.to(navbar, {
            x: "-100%",
            duration: 0.2,
        })
        // change icon
        img.src = "./Assets/Icons/x.svg"
        navClicked = true
    } else {
        // hide navbar 
        gsap.to(navbar, {
            x: "50%",
            duration: 0.2,
        })
        // change icon
        img.src = "./Assets/Icons/menu.svg"
        navClicked = false
    }
}



gsap.registerPlugin(ScrollTrigger);
function ScrollTriggerAnimation() {
    gsap.from(".batches .box", {
        opacity: 0,
        y: 100,
        duration: 0.3,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".batches",
            start: "top 50%",
        },
    });

    let gallaryDivs = document.querySelectorAll(".gallary img")
    for (let div of gallaryDivs) {
        gsap.from(div, {
            opacity: 0,
            y: 100,
            duration: 0.5,
            scrollTrigger: {
                trigger: div,
                start: "top 80%",
            }
        });
    }
}

ScrollTriggerAnimation()

function SVG() {
    var animation1 = lottie.loadAnimation({
        container: document.getElementById("star"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "./Assets/Animated-Icons/star.json"
    });
    document.getElementById("starbox").addEventListener("mouseenter", function () {
        animation1.goToAndPlay(0, true);
    });
    var animation2 = lottie.loadAnimation({
        container: document.getElementById("youth"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "./Assets/Animated-Icons/youth.json"
    });
    document.getElementById("youthbox").addEventListener("mouseenter", function () {
        animation2.goToAndPlay(0, true);
    });
    var animation3 = lottie.loadAnimation({
        container: document.getElementById("eagle"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "./Assets/Animated-Icons/eagle.json"
    });
    document.getElementById("eaglebox").addEventListener("mouseenter", function () {
        animation3.goToAndPlay(0, true);
    });
}

SVG()

function SendWhatsappMessage(e) {
    e.preventDefault()
    let name = document.querySelector('#name').value.trim()
    let std = document.querySelector('#std').value.trim()
    let selectedOption = document.querySelector('input[name="radio"]:checked').value

    let text = "hey"
    if (selectedOption == "RegularClass") {
        text = `I am ${name}. Studying in ${std}. Would like to join Prism World. Please Send Me More Details About The Prism World`
    } else if (selectedOption == "HomeTution") {
        text = `I am ${name}. Studying in ${std}. Would like to join Prism World's Home Tution. Please Send Me More Details About The Prism World`
    }

    let phoneNumber = "919408660808";
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
}

function Contacts() {
    document.querySelector(".contact .call").onclick = function () {
        window.location.href = 'tel:+919408660808';
    }
    document.querySelector(".contact .whatsapp").onclick = function () {
        let phoneNumber = "919408660808";
        let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("")}`;

        window.open(url, "_blank");
    }
}

Contacts()

function WhatsappMessage() {
    let phoneNumber = "919408660808";
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("")}`;

    window.open(url, "_blank");
}

function FooterLinks() {
    document.querySelector('.footer .gb').onclick = function () {
        window.open("https://g.co/kgs/ExNHMKZ", "_blank");
    }
    document.querySelector('.footer .insta').onclick = function () {
        window.open("https://www.instagram.com/world_of_prisms?igsh=MWY3NzM3b2VnYXV4Yg==", "_blank");
    }
    document.querySelector('.footer .fb').onclick = function () {
        window.open("https://www.facebook.com/share/18pALPqCya/", "_blank");
    }
    document.querySelector('.footer .yt').onclick = function () {
        window.open("https://www.youtube.com/@worldofprisms", "_blank");
    }
}

FooterLinks()

function News() {
    let newsContainer = document.querySelector('.news .container')
    newsContainer.addEventListener('click', function () {
        window.open("https://mahahsscboard.in", "_blank");
    })
}

News()

function Gallary() {
    let options = document.querySelectorAll('.gallary .options p')
    let images = document.querySelectorAll('.gallary .container .img')

    for (let option of options) {
        option.addEventListener('click', function () {

            let category = option.id

            if (category == "All") {
                for (let img of images) {
                    img.style.display = "block";
                }
            } else {
                for (let img of images) {
                    if (img.classList.contains(category)) {
                        img.style.display = "block";
                    } else {
                        img.style.display = "none";
                    }
                }
            }
        })
    }
}

Gallary()

// document.querySelectorAll('.options p').forEach(button => {
//     button.addEventListener('click', () => {
//         const filter = button.id;
//         document.querySelectorAll('.gallary .img').forEach(img => {
//             if (img.classList.contains(filter)) {
//                 img.style.display = 'block';
//             } else {
//                 img.style.display = 'none';
//             }
//         });
//     });
// });
