window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").classList.add("hidden");
        GSAPHeroSection()
    }, 500);
});

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

    tl.from(".hero .buttons", {
        y: 50,
        duration: 0.3,
        opacity: 0,
    })
}
gsap.registerPlugin(ScrollTrigger);

function GSAPBatches() {
    gsap.to(".gallary img", {
        left: 500,
        dutation:1,
        scrollTrigger:{
            trigger:".gallary",
            start: "top 80%", // Adjust when animation starts
            end: "top 50%",
            scrub: 1,
        }
    })
}

GSAPBatches()

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
        window.location.href = "https://g.co/kgs/ExNHMKZ"
    }
    document.querySelector('.footer .insta').onclick = function () {
        window.location.href = "https://www.instagram.com/world_of_prisms?igsh=MWY3NzM3b2VnYXV4Yg=="
    }
    document.querySelector('.footer .fb').onclick = function () {
        window.location.href = "https://www.facebook.com/share/18pALPqCya/"
    }
    document.querySelector('.footer .yt').onclick = function () {
        window.location.href = "https://youtube.com/@worldofprismsedu?si=_dViL16DkpHOd0SD"
    }

}

FooterLinks()