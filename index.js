
// Import Swiper styles
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000, // 4 seconds between transitions
        disableOnInteraction: false
    },
    speed: 1000, // 1s transition for smooth feel
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});

// Update the year in the footer
document.getElementById("year").textContent = new Date().getFullYear();


// Animated Slogan
const slogans = [
    "TRUE CAPITALISM.",
    "FAIR TRADE. FREE MARKETS.",
    "EMPOWER BUSINESS."
];

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";
const el = document.getElementById("animated-slogan");
let index = 0;
let interval;

function scramble(text, onComplete) {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
        const scrambled = text.split("")
            .map((char, i) => {
                if (i < iteration) return char;
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        el.textContent = scrambled;

        if (iteration >= text.length) {
            clearInterval(interval);
            setTimeout(() => {
                index = (index + 1) % slogans.length;
                scramble(slogans[index], onComplete);
            }, 1500);
        }

        iteration += 1 / 2;
    }, 40);
}

// Start the animation
scramble(slogans[index]);

// Initialize AOS (Animate On Scroll)
AOS.init();

// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const links = document.querySelectorAll(".mobile-link");

toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("hidden");
    });
});

