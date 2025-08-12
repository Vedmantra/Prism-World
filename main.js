// todo ------------------ ScrollTrigger ------------------ 

function ScrollTriggerAnimation() {

    gsap.registerPlugin(ScrollTrigger);

    // % All Sections 
    // ! All Sections 

    const allSections = document.querySelectorAll("section");
    allSections.forEach(section => {
        // All Sections > All Containers 
        const container = section.querySelector(".container");
        if (!container) return;

        // All Sections > All Containers > All Direct Childrens 

        let children = Array.from(container.children);

        gsap.set(children, { opacity: 0, y: 100 });

        ScrollTrigger.batch(children, {
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.15,
                });
            },
            start: "top 70%",
            once: true,
            // ! markers: true,
        });
    });
}

// ScrollTriggerAnimation()

function ScrollTriggerAnimation2() {
    gsap.registerPlugin(ScrollTrigger);

    const allSections = document.querySelectorAll("section");

    allSections.forEach(section => {
        const container = section.querySelector(".container");
        if (!container) return;

        let children = Array.from(container.children);

        gsap.set(children, { opacity: 0, y: 100 });

        ScrollTrigger.batch(children, {
            start: "top bottom",   // When the section enters the bottom of the viewport
            end: "bottom top",     // Until it fully scrolls out
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.15
                });
            },
            onLeave: batch => {
                gsap.to(batch, {
                    opacity: 0,
                    y: 100,
                    duration: 0.6,
                    ease: "power2.in",
                    stagger: 0.15
                });
            },
            onEnterBack: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: 0.15
                });
            },
            onLeaveBack: batch => {
                gsap.to(batch, {
                    opacity: 0,
                    y: 100,
                    duration: 0.6,
                    ease: "power2.in",
                    stagger: 0.15
                });
            },
            markers: true
        });
    });
}

// ScrollTriggerAnimation2();

// todo ------------------ SVG ------------------ 

function SVG() {
    let animatedIconsArray =
        ["games", "quiz", "studyMaterial", "ebalbharati",
            "result", "stationaryShop", "activityClasses",
            "teachingHub", "apply", "hire",
            // "all", "indoor", "happyMoment", "functionAndTrip",
        ]

    // Initially Load 
    // animatedIconsArray.forEach(element => {
    //     lottie.loadAnimation({
    //         container: document.getElementById(element),
    //         renderer: "svg",
    //         loop: false,
    //         autoplay: true,
    //         path: `./Assets/Animated-Icons/${element}.json`
    //     });
    // });

    // On Hover
    animatedIconsArray.forEach(element => {
        var animation = lottie.loadAnimation({
            container: document.getElementById(element),
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: `./Assets/Animated-Icons/${element}.json`
        });
        // On hover
        document.getElementById(`${element}`).addEventListener("mouseenter", function () {
            animation.goToAndPlay(0, true);
        });
        // On scroll into view
        ScrollTrigger.create({
            trigger: `#${element}`,
            start: "top 80%", // start when element is near viewport
            onEnter: () => {
                animation.goToAndPlay(0, true);
            },
            once: true // play only once
        });

    });

    let animatedIconsArray2 = ["star", "youth", "eagle", "quest", "mind", "commerce"]

    animatedIconsArray2.forEach(element => {
        var animation = lottie.loadAnimation({
            container: document.getElementById(element),
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: `./Assets/Animated-Icons/${element}.json`
        });
        document.getElementById(`${element}box`).addEventListener("mouseenter", function () {
            animation.goToAndPlay(0, true);
        });
    });
}

SVG()

// todo ------------------ Contacts ------------------ 

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

// Contacts()

function WhatsappMessage() {
    let phoneNumber = "919408660808";
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("")}`;

    window.open(url, "_blank");
}

// todo ------------------ Footer Links ------------------ 

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

// todo ------------------ News ------------------ 

function News() {
    let newsContainer = document.querySelector('.news .container')
    let img1 = newsContainer.querySelector('#img1')
    img1.addEventListener('click', function () {
        window.open("https://prismworld.in/Corner-Students/PageQuiz/homePage.html", "_blank");
    })

    // change image in news
    if (window.innerWidth <= 700) {
        let img1 = document.querySelector('.news .container #img1')
        img1.src = "./Assets/News/news2.jpg";
    }
}

// News()

// todo ------------------ Gallary ------------------ 

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

let contactContainer = document.querySelector(".contact .container")
let contactButton = document.querySelector(".contact .ayy")
contactContainer.style.display = "none"
contactButton.style.display = "none"

let one = document.querySelector(".contact .one")
let two = document.querySelector(".contact .two")

one.addEventListener("click", function () {
    contactContainer.style.display = "flex"
    contactButton.style.display = "none"
})
two.addEventListener("click", function () {
    contactContainer.style.display = "none"
    contactButton.style.display = "flex"
})

function TeachersCorner() {
    let phoneNumber = "919408660808";
    document.querySelector(".hireButton").addEventListener("click", function () {
        let text = "I would like to *Hire a Teacher* from Prism World's Website."
        let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    })
    document.querySelector(".applyButton").addEventListener("click", function () {
        let text = "I would like to *Apply as a Teacher* on Prism World's Website."
        let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    })
}
TeachersCorner()

function Popup() {

    let scroll2 = false;

    if (scroll2 == false) {
        // show popup and don't allow scroll2ing
        document.querySelector(".popupContainer").style.display = "flex";
        document.querySelector("body").style.overflowY = "hidden";
    }

    document.querySelector(".popupContainer img").addEventListener("click", function () {
        scroll2 = true;
        document.querySelector("body").style.overflowY = "auto";
        document.querySelector(".popupContainer").style.display = "none";
    });

    if (window.innerWidth <= 768) {
        // Change URL if on mobile
        document.querySelector(".popupContainer img").src = "./Assets/Popup/popup2.jpg";
    }
}

// Popup()