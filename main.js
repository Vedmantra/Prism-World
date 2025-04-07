// window.addEventListener("load", function () {
    // setTimeout(() => {
    //     document.getElementById("loader").classList.add("hidden");
        
    // }, 500);
    // setTimeout(() => {
    // GSAPHeroSection()

    //     // document.getElementById("loader").classList.add("hidden");
    // }, 700);
    // });
// document.getElementById("loader").classList.add("hidden");

GSAPHeroSection()


function GSAPHeroSection() {
    let tl = gsap.timeline()

    tl.from(".hero #img1", {
        x: -200,
        y: -200,
        duration: 1
    }, "0");
    tl.from(".hero #img2", {
        x: 200,
        y: -200,
        duration: 1
    }, "0");
    tl.from(".hero #img3", {
        x: -200,
        y: 200,
        duration: 1
    }, "0");
    tl.from(".hero #img4", {
        x: 200,
        y: 200,
        duration: 1
    }, "0");
    tl.from(".hero #elem1", {
        y: -200,
        duration: 1
    }, "0");
    tl.from(".hero #elem2", {
        y: 200,
        duration: 1
    }, "0");
    tl.from(".hero #elem3", {
        y: -200,
        duration: 1
    }, "0");

    tl.from(".hero h1", {
        y: 200,
        duration: 0.8,
        opacity: 0
    })

    tl.from(".hero h2", {
        y: 50,
        duration: 0.3,
        opacity: 0,
    })

    tl.from(".hero .content img", {
        y: 50,
        duration: 0.3,
        opacity: 0,
    })
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
        window.open("https://youtube.com/@worldofprismsedu?si=_dViL16DkpHOd0SD", "_blank");
    }
}

FooterLinks()

function Reviews() {
    // if (window.innerWidth < 600) {
    //     let firstImg = document.querySelector('.reviews .one')
    //     firstImg.src = "./Assets/Reviews/c.png"
    // }

    let reviewButton = document.querySelector('.reviews button')
    reviewButton.addEventListener('click', function () {
        window.open("https://g.page/r/CRrz7ygAV5-9EBM/review", "_blank");
    })
}

Reviews()

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
        img.src = "./Assets/Icons/x.svg"
        navClicked = true
    } else {
        // hide navbar 
        gsap.to(navbar, {
            x: "50%",
            duration: 0.2,
        })
        img.src = "./Assets/Icons/menu.svg"
        navClicked = false
    }
}