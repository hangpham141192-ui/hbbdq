const screens = {
    welcome: document.getElementById("welcome"),
    letter: document.getElementById("letter"),
    cake: document.getElementById("cakeSection"),
    final: document.getElementById("final")
};

const giftBox = document.getElementById("giftBox");
const nextBtn = document.getElementById("nextBtn");
const blowBtn = document.getElementById("blowBtn");

const typingText = document.getElementById("typingText");
const flame = document.getElementById("flame");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let message = `Chúc Quân một sinh nhật thật đặc biệt ❤️

Chúc Quân luôn khỏe mạnh, vui vẻ và hạnh phúc.
Hành trình làm mẹ sẽ thật nhẹ nhàng, bình an.
Mẹ khỏe ❤️ Con ngoan 👶
Gia đình nhỏ luôn tràn ngập yêu thương.`;

let i = 0;

/* ===================== */
/* CHUYỂN MÀN HÌNH */
/* ===================== */

giftBox.onclick = () => {
    changeScreen("letter");
    typeWriter();
    startEffects();
};

nextBtn.onclick = () => {
    changeScreen("cake");
};

blowBtn.onclick = () => {
    flame.style.display = "none";
    changeScreen("final");
    startFireworks();
};

/* ===================== */
/* FUNCTION CHUYỂN SCREEN */
/* ===================== */

function changeScreen(screen) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[screen].classList.add("active");
}

/* ===================== */
/* HIỆU ỨNG CHỮ GÕ */
/* ===================== */

function typeWriter() {
    if (i < message.length) {
        typingText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

/* ===================== */
/* TIM + HOA RƠI */
/* ===================== */

function startEffects() {
    setInterval(createHeart, 300);
    setInterval(createFlower, 500);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

function createFlower() {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.innerHTML = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (4 + Math.random() * 3) + "s";
    document.getElementById("flowers").appendChild(flower);

    setTimeout(() => flower.remove(), 7000);
}

/* ===================== */
/* PHÁO HOA GIẢ LẬP */
/* ===================== */

function startFireworks() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 100);
    }
}

/* ===================== */
/* NHẠC */
/* ===================== */

musicBtn.onclick = () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🔊";
    } else {
        music.pause();
        musicBtn.innerHTML = "🎵";
    }
};
