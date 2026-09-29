// ==========================================
// BIRTHDAY SURPRISE WEBSITE - JAVASCRIPT
// ==========================================

// ==========================================
// ELEMENTS
// ==========================================

const startBtn = document.getElementById("startBtn");
const openingScreen = document.querySelector(".opening-screen");
const mainContent = document.getElementById("mainContent");

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const missBtn = document.getElementById("missBtn");
const missMessage = document.getElementById("missMessage");

const topBtn = document.getElementById("topBtn");


// ==========================================
// INITIAL SETUP
// ==========================================

if (mainContent) {
    mainContent.style.display = "none";
}

if (missMessage) {
    missMessage.style.display = "none";
}


// ==========================================
// OPEN YOUR SURPRISE
// ==========================================

if (startBtn) {

    startBtn.addEventListener("click", function () {

        if (bgMusic) {
            bgMusic.play().catch(function () {
                console.log("Music needs user interaction.");
            });
        }

        if (openingScreen) {
            openingScreen.style.transition = "opacity 1.5s ease";
            openingScreen.style.opacity = "0";
        }

        setTimeout(function () {

            if (openingScreen) {
                openingScreen.style.display = "none";
            }

            if (mainContent) {
                mainContent.style.display = "block";
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1500);

    });

}


// ==========================================
// MUSIC BUTTON
// ==========================================

if (musicBtn) {

    musicBtn.addEventListener("click", function () {

        if (!bgMusic) return;

        if (bgMusic.paused) {

            bgMusic.play();
            musicBtn.innerHTML = "🎵";

        } else {

            bgMusic.pause();
            musicBtn.innerHTML = "🔇";

        }

    });

}


// ==========================================
// OPEN WHEN YOU MISS ME
// ==========================================

if (missBtn && missMessage) {

    missBtn.addEventListener("click", function () {

        if (missMessage.style.display === "none") {

            missMessage.style.display = "block";
            missBtn.innerHTML = "Close This 💙";

        } else {

            missMessage.style.display = "none";
            missBtn.innerHTML = "Open This 💌";

        }

    });

}


// ==========================================
// SMOOTH SCROLL
// ==========================================

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// ==========================================
// BIRTHDAY COUNTDOWN
// ==========================================

function updateCountdown() {

    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    const now = new Date();

    let year = now.getFullYear();

    let birthday = new Date(
        year,
        10,
        27,
        0,
        0,
        0
    );

    if (now > birthday) {

        birthday = new Date(
            year + 1,
            10,
            27,
            0,
            0,
            0
        );

    }

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    countdown.innerHTML =
        `🎂 ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds 💙`;

}

updateCountdown();
setInterval(updateCountdown, 1000);


// ==========================================
// TYPING EFFECT
// ==========================================

const typingText = document.getElementById("typingText");

if (typingText) {

    const text = "My Brother 💙";

    let index = 0;

    typingText.textContent = "";

    function typeEffect() {

        if (index < text.length) {

            typingText.textContent += text.charAt(index);

            index++;

            setTimeout(typeEffect, 120);

        }

    }

    typeEffect();

}


// ==========================================
// FLOATING HEARTS
// ==========================================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💙";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1000";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 0
            },
            {
                transform:
                    "translateY(-100vh) rotate(360deg)",
                opacity: 1
            }
        ],
        {
            duration: 5000 + Math.random() * 3000,
            easing: "linear"
        }
    );

    setTimeout(function () {
        heart.remove();
    }, 8000);

}

setInterval(createHeart, 1200);


// ==========================================
// FINAL BIRTHDAY CONFETTI
// ==========================================

const finalSection =
    document.querySelector(".final-surprise");

let confettiStarted = false;

function createConfetti() {

    const confetti = document.createElement("div");

    const shapes = [
        "🎉",
        "🎊",
        "💙",
        "✨",
        "💎",
        "💕"
    ];

    confetti.innerHTML =
        shapes[Math.floor(Math.random() * shapes.length)];

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-30px";
    confetti.style.fontSize =
        (15 + Math.random() * 20) + "px";

    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "2000";

    document.body.appendChild(confetti);

    confetti.animate(
        [
            {
                transform: "translateY(0) rotate(0deg)",
                opacity: 1
            },
            {
                transform:
                    `translateY(110vh) rotate(${360 + Math.random() * 360}deg)`,
                opacity: 0
            }
        ],
        {
            duration: 4000 + Math.random() * 3000,
            easing: "linear"
        }
    );

    setTimeout(function () {
        confetti.remove();
    }, 7500);

}


function startConfetti() {

    if (confettiStarted) return;

    confettiStarted = true;

    for (let i = 0; i < 40; i++) {
        setTimeout(createConfetti, i * 100);
    }

    setInterval(createConfetti, 350);

}


if (finalSection) {

    const observer =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    startConfetti();
                }

            });

        }, {
            threshold: 0.4
        });

    observer.observe(finalSection);

}


// ==========================================
// BACK TO TOP
// ==========================================

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });


    topBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==========================================
// WELCOME
// ==========================================

console.log(
    "💙 Welcome to Anna's Birthday Surprise!"
);