// PASSWORD
function checkPassword() {
    const password = document.getElementById("passwordInput").value;

    if (password === "devi") { // CHANGE THIS
        document.getElementById("lockScreen").style.display = "none";

        setTimeout(() => {
            const music = document.getElementById("bgMusic");
            if (music) music.play().catch(() => {});
        }, 300);

        typeEffect();
    } else {
        alert("Wrong password 😅");
    }
}

// TYPING
const text = "Hey... Made something for you ❤️";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

// SCROLL
const sections = document.querySelectorAll('.fade');

function revealSections() {
    const trigger = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < trigger) section.classList.add('show');
    });
}

window.addEventListener('scroll', revealSections);

// NEXT
function nextSection() {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
}

// HEARTS
function createHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }
}

// BLOW CANDLES
function blowCandles() {
    document.getElementById("candles").innerHTML = "💨";

    document.getElementById("celebration").style.display = "block";
    document.getElementById("secretMsg").style.display = "block";
    document.getElementById("replayBtn").style.display = "inline-block";

    createHearts();
    setTimeout(createHearts, 800);
    setTimeout(createHearts, 1600);
}

// REPLAY
function replay() {
    window.scrollTo({ top: 0, behavior: "smooth" });

    document.getElementById("secretMsg").style.display = "none";
    document.getElementById("replayBtn").style.display = "none";
    document.getElementById("celebration").style.display = "none";

    document.getElementById("candles").innerHTML = "🕯️🕯️🕯️";

    index = 0;
    document.getElementById("typingText").innerHTML = "";
    typeEffect();
}