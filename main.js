// todo ------------------ Navbar ------------------ 

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

// todo ------------------ ScrollTrigger ------------------ 

// gsap.registerPlugin(ScrollTrigger);

function ScrollTriggerAnimation() {
    // // All Sections
    // let sections = document.querySelectorAll("section");

    // sections.forEach(section => {
    //     // All Sections > All Containers
    //     let container = section.querySelector(".container");

    //     if (container) {
    //         // All Sections > All Containers > All Direct Childrens
    //         let directChildren = Array.from(container.children);

    //         directChildren.forEach(child => {
    //             gsap.from(child, {
    //                 opacity: 0,
    //                 y: 100,
    //                 duration: 0.5,
    //                 scrollTrigger: {
    //                     trigger: child,
    //                     start: "top 70%",
    //                     // markers: true,
    //                 }
    //             });
    //         });
    //     }
    // });


    // batch =>
    // Groups them into batches as they enter the viewport
    // Animates the whole batch together with stagger

    // gsap.registerPlugin(ScrollTrigger);

    // performance.mark("start-animations");

    // const allChildren = document.querySelectorAll("section .container > *");
    // gsap.set(allChildren, { opacity: 0, y: 50 });

    // ScrollTrigger.batch(allChildren, {
    //     onEnter: batch => {
    //         gsap.to(batch, {
    //             opacity: 1,
    //             y: 0,
    //             duration: 1,
    //             stagger: 0.2,
    //             ease: "power2.out"
    //         });
    //     },
    //     start: "top 70%",
    //     markers: true
    // });

    // performance.mark("end-animations");
    // performance.measure("Animation Setup Time", "start-animations", "end-animations");

    // const result = performance.getEntriesByName("Animation Setup Time")[0];
    // console.log("Animation setup took", result.duration.toFixed(2), "ms");

    // 


    // performance.mark("start-animations");

    gsap.registerPlugin(ScrollTrigger);

    // All Sections 
    const allSections = document.querySelectorAll("section");

    allSections.forEach(section => {
        // if (section == "gallary") {
        //     return
        // }
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
            // markers: true,
        });
    });


    // performance.mark("end-animations");
    // performance.measure("Animation Setup Time", "start-animations", "end-animations");

    // const result = performance.getEntriesByName("Animation Setup Time")[0];
    // console.log("Animation setup took", result.duration.toFixed(2), "ms");

    // gsap.from(".gallary > div > img", {
    //     opacity: 0,
    //     y: 100,
    //     duration: 0.6,
    //     ease: "power2.out",
    //     stagger: 0.15,
    //     ScrollTrigger: {
    //         trigger: ".gallary",
    //         start: "top 70%"
    //     }
    // });

}

ScrollTriggerAnimation()

// todo ------------------ SVG ------------------ 

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
    var animation4 = lottie.loadAnimation({
        container: document.getElementById("celebration"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "./Assets/Animated-Icons/celebration.json"
    });
    document.getElementById("celebrationbox").addEventListener("mouseenter", function () {
        animation4.goToAndPlay(0, true);
    });
    var animation5 = lottie.loadAnimation({
        container: document.getElementById("sphere"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "./Assets/Animated-Icons/sphere.json"
    });
    document.getElementById("spherebox").addEventListener("mouseenter", function () {
        animation5.goToAndPlay(0, true);
    });
    var animation6 = lottie.loadAnimation({
        container: document.getElementById("puzzle"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "./Assets/Animated-Icons/puzzle.json"
    });
    document.getElementById("puzzlebox").addEventListener("mouseenter", function () {
        animation6.goToAndPlay(0, true);
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

Contacts()

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
    newsContainer.addEventListener('click', function () {
        window.open("https://mahahsscboard.in", "_blank");
    })
}

News()

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